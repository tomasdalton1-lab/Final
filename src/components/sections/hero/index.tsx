'use client'

import { ScheduleButton } from '@/components/ui/schedule-button/schedule-button'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Función para dividir el texto en palabras y aplicar animación a cada una
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
    <section id="top" className="relative w-full min-h-screen bg-[#17293A] text-white flex items-center py-16 overflow-hidden font-montserrat">
      
      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        <div className="flex flex-col items-start text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {animateText('Transformamos la Complejidad en tu Ventaja Competitiva.')}
          </h1>
          
          <div 
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl"
            style={{
              opacity: isLoaded ? 1 : 0,
              filter: isLoaded ? 'blur(0px)' : 'blur(4px)',
              transform: isLoaded ? 'translateY(0%)' : 'translateY(10%)',
              transition: 'opacity 0.8s ease 0.6s, filter 0.8s ease 0.6s, transform 0.8s ease 0.6s'
            }}
          >
            Somos el socio estratégico que diseña tu arquitectura legal y fiscal unificada para escalar globalmente con seguridad y superar cualquier Due Diligence con total confianza
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Para pantallas grandes (lg y superiores) */}
            <div 
              className="hidden lg:block footer-tablet:hidden"
              style={{
                opacity: isLoaded ? 1 : 0,
                filter: isLoaded ? 'blur(0px)' : 'blur(4px)',
                transform: isLoaded ? 'translateY(0%)' : 'translateY(10%)',
                transition: 'opacity 0.8s ease 0.9s, filter 0.8s ease 0.9s, transform 0.8s ease 0.9s'
              }}
            >
              <ScheduleButton 
                text="Agenda tu Diagnóstico Estratégico" 
                size="lg" 
              />
            </div>
            
            {/* Para pantallas medianas (md-lg usando el breakpoint personalizado) */}
            <div 
              className="hidden footer-tablet:block md:block lg:hidden"
              style={{
                opacity: isLoaded ? 1 : 0,
                filter: isLoaded ? 'blur(0px)' : 'blur(4px)',
                transform: isLoaded ? 'translateY(0%)' : 'translateY(10%)',
                transition: 'opacity 0.8s ease 0.9s, filter 0.8s ease 0.9s, transform 0.8s ease 0.9s'
              }}
            >
              <ScheduleButton 
                text="Agenda Diagnóstico" 
                size="md" 
              />
            </div>
            
            {/* Para pantallas pequeñas (sm y menores) */}
            <div 
              className="block md:hidden"
              style={{
                opacity: isLoaded ? 1 : 0,
                filter: isLoaded ? 'blur(0px)' : 'blur(4px)',
                transform: isLoaded ? 'translateY(0%)' : 'translateY(10%)',
                transition: 'opacity 0.8s ease 0.9s, filter 0.8s ease 0.9s, transform 0.8s ease 0.9s'
              }}
            >
              <ScheduleButton 
                text="Agenda Diagnóstico" 
                size="sm" 
              />
            </div>
            
            {/* Botón secundario con lógica responsive similar */}
            {/* Para pantallas grandes */}
            <div 
              className="hidden lg:block footer-tablet:hidden"
              style={{
                opacity: isLoaded ? 1 : 0,
                filter: isLoaded ? 'blur(0px)' : 'blur(4px)',
                transform: isLoaded ? 'translateY(0%)' : 'translateY(10%)',
                transition: 'opacity 0.8s ease 1.1s, filter 0.8s ease 1.1s, transform 0.8s ease 1.1s'
              }}
            >
              <Link 
                href="#section-5"
                className="inline-flex items-center justify-center rounded-[12px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 shadow-sm h-11 px-10 py-3 border border-gray-700 text-white hover:bg-gray-900 transition-all duration-200 group"
              >
                <span>Leer nuestro último Análisis</span>
                <svg className="ml-2 transition-transform group-hover:translate-x-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 3.5L11 8L6.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            
            {/* Para pantallas medianas */}
            <div 
              className="hidden footer-tablet:block md:block lg:hidden"
              style={{
                opacity: isLoaded ? 1 : 0,
                filter: isLoaded ? 'blur(0px)' : 'blur(4px)',
                transform: isLoaded ? 'translateY(0%)' : 'translateY(10%)',
                transition: 'opacity 0.8s ease 1.1s, filter 0.8s ease 1.1s, transform 0.8s ease 1.1s'
              }}
            >
              <Link 
                href="#section-5"
                className="inline-flex items-center justify-center rounded-[12px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 shadow-sm h-10 px-6 py-2 border border-gray-700 text-white hover:bg-gray-900 transition-all duration-200 group"
              >
                <span>Leer Análisis</span>
                <svg className="ml-2 transition-transform group-hover:translate-x-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 3.5L11 8L6.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            
            {/* Para pantallas pequeñas */}
            <div 
              className="block md:hidden"
              style={{
                opacity: isLoaded ? 1 : 0,
                filter: isLoaded ? 'blur(0px)' : 'blur(4px)',
                transform: isLoaded ? 'translateY(0%)' : 'translateY(10%)',
                transition: 'opacity 0.8s ease 1.1s, filter 0.8s ease 1.1s, transform 0.8s ease 1.1s'
              }}
            >
              <Link 
                href="#section-5"
                className="inline-flex items-center justify-center rounded-[12px] font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 shadow-sm h-9 px-5 text-sm border border-gray-700 text-white hover:bg-gray-900 transition-all duration-200 group"
              >
                <span>Leer</span>
                <svg className="ml-2 transition-transform group-hover:translate-x-0.5" width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 3.5L11 8L6.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
