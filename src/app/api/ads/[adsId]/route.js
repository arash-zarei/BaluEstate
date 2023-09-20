import { NextResponse } from "next/server";
import Ads from "@/models/Ads";
import connectDB from "@/utils/connectDB";

const GET = async (req, res) => {
  const { adsId } = res.params;

  try {
    await connectDB();
    const ads = await Ads.findOne({ _id: adsId });

    return NextResponse.json({ data: ads }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
};

export { GET };
