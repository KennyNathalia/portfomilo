import Image from "next/image";

export default function Logo({ width = 350, height = 38, className = "" }) {
  return (
    <a
      className={`flex items-center gap-2 hover:underline hover:underline-offset-4 ${className}`}
      href="/"
      rel="noopener noreferrer"
    >
      <Image
        className="white:invert"
        src="/mudamilo_rotating.gif"
        alt="logo"
        width={width}
        height={height}
        priority
      />
    </a>
  );
}
