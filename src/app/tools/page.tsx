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

  if (loading) return <div className="p-8">Loading...</div>

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold">All AI Tools</h1>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool: any) => (
          <div key={tool.id} className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold mb-2">{tool.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{tool.description?.substring(0, 100)}</p>
            <Link href={`/tools/${tool.id}`} className="block text-center bg-purple-600 text-white py-2 rounded">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
