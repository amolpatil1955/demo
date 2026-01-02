"use client"
import { Link } from "lucide-react";
import React, { useState } from "react";

const Register = () => {
const [name, setname] = useState("");
const [email, setemail] = useState("")
const [password,setpassowrd] = useState("");

const handlesubmit = async (e) =>{
  e.preventDefault()
  try {
      const res = await fetch("http://localhost:3000/api/register",{
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify({name,email,password})
      })
  } catch (error) {
    console.log("Error While Registering User");
  }
}



  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-black via-indigo-900 to-gray-900 px-4">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-8 transform transition-all duration-500 hover:scale-[1.02]">
        <h2 className="text-center text-3xl font-extrabold text-white tracking-wide">
          Create Account
        </h2>
        <p className="text-center text-gray-300 mt-2">
          Join us today
        </p>

        <form className="mt-8 space-y-5" onSubmit={handlesubmit} >
          {/* Name */}
          <div>
            <label className="text-gray-200">Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 mt-1 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
             onChange={(e)=>setname(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-200">Email</label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="w-full px-4 py-3 mt-1 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
             onChange={(e)=>setemail(e.target.value)}

            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-200">Password</label>
            <input
              type="password"
              placeholder="•••••••"
              className="w-full px-4 py-3 mt-1 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              onChange={(e)=>setpassowrd(e.target.value)}

            />
          </div>

          {/* Register Button */}
          <button type="submit"
            className="w-full bg-linear-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition-all"
          >
            Register
          </button>
        </form>

        <p className="text-center text-gray-300 mt-6">
          Already have an account?
          <Link className="text-purple-400 ml-1 hover:underline" to="/login">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;
