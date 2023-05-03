import '@/styles/globals.css';
import { Metadata } from 'next';

import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';
import { Provider as BalancerProvider } from 'react-wrap-balancer';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { siteConfig } from '@/config/site';
import { Analytics } from '@/components/providers/analytics';
import { ThemeProvider } from '@/components/providers/theme-provider';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['background', 'screenshot', 'background-screenshot'],
  authors: [
    {
      name: 'nightspite',
      url: 'https://https://nightspite.vercel.app/',
    },
  ],
  creator: 'nightspite',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@nightspite3',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <head>
          <Script
            src='https://www.googletagmanager.com/gtag/js?id=G-5XYYSY0XQZ'
            strategy='afterInteractive'
          ></Script>
          <Script id='google-analytics' strategy='afterInteractive'>
            {`
              window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'G-5XYYSY0XQZ');
            `}
          </Script>
        </head>
        <body
          className={cn(
            'min-h-screen bg-background antialiased',
            inter.className
          )}
        >
          <ThemeProvider attribute='class' defaultTheme='dark'>
            <BalancerProvider>
              {' '}
              <div className='flex flex-col min-h-screen'>
                <SiteHeader />
                <main className='flex flex-col flex-1 items-center'>
                  {children}
                </main>
                <SiteFooter />
              </div>
            </BalancerProvider>
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </>
  );
}
