import {
  connectDB
} from "@/lib/connectDB";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  // GET SUBMITTED USER DATA FROM API
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
      status: 400, headers: { "Content-Type": "application/json" }
    })
  }

  // CHECK PASSWORD LENGTH
  if (password.length < 8 || confirmPassword.length < 8) {
    return new Response(JSON.stringify({
      message: "Passwords must be 8 letters long!",
      success: false,
    }), {
      status: 400, headers: { "Content-Type": "application/json" }
    })
  }

  // CHECK PASSWORD STRENGTH
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#_])[A-Za-z\d@$!%*?&#_]{8,}$/;
  if (!passwordRegex.test(password)) {
    return new Response(JSON.stringify({
      success: false,
      message: "Password must be at least 8 characters, include uppercase, lowercase, number, and special character"
    }), {
      status: 400, headers: { "Content-Type": "application/json" }
    });
  }

  // MAKE HASH PASSWORD
  const hashedPassword = await bcrypt.hash(password, 16);

  try {
    // CONNECT WITH DB
    const db = await connectDB();
    const userCollection = db.collection("Users");

    // USER EXISTENCE
    const userExists = await userCollection.findOne({ email: email });

    if (!userExists) {
      //IF NO USER FOUND, INSERT NEW USER DATE TO DB  
      await userCollection.insertOne({
        email,
        password: hashedPassword,
        role: "user",
        createdAt: new Date()
      });

      // RESPONSE SUCCESS MESSAGE
      return new Response(JSON.stringify({
        success: true, redirected:true,
        message: "User created successfully!"
      }), {
        status: 201, headers: { "Content-Type": "application/json" }
      });
    } else {
      return new Response(JSON.stringify({
        message: "User already exists!",
        success: false,
      }), {
        status: 400, headers: { "Content-Type": "application/json" }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({
      message: "Something went wrong! While creating user.",
      success: false
    }), {status: 500, headers: { "Content-Type": "application/json" }})
  }
};