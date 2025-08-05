'use client'

import Link from 'next/link'

interface ScheduleButtonProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  text?: string
  href?: string
}

export function ScheduleButton({ 
  className = '', 
  size = 'md',
  text = 'Agendar tu Diagnóstico Estratégico',
  href = '/contacto'
}: ScheduleButtonProps) {
  
  // Slightly rounded borders like in the image
  const baseStyles = 'inline-flex items-center justify-center rounded-[12px] font-semibold font-montserrat focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 shadow-sm'
  
  // Consistent style: white text with black letters and slightly rounded borders
  const buttonStyle = 'bg-white text-black border border-gray-200'
  
  const sizeStyles = {
    sm: 'h-9 px-5 text-sm',
    md: 'h-10 px-6 py-2',
    lg: 'h-11 px-10 py-3'
  }
  
  // Slightly rounded borders like in the image 
  const hoverStyle = 'hover:bg-gray-50 hover:shadow transition-all duration-200'
  
  const buttonStyles = `${baseStyles} ${buttonStyle} ${sizeStyles[size]} ${hoverStyle} ${className} relative`
  
  return (
    <Link 
      href={href}
      className={buttonStyles}
    >
      {text}
    </Link>
  )
}
