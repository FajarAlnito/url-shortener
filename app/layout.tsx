import '@/styles/globals.css'

export const metadata = {
  title: 'Goner URL Shortener',
  description: 'URL Shortener',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
