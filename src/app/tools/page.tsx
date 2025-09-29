import { PrismaClient } from '@prisma/client'
import Link from 'next/link'

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic'

export default async function ToolsPage() {
  try {
    console.log('Starting tools page render...')
    
    const totalCount = await prisma.aiTool.count()
    console.log('Total count:', totalCount)
    
    const tools = await prisma.aiTool.findMany({
      take: 30,
      orderBy: { id: 'asc' }
    })
    console.log('Fetched tools:', tools.length)

    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-4xl font-bold">All AI Tools</h1>
            <p className="text-gray-600 mt-2">{totalCount} tools</p>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tools.map(tool => (
              <div key={tool.id} className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {tool.description || 'No description'}
                </p>
                <Link 
                  href={`/tools/${tool.id}`}
                  className="block text-center bg-purple-600 text-white py-2 rounded"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  } catch (error: any) {
    console.error('DETAILED ERROR:', error)
    console.error('Error name:', error.name)
    console.error('Error message:', error.message)
    console.error('Error stack:', error.stack)
    
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto bg-red-50 p-6 rounded">
          <h1 className="text-2xl font-bold text-red-600">Error</h1>
          <pre className="mt-4 text-sm overflow-auto">{JSON.stringify({
            name: error.name,
            message: error.message,
            stack: error.stack?.substring(0, 500)
          }, null, 2)}</pre>
        </div>
      </div>
    )
  }
}
