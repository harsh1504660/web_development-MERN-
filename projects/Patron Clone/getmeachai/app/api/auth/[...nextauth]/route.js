import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
 import GitHubProvider from "next-auth/providers/github";
import mongoose from "mongoose"
import User from '@/app/models/User';
import Payment from '@/app/models/Payment';
import connectDB from '@/app/db/connectDB';
export const authoptions= NextAuth({
 
   
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
          }),
      
      // OAuth authentication providers...
    //   AppleProvider({
    //     clientId: process.env.APPLE_ID,
    //     clientSecret: process.env.APPLE_SECRET
    //   }),
    //   FacebookProvider({
    //     clientId: process.env.FACEBOOK_ID,
    //     clientSecret: process.env.FACEBOOK_SECRET
    //   }),
    //   GoogleProvider({
    //     clientId: process.env.GOOGLE_ID,
    //     clientSecret: process.env.GOOGLE_SECRET
    //   }),
    //   // Passwordless / email sign in
    //   EmailProvider({
    //     server: process.env.MAIL_SERVER,
    //     from: 'NextAuth.js <no-reply@example.com>'
    //   }),
    ],
    callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
        console.log("Account object:", account);
        console.log("Profile object:", profile);
        console.log("Email:", email);
    
        if (account.provider == "github") {
          try {
            // Check if email is provided or handle the absence of email
            const userEmail = email || profile?.email || `${profile?.login}@github.com`;
    
            console.log("Processed Email:", userEmail);
    
            // Connect to the database
            await mongoose.connect("mongodb://localhost:27017/chai", { useNewUrlParser: true, useUnifiedTopology: true });
    
            // Check if the user exists
            const currentUser = await User.findOne({ email: userEmail });
            console.log("Current User:", currentUser);
    
            // If the user doesn't exist, create a new user
            if (!currentUser) {
              const newUser = new User({
                email: userEmail,
                username: userEmail.split("@")[0],  // Using the email prefix for username
              });
              await newUser.save();
              console.log("New user created:", newUser);
            }
          } catch (error) {
            console.error("Error during signIn:", error);
            return false;
          }
        }
        return true;
      },
    
      async session({ session, user, token }) {
        console.log("Session callback, session:", session);
    
        // Find user in the database by email
        const dbUser = await User.findOne({ email: session.user.email });
    
        if (dbUser) {
          session.name = dbUser.username;
          console.log("Session updated with username:", session.name);
        }
    
        return session;
      }
    }
    
    

  })

  export {authoptions as GET,authoptions as POST}