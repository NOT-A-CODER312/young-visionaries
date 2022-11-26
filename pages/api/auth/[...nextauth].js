import EmailProvider from "next-auth/providers/email";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import MailchimpProvider from "next-auth/providers/mailchimp";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";

export default NextAuth({
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
});

// MailchimpProvider({
//   clientId: process.env.MAILCHIMP_CLIENT_ID,
//   clientSecret: process.env.MAILCHIMP_CLIENT_SECRET,
// }),
// FacebookProvider({
//   clientId: process.env.FACEBOOK_ID,
//   clientSecret: process.env.FACEBOOK_SECRET,
// }),
// TwitterProvider({
//   clientId: process.env.TWITTER_CLIENT_ID,
//   clientSecret: process.env.TWITTER_CLIENT_SECRET,
// }),
// EmailProvider({
//   server: {
//     host: process.env.EMAIL_SERVER_HOST,
//     port: process.env.EMAIL_SERVER_PORT,
//     auth: {
//       user: process.env.EMAIL_SERVER_USER,
//       pass: process.env.EMAIL_SERVER_PASSWORD,
//     },
//   },
//   from: process.env.EMAIL_FROM,
// }),

// EmailProvider({
//   server: {
//     host: process.env.EMAIL_SERVER_HOST,
//     port: process.env.EMAIL_SERVER_PORT,
//     auth: {
//       user: process.env.EMAIL_SERVER_USER,
//       pass: process.env.EMAIL_SERVER_PASSWORD,
//     },
//   },
//   from: process.env.EMAIL_FROM,
// }),
