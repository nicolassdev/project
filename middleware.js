import { authConfig } from "./app/authconfig";
import NextAuth from "next-auth";

export default NextAuth(authConfig).auth;

export const config = {
  //https://next-auth.js.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ["/((?!api|_next/static|_next/image|.png).*)"],
};
