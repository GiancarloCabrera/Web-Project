import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
// import t from '../../../app/(public-routes)/login/page'
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          email: { placeholder: "Email", type: "email" },
          password: { placeholder: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          console.log('hola');
          // console.log(credentials, req);
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
          
          // if( user ) return res
          // else return null;
        }
    })
  ],
//   Session strategy
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login",
    // PENDING TO ADD ERROR PAGE
    // error: "/login/error.jsx"
  }
}

export default NextAuth(authOptions)