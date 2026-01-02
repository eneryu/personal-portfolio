"use client";

import Image from "next/image";

interface NavigationProps {
  sections: Record<string, string>;
}

export function Navigation({ sections }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-dark/95 via-dark/80 to-transparent backdrop-blur-xl border-b border-white/10"></div>
      <div className="relative container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition-all duration-300"></div>
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="relative animate-pulse group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="font-bold text-2xl gradient-text group-hover:scale-105 transition-transform duration-300">
              جاك
            </span>
          </div>

          <div className="flex items-center gap-8">
            {Object.entries(sections).map(([id, name]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="relative group px-4 py-2 text-gray-300 hover:text-white transition-all duration-300"
              >
                <span className="relative z-10 font-medium">{name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
