import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
export const authOptions = {
  providers: [
    CredentialsProvider({
        type: "credentials",
        credentials: {
          email: { placeholder: "Email", type: "email" },
          password: { placeholder: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          try {
            
            const { email, password } = credentials;
            console.log(email, password);
            const res = await fetch('http://localhost:8000/api/auth/login', 
            {
              method: "POST",
              body: JSON.stringify({
                email,
                password
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            }
            );
            const user = await res.json();
            console.log(user);
            
            // THE ONLY PROBLEM LEFT IS THAT IM JUS GETTING THE NAME OF THE USER.....
            // AND THE REGISTER WONT RETURN A JSW TOKEN, THE USER WILL BE REDIRECTED TO LOGIN...
            if( user.ok ) return user; else return null;
          } catch (error) {
            throw new error
          }
          }
    })
  ],
//   Session strategy
  session: {
    strategy: "database"
  },
  pages: {
    signIn: "/login",
    // PENDING TO ADD ERROR PAGE
    // error: "/login/error.jsx"
  }
}

export default NextAuth(authOptions)