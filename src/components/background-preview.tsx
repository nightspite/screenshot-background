import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

export function BackgroundPreview({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'border-2 border-border rounded-sm w-full aspect-video hover:scale-105 transition-all cursor-pointer',
        className
      )}
      {...rest}
    ></div>
  );
}
