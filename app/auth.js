import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDb } from "./lib/utils";
import { User } from "./lib/models";
import bcrypt from "bcryptjs";

const login = async (credentials) => {
  try {
    connectToDb(); // Ensure database connection
    const user = await User.findOne({ username: credentials.username });
    if (!user) {
      throw new Error("No user found");
    }

    const isPasswordValid = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    return user;
  } catch (error) {
    console.error("Error logging in:", error);
    throw new Error("Login failed");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          throw new Error("Invalid login");
        }
      },
    }),
  ],
  // callbacks: {
  //   async jwt(token, user) {
  //     if (user) {
  //       token.username = user.username;
  //       token.img = user.img;
  //     }
  //     return token;
  //   },
  //   async session(session, token) {
  //     if (token) {
  //       session.username = token.username;
  //       session.img = token.img;
  //     }
  //     return session;
  //   },
  // },
});

export const { GET, POST } = NextAuth(authConfig);
