import React from "react";

function Header() {
  const images = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f055b693b2aab492acef07c66c3ac29514246c54826e2230521dd91b48c51be?placeholderIfAbsent=true&apiKey=692f743f128843219f54d889de08dee9", className: "object-contain shrink-0 bg-blend-multiply aspect-[0.73] w-[87px]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9d5de03be41486a2ac4154eab9b0c02c6d1745fe9837c77a9d92403491f0b90b?placeholderIfAbsent=true&apiKey=692f743f128843219f54d889de08dee9", className: "object-contain shrink-0 my-auto bg-blend-multiply aspect-[0.69] w-[75px]" }
  ];

  return (
    <header className="flex gap-5 self-end mr-12">
      {images.map((image, index) => (
        <img key={index} src={image.src} alt="" className={image.className} />
      ))}
    </header>
  );
}

export default Header;