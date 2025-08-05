'use client'

import { motion } from 'framer-motion'

export function Problem() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">El problema</h2>
          <p className="text-gray-600">
            Muchos estudios jurídicos no logran conectar emocionalmente con sus clientes desde el primer momento.
            Necesitamos mostrar confianza, profesionalismo y claridad desde el primer scroll.
          </p>
        </div>
      </section>
    </motion.div>
  )
}
