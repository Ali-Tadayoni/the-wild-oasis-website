import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    /*
     * This call back will be called whenever our users hit one of the matching routes
     * in our exported matcher variable form middleware.js
     * and should return either true or false which determines if user is alowed to access our protected route
     */
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    /*
     * This callback acts like a middleware and will be called before actual sign-in process
     * Usefull for adding a new user to database table or check if a user is already in our table or not
     */
    async signIn({ user, account, profile }) {
      try {
        const existingGuest = await getGuest(user.email);

        if (!existingGuest) {
          await createGuest({
            email: user.email,
            fullName: user.name,
          });
        }

        return true;
      } catch {
        return false;
      }
    },
    /*
     * These callbacks are executed in order from top to bottom.
     * this session is called after the 'signIn' callback and whenever we call our auth function
     * like: `const session = await auth();`
     * Usefull exposing our user related data from our supabase table like 'guestId' to 'session' data.
     * note: we can not do this in 'signIn' callback because the session in there has not been created yet.
     */
    async session({ session, _user }) {
      const guest = await getGuest(session.user.email);
      // Mutate session to expose our 'guestId'
      session.user.guestId = guest.id;

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
