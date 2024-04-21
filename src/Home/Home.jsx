import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Home() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleFormChange = () => {
    setIsSignUpActive(!isSignUpActive);
  };

  const handleSignUp = () => {
    if (!email || !password) return;
  };

  return (
    <section className="w-full h-screen bg-slate-900 flex items-center justify-center">
      <form className="flex flex-col gap-2 bg-slate-50 p-5 rounded shadow-md">
        {isSignUpActive && (
          <h1 className="text-center text-slate-900 text-4xl mb-3">Sign Up</h1>
        )}
        {!isSignUpActive && (
          <h1 className="text-center text-slate-900 text-4xl mb-3">Sign In</h1>
        )}

        <label htmlFor="email" className="text-slate-900">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="h10 border border-slate-900 rounded p-4"
        />
        <label htmlFor="password" className="text-slate-900">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="h10 border border-slate-900 rounded p-4"
        />

        {isSignUpActive && (
          <button
            onClick={handleSignUp}
            type="submit"
            className="bg-slate-900 px-3 p-1 5 text-white my-3 rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
        )}
        {!isSignUpActive && (
          <button
            onClick={handleSignIn}
            type="submit"
            className="bg-slate-900 px-3 p-1 5 text-white my-3 rounded hover:bg-blue-700"
          >
            Sign In
          </button>
        )}

        {isSignUpActive && (
          <a
            href="#"
            onClick={handleFormChange}
            className="text-red-500 hover:text-red-900"
          >
            Login
          </a>
        )}
        {!isSignUpActive && (
          <a
            href="#"
            onClick={handleFormChange}
            className="text-red-500 hover:text-red-900"
          >
            Create an account
          </a>
        )}
      </form>
    </section>
  );
}

export default Home;
