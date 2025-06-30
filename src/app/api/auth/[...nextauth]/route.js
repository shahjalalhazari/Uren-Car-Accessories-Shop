import {connectDB} from '@/lib/connectDB';
import NextAuth from 'next-auth';
import CredentialsProviders from 'next-auth/providers/credentials';
import bcrypt from "bcrypt";


const handler = NextAuth({
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
        if (!email || !password) throw new Error("Invalid Inputs!")

        const db = await connectDB();
        const user = await db.collection("Users").findOne({email});
        if(!user) throw new Error("No User Found! Please Register.");

        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) throw new Error("Password not matching!.");

        return user;
      }
    })
  ],

  pages: {
    signIn: "/user/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
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