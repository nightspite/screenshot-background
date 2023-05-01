import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { Provider as BalancerProvider } from 'react-wrap-balancer';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <BalancerProvider>
        <Component {...pageProps} />
      </BalancerProvider>
    </ThemeProvider>
  );
}
