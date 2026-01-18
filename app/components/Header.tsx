// app/components/Header.tsx
"use client"; // <--- Bắt buộc để dùng onClick và window.scrollTo

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png"; // Đảm bảo đường dẫn ảnh đúng với project của bạn

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Hiệu ứng: Khi cuộn xuống thì Header có thêm bóng đổ/nền mờ
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hàm xử lý cuộn lên đầu trang
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault(); // Ngăn chặn điều hướng mặc định
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
          {/* Logo - Bấm vào sẽ cuộn lên đầu */}
          <Link
            href="/"
            onClick={scrollToTop}
            className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Image src={Logo} alt="OrgaNice Logo" width={32} height={32} />
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              OrgaNice
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-500">
            <a href="#features" className="hover:text-indigo-600 transition">
              Features
            </a>
            <a
              href="#pro-features"
              className="hover:text-indigo-600 transition"
            >
              Pro Power
            </a>
            <a href="#pricing" className="hover:text-indigo-600 transition">
              Pricing
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
