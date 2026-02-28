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

      <div className="relative w-full flex items-center justify-center mb-6">
        <div className="flex gap-2 items-center flex-row">
          <Link
            className="bg-yellow-500 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent hover:text-black dark:hover:text-white font-medium text-base h-12 px-6 w-auto min-w-[140px] sm:w-[158px]"
            href="/art"
          >
            Art
          </Link>
          <Link
            className="bg-yellow-500 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent hover:text-black dark:hover:text-white font-medium text-base h-12 px-6 w-auto min-w-[140px] sm:w-[158px]"
            href="/posters"
          >
            Posters
          </Link>
        </div>

        <div className="absolute right-0 hidden sm:flex gap-4 flex-row">
          <button onClick={() => setView("grid")}>
            <Image
              src="/icons/grid.png"
              width={40}
              height={40}
              alt="Grid View"
            />
          </button>
          <button onClick={() => setView("slideshow")}>
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