import Image from "next/image";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <a
        className="text-black no-underline flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.instagram.com/portfomilo/"
        target="_blank"
        rel="noopener noreferrer"
      >

        <Image
          aria-hidden
          src="/instagram.png"
          alt="Instagram icon"
          width={16}
          height={16}
        />
        Instagram
      </a>
    </footer>
  );
}
