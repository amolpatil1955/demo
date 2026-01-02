import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-gray-900 via-purple-900 to-black px-4">
      
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl p-8 transform transition-all duration-500 hover:scale-[1.02]">
        
        <h2 className="text-center text-3xl font-extrabold text-white tracking-wide">
          Welcome Back
        </h2>
        <p className="text-center text-gray-300 mt-2">
          Login to continue
        </p>

        <form className="mt-8 space-y-5">
          {/* Email */}
          <div>
            <label className="text-gray-200">Email</label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full px-4 py-3 mt-1 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-200">Password</label>
            <input
              type="password"
              placeholder="•••••••"
              className="w-full px-4 py-3 mt-1 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>

          {/* Login Button */}
          <button
            className="w-full bg-lieanr-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition-all"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-300 mt-6">
          Don’t have an account?
          <Link className="text-pink-400 ml-1 hover:underline" href={"/register"}>
            Register
          </Link>
          
        </p>

      </div>
    </div>
  );
};

export default Login;
