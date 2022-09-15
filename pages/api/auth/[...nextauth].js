import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
// import TwitterProvider from 'next-auth/provider/twitter'


export default NextAuth({

    providers:[
    //     TwitterProvider({
    //     clientId: process.env.TWITTER_CLIENT_ID,
    //     clientSecret: process.env.TWITTER_CLIENT_SECRET,
    //     version:'2.0',
    // }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code"
          }
        }
      })
    ],
}) 