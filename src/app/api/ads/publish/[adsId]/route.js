import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import connectDB from "@/utils/connectDB";
import Ads from "@/models/Ads";
import User from "@/models/User";

export async function PATCH(req, context) {
  try {
    await connectDB();

    const id = context.params.adsId;

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        {
          error: "لطفا وارد حساب کاربری خود شوید",
        },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        {
          error: "حساب کاربری یافت نشد",
        },
        { status: 404 }
      );
    }
    if (user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "دسترسی محدود" },
        {
          status: 403,
        }
      );
    }

    const ads = await Ads.findOne({ _id: id });
    ads.published = true;
    ads.save();

    return NextResponse.json({ message: "آگهی منتشر شد." }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است!" },
      { status: 500 }
    );
  }
}
