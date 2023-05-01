import { Inter } from 'next/font/google';
import { Preview } from '@/components/preview';
import { Menu } from '@/components/menu';
import { Blob } from '@/components/blob';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <SiteHeader />
      <main className={`flex flex-col flex-1 items-center ${inter.className}`}>
        <div className='container w-full sm:w-[640px] lg:w-full my-12'>
          <Blob />
          <div className='flex flex-col w-full lg:flex-row gap-4 lg:gap-8'>
            <Preview />
            <Menu />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
