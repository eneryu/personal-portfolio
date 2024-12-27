import './globals.css'
import { Cairo, Tajawal } from 'next/font/google'
import { Providers } from './providers'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

const cairo = Cairo({ 
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
})

const tajawal = Tajawal({
  weight: ['400', '700'],
  subsets: ['arabic'],
  variable: '--font-tajawal',
  display: 'swap',
})

export const metadata = {
  title: 'Jack Portfolio | بورتفوليو جاك',
  description: 'مطور ويب محترف متخصص في بناء تطبيقات الويب الحديثة',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.variable} ${tajawal.variable} font-cairo`}>
        <Providers>
          <ThemeSwitcher />
          {children}
          <div className="fixed bottom-2 left-2 text-xs text-gray-400">
            Developed by Jack
          </div>
        </Providers>
      </body>
    </html>
  )
}
