import 'bootstrap/dist/css/bootstrap.min.css';
import fs from "fs";
import path from "path";
import ArtSlideshow from '@components/ArtSlideshow';
import Footer from "@components/Footer";
import Logo from '@components/Logo';

export default function Home() {
  const dirPath = path.join(process.cwd(), "public", "art");
  const files = fs.readdirSync(dirPath);

  const imageNames = files
    .filter((file) => file.match(/\.(jpg|jpeg|png)$/)) 
    .map((file) => file.replace(/\.(jpg|jpeg|png)$/, ""));  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-16 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <Logo />

      <div>
        <ArtSlideshow imageNames={imageNames} folder="art" />
      </div>

      <Footer />
    </div>
  );
}
