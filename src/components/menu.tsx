'use client';

import { atom, useAtom } from 'jotai';
import { BackgroundPreview } from '@/components/background-preview';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { AspectRatio } from '@/components/preview';
import { Button } from '@/components/ui/button';
import domtoimage from 'dom-to-image';
import { dropzoneFileAtom } from '@/components/dropzone';
import copyToClipboard from 'copy-to-clipboard';
import {
  cn,
  cssStringToObj,
  getOriginalImageSize,
  parseAspectRatio,
} from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { useEffect, useState } from 'react';
import colors from 'tailwindcss/colors';

import { Icons } from '@/components/icons';
import {
  BoxShadowKey,
  BOX_SHADOW_OPTIONS,
  DEFAULT_BG_OPTIONS,
  TAILWIND_COLORS,
  TAILWIND_COLORS_KEYS,
} from '@/lib/const';

export const bgAtom = atom<{
  style: string;
  type: 'gradient' | 'solid' | 'mesh' | 'custom';
} | null>(null);
export const radiusAtom = atom(12);
export const paddingAtom = atom(24);
export const aspectAtom = atom<AspectRatio>('1/1');
export const boxShadowAtom = atom<BoxShadowKey>('none');
export const gradientDegreeAtom = atom(90);

export function Menu() {
  const [bg, setBg] = useAtom(bgAtom);
  const [radius, setRadius] = useAtom(radiusAtom);
  const [padding, setPadding] = useAtom(paddingAtom);
  const [aspect, setAspect] = useAtom(aspectAtom);
  const [boxShadow, setBoxShadow] = useAtom(boxShadowAtom);
  const [gradientDegree, setGradientDegree] = useAtom(gradientDegreeAtom);

  useEffect(() => {
    if (bg) {
      const newStyle = bg?.style?.replace(/\d*deg/g, `${gradientDegree}deg`);
      if (
        bg?.type === 'gradient' &&
        bg?.style?.match(/\d*deg/g) &&
        bg?.style !== newStyle
      ) {
        setBg({
          ...bg,
          style: newStyle,
        });
      }
    }
  }, [bg, gradientDegree, setBg]);

  const [file, setFile] = useAtom(dropzoneFileAtom);

  const [textAreaValue, setTextAreaValue] = useState('background-image: ');

  return (
    <div className='lg:w-[420px] flex-shrink-0 flex flex-col gap-4'>
      <div className='grid grid-cols-2 gap-4'>
        <Button
          variant='outline'
          disabled={!file}
          onClick={() => setFile(null)}
        >
          Reset
        </Button>

        <Button
          disabled={!file}
          onClick={async () => {
            const node = document.querySelector('#preview') as HTMLElement;
            if (node) {
              if (file) {
                const url = window.URL.createObjectURL(file);
                const size = await getOriginalImageSize(url);

                const originalNodeWidth = node.clientWidth;
                const originalNodeHeight = node.clientHeight;
                const originalAspectRatio =
                  originalNodeWidth / originalNodeHeight;

                const nodeCopy = node.cloneNode(true) as HTMLElement;

                // console.log(size.width, size.height, size.ratio);
                // console.log(
                //   originalNodeWidth,
                //   originalNodeHeight,
                //   originalAspectRatio
                // );

                const png = await domtoimage.toPng(
                  nodeCopy,
                  size.ratio >= originalAspectRatio
                    ? {
                        width: size.width + padding * 2,
                        height: size.width / originalAspectRatio + padding * 2,
                      }
                    : {
                        width: size.height * originalAspectRatio + padding * 2,
                        height: size.height + padding * 2,
                      }
                );
                if (png) {
                  const a = document.createElement('a');
                  a.href = png;
                  a.download = 'image.png';
                  a.click();
                }
              }
            }
          }}
        >
          Download
        </Button>
      </div>

      <div>
        <p>Border radius ({radius}px)</p>
        <Slider
          // disabled
          defaultValue={[radius]}
          max={120}
          step={4}
          onValueChange={(values) => setRadius(values?.[0])}
          className='mt-2'
        />
      </div>

      <div>
        <p>Padding ({padding}px)</p>
        <Slider
          defaultValue={[padding]}
          max={240}
          step={4}
          onValueChange={(values) => setPadding(values?.[0])}
          className='mt-2'
        />
      </div>
      <div>
        <p>Box shadow</p>
        <Tabs
          defaultValue={BOX_SHADOW_OPTIONS.none}
          value={boxShadow}
          onValueChange={(v) => setBoxShadow(v as BoxShadowKey)}
          className='mt-2'
        >
          <TabsList className='grid w-full grid-cols-3 h-auto'>
            {Object.entries(BOX_SHADOW_OPTIONS).map(([key, value]) => (
              <TabsTrigger key={key} value={key}>
                {key}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div>
        <p>Aspect ratio</p>
        <Tabs
          defaultValue='1/1'
          value={aspect}
          onValueChange={(v) => setAspect(v as AspectRatio)}
          className='mt-2'
        >
          <TabsList className='grid w-full grid-cols-3 h-auto'>
            <TabsTrigger value='1/1'>1:1</TabsTrigger>
            <TabsTrigger value='4/3'>4:3</TabsTrigger>
            <TabsTrigger value='16/9'>16:9</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div>
        <p>Background</p>
        <Tabs defaultValue='gradient' className='mt-2'>
          <TabsList className='grid w-full grid-cols-2 md:grid-cols-4 h-auto'>
            <TabsTrigger value='gradient'>Gradient</TabsTrigger>
            <TabsTrigger value='mesh'>Mesh</TabsTrigger>
            <TabsTrigger value='solid'>Solid</TabsTrigger>
            <TabsTrigger value='custom'>Custom</TabsTrigger>
          </TabsList>
          <TabsContent value='gradient'>
            <Card>
              <CardHeader>
                <CardTitle>Linear Gradient</CardTitle>
              </CardHeader>
              <CardContent className='space-y-2'>
                <div className='grid grid-cols-2 xs:grid-cols-3 gap-4'>
                  {DEFAULT_BG_OPTIONS.gradient?.map((bgStyle, idx) => (
                    <BackgroundPreview
                      style={cssStringToObj(
                        bgStyle?.replace(/\d*deg/g, `${gradientDegree}deg`)
                      )}
                      key={idx}
                      onClick={() =>
                        setBg({
                          style: bgStyle?.replace(
                            /\d*deg/g,
                            `${gradientDegree}deg`
                          ),
                          type: 'gradient',
                        })
                      }
                    />
                  ))}
                </div>
                <div>
                  <p className='mt-4'>Direction</p>
                  <div className='grid grid-cols-4 gap-4 mt-2'>
                    <Button
                      variant='outline'
                      onClick={() => setGradientDegree(0)}
                    >
                      <Icons.arrowUp />
                    </Button>
                    <Button
                      variant='outline'
                      onClick={() => setGradientDegree(180)}
                    >
                      <Icons.arrowDown />
                    </Button>
                    <Button
                      variant='outline'
                      onClick={() => setGradientDegree(270)}
                    >
                      <Icons.arrowLeft />
                    </Button>
                    <Button
                      variant='outline'
                      onClick={() => setGradientDegree(90)}
                    >
                      <Icons.arrowRight />
                    </Button>
                    <Button
                      variant='outline'
                      onClick={() => setGradientDegree(315)}
                    >
                      <Icons.arrowUpLeft />
                    </Button>
                    <Button
                      variant='outline'
                      onClick={() => setGradientDegree(45)}
                    >
                      <Icons.arrowUpRight />
                    </Button>
                    <Button
                      variant='outline'
                      onClick={() => setGradientDegree(225)}
                    >
                      <Icons.arrowDownLeft />
                    </Button>
                    <Button
                      variant='outline'
                      onClick={() => setGradientDegree(135)}
                    >
                      <Icons.arrowDownRight />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value='mesh'>
            <Card>
              <CardHeader>
                <CardTitle>Mesh gradient</CardTitle>
              </CardHeader>
              <CardContent className='space-y-2'>
                <div className='grid grid-cols-2 xs:grid-cols-3 gap-4'>
                  {DEFAULT_BG_OPTIONS.mesh?.map((bg, idx) => (
                    <BackgroundPreview
                      style={cssStringToObj(bg)}
                      key={idx}
                      onClick={() =>
                        setBg({
                          style: bg,
                          type: 'mesh',
                        })
                      }
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value='solid'>
            <Card>
              <CardHeader>
                <CardTitle>Solid</CardTitle>
              </CardHeader>
              <CardContent className='space-y-2'>
                <div className='grid grid-cols-2 xs:grid-cols-11 gap-4'>
                  {TAILWIND_COLORS.map((colorName, idx) =>
                    TAILWIND_COLORS_KEYS?.map((colorKey, idx) => {
                      const color = colors?.[colorName]?.[colorKey];
                      const style = 'background: ' + color;

                      return (
                        <div
                          className={cn(
                            'aspect-square cursor-pointer border-2'
                          )}
                          style={{
                            background: color,
                          }}
                          onClick={() => setBg({ style, type: 'solid' })}
                          key={color}
                        />
                      );
                    })
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value='custom'>
            <Card>
              <CardHeader>
                <CardTitle>Custom</CardTitle>
                <CardDescription>
                  Use{' '}
                  <a
                    href='https://hypercolor.dev/generator'
                    target='_blank'
                    className='underline'
                  >
                    gradient generator
                  </a>{' '}
                  and copy-paste CSS
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='grid w-full gap-4'>
                  <Textarea
                    placeholder='Type in some CSS'
                    value={textAreaValue}
                    onChange={(v) => setTextAreaValue(v.target.value)}
                  />
                  <Button
                    onClick={() =>
                      setBg({
                        style: textAreaValue,
                        type: 'custom',
                      })
                    }
                  >
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
