import {connectDB} from "@/lib/connectDB";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  // GET SUBMITTED NEW USER DATA FROM API.
  const {
    email,
    password,
    confirmPassword
  } = await req.json();

  // CHECK PASSWORD AND CONFIRM PASSWORD ARE MATCHING
  if (password !== confirmPassword) {
      return new Response(JSON.stringify({
      message: "Passwords are not matching!",
      success: false,
      }), {
      status: 400,
      })
  }

  // CHECK PASSWORD LENGTH
  if (password.length < 8 || confirmPassword.length < 8) {
    return new Response(JSON.stringify({
      message: "Passwords must be 8 characters long!",
      success: false,
    }), {
      status: 400,
    })
  }

  // CHECK PASSWORD STRENGTH
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#_])[A-Za-z\d@$!%*?&#_]{8,}$/;
  if (!passwordRegex.test(password)) {
    return new Response(JSON.stringify({
      success: false,
      message: "Password must have 8 characters, include uppercase, lowercase, number, and special character"
    }), {
      status: 400,
    });
  }

  // MAKE HASH PASSWORD
  const hashedPassword = await bcrypt.hash(password, 16);

  try {
    const db = await connectDB();
    const userCollection = db.collection("Users");

    // USER EXISTENCE
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
      createdAt: new Date(),
    }

    // INSERT NEW USER DATA TO DB.
    await userCollection.insertOne(newUser);

    // RESPONSE SUCCESS MESSAGE
    return new Response(JSON.stringify({
      success: true,
      message: "Registration Successful!!!"
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