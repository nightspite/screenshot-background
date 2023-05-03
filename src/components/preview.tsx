'use client';

import { Dropzone } from '@/components/dropzone';
import { useAtom } from 'jotai';
import { aspectAtom, bgAtom, paddingAtom } from '@/components/menu';
import { cn, cssStringToObj } from '@/lib/utils';

export type AspectRatio = '1/1' | '4/3' | '16/9';

export function Preview() {
  const [bg] = useAtom(bgAtom);
  const [padding] = useAtom(paddingAtom);
  const [aspect] = useAtom(aspectAtom);

  return (
    <div
      className={cn(
        `relative rounded-sm w-full h-full transition-all`,
        aspect === '1/1' && 'aspect-square',
        aspect === '4/3' && 'aspect-[4/3]',
        aspect === '16/9' && 'aspect-video'
      )}
      id='preview'
      style={{
        ...(bg?.style && cssStringToObj(bg?.style)),
        padding,
      }}
    >
      <Dropzone />
    </div>
  );
}
