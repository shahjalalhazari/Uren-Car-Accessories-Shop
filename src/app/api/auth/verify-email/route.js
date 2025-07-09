import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { connectDB } from "@/lib/connectDB";


export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token) {
        return NextResponse.redirect(new URL("/user/signin?error=InvalidToken", req.url));
    };

    try {
        const decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET);
        const db = await connectDB();
        const userCollection = db.collection("Users");

        const user = await userCollection.findOne({email: decoded.email});
        if (!user) {
            return NextResponse.redirect(new URL("/user/signin?error=UserNotFound", req.url));
        };

        await userCollection.updateOne(
            { email: decoded.email },
            { $set: { status: "verified" } }
        );

        return NextResponse.redirect(new URL("/user/signin?verified=1", req.url));
    } catch (error) {
        return NextResponse.redirect(new URL("/user/signin?error=TokenExpiredOrInvalid", req.url));
    };
};