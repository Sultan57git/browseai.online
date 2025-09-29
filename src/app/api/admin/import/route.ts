import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    // Parse the request body properly
    const body = await request.json()
    const tools = body.tools
    
    console.log('Received tools count:', tools?.length)
    
    if (!tools || !Array.isArray(tools) || tools.length === 0) {
      return NextResponse.json({ 
        success: false,
        error: `No valid tools data. Received: ${typeof tools}, Length: ${tools?.length || 0}` 
      }, { status: 400 })
    }
    
    const chunkSize = 100
    let imported = 0
    const errors: string[] = []
    
    for (let i = 0; i < tools.length; i += chunkSize) {
      const chunk = tools.slice(i, i + chunkSize)
      
      try {
        const validChunk = chunk
          .filter((tool: any) => tool.name && tool.name.length > 0)
          .map((tool: any) => ({
            name: tool.name,
            description: tool.description || null,
            category: tool.categories || 'General',
            rating: null,
            reviewCount: tool.votes ? parseInt(tool.votes) || 0 : 0,
            logoUrl: tool.thumbnail_url || null,
            websiteUrl: tool.website_url || null,
            verified: tool.is_featured === 'TRUE' || tool.is_featured === true,
            trending: tool.trending_score ? parseInt(tool.trending_score) > 2000 : false,
            pricing: tool.pricing_model || null,
          }))
        
        if (validChunk.length > 0) {
          await prisma.aiTool.createMany({
            data: validChunk,
            skipDuplicates: true
          })
          
          imported += validChunk.length
        }
      } catch (err: any) {
        errors.push(`Chunk ${i}-${i + chunkSize}: ${err.message}`)
        console.error('Chunk error:', err)
      }
    }
    
    return NextResponse.json({ 
      success: true, 
      imported,
      errors: errors.length > 0 ? errors : undefined,
      message: `Successfully imported ${imported} tools`
    })
  } catch (error: any) {
    console.error('Import error:', error)
    return NextResponse.json({ 
      success: false,
      error: error.message 
    }, { status: 500 })
  }
}
