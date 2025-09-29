import { PrismaClient } from '@prisma/client'

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
                <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
                {tool.category && (
                  <span className="text-xs text-gray-500">{tool.category}</span>
                )}
              </div>
              
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {tool.description || 'No description'}
              </p>
              
              <div className="text-sm text-gray-500">
                {tool.reviewCount || 0} votes
              </div>
              
              {tool.websiteUrl && tool.websiteUrl.startsWith('http') && (
                <a 
                  href={tool.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
                >
                  Visit
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
