import Image from "next/image";

export default function Logo() {
  return (
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href="https://www.instagram.com/portfomilo/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        className="white:invert"
        src="/mudamilo_rotating.gif"
        alt="logo"
        width={350}
        height={38}
        priority
      />
    </a>
  );
}
