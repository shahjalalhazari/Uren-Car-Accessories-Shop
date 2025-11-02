import NextAuth from 'next-auth';
import CredentialsProviders from 'next-auth/providers/credentials';
import bcrypt from "bcryptjs";
import { connectDB } from '@/lib/connectDB';

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // SESSION FOR 30 DAYS.
  },

  providers: [
    CredentialsProviders({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const {email, password} = credentials;

        // EMPTY EMAIL OR PASSWORD.
        if (!email || !password) throw new Error("Email and password are required!");

        // CONNECT TO DB & GET THE USER.
        const db = await connectDB();
        const user = await db.collection("Users").findOne({email});

        // NO USER FOUND.
        if (!user) throw new Error("No user found! Please Register");

        // USER EMAIL IS NOT VERIFIED.
        if (user.status !== "verified"){
          throw new Error("Email not verified! Please verify your emails");
        };

        // PASSWORD MATCHING.
        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) throw new Error("Password is not matching!");

        // FINALLY RETURN THE USER.
        return user;
      }
    })
  ],

  // CUSTOM SIGNIN PAGE.
  pages: {
    signIn: "/user/signin",
    error: "/user/signin",
  },

  // AUTH SECRET.
  secret: process.env.NEXTAUTH_SECRET,

  // USER CALLBACK.
  callbacks: {
    async jwt({token, user}) {
      if (user) token.role = user.role;
      return token;
    },
    async session({session, token}) {
      session.user.role = token.role;
      return session;
    }
  }
});

export {
  handler as GET, handler as POST
};