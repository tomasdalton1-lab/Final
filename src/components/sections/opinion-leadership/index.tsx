'use client'

import { useState } from 'react'
import styles from './opinion-leadership.module.css'

interface Article {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  image: string
}

interface OpinionLeadershipData {
  heading: string
  subheading: string
  articles: Article[]
}

export function OpinionLeadership() {
  // Mock data
  const opinionData: OpinionLeadershipData = {
    heading: 'Liderazgo de Opinión',
    subheading: 'Nuestras ideas y perspectivas sobre la industria',
    articles: [
      {
        id: 1,
        title: 'El Futuro de la Transformación Digital',
        excerpt: 'Exploramos las tendencias emergentes que definirán el panorama digital en los próximos años.',
        author: 'Alejandro Méndez',
        date: '15 Jul 2023',
        readTime: '5 min',
        image: '📱'
      },
      {
        id: 2,
        title: 'Inteligencia Artificial en los Negocios',
        excerpt: 'Cómo la IA está revolucionando la forma en que las empresas toman decisiones estratégicas.',
        author: 'Laura Sánchez',
        date: '28 Jun 2023',
        readTime: '7 min',
        image: '🤖'
      },
      {
        id: 3,
        title: 'Estrategias de Crecimiento Sostenible',
        excerpt: 'Prácticas que permiten a las empresas crecer mientras mantienen un impacto positivo.',
        author: 'Roberto Gómez',
        date: '10 Jun 2023',
        readTime: '6 min',
        image: '🌱'
      }
    ]
  }

  return (
    <section id="opinion-leadership" className={`${styles.opinionLeadership} font-montserrat`}>
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <h2 className={styles.heading}>{opinionData.heading}</h2>
        <p className={styles.subheading}>{opinionData.subheading}</p>
        
        <div className={styles.articlesGrid}>
          {opinionData.articles.map(article => (
            <div key={article.id} className={styles.articleCard}>
              <div className={styles.articleImage}>{article.image}</div>
              <div className={styles.articleContent}>
                <h3 className={styles.articleTitle}>{article.title}</h3>
                <p className={styles.articleExcerpt}>{article.excerpt}</p>
                <div className={styles.articleMeta}>
                  <p className={styles.articleAuthor}>Por {article.author}</p>
                  <div className={styles.articleDetails}>
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime} lectura</span>
                  </div>
                </div>
                <button className={styles.readMoreButton}>Leer más</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
