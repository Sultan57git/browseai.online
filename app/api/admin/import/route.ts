import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { tools } = await request.json()
    
    const chunkSize = 100
    let imported = 0
    
    for (let i = 0; i < tools.length; i += chunkSize) {
      const chunk = tools.slice(i, i + chunkSize)
      
      await prisma.aiTool.createMany({
        data: chunk.map((tool: any) => ({
          name: tool.name,
          description: tool.description || null,
          category: tool.categories || tool.category || null,
          rating: tool.rating ? parseFloat(tool.rating) : null,
          reviewCount: parseInt(tool.votes) || 0,
          logoUrl: tool.thumbnail_url || null,
          websiteUrl: tool.website_url || null,
          verified: tool.is_featured === 'TRUE',
          trending: parseInt(tool.trending_score || '0') > 2000,
          pricing: tool.pricing_model || null,
        })),
        skipDuplicates: true
      })
      
      imported += chunk.length
    }
    
    return NextResponse.json({ 
      success: true, 
      imported,
      message: `Successfully imported ${imported} tools` 
    })
  } catch (error: any) {
    console.error('Import error:', error)
    return NextResponse.json({ 
      error: error.message 
    }, { status: 500 })
  }
}
