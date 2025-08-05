import { motion } from 'framer-motion'
'use client'

import { useEffect, useRef, useState } from 'react'
import './problem.module.css'
import './animations.css'

interface PainPoint {
  title: string
  text: string
}

export function Problem() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  
  const painPoints: PainPoint[] = [
    {
      title: 'Fronteras Regulatorias',
      text: 'Cada nuevo mercado es un laberinto. Operar sin proyectar a futuro o aplicando viejos paradigmas convierte un lanzamiento prometedor en un negocio inviable por costos fiscales inesperados.'
    },
    {
      title: 'Tu Ronda de Inversión en Juego',
      text: 'Un futuro Due Diligence te preocupa. Sabes que una estructura estandarizada no es un manual mágico, y te preguntas si tu IP, revenue recognition y precios de transferencia están realmente diseñados para atraer y cerrar tu próxima ronda.'
    },
    {
      title: 'El Costo Real de la Burocracia',
      text: 'El mayor desaprovechamiento de oportunidades es tu tiempo. Dedicas tu energía a navegar la complejidad, en lugar de enfocarte 100% en tu producto, tu equipo y tu visión.'
    }
  ]
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px 0px 0px'
      }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return (
  <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>) => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      id="problem" 
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-[#17293A] to-[#0d1a25] text-white py-16 md:py-24 font-montserrat elementor-section"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 elementor-container">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="relative inline-block hover:text-blue-400 transition-colors duration-300">
            Escalas a gran velocidad.<br /> ¿Sobre qué base?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-normal">
          Una base débil, improvisada y genérica crea una doble amenaza: la ineficiencia fiscal que consume tu runway, y los <strong>"cisnes negros"</strong> que pueden destruir tu visión a futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className={`elementor-column unidades ${!isVisible ? 'elementor-invisible' : 'animated animated-fast fadeInUp'} bg-gray-900 rounded-2xl p-6 md:p-8 flex flex-col h-full relative overflow-hidden group`}
              style={{ animationDelay: `${index * 300}ms` }}
              data-settings={`{"animation":"fadeInUp","animation_delay":${index * 300}}`}
            >
              {/* Top border highlight that spans full width */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              
              {/* Card content */}
              <div className="card-content h-full w-full flex flex-col">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-400">
                  {point.title}
                </h3>
                <p className="text-gray-300 flex-grow font-normal">
                  {point.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
  </motion.div>)
