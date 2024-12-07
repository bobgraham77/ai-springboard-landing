"use client"

import { useState, useEffect } from 'react'

export function AccessibleFocus() {
  const [isUsingKeyboard, setIsUsingKeyboard] = useState(false)

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Tab') {
        setIsUsingKeyboard(true)
      }
    }

    function handleMouseDown() {
      setIsUsingKeyboard(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('mousedown', handleMouseDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  useEffect(() => {
    if (isUsingKeyboard) {
      document.body.classList.add('keyboard-navigation')
    } else {
      document.body.classList.remove('keyboard-navigation')
    }
  }, [isUsingKeyboard])

  return null
}
