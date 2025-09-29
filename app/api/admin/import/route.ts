import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { tools } = await request.json()
    
    if (!tools || tools.length === 0) {
      return NextResponse.json({ 
        error: 'No tools data received' 
      }, { status: 400 })
    }
    
    const chunkSize = 100
    let imported = 0
    let errors = 0
    
    for (let i = 0; i < tools.length; i += chunkSize) {
      const chunk = tools.slice(i, i + chunkSize)
      
      try {
        await prisma.aiTool.createMany({
          data: chunk.map((tool: any) => ({
            name: tool.name,
            description: tool.description || null,
            category: tool.categories || 'General',
            rating: null, // Your CSV doesn't have rating
            reviewCount: tool.votes ? parseInt(tool.votes) : 0,
            logoUrl: tool.thumbnail_url || null,
            websiteUrl: tool.website_url || null,
            verified: tool.is_featured === 'TRUE',
            trending: tool.trending_score ? parseInt(tool.trending_score) > 2000 : false,
            pricing: tool.pricing_model || null,
          })),
          skipDuplicates: true
        })
        
        imported += chunk.length
      } catch (err) {
        errors += chunk.length
        console.error('Chunk error:', err)
      }
    }
    
    return NextResponse.json({ 
      success: true, 
      imported,
      errors,
      message: `Imported ${imported} tools` + (errors > 0 ? `, ${errors} failed` : '')
    })
  } catch (error: any) {
    console.error('Import error:', error)
    return NextResponse.json({ 
      error: error.message 
    }, { status: 500 })
  }
}
