import { PrismaClient } from '@prisma/client'
import { notFound } from 'next/navigation'

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic'

export default async function ToolDetailPage({ params }: { params: { id: string } }) {
  const tool = await prisma.aiTool.findUnique({
    where: { id: parseInt(params.id) }
  })

  if (!tool) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-8 mb-6">
          <div className="flex items-start gap-6">
            {tool.logoUrl && !tool.logoUrl.includes('?auto=format') ? (
              <img 
                src={tool.logoUrl} 
                alt={tool.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
            ) : (
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-3xl">
                {tool.name.charAt(0)}
              </div>
            )}
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold">{tool.name}</h1>
                {tool.verified && <span className="text-green-600 text-2xl">✓</span>}
                {tool.trending && (
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                    Trending
                  </span>
                )}
              </div>
              
              {tool.category && !tool.category.startsWith('http') && (
                <span className="text-gray-600">{tool.category}</span>
              )}
              
              <div className="flex items-center gap-4 mt-4">
                <span className="text-gray-600">{tool.reviewCount?.toLocaleString() || 0} votes</span>
                {tool.pricing && (
                  <span className="text-green-600 font-semibold">{tool.pricing}</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg shadow p-8 mb-6">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed">
            {tool.description || 'No description available for this tool.'}
          </p>
        </div>

        {/* Actions */}
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold mb-4">Get Started</h2>
          {tool.websiteUrl && tool.websiteUrl.startsWith('http') ? (
            <a 
              href={tool.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700"
            >
              Visit Official Website →
            </a>
          ) : (
            <p className="text-gray-500">Website URL not available</p>
          )}
        </div>
      </div>
    </div>
  )
}
