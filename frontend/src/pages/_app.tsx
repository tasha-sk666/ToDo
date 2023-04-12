import { ThemeProvider } from '@/app/providers/ThemeProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} className="app"/>
    </ThemeProvider>
  )
}
