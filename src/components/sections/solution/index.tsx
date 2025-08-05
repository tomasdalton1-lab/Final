import { motion } from 'framer-motion'
'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './solution.module.css'

interface SolutionPhase {
  id: number
  title: string
  description: string
  icon: string | React.ReactNode
  delay: number
}

export function Solution() {
  // Use refs instead of state for DOM elements
  const phaseRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [visiblePhases, setVisiblePhases] = useState<number[]>([]);
  const timelineContainerRef = useRef<HTMLDivElement | null>(null);
  const [hoverState, setHoverState] = useState<{[key: number]: boolean}>({});
  
  // Calculate segment positions
  const getSegmentPosition = (index: number) => {
    // Icon container size
    const iconSize = 6.5; // rem
    // Space between containers
    const spacing = 3; // rem
    // Extra height when hover (for descriptive text)
    const hoverExtraHeight = 5; // rem - increased to cover the complete descriptive text
    
    // Height adjustment based on hover state for the current segment
    const extraHeight = (hoverState[index] || hoverState[index + 1]) ? hoverExtraHeight : 0;
    
    // Extra height for the first segment when hover is on the first icon
    const firstSegmentExtraHeight = hoverState[0] ? hoverExtraHeight : 0;
    
    // Position of the first segment (connects the first and second icon)
    if (index === 0) {
      return {
        // Starts from the center of the first icon
        top: `${iconSize / 4}rem`,
        // Height = space between icons + complete icon size + extra for hover
        height: `${spacing + iconSize + extraHeight}rem`
      };
    }
    
    // Position of the second segment (connects the second and third icon)
    return {
      // Starts from the center of the second icon, adjusted if hover is on the first icon
      top: `${iconSize + spacing + (iconSize / 2) + firstSegmentExtraHeight}rem`,
      // Height = space between icons + complete icon size + extra for hover
      height: `${spacing + iconSize + extraHeight}rem`
    };
  };
  
  // Setup intersection observer
  useEffect(() => {
    // Initialize refs array if needed
    if (!phaseRefs.current) {
      phaseRefs.current = [];
    }
    
    const options = {
      root: null,
      rootMargin: '-15% 0px',
      threshold: 0.4
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Find the index of this phase
          const index = phaseRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1) {
            // Add this phase to visible phases
            setVisiblePhases(prev => {
              if (!prev.includes(index)) {
                return [...prev, index].sort((a, b) => a - b);
              }
              return prev;
            });
          }
          // Once the animation is triggered, we don't need to observe this element anymore
          observer.unobserve(entry.target);
        }
      })
    }, options)

    // Observe all phase elements that exist
    phaseRefs.current.forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return (
  <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>) => {
      if (phaseRefs.current) {
        phaseRefs.current.forEach(ref => {
          if (ref) observer.unobserve(ref)
        })
      }
    }
  }, []) // Empty dependency array - only run once on mount

  // Solution data
  const solutionData = {
    heading: 'Escala Rápido. Construye Sólido.',
    subheading: 'Tu Hoja de Ruta de Crecimiento Estratégico. Un plan transparente y probado para darte una base sólida y la tranquilidad de saber que estás preparado para el futuro.',
    phases: [
      {
        id: 1,
        title: 'Diagnóstico Estratégico Profundo',
        description: 'Analizamos tu ADN de negocio (modelo, tech stack, contratos) desde una óptica unificada para revelar riesgos, ineficiencias y oportunidades de crecimiento.',
        icon: <Image src="/images/timer.gif" alt="Diagnóstico Estratégico Profundo" width={100} height={100} className={`${styles.gifIcon} ${styles.firstIcon}`} />,
        delay: 200
      },
      {
        id: 2,
        title: 'Diseño de la Estructura a Medida',
        description: 'Diseñamos tu estructura corporativa y fiscal como un solo sistema, optimizado para la escala global y los objetivos de fondeo o venta.',
        icon: <Image src="/images/fingerprint.gif" alt="Diseño de la Estructura a Medida" width={100} height={100} className={`${styles.gifIcon} ${styles.secondIcon}`} />,
        delay: 300
      },
      {
        id: 3,
        title: 'Acompañamiento como Socio',
        description: 'Implementamos el plan y lo optimizamos de forma continua, actuando como tu equipo de liderazgo legal y fiscal a medida que tu negocio evoluciona.',
        icon: <Image src="/images/partner.gif" alt="Acompañamiento como Socio" width={100} height={100} className={styles.gifIcon} />,
        delay: 400
      }
    ]
  }

  return (
    <section id="solution" className={styles.solution}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className={`${styles.heading} section-fade-in`}>{solutionData.heading}</h2>
          <p className={`${styles.subheading} section-fade-in`} style={{ transitionDelay: '100ms' }}>
            {solutionData.subheading}
          </p>
        </div>
        
        <div className="mt-16 max-w-5xl mx-auto relative">
          <div className={styles.timelineContainer} ref={timelineContainerRef}>
            {/* Dynamic timeline */}
            <div className={styles.timelineWrapper}>
              {/* First segment - between icon 1 and 2 */}
              <div 
                className={styles.timelineSegment}
                style={{ 
                  opacity: visiblePhases.includes(0) && visiblePhases.includes(1) ? 1 : 0,
                  ...getSegmentPosition(0)
                }}
                key={`segment-0-${hoverState[0] || hoverState[1] ? 'hover' : 'normal'}`}
              ></div>
              
              {/* Second segment - between icon 2 and 3 */}
              <div 
                className={styles.timelineSegment}
                style={{ 
                  opacity: visiblePhases.includes(1) && visiblePhases.includes(2) ? 1 : 0,
                  ...getSegmentPosition(1)
                }}
                key={`segment-1-${hoverState[1] || hoverState[2] ? 'hover' : 'normal'}`}
              ></div>
            </div>
            
            {/* Phases with timeline */}
            {solutionData.phases.map((phase, index) => (
              <div 
                key={phase.id} 
                ref={el => {
                  // Store ref in the refs array
                  if (!phaseRefs.current) phaseRefs.current = [];
                  phaseRefs.current[index] = el;
                }}
                className={`
                  ${styles.phaseContainer} 
                  ${index % 2 === 0 ? styles.phaseRight : styles.phaseLeft} 
                  ${visiblePhases.includes(index) ? styles.visible : styles.hidden}
                `}
                onMouseEnter={() => setHoverState(prev => ({ ...prev, [index]: true }))}
                onMouseLeave={() => setHoverState(prev => ({ ...prev, [index]: false }))}
              >
                {index % 2 === 0 ? (
                  <>
                    <div className={styles.phaseContentLeft}>
                      {/* Empty left side */}
                    </div>
                    <div className={styles.iconContainer}>
                      <span className={styles.icon}>
                        {typeof phase.icon === 'string' ? phase.icon : phase.icon}
                      </span>
                    </div>
                    <div className={styles.phaseContentRight}>
                      <div className={styles.phaseContent}>
                        <h4 className={styles.phaseTitle}>{phase.title}</h4>
                        <p className={styles.phaseDescription}>{phase.description}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.phaseContentLeft}>
                      <div className={styles.phaseContent}>
                        <h4 className={styles.phaseTitle}>{phase.title}</h4>
                        <p className={styles.phaseDescription}>{phase.description}</p>
                      </div>
                    </div>
                    <div className={styles.iconContainer}>
                      <span className={styles.icon}>
                        {typeof phase.icon === 'string' ? phase.icon : phase.icon}
                      </span>
                    </div>
                    <div className={styles.phaseContentRight}>
                      {/* Empty right side */}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
  </motion.div>)
