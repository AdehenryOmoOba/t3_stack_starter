import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      credentials: {
          email: {}, 
          password: {},
      },
      async authorize(credentials) {
      if(credentials?.email === "adehenry") {
        return  {id: "1", email: credentials.email, image: "ade.png"}
      }
        return null
      },
    })
  ],
  
  callbacks: {
    async jwt({token,user}) {
      return token
    },

    async session({session,token}) {
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
