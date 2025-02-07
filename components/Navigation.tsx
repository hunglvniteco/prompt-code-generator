import React from 'react';
import { createRouter, RouterProvider } from 'next/router';

const router = createRouter();

function App({ pageProps }) {
  return (
    <div className="flex flex-col h-screen bg-slate-800">
      <header className="bg-white shadow-lg px-4 py-2 sm:px-6 lg:px-8">
        <div className="max-w-full mx-auto flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-slate-900 hover:text-slate-700 focus-visible:text-slate-500 dark:text-white dark:hover:text-gray-400 dark:focus-visible:text-gray-300">
            {/* Your Logo Here */}
          </a>
          <button onClick={() => router.push('/auth')} className="text-base font-medium text-slate-900 hover:text-slate-700 focus-visible:text-slate-500 dark:text-white dark:hover:text-gray-400 dark:focus-visible:text-gray-300">
            Sign Up
          </button>
        </div>
      </header>
      <main className="flex-grow px-4 py-6 sm:px-6 lg:px-8">
        {/* Your Main Content Here */}
      </main>
    </div>
  );
}

export default App;