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
          
          // if( user.ok ) return { uid: user.uid, name: user.name, token: user.token}
          if( user.ok ) return user
          else return null;
        }
    })
  ],
//   Session strategy
  // session: {
  //   strategy: "jwt"
  // },
  pages: {
    signIn: "/login",
    // PENDING TO ADD ERROR PAGE
    // error: "/login/error.jsx"
  }
}

export default NextAuth(authOptions)