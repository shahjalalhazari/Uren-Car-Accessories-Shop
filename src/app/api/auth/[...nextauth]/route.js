import {connectDB} from '@/lib/connectDB';
import NextAuth from 'next-auth';
import CredentialsProviders from 'next-auth/providers/credentials';
import bcrypt from "bcrypt";

const handler = NextAuth({
  // ADD SESSION FOR 30 DAYS WITH JWT.
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },

  providers: [
    CredentialsProviders({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const { email, password } = credentials;
        // EMPTY EMAIL OR PASSWORD
        if (!email || !password) throw new Error("Invalid Inputs!")

        // CONNECT TO DB AND GET THE USER.
        const db = await connectDB();
        const user = await db.collection("Users").findOne({email});

        // IF NO USER FOUND.
        if(!user) throw new Error("No User Found! Please Register.");

        // USER EMAIL IS NOT VERIFIED.
        if (user.status !== "verified") {
          throw new Error("Please verify your email before logging in.");
        }

        // MATCH PASSWORD AND SEND ERROR MESSAGE IF PASSWORD DOES NOT MATCH.
        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) throw new Error("Password not matching!.");

        // FINALLY RETURN THE USER.
        return user;
      }
    })
  ],

  // CUSTOM SIGNIN PAGE
  pages: {
    signIn: "/user/signin",
  },

  // AUTH SECRET
  secret: process.env.NEXTAUTH_SECRET,

  // USER CALLBACK
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
});

export {
  handler as GET, handler as POST
};