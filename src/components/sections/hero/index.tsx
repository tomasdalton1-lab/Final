'use client'

import { ScheduleButton } from '@/components/ui/schedule-button/schedule-button'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const animateText = (text: string) => {
    return text.split(' ').map((word: string, index: number) => (
      <span
        key={index}
        className="inline-block mr-[0.25em]"
        style={{
          opacity: isLoaded ? 1 : 0,
          filter: isLoaded ? 'blur(0px)' : 'blur(4px)',
          transform: isLoaded ? 'translateY(0%)' : 'translateY(10%)',
          transition: `opacity 0.8s ease ${index * 0.08}s, filter 0.8s ease ${index * 0.08}s, transform 0.8s ease ${index * 0.08}s`
        }}
      >
        {word}
      </span>
    ))
  }

  return (
    <section id="top" className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video
        src="/videos/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      />

      {/* Optional overlay for readability */}
      <div className="absolute z-10 inset-0 bg-black/50"></div>

      {/* Text and CTA overlay */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {animateText(t('heroTitle'))}
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          {t('heroSubtitle')}
        </p>
        <ScheduleButton />
      </div>
    </section>
  )
}
