import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date))
}

export function formatNumber(num: number) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export function generateStarRating(rating: number) {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  
  for (let i = 0; i < fullStars; i++) {
    stars.push('★')
  }
  
  if (hasHalfStar) {
    stars.push('☆')
  }
  
  while (stars.length < 5) {
    stars.push('☆')
  }
  
  return stars.join('')
}

export function getPriceRange(price: string): 'free' | 'paid' | 'enterprise' {
  const lowerPrice = price.toLowerCase()
  
  if (lowerPrice.includes('free') || lowerPrice.includes('$0')) {
    return 'free'
  }
  
  if (lowerPrice.includes('enterprise') || lowerPrice.includes('custom')) {
    return 'enterprise'
  }
  
  return 'paid'
}

export function extractPrice(priceString: string): { min: number; max: number } | null {
  const matches = priceString.match(/\$(\d+)(?:\s*-\s*\$(\d+))?/);
  
  if (!matches) return null;
  
  const min = parseInt(matches[1]);
  const max = matches[2] ? parseInt(matches[2]) : min;
  
  return { min, max };
}
