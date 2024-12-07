'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Space_Grotesk } from "next/font/google"
import { MinimalChart } from "@/components/MinimalChart"
import { Bot, Lightbulb, Rocket, Brain, Zap } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'
import LogoCloud from '@/components/LogoCloud'
import { AccessibleFocus } from '@/components/AccessibleFocus'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700']
})

const features = [
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    description: "Cutting-edge AI technology tailored for your success."
  },
  {
    icon: Brain,
    title: "Smart Automation",
    description: "Streamline your workflow with intelligent automation."
  },
  {
    icon: Rocket,
    title: "Scalable Growth",
    description: "Built to grow with your business needs."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Unprecedented speed and performance at your fingertips."
  }
]

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="flex flex-col min-h-screen bg-white dark:bg-dark-bg-primary text-tech-neutral-700 dark:text-dark-text-primary relative">
        <div className="flex items-center justify-between p-4 md:p-6 container mx-auto">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="AI Springboard Logo"
              width={40}
              height={40}
            />
            <span className={`${spaceGrotesk.className} font-bold text-tech-neutral-700 dark:text-dark-text-primary text-tech-lg tracking-tech-wide`}>
              AI Springboard
            </span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <AccessibleFocus />
      <div className="flex flex-col min-h-screen bg-white dark:bg-dark-bg-primary text-tech-neutral-700 dark:text-dark-text-primary relative">
        <nav className="flex items-center justify-between p-4 md:p-6 container mx-auto border-b border-tech-neutral-100 dark:border-dark-border">
          <Link 
            href="/" 
            className="flex items-center space-x-2 sm:space-x-4 group"
            aria-label="AI Springboard Home"
          >
            <Image
              src="/logo.png"
              alt="AI Springboard Logo"
              width={40}
              height={40}
              className="h-8 w-8 sm:h-10 sm:w-10 transition-transform group-hover:scale-110"
            />
            <span className={`${spaceGrotesk.className} font-bold text-tech-neutral-700 dark:text-dark-text-primary text-tech-lg tracking-tech-wide group-hover:text-tech-primary-500 dark:group-hover:text-dark-tech-primary-200 transition-colors`}>
              AI Springboard
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link 
              href="#features" 
              className="text-tech-neutral-500 dark:text-dark-text-secondary hover:text-tech-primary-500 dark:hover:text-dark-tech-primary-200 transition-colors duration-300 text-tech-base tracking-tech-wide focus:outline-2 focus:outline-tech-primary-500 dark:focus:outline-dark-tech-primary-200"
            >
              Features
            </Link>
            <Link 
              href="#pricing" 
              className="text-tech-neutral-500 dark:text-dark-text-secondary hover:text-tech-primary-500 dark:hover:text-dark-tech-primary-200 transition-colors duration-300 text-tech-base tracking-tech-wide focus:outline-2 focus:outline-tech-primary-500 dark:focus:outline-dark-tech-primary-200"
            >
              Pricing
            </Link>
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex-grow container mx-auto px-4 md:px-6 text-center">
          <div className="pt-16 sm:pt-24 max-w-4xl mx-auto">
            <h1 className={`${spaceGrotesk.className} text-tech-3xl font-bold text-tech-neutral-700 dark:text-dark-text-primary mb-6 tracking-tech-wide leading-relaxed`}>
             The X factor of<br />
              —successful Startups
            </h1>
            
            <div className="text-tech-base text-tech-neutral-500 dark:text-dark-text-secondary max-w-3xl mx-auto mb-10">
              <div className="space-y-4">
                <p className="font-semibold">
                  History proves that startups aren&apos;t built on the best products.
                </p>
                <p>
                  Most entrepreneurs think success lies in having the best product, but Apple and all the big names proved otherwise (Do some people really think the iPhone has the best camera in the world?). 
                  The real question is, how can you transform your concept into a must-have for your customers?
                </p>
                <p>This is the precise challenge AI Springboard has been designed to tackle.</p>
              </div>
              <div className="mt-6 space-y-4">
                <p>
                  But here&apos;s the kicker —every minute you waste trying to figure this thing out, competitors are locking in customers and building momentum, their growth become exponential...
                </p>
                <p>
                  —and by the time you&apos;re ready, the game is over.
                </p>
              </div>
            </div>

            <div className="mt-16 sm:mt-20 mb-16" id="growth-potential">
              <h2 className="text-tech-2xl font-semibold text-tech-neutral-700 dark:text-dark-text-primary mb-6 tracking-tech-wide">
                Competitors Growth Potential
              </h2>
              <div className="relative w-full h-[300px] mt-8">
                <MinimalChart />
              </div>

              <div className="mt-12 space-y-4 text-tech-base text-tech-neutral-500 dark:text-dark-text-secondary max-w-3xl mx-auto">
                <p className="font-medium">
                  Luckily time is still on your side (but not for long)
                </p>

                <p>
                  Grab our Playbook and understand how to make sure the market not only notices you, but can&apos;t ignore you.
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Button 
                aria-label="Get Started with AI Springboard"
                style={{
                  background: 'linear-gradient(90deg, #e73c7e, #23a6d5, #0077be)',
                  backgroundSize: '200% 100%',
                  animation: 'gradientFlow 5s ease infinite'
                }}
                className="relative overflow-hidden group px-8 py-4 text-lg font-bold rounded-full transition-all duration-500 ease-in-out transform hover:scale-[1.02] scale-100 hover:transition-transform hover:duration-700 hover:ease-out text-white focus:outline-none focus:ring-4 focus:ring-tech-accent-300"
              >
                <span className="relative z-10">
                  Download Playbook
                </span>
                <span 
                  className="absolute inset-0 bg-gradient-to-r from-tech-accent-200 via-tech-primary-200 to-tech-primary-500 opacity-0 group-hover:opacity-50 transition-opacity duration-500 animate-gradient-x"
                ></span>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto mt-12" id="features">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-tech-neutral-50 dark:bg-dark-tech-neutral-100 p-6 rounded-xl shadow-tech-sm dark:shadow-tech-sm transition-all duration-300 group"
                >
                  <feature.icon 
                    className="mx-auto mb-4 text-tech-primary-500 dark:text-dark-tech-primary-200 h-12 w-12 group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-tech-xl font-semibold text-tech-neutral-700 dark:text-dark-text-primary mb-3 tracking-tech-wide group-hover:text-tech-primary-500 dark:group-hover:text-dark-tech-primary-200 transition-colors text-center">
                    {feature.title}
                  </h3>
                  <p className="text-tech-base text-tech-neutral-500 dark:text-dark-text-secondary text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <LogoCloud />

            <footer className="bg-tech-neutral-50 dark:bg-dark-tech-neutral-100 py-8 mt-16 border-t border-tech-neutral-100 dark:border-dark-border">
              <div className="container mx-auto text-center">
                <p className="text-tech-sm text-tech-neutral-500 dark:text-dark-text-secondary tracking-tech-wide">
                  2024 AI Springboard. All rights reserved.
                </p>
              </div>
            </footer>

            <div className="fixed bottom-6 right-6 z-50 group">
              <div className="relative flex items-center">
                <div className="absolute right-full mr-3 bg-tech-neutral-50 dark:bg-dark-tech-neutral-200 shadow-tech-sm dark:shadow-tech-sm rounded-lg px-4 py-2 text-tech-sm text-tech-neutral-700 dark:text-dark-text-primary transition-all duration-300 ease-in-out whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-x-0 translate-x-4">
                  Need help? Chat with AI
                </div>
                <button
                  className="bg-tech-primary-500 hover:bg-tech-primary-600 dark:bg-dark-tech-primary-500 dark:hover:bg-dark-tech-primary-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-12 focus:outline-none focus:ring-2 focus:ring-tech-primary-300 dark:focus:ring-dark-tech-primary-300"
                  aria-label="Open Chat"
                >
                  <Bot className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
