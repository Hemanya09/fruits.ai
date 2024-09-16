import React from "react";
import Button from "./Button";

function Content() {
  return (
    <section className="flex flex-col items-center px-10 py-14 mt-36 w-full text-base font-semibold text-center bg-white rounded-[47px_45px_50px_50px]">
      <h1 className="text-3xl text-black">Fruit.Ai</h1>
      <p className="self-stretch mt-3 text-neutral-400">
        Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.
      </p>
      <Button />
    </section>
  );
}

export default Content;