'use client'
import { useState } from 'react'

export default function ImportPage() {
  const [file, setFile] = useState<File | null>(null)
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0])
      setStatus('')
    }
  }

  const handleImport = async () => {
    if (!file) return
    
    setLoading(true)
    setStatus('Reading file...')
    
    try {
      const text = await file.text()
      const lines = text.split('\n')
      const headers = lines[0].split('\t')
      
      const tools = lines.slice(1)
        .filter(line => line.trim())
        .map(line => {
          const values = line.split('\t')
          const tool: any = {}
          headers.forEach((header, i) => {
            tool[header.trim()] = values[i]?.trim() || ''
          })
          return tool
        })
        .filter(tool => tool.name)
      
      setStatus(`Parsed ${tools.length} tools. Importing to database...`)
      
      const response = await fetch('/api/admin/import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tools })
      })
      
      const result = await response.json()
      
      if (result.success) {
        setStatus(`✓ Success! Imported ${result.imported} tools`)
      } else {
        setStatus(`✗ Error: ${result.error}`)
      }
    } catch (error: any) {
      setStatus(`✗ Error: ${error.message}`)
    }
    
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-2">Import AI Tools</h1>
        <p className="text-gray-600 mb-6">Upload your CSV or TSV file to import tools into the database</p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Select File (CSV/TSV)
            </label>
            <input
              type="file"
              accept=".csv,.tsv,.txt"
              onChange={handleFileChange}
              className="block w-full text-sm border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {file && (
              <p className="text-sm text-gray-500 mt-2">
                Selected: {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </p>
            )}
          </div>
          
          <button
            onClick={handleImport}
            disabled={!file || loading}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
          >
            {loading ? 'Importing...' : 'Import Tools to Database'}
          </button>
          
          {status && (
            <div className={`p-4 rounded-lg ${
              status.includes('✓') 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : status.includes('✗') 
                ? 'bg-red-50 text-red-800 border border-red-200' 
                : 'bg-blue-50 text-blue-800 border border-blue-200'
            }`}>
              <p className="font-medium">{status}</p>
            </div>
          )}
        </div>
        
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Instructions:</h3>
          <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
            <li>Prepare your CSV/TSV file with tool data</li>
            <li>Click "Select File" and choose your file</li>
            <li>Click "Import Tools to Database"</li>
            <li>Wait for the import to complete</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
