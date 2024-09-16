import React from "react";
import Header from "./Header";
import Content from "./Content";
import Button from "./Button";

function FruitAi() {
  return (
    <main className="flex overflow-hidden flex-col pt-40 mx-auto w-full border border-solid border-blue-100 border-opacity-50 max-w-[480px] rounded-[50px]">
      <Header />
      <Content />
    </main>
  );
}

export default FruitAi;