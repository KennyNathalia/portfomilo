import fs from 'fs';
import path from 'path';
import PosterPageClient from "@components/PosterPageClient";
import posterData from "../data/posterData";

export default function PosterPage() {
  const folder = "posters";
  const dirPath = path.join(process.cwd(), 'public', folder);

  // Does it exist?
  const existingFiles = fs.readdirSync(dirPath)
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));

  const availableImages = posterData.filter(item => 
    existingFiles.includes(item.name)
  );

  return <PosterPageClient imageData={availableImages} folder={folder} />;
}