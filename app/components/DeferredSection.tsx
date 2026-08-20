'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'

interface DeferredSectionProps {
  children: ReactNode
  minHeight?: number
}

export default function DeferredSection({
  children,
  minHeight = 640
}: DeferredSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = containerRef.current
    if (!node || isVisible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '400px 0px'
      }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <div ref={containerRef}>
      {isVisible ? children : <div style={{ minHeight }} aria-hidden="true" />}
    </div>
  )
}
