'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ScheduleButton } from '../ui/schedule-button/schedule-button'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll function
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    setMobileMenuOpen(false) // Close mobile menu if open

    // Get the target element
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Get header height to offset scroll position
      const headerHeight = document.querySelector('header')?.offsetHeight || 0

      // Calculate the target scroll position with offset for the header
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight

      // Smooth scroll to the target position
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })

      // Update URL without page reload
      window.history.pushState(null, '', `#${targetId}`)
    }
  }

  // Prevent body scroll when mobile menu is open and handle escape key
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'

      // Add escape key handler
      const handleEscKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false)
        }
      }
      
      document.addEventListener('keydown', handleEscKey)
      return () => {
        document.body.style.overflow = ''
        document.removeEventListener('keydown', handleEscKey)
      }
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navLinks = [
    { name: 'El Desafío', href: '#problem' },
    { name: 'La Hoja de Ruta', href: '#solution' },
    { name: 'Por Qué Nosotros', href: '#diference' },
    { name: 'Análisis', href: '#opinion-leadership' }
  ]

  return (
    <>
      {/* Main header */}
      <header className={`w-full py-2 sm:py-3 bg-[#17293A] fixed top-0 left-0 right-0 z-[100] border-b border-gray-800 transition-all duration-200 font-montserrat ${scrolled ? 'shadow-md' : ''}`}>
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 flex justify-between items-center">
          {/* Logo (Left) */}
          <a 
            href="#top" 
            className="text-white flex items-center cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
              window.history.pushState(null, '', '#top')
            }}
          >
            <span className="text-base sm:text-lg font-bold font-montserrat">Geremia&Co</span>
          </a>

          {/* Navigation Links (Center) - Hidden on mobile and small tablets */}
          <nav className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-normal cursor-pointer font-montserrat"
                onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button (Right) - Different sizes based on screen width */}
          <div className="hidden lg:block">
            <ScheduleButton size="sm" text="Agendar Diagnóstico" />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            
            {/* Hamburger menu button with animation */}
            <button 
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none focus:ring-0 focus:border-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-0 p-1 z-[110] relative"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <div className="w-5 h-5 relative">
                {/* Animated X (close) icon */}
                <svg 
                  className={`w-5 h-5 absolute inset-0 transition-opacity duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                    className={`transform transition-transform duration-300 ${mobileMenuOpen ? 'scale-100 rotate-0' : 'scale-0 rotate-90'}`}
                  />
                </svg>
                
                {/* Animated hamburger icon */}
                <svg 
                  className={`w-5 h-5 absolute inset-0 transition-opacity duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                    className={`transform transition-transform duration-300 ${mobileMenuOpen ? 'scale-0 -rotate-90' : 'scale-100 rotate-0'}`}
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu dropdown - Fixed position, full screen */}
      <div 
        className={`lg:hidden fixed inset-0 top-[53px] bg-[#17293A] z-[90] transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
        style={{ height: 'calc(100vh - 53px)' }}
      >
        <div className="flex flex-col justify-between h-full">
          {/* Navigation links - Top section */}
          <div className="container mx-auto px-3 sm:px-4 py-10">
            <nav className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-lg font-normal flex items-center font-montserrat"
                  onClick={(e) => handleSmoothScroll(e, link.href.substring(1))}
                >
                  <span className="border-b border-transparent hover:border-white pb-1">{link.name}</span>
                </a>
              ))}
            </nav>
          </div>
          
          {/* CTA Button - Bottom section */}
          <div className="container mx-auto px-3 sm:px-4 py-8 border-t border-gray-800 mt-auto">
            <Link 
              href="/contact" 
              className="bg-white text-black px-4 py-3 rounded text-sm font-medium hover:bg-gray-100 transition-colors duration-200 inline-block text-center w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agendar tu Diagnóstico Estratégico
            </Link>
          </div>
        </div>
      </div>
      
      {/* Spacer to prevent content from being hidden under fixed header */}
      <div className="h-[53px] sm:h-[57px] md:h-[60px]"></div>
    </>  
  )
}
