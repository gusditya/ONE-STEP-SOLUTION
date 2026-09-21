import '@/styles/index.css'
import '@/styles/responsive.css'

export const metadata = {
  title: 'my-app',
  description: 'One Step Solution Bali',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
