import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/lib/connectDB"
import { bcrypt } from 'bcryptjs';

export const authOptions = {
    session: { strategy: "jwt" },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials) {
                const db = await connectDB();
                const user = await db.collection("Users").findOne({email: credentials.email});

                if (!user) return null;

                const isValid = await bcrypt.compare(credentials.password, user.password);

                if (!isValid) return null;

                return { id: user._id.toString(), email: user.email };
            }
        })
    ],

    pages: {
        signIn: "/user/signin",
        error: "/auth/error"
    },

    callbacks: {
        async session({ session, token }) {
            session.user.id = token.sub;
            return session;
        }
    }
}


export default NextAuth(authOptions);