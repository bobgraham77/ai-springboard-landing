"use client"

import React, { ErrorInfo } from 'react'

interface ErrorBoundaryProps {
  fallback?: React.ReactNode
  children: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

export class ChartErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Chart Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="
          w-full 
          h-[300px] 
          flex 
          items-center 
          justify-center 
          bg-red-50 
          text-red-600 
          font-medium
        ">
          Chart Failed to Load
        </div>
      )
    }

    return this.props.children
  }
}
