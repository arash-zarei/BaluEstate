import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { Types } from "mongoose";

import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import Ads from "@/models/Ads";

export async function GET() {
  try {
    await connectDB();

    const ads = await Ads.find({ published: true }).select("-userId");

    return NextResponse.json(
      {
        data: ads,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}

const POST = async (req) => {
  try {
    await connectDB();

    const {
      title,
      description,
      location,
      phone,
      realEstate,
      price,
      constructionDate,
      category,
      amenities,
      rules,
    } = await req.json();

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

    if (
      !title ||
      !location ||
      !description ||
      !phone ||
      !realEstate ||
      !price ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "اطفا تمام موارد را به صورت کامل پر کنید!" },
        { status: 400 }
      );
    }

    const newAds = await Ads.create({
      title,
      description,
      location,
      phone,
      realEstate,
      constructionDate,
      amenities,
      rules,
      category,
      price: +price,
      userId: new Types.ObjectId(user._id),
    });

    return NextResponse.json(
      { message: "آگهی جدید اضافه شد" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است!" },
      { status: 500 }
    );
  }
};

const PATCH = async (req) => {
  try {
    await connectDB();

    const {
      _id,
      title,
      description,
      location,
      phone,
      realEstate,
      price,
      constructionDate,
      category,
      amenities,
      rules,
    } = await req.json();

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

    if (
      !_id ||
      !title ||
      !location ||
      !description ||
      !phone ||
      !realEstate ||
      !price ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "اطفا تمام موارد را به صورت کامل پر کنید!" },
        { status: 400 }
      );
    }

    const ads = await Ads.findOne({ _id });

    if (!user._id.equals(ads.userId)) {
      return NextResponse.json(
        { error: "دسترسی به این آگهی محدود شده است!" },
        { status: 403 }
      );
    }

    ads.title = title;
    ads.description = description;
    ads.location = location;
    ads.phone = phone;
    ads.realEstate = realEstate;
    ads.price = price;
    ads.constructionDate = constructionDate;
    ads.amenities = amenities;
    ads.rules = rules;
    ads.category = category;
    ads.save();

    return NextResponse.json(
      {
        message: "آگهی با موفقیت ویرایش شد",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است!" },
      { status: 500 }
    );
  }
};

export { POST, PATCH };
