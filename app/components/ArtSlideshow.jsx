"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slideshow({ imageNames, folder }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Slider {...settings} className="custom-slider">
        {imageNames.map((name, i) => (
          <div key={i} className="px-2">
            <Image
              src={`/${folder}/${name}`}
              alt={`${folder} ${i + 1}`}
              width={400}  
              height={300}  
              className="rounded-xl object-contain w-full h-[300px] mx-auto mb-20"
              priority
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
