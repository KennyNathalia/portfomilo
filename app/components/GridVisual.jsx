"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";

export default function Grid({ imageData, folder }) {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        0: 1,
    };

    const handlePrev = () => {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : imageData.length - 1));
    };

    const handleNext = () => {
        setSelectedIndex((prev) => (prev < imageData.length - 1 ? prev + 1 : 0));
    };

    const selectedImage = selectedIndex !== null ? imageData[selectedIndex] : null;

    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [selectedIndex]);

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
                        onClick={() => setSelectedIndex(i)}
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
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={() => setSelectedIndex(null)}
                >
                    <div
                        className="relative max-w-4xl w-full p-4 bg-yellow-500 rounded-xl shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedIndex(null)}
                            className="absolute top-4 right-4 text-black text-2xl z-10"
                        >
                            ✕
                        </button>

                        {/* Previous button */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-black z-10"
                        >
                            ‹
                        </button>

                        {/* Next button */}
                        <button
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl text-black z-10"
                        >
                            ›
                        </button>

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
                    </div>
                </div>
            )}
        </>
    );
}
