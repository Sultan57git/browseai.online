import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function ToolsPage() {
  const tools = await prisma.aiTool.findMany({
    take: 50,
    orderBy: [
      { trending: 'desc' },
      { rating: 'desc' }
    ]
  })

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">AI Tools Directory</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map(tool => (
            <div key={tool.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                {tool.logoUrl && (
                  <img 
                    src={tool.logoUrl} 
                    alt={tool.name}
                    className="w-16 h-16 rounded object-cover"
                  />
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-lg">{tool.name}</h3>
                    {tool.verified && <span className="text-green-600">✓</span>}
                    {tool.trending && (
                      <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">
                        Trending
                      </span>
                    )}
                  </div>
                  
                  {tool.category && (
                    <span className="text-xs text-gray-500 mb-2 block">{tool.category}</span>
                  )}
                  
                  <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                    {tool.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {tool.reviewCount?.toLocaleString()} votes
                    </span>
                    {tool.websiteUrl && (
                      <a 
                        href={tool.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm hover:underline"
                      >
                        Visit →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
