import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth from 'next-auth';

import GoogleProvider from 'next-auth/providers/google';
import clientPromise from '../../../../../lib/monogodb';

const GOOGLE_ID =
  '352753809808-h0sopub86ektn0qi0vhjrtmn99de4vkt.apps.googleusercontent.com';

const GOOGLE_SECRET = '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';

const handler = NextAuth({
  providers: [
    // OAuth authentication providers...

    GoogleProvider({
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,

      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],

  adapter: MongoDBAdapter(clientPromise),
});

const adminEmails = ['dawid.paszko@gmail.com'];

export { handler as GET, handler as POST };
