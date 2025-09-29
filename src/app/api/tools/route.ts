import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const search = searchParams.get('search')
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '12')

  try {
    const where: any = {}
    
    if (category && category !== 'All Tools') {
      where.category = category
    }
    
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } }
      ]
    }

    const [tools, total] = await Promise.all([
      prisma.aiTool.findMany({
        where,
        orderBy: [
          { trending: 'desc' },
          { rating: 'desc' }
        ],
        take: limit,
        skip: (page - 1) * limit
      }),
      prisma.aiTool.count({ where })
    ])

    return NextResponse.json({
      tools,
      total,
      page,
      totalPages: Math.ceil(total / limit),
      hasMore: page * limit < total
    })
  } catch (error: any) {
    console.error('Database error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch tools' },
      { status: 500 }
    )
  }
}
