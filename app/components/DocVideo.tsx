"use client";

import { useState, useEffect, useRef } from "react";
import { Maximize2 } from "lucide-react";

interface DocVideoProps {
  src: string;
  alt?: string;
  poster?: string;
}

export default function DocVideo({ src, alt, poster }: DocVideoProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!window.IntersectionObserver) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        className="group relative w-full mt-6 mb-10 cursor-pointer overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
        onClick={() => setIsZoomed(true)}
      >
        <video
          ref={videoRef}
          autoPlay={isIntersecting}
          loop
          muted
          playsInline
          preload={isIntersecting ? "auto" : "none"}
          poster={poster}
          className="h-auto w-full max-w-full object-cover transition-opacity duration-300 group-hover:opacity-60"
          aria-label={alt}
        >
          {isIntersecting && <source src={src} type="video/mp4" />}
          Your browser does not support the video tag.
        </video>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex items-center gap-2 rounded-full bg-black/70 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
            <Maximize2 size={16} />
            <span>Click to enlarge</span>
          </div>
        </div>
      </div>

      {isZoomed && (
        <div
          className="fixed inset-0 z-99999 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-10"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative flex h-full w-full max-w-7xl items-center justify-center">
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              controls
              className="max-h-full max-w-full rounded-xl shadow-2xl ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
