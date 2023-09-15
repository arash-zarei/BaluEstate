import { NextResponse } from "next/server";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { hashPassword } from "@/utils/auth";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "لطفا تمام فیلد ها را به درستی پر کنید!" },
        { status: 422 }
      );
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "با این ایمیل قبلا ثبت نام شده است!" },
        { status: 422 }
      );
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({ email, password: hashedPassword });

    return NextResponse.json({ message: "حساب کاربری ایجاد شد." });
  } catch (error) {
    return NextResponse.json(
      {
        error: "خطایی در سرور رخ داده است!",
      },
      { status: 500 }
    );
  }
}
