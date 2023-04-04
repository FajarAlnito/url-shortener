import '@/styles/globals.css'
import Providers from './providers'

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
      <head />
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
