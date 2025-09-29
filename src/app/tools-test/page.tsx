export default function ToolsTest() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-8">
        <h1 className="text-3xl font-bold mb-4">Database Connection Test</h1>
        <p className="text-gray-600 mb-4">If you see this page, Next.js is working.</p>
        <p className="text-sm text-gray-500">The /tools page crashes because of database connection issues.</p>
        
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
          <h3 className="font-bold mb-2">Troubleshooting steps:</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Check Vercel environment variables</li>
            <li>Verify DATABASE_URL is set correctly</li>
            <li>Check Prisma Postgres is still active</li>
            <li>Look at Vercel deployment logs for actual error</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
