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

  const parseCSVLine = (line: string, delimiter: string): string[] => {
    const result: string[] = []
    let current = ''
    let inQuotes = false
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i]
      
      if (char === '"') {
        inQuotes = !inQuotes
      } else if (char === delimiter && !inQuotes) {
        result.push(current.trim())
        current = ''
      } else {
        current += char
      }
    }
    result.push(current.trim())
    return result
  }

  const handleImport = async () => {
    if (!file) return
    
    setLoading(true)
    setStatus('Reading file...')
    
    try {
      const text = await file.text()
      const lines = text.split('\n').filter(line => line.trim())
      
      if (lines.length < 2) {
        setStatus('Error: File is empty')
        setLoading(false)
        return
      }
      
      // Detect delimiter
      const firstLine = lines[0]
      const tabs = (firstLine.match(/\t/g) || []).length
      const commas = (firstLine.match(/,/g) || []).length
      const delimiter = tabs > commas ? '\t' : ','
      
      const headers = parseCSVLine(lines[0], delimiter)
      
      setStatus(`Found columns: ${headers.join(', ')}\n\nParsing ${lines.length - 1} rows...`)
      
      const tools = []
      
      for (let i = 1; i < lines.length; i++) {
        const values = parseCSVLine(lines[i], delimiter)
        
        if (values.length !== headers.length) {
          console.warn(`Row ${i} has ${values.length} values but expected ${headers.length}`)
          continue
        }
        
        const tool: any = {}
        headers.forEach((header, idx) => {
          tool[header] = values[idx] || ''
        })
        
        if (tool.name && tool.name.length > 0 && !tool.name.startsWith('http')) {
          tools.push(tool)
        }
      }
      
      setStatus(`Parsed ${tools.length} valid tools. Importing...`)
      
      const response = await fetch('/api/admin/import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tools })
      })
      
      const result = await response.json()
      
      if (result.success) {
        setStatus(`Success! Imported ${result.imported} tools`)
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
        <h1 className="text-3xl font-bold mb-2">Import AI Tools</h1>
        <p className="text-gray-600 mb-6">Upload CSV/TSV file</p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Select File
            </label>
            <input
              type="file"
              accept=".csv,.tsv,.txt"
              onChange={handleFileChange}
              className="block w-full text-sm border border-gray-300 rounded-lg p-3"
            />
            {file && (
              <p className="text-sm text-gray-500 mt-2">
                {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </p>
            )}
          </div>
          
          <button
            onClick={handleImport}
            disabled={!file || loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold disabled:bg-gray-300 hover:bg-blue-700"
          >
            {loading ? 'Importing...' : 'Import Tools'}
          </button>
          
          {status && (
            <div className={`p-4 rounded-lg whitespace-pre-wrap ${
              status.includes('Success') 
                ? 'bg-green-50 text-green-800' 
                : status.includes('Error') 
                ? 'bg-red-50 text-red-800' 
                : 'bg-blue-50 text-blue-800'
            }`}>
              {status}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
