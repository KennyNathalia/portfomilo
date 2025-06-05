import Link from "next/link";
import Footer from "@components/Footer";
import Logo from "@components/Logo";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Logo />

        <div className="flex justify-center">
          <span className="text-center">Digital Art Gallery by MUDA MILO</span>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="bg-red-500 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent hover:text-black dark:hover:text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/art"
          >
            Art
          </Link>
          <Link
            className="bg-red-500 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent hover:text-black dark:hover:text-white font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/posters"
          >
            Posters
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
