"use client";

import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Grid({ imageNames, folder }) {


  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
      {imageNames.map((name, i) => (
        <div key={i} className="relative w-full aspect-[4/3]">
            <Image
                src={`/${folder}/${name}`}
                alt={`${folder} ${i + 1}`}
                width={400}
                height={300}
                className="object-cover rounded-xl w-full h-auto"
                priority={i === 0}
            />

        </div>
      ))}
    </div>
  );
}
