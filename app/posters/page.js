import fs from "fs";
import path from "path";
import PosterPageClient from "@components/PosterPageClient";

export default function PosterPage() {
  const folder = "posters";
  const dirPath = path.join(process.cwd(), "public", folder);
  const files = fs.readdirSync(dirPath);
  const imageNames = files.filter((file) =>
    file.match(/\.(jpg|jpeg|png|webp)$/i)
  );

  return <PosterPageClient imageNames={imageNames} folder={folder} />;
}
