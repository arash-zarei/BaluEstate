import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import Ads from "@/models/Ads";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";

const DELETE = async (req, context) => {
  try {
    await connectDB();

    const id = context.params.adsId;

    const session = await getServerSession(req);

    if (!session) {
      return NextResponse.json(
        { error: "ابتدا وارد حساب کاربری حود شوید!" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });

    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد!" },
        { status: 404 }
      );
    }

    if (user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "دسترسی به این آگهی محدود شده است!" },
        { status: 403 }
      );
    }

    await Ads.deleteOne({ _id: id });

    return NextResponse.json(
      { message: "آگهی موردنظر حذف شد." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است!" },
      { status: 500 }
    );
  }
};

export { DELETE };
