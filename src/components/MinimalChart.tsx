"use client"

import React from 'react'
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts'
import { motion } from 'framer-motion'
import { ChartErrorBoundary } from './ChartErrorBoundary'

// Fonction de formatage des nombres pour les grandes valeurs
const formatNumber = (value: number) => {
  if (value >= 1_000_000_000) {
    return `$1B`
  } else if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(1)}M`
  } else if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(1)}K`
  }
  return `$${value}`
}

// Fonction pour générer une croissance organique et continue
const generateOrganicGrowthData = () => {
  const startValue = 10_000;
  const maxValue = 1_000_000_000;
  const months = 10;

  // Fonction de génération de données avec croissance organique
  const generateData = () => {
    const data: { month: string, revenue: number }[] = [];
    
    // Calcul de la progression pour atteindre 1 milliard
    const calculateValue = (monthIndex: number) => {
      // Utilisation d'une fonction de progression sigmoïde
      const progress = monthIndex / (months - 1);
      
      // Courbe sigmoïde modifiée pour une croissance plus naturelle
      const sigmoidCurve = Math.pow(progress, 1.5);
      
      // Interpolation entre la valeur de départ et la valeur maximale
      const value = startValue + (maxValue - startValue) * sigmoidCurve;
      
      // Ajouter une légère variation naturelle
      const naturalVariation = 1 + (Math.sin(monthIndex * Math.PI / 4) * 0.05);
      
      return value * naturalVariation;
    }

    for (let i = 0; i < months; i++) {
      // Dernier mois : valeur exacte
      const revenue = i === months - 1 
        ? maxValue 
        : calculateValue(i);

      data.push({
        month: `Month ${i + 1}`,
        revenue: revenue
      });
    }

    return data;
  }

  const data = generateData();

  // Vérification des valeurs
  console.log('Chart Data:', data.map(d => ({
    month: d.month,
    revenue: formatNumber(d.revenue)
  })));

  return data;
}

export const MinimalChart: React.FC = () => {
  const data = generateOrganicGrowthData()

  return (
    <ChartErrorBoundary>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          type: "spring", 
          stiffness: 50 
        }}
        className="w-full"
      >
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart 
            data={data}
            margin={{ 
              top: 10, 
              right: 10, 
              left: 10, 
              bottom: 10 
            }}
          >
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop 
                  offset="5%" 
                  stopColor="rgba(35, 166, 213, 0.3)" 
                  stopOpacity={0.8}
                />
                <stop 
                  offset="95%" 
                  stopColor="rgba(35, 166, 213, 0.05)" 
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            
            <XAxis 
              dataKey="month" 
              hide={true}
            />
            
            <YAxis 
              hide={true}
              domain={[0, 1_000_000_000]}
              tickFormatter={formatNumber}
            />
            
            <Tooltip 
              formatter={(value) => [formatNumber(value as number), 'Revenue']}
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                border: 'none', 
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
              }}
              labelStyle={{ 
                color: 'rgba(94, 102, 115, 0.9)', 
                fontWeight: 'bold' 
              }}
            />
            
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#23a6d5" 
              strokeWidth={3}
              fillOpacity={0.7}
              fill="url(#chartGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>
    </ChartErrorBoundary>
  )
}
