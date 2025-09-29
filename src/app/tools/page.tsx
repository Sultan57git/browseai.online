import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic' // Add this line

export default async function ToolsPage() {
  const tools = await prisma.aiTool.findMany({
    take: 100,
    orderBy: [
      { trending: 'desc' },
      { reviewCount: 'desc' }
    ]
  })

  const categories = await prisma.aiTool.groupBy({
    by: ['category'],
    _count: true,
    where: { category: { not: null } }
  })

  // Serialize data to fix Decimal type issue
  const serializedTools = tools.map(tool => ({
    ...tool,
    rating: tool.rating ? Number(tool.rating) : null,
    createdAt: tool.createdAt.toISOString()
  }))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-900">All AI Tools</h1>
          <p className="text-gray-600 mt-2">Browse {serializedTools.length}+ AI tools</p>
        </div>
      </header>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm">
            All Tools
          </button>
          {categories.slice(0, 10).map((cat) => (
            <button
              key={cat.category}
              className="px-4 py-2 bg-white rounded-full text-sm border hover:bg-blue-50"
            >
              {cat.category} ({cat._count})
            </button>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serializedTools.map(tool => (
            <div key={tool.id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
              <div className="flex items-start gap-4 mb-4">
                {tool.logoUrl ? (
                  <img 
                    src={tool.logoUrl} 
                    alt={tool.name}
                    className="w-16 h-16 rounded object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded flex items-center justify-center text-white font-bold text-xl">
                    {tool.name.charAt(0)}
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-lg">{tool.name}</h3>
                    {tool.verified && <span className="text-green-600">✓</span>}
                  </div>
                  
                  {tool.trending && (
                    <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">
                      Trending
                    </span>
                  )}
                  
                  {tool.category && (
                    <span className="text-xs text-gray-500 block mt-1">{tool.category}</span>
                  )}
                </div>
              </div>
              
              <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                {tool.description || 'No description available'}
              </p>
              
              <div className="flex items-center justify-between text-sm mb-3">
                <span className="text-gray-500">
                  {tool.reviewCount?.toLocaleString() || 0} votes
                </span>
                {tool.pricing && (
                  <span className="text-green-600 font-medium text-xs">
                    {tool.pricing}
                  </span>
                )}
              </div>
              
              {tool.websiteUrl && (
                <a 
                  href={tool.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition"
                >
                  Visit Tool
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
