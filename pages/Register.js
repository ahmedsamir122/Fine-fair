import React from "react";
import img from "../images/google.png";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/router";
import GoogleSignIn from "../components/googleSignin/GoogleSignIn";
import { db } from "../Firebase";
import {
  setDoc,
  collection,
  doc,
  updateDoc,
  onSnapshot,
  getDoc,
} from "firebase/firestore";
export default function Register() {
  const [user, setUser] = useState({});
  const router = useRouter();
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({ mode: "onSubmit" });

  const onsubmit = (data) => {
    console.log(data);
    const [email, password] = getValues(["email", "password"]);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        const docRef = doc(db, "users", user.uid);
        const payload = {
          cart: [],
          wishlist: [],
        };
        setDoc(docRef, payload);
        router.push("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true);
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <section className="flex justify-center items-center py-10">
      <div className=" max-w-xs">
        <h2 className=" text-center font-bold font-Rajdhani text-2xl pb-2 uppercase">
          Sign Up
        </h2>
        <p className=" text-sm font-Quicksand font-bold text-center text-stone-500 mb-5">
          Hey, Enter your details to get sign in
          <br /> to your account
        </p>
        <form onSubmit={handleSubmit(onsubmit)}>
          <input
            {...register("username", { required: true })}
            placeholder="Enter Your Name"
            type="text"
            className="border rounded-md placeholder:text-stone-500 w-full py-2 px-3 focus:outline-lime-500 active:outline-none text-xs font-Quicksand font-semibold mb-3"
          />
          {errors.username?.type === "required" && (
            <p className=" text-red-700 -mt-3 mb-3 font-Quicksand text-sm font-medium">
              please enter your name
            </p>
          )}
          <input
            {...register("email", { required: true })}
            placeholder="Enter Your Email"
            type="email"
            className="border rounded-md placeholder:text-stone-500 w-full py-2 px-3 focus:outline-lime-500 active:outline-none text-xs font-Quicksand font-semibold mb-3"
          />
          {errors.email?.type === "required" && (
            <p className=" text-red-700 -mt-3 mb-3 font-Quicksand text-sm font-medium">
              please enter your email address
            </p>
          )}
          {error && (
            <p className=" text-red-700 -mt-3 mb-3 font-Quicksand text-sm font-medium w-full">
              This User already exists
            </p>
          )}
          <input
            {...register("phonenumber", { required: true })}
            placeholder="Enter Your Phone Number"
            type="number"
            className="border rounded-md placeholder:text-stone-500 w-full py-2 px-3 focus:outline-lime-500 active:outline-none text-xs font-Quicksand font-semibold mb-3"
          />
          {errors.phonenumber?.type === "required" && (
            <p className=" text-red-700 -mt-3 mb-3 font-Quicksand text-sm font-medium">
              please enter your phone number
            </p>
          )}
          <input
            {...register("password", { required: true })}
            placeholder="Password"
            type="password"
            className="border rounded-md placeholder:text-stone-500 w-full py-2 px-3 focus:outline-lime-500 active:outline-none text-xs font-Quicksand font-semibold mb-3"
          />
          {errors.password?.type === "required" && (
            <p className=" text-red-700 -mt-3 mb-3 font-Quicksand text-sm font-medium">
              please enter your password
            </p>
          )}
          <input
            {...register("confirmpassword", {
              required: true,
              validate: (value) => {
                if (value === getValues("password")) {
                  return true;
                } else {
                  return false;
                }
              },
            })}
            type="password"
            placeholder="Confirm Password"
            className="mb-5 border rounded-md placeholder:text-stone-500 w-full py-2 px-3 focus:outline-lime-500 active:outline-none text-xs font-Quicksand font-semibold"
          />
          {errors.confirmpassword?.type === "required" && (
            <p className=" text-red-700 -mt-3 mb-3 font-Quicksand text-sm font-medium">
              please enter your password
            </p>
          )}
          {errors.confirmpassword?.type === "validate" && (
            <p className=" text-red-700 -mt-3 mb-3 font-Quicksand text-sm font-medium">
              It doesn't match with password
            </p>
          )}
          <div className="flex mb-4">
            <input
              {...register("checkbox", { required: true })}
              type="checkbox"
              id="term"
              value="test"
            />

            <label className="text-xs font-Quicksand pl-3" for="term">
              I accept the{" "}
              <span className=" text-lime-500">
                Terms of Service and Privacy Policy
              </span>
            </label>
          </div>
          {errors.checkbox?.type === "required" && (
            <p className=" text-red-700 -mt-3 mb-3 font-Quicksand text-sm font-medium">
              you must accept the terms
            </p>
          )}
          <button
            disabled={!isValid}
            className=" disabled:bg-slate-500 disabled:text-black text-center py-3 text-sm bg-lime-600 text-white font-Quicksand w-full font-bold rounded-lg mb-6"
          >
            Sign Up
          </button>
        </form>
        <p className=" text-center text-xs font-Quicksand font-semibold text-stone-500 mb-3">
          Already have an account ?
          <Link href="/login" className="text-black">
            {" "}
            Login In
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
