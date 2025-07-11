"use client";

import { useState } from "react";
import ArtSlideshow from "@components/ArtSlideshow";
import Footer from "@components/Footer";
import Logo from "@components/Logo";
import Grid from "@components/GridVisual";

export default function ArtPageClient({ imageNames, folder }) {
  const [view, setView] = useState("grid");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Logo width={200} height={22} />

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <button
          onClick={() => setView("grid")}
          className="bg-red-500 rounded-full"
        >
          Grid View
        </button>
        <button
          onClick={() => setView("slideshow")}
          className="bg-red-500 rounded-full"
        >
          SlideShow
        </button>
      </div>

      <div>
        {view === "grid" && <Grid />}
        {view === "slideshow" && <ArtSlideshow imageNames={imageNames} folder={folder} />}
      </div>

      <Footer />
    </div>
  );
}
