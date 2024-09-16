import React from "react";

function ImageCard({ src, alt }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="object-contain shrink-0 max-w-full rounded-3xl aspect-[0.99] w-[137px]"
    />
  );
}

export default ImageCard;