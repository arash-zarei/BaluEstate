import Ads from "@/models/Ads";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

export async function DELETE(req, context) {
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

    const ads = await Ads.findOne({ _id: id });

    if (!user._id.equals(ads.userId)) {
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
}
