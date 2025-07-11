"use client";

import { useState } from "react";
import Image from "next/image";

export default function Grid({ imageNames, folder }) {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {imageNames.map((name, i) => (
                    <div
                        key={i}
                        className="relative w-full aspect-[4/3] cursor-pointer"
                        onClick={() => setSelectedImage(name)}
                    >
                        <Image
                            src={`/${folder}/${name}`}
                            alt={`${folder} ${i + 1}`}
                            width={400}
                            height={300}
                            className="object-cover rounded-xl"
                            sizes="(max-width: 768px) 100vw, 25vw"
                            priority={i === 0}
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl w-full p-4">
                        <Image
                            src={`/${folder}/${selectedImage}`}
                            alt="Selected"
                            width={1000}
                            height={750}
                            className="rounded-xl object-contain w-full max-h-[80vh]"
                        />
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 text-white text-2xl"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

        </>
    );
}
