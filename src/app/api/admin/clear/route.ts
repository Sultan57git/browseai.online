import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST() {
  try {
    const result = await prisma.aiTool.deleteMany({})
    
    return NextResponse.json({ 
      success: true, 
      deleted: result.count 
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
