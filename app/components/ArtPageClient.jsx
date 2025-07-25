"use client";

import { useState } from "react";
import ArtSlideshow from "@components/ArtSlideshow";
import Footer from "@components/Footer";
import Logo from "@components/Logo";
import Grid from "@components/GridVisual";
import Image from "next/image";
import Link from "next/link";

export default function ArtPageClient({ imageData, folder }) {
  const [view, setView] = useState("grid");

  console.log("imageData:", imageData);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
      <Logo width={200} height={22} />

      <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="bg-yellow-500 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent hover:text-black dark:hover:text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/art"
          >
            Art
          </Link>
          <Link
            className="bg-yellow-500 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent hover:text-black dark:hover:text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/posters"
          >
            Posters
          </Link>
        </div>

      <div className="w-full flex justify-end">
        <div className="flex gap-4 flex-col sm:flex-row">
          <button
            onClick={() => setView("grid")}
            className=""
          >
            <Image
              src="/icons/grid.png"
              width={40}
              height={40}
              alt="Grid View"
            />
          </button>
          <button
            onClick={() => setView("slideshow")}
            className=""
          >
            <Image
              src="/icons/slides.png"
              width={40}
              height={40}
              alt="Slideshow"
            />
          </button>
        </div>
      </div>

      <div>
        {view === "grid" && <Grid imageData={imageData} folder={folder} />}
        {view === "slideshow" && <ArtSlideshow imageData={imageData} folder={folder} />}
      </div>

      <Footer />
    </div>
  );
}