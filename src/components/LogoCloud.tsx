"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'

// Define a type for logo configuration
export interface LogoConfig {
  src: string
  alt: string
  name?: string
  width?: number
  height?: number
  className?: string
}

// Default logos
const defaultLogos: LogoConfig[] = [
  { 
    src: "/logos/svg/OpenAI.svg",
    alt: "OpenAI Logo",
    name: "OpenAI",
    width: 120,
    height: 30,
    className: "scale-90" // Slightly smaller
  },
  { 
    src: "/logos/png/norrsken.png",
    alt: "Norrsken Logo",
    name: "Norrsken",
    width: 120,
    height: 30,
    className: "scale-110" // Slightly larger
  },
  {
    src: "/logos/svg/techcrunch.svg",
    alt: "TechCrunch Logo",
    name: "TechCrunch",
    width: 120,
    height: 30,
    className: "scale-110" // Slightly larger
  },
  {
    src: "/logos/svg/NVIDIA.svg",
    alt: "NVIDIA Logo",
    name: "NVIDIA",
    width: 120,
    height: 30
  }
]

interface LogoCloudProps {
  logos?: LogoConfig[]
  title?: string
}

const LogoCloud: React.FC<LogoCloudProps> = ({ 
  logos = defaultLogos, 
  title = "Trusted by Industry Leaders" 
}) => {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.645, 0.045, 0.355, 1.000]
              }}
              className="col-span-1 flex justify-center relative group"
            >
              <div className="relative w-[120px] h-[30px] flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className={`
                    dark:brightness-0 dark:invert 
                    transition-all duration-300 ease-in-out 
                    transform group-hover:scale-110 
                    object-contain
                    ${logo.className || ''}
                  `}
                  style={{
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </div>
              {logo.name && (
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {logo.name}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoCloud
