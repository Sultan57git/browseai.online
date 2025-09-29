'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ToolsPage() {
  const [tools, setTools] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/tools?limit=30')
      .then(res => res.json())
      .then(data => {
        setTools(data.tools || [])
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="min-h-screen bg-gray-50 p-8">Loading tools...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold">All AI Tools</h1>
          <p className="text-gray-600 mt-2">{tools.length} tools loaded</p>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool: any) => (
            <div key={tool.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              {tool.logoUrl && !tool.logoUrl.includes('?auto=format') ? (
                <img src={tool.logoUrl} alt={tool.name} className="w-16 h-16 rounded mb-3" />
              ) : (
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded flex items-center justify-center text-white font-bold text-xl mb-3">
                  {tool.name.charAt(0)}
                </div>
              )}
              
              <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
              
              {tool.category && !tool.category.startsWith('http') && (
                <span className="text-xs text-gray-500 block mb-2">{tool.category}</span>
              )}
              
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {tool.description && !tool.description.startsWith('http') 
                  ? tool.description 
                  : 'AI productivity tool'}
              </p>
              
              <div className="text-sm text-gray-500 mb-4">
                {tool.reviewCount || 0} votes
              </div>
              
              <Link 
                href={`/tools/${tool.id}`}
                className="block text-center bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
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
