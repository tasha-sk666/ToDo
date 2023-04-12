import { ThemeProvider } from '@/app/providers/ThemeProvider';
import type { AppProps } from 'next/app';
import '../app/styles/index.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
        <Component {...pageProps}/>
    </ThemeProvider>
  )
}
