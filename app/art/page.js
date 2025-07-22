import fs from 'fs';
import path from 'path';
import ArtPageClient from "@components/ArtPageClient";
import artData from "../data/artData";

export default function ArtPage() {
  const folder = "art";
  const dirPath = path.join(process.cwd(), 'public', folder);

  // Does it exist?
  const existingFiles = fs.readdirSync(dirPath)
    .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));

  const availableImages = artData.filter(item =>
    existingFiles.includes(item.name)
  );

  return <ArtPageClient imageData={availableImages} folder={folder} />;
}
