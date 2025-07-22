"use client";

import { useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";

export default function Grid({ imageData, folder }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        0: 1 // Als je absoluut één kolom wilt onder 400px bijv.
    };


    return (
        <>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-4 w-auto"
                columnClassName="masonry-column"
            >
                {imageData.map((image, i) => (
                    <div
                        key={i}
                        className="mb-4 cursor-pointer"
                        onClick={() => setSelectedImage(image)}
                    >
                        <Image
                            src={`/${folder}/${image.name}`}
                            alt={image.title}
                            width={400}
                            height={300}
                            className="rounded-xl object-cover w-full h-auto max-w-[350px] mx-auto"
                            sizes="(max-width: 768px) 100vw, 25vw"
                            priority={i === 0}
                        />
                    </div>
                ))}
            </Masonry>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 no-scrollbar"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-4xl w-full p-4 bg-yellow-500 rounded-xl shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={`/${folder}/${selectedImage.name}`}
                            alt={selectedImage.title}
                            width={1000}
                            height={750}
                            className="rounded-xl object-contain w-full max-h-[70vh]"
                            loading="lazy"
                        />
                        <h2 className="mt-4 text-xl font-semibold text-center">
                            {selectedImage.title}
                        </h2>
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 text-black text-2xl"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
