import { PrismaClient } from '@prisma/client'
import Link from 'next/link'

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic'
export const maxDuration = 60
export const revalidate = 0

export default async function ToolsPage() {
  let tools = []
  let totalCount = 0
  let error = null

  try {
    totalCount = await prisma.aiTool.count()
    
    tools = await prisma.aiTool.findMany({
      take: 30,
      orderBy: { id: 'asc' },
      select: {
        id: true,
        name: true,
        description: true,
        category: true,
        reviewCount: true,
        logoUrl: true,
        websiteUrl: true,
        verified: true,
        trending: true,
        pricing: true
      }
    })
  } catch (e: any) {
    error = e.message
    console.error('Database error:', e)
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto bg-red-50 border border-red-200 rounded-lg p-6">
          <h1 className="text-2xl font-bold text-red-600 mb-2">Database Error</h1>
          <p className="text-red-800">{error}</p>
          <p className="text-sm text-gray-600 mt-4">Check Vercel logs for details</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-900">All AI Tools</h1>
          <p className="text-gray-600 mt-2">{totalCount} tools in database</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-sm text-gray-500 mb-6">Showing {tools.length} tools</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map(tool => (
            <div key={tool.id} className="bg-white rounded-lg shadow p-6">
              <div className="mb-4">
                {tool.logoUrl && !tool.logoUrl.includes('?auto=format') ? (
                  <img 
                    src={tool.logoUrl} 
                    alt={tool.name}
                    className="w-16 h-16 rounded mb-3 object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                ) : (
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded flex items-center justify-center text-white font-bold text-xl mb-3">
                    {tool.name.charAt(0).toUpperCase()}
                  </div>
                )}
                
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-lg">{tool.name}</h3>
                  {tool.verified && <span className="text-green-600">✓</span>}
                </div>
                
                {tool.trending && (
                  <span className="inline-block text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded mb-2">
                    Trending
                  </span>
                )}
                
                {tool.category && !tool.category.startsWith('http') && (
                  <span className="text-xs text-gray-500 block">{tool.category}</span>
                )}
              </div>
              
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {tool.description && !tool.description.startsWith('http') 
                  ? tool.description 
                  : 'AI tool for productivity and automation'}
              </p>
              
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-gray-500">
                  {tool.reviewCount?.toLocaleString() || 0} votes
                </span>
                {tool.pricing && !tool.pricing.startsWith('http') && (
                  <span className="text-green-600 font-medium text-xs">
                    {tool.pricing}
                  </span>
                )}
              </div>
              
              <Link 
                href={`/tools/${tool.id}`}
                className="block text-center bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
