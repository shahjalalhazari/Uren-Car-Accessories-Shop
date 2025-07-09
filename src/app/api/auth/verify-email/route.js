import {NextResponse} from "next/server";
import jwt from 'jsonwebtoken';
import {connectDB} from "@/lib/connectDB";


export const GET = async (req) => {
  const {searchParams} = new URL(req.url);
  const token = searchParams.get("token");
  const redirectUrl = new URL("/user/signin", req.url);

  // NO TOKEN.
  if (!token) {
    redirectUrl.searchParams.set("errorMessage", "Invalid verification token");
    return NextResponse.redirect(redirectUrl);
  };

  try {
    // DECODE THE TOKEN
    const decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET);

    // CONNECT TO DB.
    const db = await connectDB();
    const userCollection = db.collection("Users");
    
    // FIND THE USER.
    const user = await userCollection.findOne({
      email: decoded.email
    });

    // NO USER FOUND.
    if (!user) {
      redirectUrl.searchParams.set("errorMessage", "User not found");
      return NextResponse.redirect(redirectUrl);
    };

    // UPDATE THE USER STATUS.
    await userCollection.updateOne({
      email: decoded.email
    }, {
      $set: {
        status: "verified"
      }
    });

    // RESPONSE SUCCESS MESSAGE.
    redirectUrl.searchParams.set("successMessage", "Email verified. You can login now.");
    return NextResponse.redirect(redirectUrl);

  } catch (error) {
    // RESPONSE ERROR MESSAGE.
    redirectUrl.searchParams.set("errorMessage", "Link expired or invalid.");
    return NextResponse.redirect(redirectUrl);
  };
};