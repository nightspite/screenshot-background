import { useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Icons } from '@/components/icons';
import Balancer from 'react-wrap-balancer';
import { atom, useAtom } from 'jotai';
import { aspectAtom, boxShadowAtom, radiusAtom } from '@/components/menu';
import { cn, getOriginalImageSize, parseAspectRatio } from '@/lib/utils';
import { BOX_SHADOW_OPTIONS } from '@/lib/const';

export const dropzoneFileAtom = atom<File | null>(null);

export function Dropzone() {
  const [radius] = useAtom(radiusAtom);
  const [boxShadow] = useAtom(boxShadowAtom);
  const [file, setFile] = useAtom(dropzoneFileAtom);
  const [aspect] = useAtom(aspectAtom);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => setFile(acceptedFiles?.[0]),
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpg', '.jpeg'],
    },
    maxFiles: 1,
  });

  const [fileImageSize, setFileImageSize] = useState<{
    width: number;
    height: number;
    ratio: number;
  } | null>(null);

  const preview = useMemo(() => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);

      getOriginalImageSize(imageUrl).then((size) => {
        setFileImageSize(size);
      });

      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt='screenshot'
          style={{
            borderRadius: radius,
          }}
          className={cn(
            'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all',
            fileImageSize && fileImageSize?.ratio < parseAspectRatio(aspect)
              ? 'h-full'
              : 'w-full',
            BOX_SHADOW_OPTIONS[boxShadow]
          )}
        />
      );
    }

    return (
      <div
        className={cn(
          'w-full h-full flex flex-col justify-center items-center absolute inset-0 border-2 border-dashed rounded-sm transition-all',
          'dark:bg-black/40 bg-white/40',
          'border-border',
          'hover:dark:bg-black/60 hover:bg-white/60',
          isDragActive && 'dark:bg-black/60 bg-white/60'
        )}
      >
        <Icons.uploadCloud className='h-12 w-12' />
        <div className='mt-4 text-center'>
          <Balancer>
            {isDragActive ? (
              <p>Drop the file here...</p>
            ) : (
              <>
                <p>Drag & drop some file here, or click to select file</p>
                <p className='text-xs mt-2'>
                  Must be an image [.png, .jpg, .jpeg]
                </p>
              </>
            )}
          </Balancer>
        </div>
      </div>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file, isDragActive, radius, fileImageSize?.ratio, aspect, boxShadow]);

  return (
    <div
      {...getRootProps()}
      // className='flex flex-col justify-center items-center cursor-pointer w-full h-full'
      className='relative w-full h-full'
    >
      <input {...getInputProps()} />
      {preview}
    </div>
  );
}
