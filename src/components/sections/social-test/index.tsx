'use client'

import { useState } from 'react'
import styles from './social-test.module.css'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

interface SocialTestData {
  heading: string
  subheading: string
  testimonials: Testimonial[]
}

export function SocialTest() {
  // Mock data
  const socialTestData: SocialTestData = {
    heading: 'Lo Que Dicen Nuestros Clientes',
    subheading: 'Testimonios de quienes ya han experimentado nuestras soluciones',
    testimonials: [
      {
        id: 1,
        name: 'María González',
        role: 'CEO',
        company: 'Innovatech',
        content: 'Implementar sus soluciones transformó completamente nuestra presencia digital. Los resultados superaron nuestras expectativas.',
        avatar: '👩‍💼'
      },
      {
        id: 2,
        name: 'Carlos Rodríguez',
        role: 'Director de Marketing',
        company: 'Global Solutions',
        content: 'El enfoque personalizado y la atención al detalle marcaron la diferencia. Definitivamente los recomendaría.',
        avatar: '👨‍💼'
      },
      {
        id: 3,
        name: 'Ana Martínez',
        role: 'Fundadora',
        company: 'CreativeLab',
        content: 'La automatización de procesos nos permitió ahorrar tiempo y recursos, pudiendo enfocarnos en lo que realmente importa.',
        avatar: '👩‍🔬'
      }
    ]
  }

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className={`${styles.socialTest} font-montserrat`}>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <h2 className={styles.heading}>{socialTestData.heading}</h2>
        <p className={styles.subheading}>{socialTestData.subheading}</p>
        
        <div className={styles.testimonialContainer}>
          {socialTestData.testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`${styles.testimonialCard} ${index === activeIndex ? styles.active : ''}`}
            >
              <div className={styles.avatar}>{testimonial.avatar}</div>
              <p className={styles.content}>"{testimonial.content}"</p>
              <div className={styles.author}>
                <p className={styles.name}>{testimonial.name}</p>
                <p className={styles.role}>{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.controls}>
          {socialTestData.testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
