"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slideshow({ imageData, folder }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Slider {...settings} className="custom-slider">
        {imageData.map((image, i) => (
          <div key={i} className="px-2">
            <Image
              src={`/${folder}/${image.name}`}
              alt={image.title}
              width={400}
              height={300}
              className="rounded-xl object-contain w-full h-[300px] mx-auto mb-20"
              priority={i === 0}
            />
            {/* <h2 className="text-center mt-2 text-lg font-semibold">{image.title}</h2> */}
          </div>
        ))}

      </Slider>
    </div>
  );
}
