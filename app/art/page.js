import 'bootstrap/dist/css/bootstrap.min.css';
import fs from "fs";
import path from "path";
import ArtSlideshow from '@components/ArtSlideshow';
import Footer from "@components/Footer";
import Logo from '@components/Logo';

export default function Home() {
  const folder = "art";
  const dirPath = path.join(process.cwd(), "public", folder);
  
  const files = fs.readdirSync(dirPath);
  const imageNames = files.filter((file) =>
    file.match(/\.(jpg|jpeg|png|webp)$/i)
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-16 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <Logo width={200} height={22} />

      <div>
        <ArtSlideshow imageNames={imageNames} folder={folder} />
      </div>

      <Footer />
    </div>
  );
}
