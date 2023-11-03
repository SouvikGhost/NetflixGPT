import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Backgrond Logo"
        />
      </div>
      <form className="absolute p-12 bg-black top-40 mx-auto w-3/12 text-white left-0 right-0 rounded-md bg-opacity-75">
        <h1 className="font-bold text-2xl my-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="w-full my-4 p-3 rounded-md  bg-gray-500 placeholder:text-white outline-none text-lg"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="w-full my-4 p-3 rounded-md  bg-gray-500 placeholder:text-white outline-none text-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full my-4 p-3 rounded-md bg-gray-500 placeholder:text-white outline-none text-lg"
        />
        <button className="w-full bg-red-600 p-3 my-4 rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Already Registered? Sign In now"}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
