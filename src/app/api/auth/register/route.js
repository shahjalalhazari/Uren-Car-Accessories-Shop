import {connectDB} from "@/lib/connectDB";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

export const POST = async (req) => {
  // GET SUBMITTED NEW USER DATA FROM API.
  const {
    email,
    password,
    confirmPassword
  } = await req.json();

  // CHECK PASSWORD AND CONFIRM PASSWORD ARE MATCHING.
  if (password !== confirmPassword) {
      return new Response(JSON.stringify({
      message: "Passwords are not matching!",
      success: false,
      }), {
      status: 400,
      })
  }

  // CHECK PASSWORD LENGTH.
  if (password.length < 8 || confirmPassword.length < 8) {
    return new Response(JSON.stringify({
      message: "Passwords must be 8 characters long!",
      success: false,
    }), {
      status: 400,
    })
  }

  // CHECK PASSWORD STRENGTH.
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#_])[A-Za-z\d@$!%*?&#_]{8,}$/;
  if (!passwordRegex.test(password)) {
    return new Response(JSON.stringify({
      success: false,
      message: "Password must have 8 characters, include uppercase, lowercase, number, and special character"
    }), {
      status: 400,
    });
  }

  // MAKE HASH PASSWORD.
  const hashedPassword = await bcrypt.hash(password, 16);

  try {
    // GENERATE TOKEN FOR EMAIL VERIFICATION.
    const token = jwt.sign({ email }, process.env.NEXTAUTH_SECRET, {expiresIn: "1h"});
    console.log(token);
    
    const db = await connectDB();
    const userCollection = db.collection("Users");

    // USER EXISTENCE.
    const userExists = await userCollection.findOne({
      email: email
    });
    if (userExists) {
      return new Response(JSON.stringify({
        message: "User already exists!",
        success: false,
      }), {
        status: 400,
      });
    }

    // CREATE NEW USER.
    const newUser = {
      email,
      password: hashedPassword,
      role: "User",
      status: "not-verified",
      createdAt: new Date(),
    }

    // INSERT NEW USER DATA TO DB.
    await userCollection.insertOne(newUser);

    // CREATES TRANSPORTER
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD
      },
    });

    // CREATE TOKEN VERIFICATION URL.
    const verifyURL = process.env.NODE_ENV === "development"
      ? `${process.env.EMAIL_VERIFY_DEV_URL}?token=${token}`
      : `${process.env.EMAIL_VERIFY_LIVE_URL}?token=${token}`;

    // SEND THE VERIFICATION MAIL TO THE USER PROVIDED EMAIL ADDRESS.
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Verify Your Email - Uren Car Accessories Shop",
      html: `<p>Click the link to verify your email: <a href="${verifyURL}">Verify Email</a>. This link will be valid for an hour.</p>`,
    });

    // RESPONSE SUCCESS MESSAGE.
    return new Response(JSON.stringify({
      success: true,
      message: "Registration Successful! An email has been send to your email for account verification."
    }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({
      message: "Something went wrong! While creating user.",
      success: false
    }), {
      status: 500,
    })
  }
}