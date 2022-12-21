import React from "react";
import img from "../images/google.png";
import Image from "next/image";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { auth } from "../Firebase";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import GoogleSignIn from "../components/googleSignin/GoogleSignIn";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({ mode: "onSubmit" });

  const onsubmit = (data) => {
    const [email, password] = getValues(["email", "password"]);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        router.push("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true);
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <section className="flex justify-center items-center py-10">
      <div className=" w-80 ">
        <h2 className=" text-center font-bold font-Rajdhani text-2xl pb-2">
          USER LOGIN
        </h2>
        <p className=" text-sm font-Quicksand font-bold text-center text-stone-500 mb-5">
          Hey, Enter your details to get sign in
          <br /> to your account
        </p>
        <form onSubmit={handleSubmit(onsubmit)}>
          <input
            {...register("email", { required: true })}
            placeholder="Enter Your Email"
            type="email"
            className="border rounded-md placeholder:text-stone-500 w-full py-2 px-3 focus:outline-lime-500 active:outline-none text-xs font-Quicksand font-semibold mb-3"
          />
          {errors.email?.type === "required" && (
            <p className=" text-red-700 -mt-3 mb-3 font-Quicksand text-sm font-medium w-full">
              please enter your name
            </p>
          )}
          {error && (
            <p className=" text-red-700 -mt-3 mb-3 font-Quicksand text-sm font-medium w-full">
              This User Isn't Found
            </p>
          )}
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
            className="mb-5 border rounded-md placeholder:text-stone-500 w-full py-2 px-3 focus:outline-lime-500 active:outline-none text-xs font-Quicksand font-semibold"
          />
          {errors.password?.type === "required" && (
            <p className=" text-red-700 -mt-3 mb-3 font-Quicksand text-sm font-medium w-full">
              please enter your password
            </p>
          )}
          <p className=" text-xs font-bold font-Quicksand hover:text-lime-500 cursor-pointer mb-6">
            forgot password ?
          </p>
          <button className="text-center py-3 text-sm bg-lime-600 text-white font-Quicksand w-full font-bold rounded-lg mb-6">
            Sign In
          </button>
        </form>
        <p className=" text-center text-xs font-Quicksand font-semibold text-stone-500 mb-3">
          Don't have an account ?
          <Link href="/Register" className="text-black">
            Sign Up
          </Link>
        </p>
        <div className="relative">
          <p className="text-center font-Quicksand text-xs font-bold relative z-10 bg-white p-1 w-fit m-auto ">
            OR
          </p>
          <div className="w-full h-px bg-stone-500 absolute top-2/4 -translate-y-1/2"></div>
        </div>
        <div className="flex items-center justify-center">
          <p>Sign in with </p>
          <GoogleSignIn />
        </div>
      </div>
    </section>
  );
}
