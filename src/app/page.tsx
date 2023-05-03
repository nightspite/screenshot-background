import { Preview } from '@/components/preview';
import { Menu } from '@/components/menu';
import { Blob } from '@/components/blob';

export default function Home() {
  return (
    <div className='container w-full sm:w-[640px] lg:w-full my-12'>
      <Blob />
      <div className='flex flex-col w-full lg:flex-row gap-4 lg:gap-8'>
        <Preview />
        <Menu />
      </div>
    </div>
  );
}
