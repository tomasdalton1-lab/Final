'use client'

import { useState } from 'react'
import styles from './diference.module.css'

interface DiferencePoint {
  id: number
  title: string
  description: string
}

interface DiferenceData {
  heading: string
  subheading: string
  points: DiferencePoint[]
}

export function Diference() {
  // Mock data
  const diferenceData: DiferenceData = {
    heading: 'Lo Que Nos Diferencia',
    subheading: 'Características que nos hacen únicos en el mercado',
    points: [
      {
        id: 1,
        title: 'Enfoque Personalizado',
        description: 'Cada solución se adapta específicamente a las necesidades de tu negocio'
      },
      {
        id: 2,
        title: 'Tecnología de Vanguardia',
        description: 'Utilizamos las herramientas más avanzadas para garantizar resultados óptimos'
      },
      {
        id: 3,
        title: 'Equipo Experto',
        description: 'Nuestros profesionales tienen años de experiencia en la industria'
      },
      {
        id: 4,
        title: 'Soporte Continuo',
        description: 'Te acompañamos en cada paso del proceso, incluso después de la implementación'
      }
    ]
  }

  return (
    <section id="diference" className={`${styles.diference} font-montserrat`}>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <h2 className={styles.heading}>{diferenceData.heading}</h2>
        <p className={styles.subheading}>{diferenceData.subheading}</p>
        
        <div className={styles.pointsGrid}>
          {diferenceData.points.map(point => (
            <div key={point.id} className={styles.pointCard}>
              <div className={styles.pointNumber}>{point.id}</div>
              <h3 className={styles.pointTitle}>{point.title}</h3>
              <p className={styles.pointDescription}>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
