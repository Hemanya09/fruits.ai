import React from "react";

function LoginForm() {
  return (
    <form className="w-full">
      <div className="flex gap-3 self-start mt-12 text-2xl text-neutral-400">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e08e335da3d584b43b7a62d89a0ef82f513077720d93dea96bee76645eec635?placeholderIfAbsent=true&apiKey=692f743f128843219f54d889de08dee9" alt="" className="object-contain shrink-0 my-auto w-6 aspect-square" />
        <label htmlFor="email" className="basis-auto">Email Address</label>
      </div>
      <input type="email" id="email" className="sr-only" aria-label="Email Address" />
      
      <div className="flex gap-10 self-start mt-12">
        <div className="flex flex-col">
          <div className="flex gap-3 self-start text-2xl whitespace-nowrap text-neutral-400">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f2795b3852dcb8dd50f92e94b62a4f53f4a3a399b3710fb06440fdb8a6d4127?placeholderIfAbsent=true&apiKey=692f743f128843219f54d889de08dee9" alt="" className="object-contain shrink-0 self-start w-6 aspect-square" />
            <label htmlFor="password">Password</label>
          </div>
          <input type="password" id="password" className="sr-only" aria-label="Password" />
          
          <div className="flex gap-2 mt-10 text-xl text-stone-500">
            <input type="checkbox" id="remember" className="object-contain shrink-0 self-start rounded-sm aspect-square w-[25px]" />
            <label htmlFor="remember" className="grow shrink w-[129px]">Remember password</label>
          </div>
        </div>
        <div className="flex flex-col self-start mt-2 text-xl text-sky-600">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e916130e5823bf82afc126cbee0a36dbb4579097c072bda36671c9c12de6766?placeholderIfAbsent=true&apiKey=692f743f128843219f54d889de08dee9" alt="" className="object-contain self-end aspect-[1.83] w-[33px]" />
          <a href="#forget-password" className="mt-12">Forget password</a>
        </div>
      </div>
      
      <div className="flex flex-col justify-center self-stretch p-1 mt-9 text-2xl text-white whitespace-nowrap bg-white">
        <button type="submit" className="px-16 py-1.5 bg-sky-600 rounded-md shadow-[0px_0px_4px_rgba(0,0,0,0.25)]">
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;