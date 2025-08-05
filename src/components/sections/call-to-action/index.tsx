import { motion } from 'framer-motion'
'use client'

import { useState } from 'react'
import styles from './call-to-action.module.css'
import { ScheduleButton } from '../../ui/schedule-button/schedule-button'

interface CtaData {
  heading: string
  subheading: string
  buttonText: string
  placeholderText: string
}

export function CallToAction() {
  const [email, setEmail] = useState('')
  
  // Mock data
  const ctaData: CtaData = {
    heading: 'Comienza Tu Transformación Hoy',
    subheading: 'Suscríbete para recibir más información y una consulta gratuita',
    buttonText: 'Comenzar',
    placeholderText: 'Tu correo electrónico'
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
  <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
    <section className={`${styles.callToAction} font-montserrat`}>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className={styles.ctaContainer}>
          <h2 className={styles.heading}>{ctaData.heading}</h2>
          <p className={styles.subheading}>{ctaData.subheading}</p>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={ctaData.placeholderText}
                className={styles.input}
                required
              />
              <button type="submit" className={styles.button}>
                {ctaData.buttonText}
              </button>
            </div>
          </form>
          
          <p className={styles.disclaimer}>
            Al suscribirte, aceptas nuestra política de privacidad y términos de servicio.
          </p>
          
          <div className="mt-8 text-center">
            <p className="text-white text-sm mb-3">O si prefieres una atención personalizada:</p>
            <ScheduleButton size="lg" text="Agendar tu Diagnóstico Personalizado" />
          </div>
        </div>
      </div>
    </section>
</motion.div>
  )
}
  </motion.div>)
