'use client'

import Image from 'next/image'

interface NavigationProps {
  sections: Record<string, string>
}

export function Navigation({ sections }: NavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 w-full bg-dark/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.svg" alt="Logo" width={40} height={40} className="animate-pulse" />
          <span className="font-bold gradient-text">جاك</span>
        </div>
        <div className="flex items-center gap-6">
          {Object.entries(sections).map(([id, name]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="hover:text-primary transition-all hover:scale-110"
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
} 