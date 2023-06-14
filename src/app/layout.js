import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tutorlancer',
  description: 'Online Teaching And Tutoring',
}

export default function RootLayout({ children }) {
  return (
    <>
    <html lang="en">
      {/* you can import Header here if you want */}
      <main className={inter.className}>{children}</main>
    </html>
    </>
  )
}
