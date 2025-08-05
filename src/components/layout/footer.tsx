import Link from 'next/link'
import Image from 'next/image'
import { ScheduleButton } from '../ui/schedule-button/schedule-button'

export function Footer() {
  return (
    <footer className="w-full py-16 bg-[#17293A] border-t border-white font-montserrat">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo, Brand Statement, Copyright */}
          <div className="flex flex-col">
            <div className="flex items-center">
              {/* Logo with stylized text */}
              <div className="text-white text-2xl font-bold tracking-tight font-montserrat">
                <span className="border-b-2 border-white pb-1">GEREMIA</span>
                <span className="text-gray-400">&CO</span>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm font-light leading-relaxed max-w-xs mt-6 font-montserrat">
              La arquitectura legal y fiscal para tu crecimiento global.
            </p>
            
            {/* This div will push the copyright text to the bottom */}
            <div className="flex-grow"></div>
          </div>
          
          {/* Column 2: CTA and Contact Email */}
          <div className="flex flex-col">
            <h3 className="text-white text-lg font-medium border-b border-white pb-2 font-montserrat">
              Iniciemos la Conversación
            </h3>
            
            <div className="mt-6">
              {/* For screens above 1047px */}
              <div className="hidden lg:block footer-tablet:hidden">
                <ScheduleButton 
                  text="Agenda tu Diagnóstico Estratégico" 
                  size="md" 
                />
              </div>
              
              {/* For medium screens (768px-1047px) using custom breakpoint */}
              <div className="hidden footer-tablet:block">
                <ScheduleButton 
                  text="Agenda Diagnóstico" 
                  size="sm" 
                />
              </div>
              
              {/* For small screens (below 768px) */}
              <div className="block md:hidden">
                <ScheduleButton 
                  text="Agenda tu Diagnóstico Estratégico" 
                  size="sm" 
                />
              </div>
            </div>
            
            <div className="mt-4">
              <Link 
                href="mailto:contacto@geremiaco.com" 
                className="text-gray-300 text-sm"
              >
                contacto@geremiaco.com
              </Link>
            </div>
            
            {/* This div will push content to the bottom */}
            <div className="flex-grow"></div>
          </div>
          
          {/* Column 3: LinkedIn Link */}
          <div className="flex flex-col">
            <div className="flex justify-end">
              <Link 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors flex items-center space-x-3 group p-3 rounded-lg focus:outline-none"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  className="w-6 h-6 transition-colors duration-300 group-hover:text-[#0A66C2] text-gray-300"
                >
                  <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="font-medium">LinkedIn</span>
              </Link>
            </div>
            
            {/* This div will push the content to the bottom */}
            <div className="flex-grow"></div>
          </div>
        </div>
        
        {/* Bottom row for copyright */}
        <div className="mt-12 pt-6 border-t border-white">
          <div className="text-gray-500 text-xs font-montserrat">
            © {new Date().getFullYear()} Geremia&Co. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  )
}
