import { QuioscoProvider } from './context/QuioscoProvider'
import Sidebar from './components/Sidebar/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Café - Inicio',
    template: 'Café - %s'
  },
  description: 'Quiosco Cafetería',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='md:flex'>
          <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
            <QuioscoProvider>
              <Sidebar />
            </QuioscoProvider>
          </aside>
          <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
