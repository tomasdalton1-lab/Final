import './globals.css'

export const metadata = {
  title: 'Geremiaco',
  description: 'Geremiaco landing page'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="font-montserrat">
      <body className="min-h-screen font-montserrat" style={{ backgroundColor: '#17293A' }}>
        {children}
      </body>
    </html>
  )
}
