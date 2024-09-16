import React from "react";
import ImageCard from "./ImageCard";
import FAQsButton from "./FAQsButton";
import SocialIcons from "./SocialIcons";

const fruitImages = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/aa2b2a6bead83510fb71aa17bbbf22d30263a2fca977dd75a40eb6e8bbb204df?placeholderIfAbsent=true&apiKey=692f743f128843219f54d889de08dee9", alt: "Fruit image 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a33af90b7b4c4b2c400439e2d8b9bd7584536e81a6a942ff2d622c4838f05f22?placeholderIfAbsent=true&apiKey=692f743f128843219f54d889de08dee9", alt: "Fruit image 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2802531cdc47b1774efdf0fec08fda3c031b6273ae61512ef5f4e417592687bd?placeholderIfAbsent=true&apiKey=692f743f128843219f54d889de08dee9", alt: "Fruit image 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/16b1a9b692ac5f736d8fefbc681e52df9b78e0cdd109d8ec8fe403a1a7837e95?placeholderIfAbsent=true&apiKey=692f743f128843219f54d889de08dee9", alt: "Fruit image 4" }
];

function FruitAi() {
  return (
    <main className="flex overflow-hidden flex-col items-center px-10 py-14 border border-solid border-blue-100 border-opacity-50 max-w-[359px] rounded-[50px]">
      <header>
        <h1 className="text-3xl font-semibold text-center text-white">
          Fruit.Ai
        </h1>
        <p className="mt-4 text-base font-extrabold tracking-wider text-center text-white">
          "Be Healthy!"
        </p>
      </header>
      <section className="flex flex-wrap gap-5 self-stretch mt-8">
        {fruitImages.map((image, index) => (
          <ImageCard key={index} src={image.src} alt={image.alt} />
        ))}
      </section>
      <FAQsButton />
      <SocialIcons />
    </main>
  );
}

export default FruitAi;