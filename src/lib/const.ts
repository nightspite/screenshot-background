import { DefaultColors } from 'tailwindcss/types/generated/colors';

export const DEFAULT_BG_OPTIONS = {
  mesh: [
    'background-color: rgb(59, 130, 246); background-image: radial-gradient(at 64% 69%, rgb(7, 89, 133) 0, transparent 14%), radial-gradient(at 92% 12%, rgb(153, 246, 228) 0, transparent 50%), radial-gradient(at 37% 59%, rgb(5, 150, 105) 0, transparent 74%), radial-gradient(at 3% 10%, rgb(229, 231, 235) 0, transparent 13%), radial-gradient(at 75% 78%, rgb(245, 208, 254) 0, transparent 5%), radial-gradient(at 52% 18%, rgb(99, 102, 241) 0, transparent 79%);',
    'background-color: rgb(129, 140, 248);background-image: radial-gradient(at 27% 4%, rgb(190, 242, 100) 0, transparent 40%), radial-gradient(at 92% 65%, rgb(209, 250, 229) 0, transparent 39%), radial-gradient(at 69% 74%, rgb(224, 231, 255) 0, transparent 80%), radial-gradient(at 84% 53%, rgb(38, 38, 38) 0, transparent 53%), radial-gradient(at 54% 71%, rgb(254, 226, 226) 0, transparent 100%), radial-gradient(at 28% 84%, rgb(254, 215, 170) 0, transparent 10%);',
    'background-color: rgb(157, 23, 77);background-image: radial-gradient(at 79% 61%, rgb(253, 164, 175) 0, transparent 95%), radial-gradient(at 99% 78%, rgb(64, 64, 64) 0, transparent 28%), radial-gradient(at 95% 48%, rgb(167, 243, 208) 0, transparent 76%), radial-gradient(at 85% 50%, rgb(202, 138, 4) 0, transparent 2%), radial-gradient(at 11% 8%, rgb(6, 95, 70) 0, transparent 16%), radial-gradient(at 91% 95%, rgb(250, 204, 21) 0, transparent 11%);',
    'background-color: rgb(229, 231, 235);background-image: radial-gradient(at 64% 100%, rgb(221, 214, 254) 0, transparent 28%), radial-gradient(at 67% 85%, rgb(217, 249, 157) 0, transparent 93%), radial-gradient(at 71% 75%, rgb(191, 219, 254) 0, transparent 42%), radial-gradient(at 61% 59%, rgb(129, 140, 248) 0, transparent 80%), radial-gradient(at 7% 28%, rgb(245, 245, 244) 0, transparent 9%), radial-gradient(at 100% 24%, rgb(136, 19, 55) 0, transparent 98%);',
    'background-color: rgb(13, 148, 136);background-image: radial-gradient(at 63% 51%, rgb(2, 132, 199) 0, transparent 23%), radial-gradient(at 46% 39%, rgb(5, 150, 105) 0, transparent 56%), radial-gradient(at 95% 41%, rgb(2, 132, 199) 0, transparent 68%), radial-gradient(at 25% 58%, rgb(253, 230, 138) 0, transparent 70%), radial-gradient(at 96% 93%, rgb(131, 24, 67) 0, transparent 87%), radial-gradient(at 50% 92%, rgb(153, 246, 228) 0, transparent 36%);',
    'background-color: rgb(249, 115, 22);background-image: radial-gradient(at 67% 92%, rgb(212, 212, 212) 0, transparent 91%), radial-gradient(at 60% 82%, rgb(112, 26, 117) 0, transparent 54%), radial-gradient(at 50% 6%, rgb(153, 27, 27) 0, transparent 78%), radial-gradient(at 57% 87%, rgb(253, 230, 138) 0, transparent 7%), radial-gradient(at 80% 40%, rgb(5, 150, 105) 0, transparent 91%), radial-gradient(at 6% 33%, rgb(252, 211, 77) 0, transparent 7%);',
  ],
  gradient: [
    'background-image: linear-gradient(90deg, rgb(59, 130, 246) 0%, rgb(153, 246, 228) 100%)',
    'background-image: linear-gradient(90deg, rgb(129, 140, 248) 0%, rgb(209, 250, 229) 100%)',
    'background-image: linear-gradient(90deg, rgb(157, 23, 77) 0%, rgb(254, 226, 226) 100%)',
    'background-image: linear-gradient(90deg, rgb(229, 231, 235) 0%, rgb(191, 219, 254) 100%)',
    'background-image: linear-gradient(90deg, rgb(13, 148, 136) 0%, rgb(153, 246, 228) 100%)',
    'background-image: linear-gradient(90deg, rgb(249, 115, 22) 0%, rgb(252, 211, 77) 100%)',
  ],
  solid: [],
  custom: '',
};

export const TAILWIND_COLORS: Array<keyof DefaultColors> = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
];

export type TailwindColorKeys =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950';

export const TAILWIND_COLORS_KEYS: TailwindColorKeys[] = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950',
];

export const BOX_SHADOW_OPTIONS = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
};

export type BoxShadowKey = keyof typeof BOX_SHADOW_OPTIONS;