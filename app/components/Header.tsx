"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "../../public/logo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm py-2"
          : "bg-transparent border-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-12">
          <Link
            href="/"
            className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Image src={Logo} alt="OrgaNice Logo" width={32} height={32} />
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              OrgaNice
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-500">
            <Link
              href="/#features"
              className="hover:text-indigo-600 transition"
            >
              Features
            </Link>
            <Link
              href="/#pro-features"
              className="hover:text-indigo-600 transition"
            >
              Pro Power
            </Link>
            <Link href="/#pricing" className="hover:text-indigo-600 transition">
              Pricing
            </Link>

            <Link
              href="/docs"
              className={`transition ${
                pathname.startsWith("/docs")
                  ? "text-indigo-600 font-bold"
                  : "hover:text-indigo-600"
              }`}
            >
              Docs
            </Link>

            <a
              href="https://organice.featurebase.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm  hover:text-indigo-600 transition-colors"
            >
              Roadmap
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
