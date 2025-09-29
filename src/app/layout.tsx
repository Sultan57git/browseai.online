import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>BrowseAI - AI Tools Directory</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
