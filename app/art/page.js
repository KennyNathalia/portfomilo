// app/art/page.jsx
import fs from "fs";
import path from "path";
import ArtPageClient from "@components/ArtPageClient";

export default function ArtPage() {
  const folder = "art";
  const dirPath = path.join(process.cwd(), "public", folder);
  const files = fs.readdirSync(dirPath);
  const imageNames = files.filter((file) =>
    file.match(/\.(jpg|jpeg|png|webp)$/i)
  );

  return <ArtPageClient imageNames={imageNames} folder={folder} />;
}
