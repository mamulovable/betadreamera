import Link from "next/link";
import { memo } from "react";
import { Moon, Sparkles } from "lucide-react";

function Header() {
  return (
    <header className="flex w-full items-center justify-between px-6 py-4 lg:px-12">
      <div className="flex items-center gap-10">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Sparkles className="size-6 text-black" strokeWidth={2.5} />
            <span className="text-2xl font-bold tracking-tight text-black">
              DreamEra
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-[15px] font-medium text-gray-500 md:flex">
          <Link href="#" className="transition hover:text-black">
            Pricing
          </Link>
          <Link href="#" className="transition hover:text-black">
            Blog
          </Link>
          <Link href="#" className="transition hover:text-black">
            Changelog
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <button className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-black">
          <Moon className="size-5" />
        </button>
        <Link
          href="#"
          className="rounded-md bg-black px-4 py-2 text-sm font-bold text-white transition hover:bg-gray-800"
        >
          Login
        </Link>
        <Link
          href="#"
          className="rounded-md bg-black px-4 py-2 text-sm font-bold text-white transition hover:bg-gray-800"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}

export default memo(Header);
