import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
export const authOptions = {
  // theme: {
  //   colorScheme: "dark",
  // },
  // debug: true,
  // session: {},
  // jwt: {},
  // secret: 'PALABRA SECRETA',
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { placeholder: "Email", type: "email" },
        password: { placeholder: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const { email, password } = credentials;
          const res = await fetch("http://89.116.25.43:3001/api/auth/login", {
            method: "POST",
            body: JSON.stringify({
              email,
              password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const user = await res.json();

          // THE ONLY PROBLEM LEFT IS THAT IM JUS GETTING THE NAME OF THE USER.....
          // AND THE REGISTER WONT RETURN A JSW TOKEN, THE USER WILL BE REDIRECTED TO LOGIN...
          if (user.ok) return user;
          else return null;
        } catch (error) {
          throw new error();
        }
      },
    }),
  ],
  //   Session strategy
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    // PENDING TO ADD ERROR PAGE
    // error: "/login/error.jsx"
  },
};

export default NextAuth(authOptions);
