import React from "react";
import LoginForm from "./LoginForm";
import SocialIcons from "./SocialIcons";
import ProfileImage from "./ProfileImage";

function LoginPage() {
  return (
    <main className="flex overflow-hidden flex-col items-center px-11 pt-12 mx-auto w-full bg-white max-w-[480px] rounded-[40px] shadow-[0px_4px_23px_rgba(0,0,0,0.25)]">
      <h1 className="text-4xl text-center text-black">Login</h1>
      <p className="mt-8 text-2xl text-center text-sky-700">
        <span className="text-stone-500">By signing in you are agreeing our </span>
        <span className="text-sky-600">Term and privacy polic</span>
        <span>y</span>
      </p>
      <nav className="flex gap-5 justify-between mt-12 max-w-full text-2xl whitespace-nowrap w-[135px]">
        <a href="#login" className="text-sky-700">Login</a>
        <a href="#register" className="text-neutral-400">Register</a>
      </nav>
      <LoginForm />
      <p className="mt-2 text-2xl text-neutral-500">or connect with</p>
      <SocialIcons />
      <ProfileImage />
    </main>
  );
}

export default LoginPage;