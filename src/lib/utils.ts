import { AspectRatio } from "@/components/preview";
import { ClassValue, clsx } from "clsx"
import { camelCase } from "lodash";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getOriginalImageSize = (url: string): Promise<{
  width: number,
  height: number,
  ratio: number
}> => {
  return new Promise((resolve, reject) => {

    let img = new Image();
    img.src = url;

    img.onload = () => resolve({
      width: img.width,
      height: img.height,
      ratio: img.naturalWidth / img.naturalHeight
    });

    img.onerror = () => reject;
  });
};

export const cssStringToObj = (css: string) => {
  const obj: Record<string, string> = {};
  css.split(';').forEach((prop) => {
    const [key, value] = prop.split(':');
    if (key && value) {
      obj[camelCase(key.trim())] = value.trim();
    }
  });
  return obj;
};

export const parseAspectRatio = (aspect: AspectRatio) => {
  if (aspect === '1/1') return 1;
  if (aspect === '4/3') return 4 / 3;
  if (aspect === '16/9') return 16 / 9;
  return 1;
};