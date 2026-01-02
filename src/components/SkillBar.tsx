'use client'

import { useEffect, useState } from 'react'

interface SkillBarProps {
  name: string
  percentage: number
  color?: string
}

export function SkillBar({ name, percentage, color = '#8B5CF6' }: SkillBarProps) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage)
    }, 100)
    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-lg font-bold">{name}</span>
        <span className="text-gray-400">{percentage}%</span>
      </div>
      <div className="h-3 bg-dark-card rounded-full overflow-hidden">
        <div 
          className="h-full transition-all duration-1000 ease-out rounded-full"
          style={{ 
            width: `${width}%`,
            backgroundColor: color
          }}
        />
      </div>
    </div>
  )
} 