'use client'
import { useState } from 'react'

export default function ImportPage() {
  const [file, setFile] = useState<File | null>(null)
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleImport = async () => {
    if (!file) return
    
    setLoading(true)
    setStatus('Reading file...')
    
    try {
      const formData = new FormData()
      formData.append('file', file)
      
      const response = await fetch('/api/admin/import-csv', {
        method: 'POST',
        body: formData
      })
      
      const result = await response.json()
      
      if (result.success) {
        setStatus(`Success! Imported ${result.imported} tools\nFailed: ${result.failed || 0}`)
      } else {
        setStatus(`Error: ${result.error}`)
      }
    } catch (error: any) {
      setStatus(`Error: ${error.message}`)
    }
    
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Import AI Tools</h1>
        
        <input
          type="file"
          accept=".csv,.tsv"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="block w-full border p-3 rounded mb-4"
        />
        
        <button
          onClick={handleImport}
          disabled={!file || loading}
          className="w-full bg-blue-600 text-white py-3 rounded font-semibold disabled:bg-gray-300"
        >
          {loading ? 'Importing...' : 'Import'}
        </button>
        
        {status && (
          <div className="mt-4 p-4 bg-blue-50 rounded whitespace-pre-wrap">
            {status}
          </div>
        )}
      </div>
    </div>
  )
}
