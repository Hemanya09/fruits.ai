import React from "react";

function SocialIcons() {
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/92846d3a1fbaf802f4c2b94391e2412e44f8e9beb930035a752dd9c2405bb878?placeholderIfAbsent=true&apiKey=692f743f128843219f54d889de08dee9", alt: "Facebook" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/33fd37a203b71ba97ccace5ccf36d3b6c536b1e24b89d14de33bcce5d7ddd897?placeholderIfAbsent=true&apiKey=692f743f128843219f54d889de08dee9", alt: "Twitter" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2057aaa3c456c4c6d4baad6cc111dd3d5a61563caa5252dbed37a20ea029223?placeholderIfAbsent=true&apiKey=692f743f128843219f54d889de08dee9", alt: "Google" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/290a4399789281a5a65fa1e71ed13a798f0da244da7dab7ae97f75df9760df08?placeholderIfAbsent=true&apiKey=692f743f128843219f54d889de08dee9", alt: "LinkedIn" }
  ];

  return (
    <div className="flex gap-5 items-start p-3">
      {socialIcons.map((icon, index) => (
        <img
          key={index}
          loading="lazy"
          src={icon.src}
          alt={icon.alt}
          className="object-contain shrink-0 aspect-square w-[39px]"
        />
      ))}
    </div>
  );
}

export default SocialIcons;