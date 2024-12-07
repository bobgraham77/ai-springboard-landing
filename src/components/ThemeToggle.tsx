"use client"

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDarkMode(false)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      className="
        p-2 
        rounded-full 
        bg-tech-neutral-100 
        dark:bg-dark-tech-neutral-200 
        text-tech-neutral-700 
        dark:text-dark-tech-neutral-700
        hover:bg-tech-neutral-200 
        dark:hover:bg-dark-tech-neutral-100
        transition-colors 
        duration-300 
        focus:outline-none 
        focus:ring-2 
        focus:ring-tech-primary-200
        dark:focus:ring-dark-tech-primary-200
      "
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDarkMode ? (
        <Sun 
          className="h-5 w-5 text-tech-primary-500 dark:text-dark-tech-primary-200" 
        />
      ) : (
        <Moon 
          className="h-5 w-5 text-tech-neutral-500 dark:text-dark-tech-neutral-500" 
        />
      )}
    </motion.button>
  )
}
