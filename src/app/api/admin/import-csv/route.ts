import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    
    const text = await file.text()
    const lines = text.split('\n')
    
    // Get headers from first line
    const headerLine = lines[0]
    const delimiter = headerLine.includes('\t') ? '\t' : ','
    const headers = headerLine.split(delimiter).map(h => h.trim().replace(/"/g, ''))
    
    let imported = 0
    let failed = 0
    
    // Process in batches
    for (let i = 1; i < lines.length; i += 100) {
      const batch = lines.slice(i, i + 100)
      const tools = []
      
      for (const line of batch) {
        if (!line.trim()) continue
        
        const values = line.split(delimiter).map(v => v.trim().replace(/^"|"$/g, ''))
        const tool: any = {}
        
        headers.forEach((header, idx) => {
          tool[header] = values[idx] || ''
        })
        
        // Validate essential fields
        if (!tool.name || tool.name.startsWith('http') || tool.name.length < 2) {
          failed++
          continue
        }
        
        tools.push({
          name: tool.name.substring(0, 255),
          description: tool.description?.substring(0, 5000) || null,
          category: tool.categories || 'General',
          rating: null,
          reviewCount: parseInt(tool.votes) || 0,
          logoUrl: tool.thumbnail_url || null,
          websiteUrl: tool.website_url || null,
          verified: tool.is_featured === 'TRUE',
          trending: parseInt(tool.trending_score || '0') > 2000,
          pricing: tool.pricing_model || null
        })
      }
      
      if (tools.length > 0) {
        await prisma.aiTool.createMany({
          data: tools,
          skipDuplicates: true
        })
        imported += tools.length
      }
    }
    
    return NextResponse.json({ success: true, imported, failed })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
