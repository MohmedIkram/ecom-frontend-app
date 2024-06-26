"use client"

import React, { useState } from "react";
import { useFormState, useFormStatus } from 'react-dom'

import Image from "next/image";
// import { authenticate } from '@/app/lib/actions'

function Login() {
  // const [errorMessage, dispatch] = useFormState(authenticate, undefined)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const myData = {
      email,
      password,
    };
    console.log("🚀 ~ handleSubmit ~ myData:", myData)
  };
  return (
    <>
      <section className="flex flex-col items-center h-screen text-black md:flex-row ">
        <div className="items-center justify-center hidden w-full h-screen bg-indigo-600 md:w-1/2 xl:w-2/3 md:flex">
          <Image
            src="/login.svg"
            alt=""
            width={200}
            height={200}
            className="w-1/2"
            priority
          />
        </div>

        <div
          className="flex items-center justify-center w-full h-screen px-6 md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12"
        >
          <div className="w-full h-100">
            <h1 className="mt-12 text-xl font-bold leading-tight md:text-2xl">
              Log in to your account
            </h1>

            {/* <form className="mt-6" action={dispatch}> */}
            <form className="mt-6">
              <>
                <label className="block text-black dark:text-white">Email Address</label>
                <input
                  type="email"
                  name=""
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 mt-2 bg-gray-200 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none dark:text-black"
                  autoFocus
                  autoComplete="on"
                  required
                />
              </>

              <div className="mt-4">
                <label className="block text-black dark:text-white">Password</label>
                <input
                  type="password"
                  name=""
                  placeholder="Enter Password"
                  minLength="6"
                  className="w-full px-4 py-3 mt-2 bg-gray-200 border rounded-lg focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="mt-2 text-right">
                <a
                  href="#"
                  className="text-sm font-semibold text-black hover:text-blue-700 focus:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>

              <LoginButton />
            </form>

            <hr className="w-full my-6 border-gray-300" />

            <button
              type="button"
              className="block w-full px-4 py-3 font-semibold text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:bg-gray-100"
            >
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="w-6 h-6"
                  viewBox="0 0 48 48"
                >
                  <defs>
                    <path
                      id="a"
                      d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                    />
                  </defs>
                  <clipPath id="b">
                    <use xlinkHref="#a" overflow="visible" />
                  </clipPath>
                  <path
                    clipPath="url(#b)"
                    fill="#FBBC05"
                    d="M0 37V11l17 13z"
                  />
                  <path
                    clipPath="url(#b)"
                    fill="#EA4335"
                    d="M0 11l17 13 7-6.1L48 14V0H0z"
                  />
                  <path
                    clipPath="url(#b)"
                    fill="#34A853"
                    d="M0 37l30-23 7.9 1L48 0v48H0z"
                  />
                  <path
                    clipPath="url(#b)"
                    fill="#4285F4"
                    d="M48 48L17 24l-4-3 35-10z"
                  />
                </svg>
                <span className="ml-4">Log in with Google</span>
              </div>
            </button>

            <p className="mt-8">
              Need an account?{" "}
              <a
                href="#"
                className="font-semibold text-blue-500 hover:text-blue-700"
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function LoginButton() {
  const { pending } = useFormStatus()
 
  return (
    <button aria-disabled={pending} type="submit" className="block w-full px-4 py-3 mt-6 font-semibold text-white bg-indigo-500 rounded-lg hover:bg-indigo-400 focus:bg-indigo-400">
      Login
    </button>
  )
}
export default Login;
