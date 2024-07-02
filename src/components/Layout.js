'use client';

import { useSession, signIn } from 'next-auth/react';
import Navigation from '../components/Navigation';

export default function Layout({ children }) {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <main className=" bg-black w-screen h-screen flex items-center justify-center">
          <div className="text-center w-full">
            <button
              onClick={() => signIn('google')}
              className="bg-white py-4 text-xl px-8 rounded-md cursor-pointer "
            >
              Login with Google
            </button>
          </div>
        </main>
      </>
    );
  }

  return (
    <main className="min-h-screen flex">
      <Navigation></Navigation>
      <div className=" bg-white flex-grow mt-2 mr-2 rounded-lg mb-2 px-6 py-10 ">
        {children}
      </div>
    </main>
  );
}
