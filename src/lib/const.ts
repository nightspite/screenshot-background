import { DefaultColors } from 'tailwindcss/types/generated/colors';

export const DEFAULT_BG_OPTIONS = {
  mesh: [
    'background-color: rgb(148, 163, 184);background-image: radial-gradient(at 37% 15%, rgb(190, 242, 100) 0, transparent 79%), radial-gradient(at 75% 37%, rgb(12, 74, 110) 0, transparent 76%), radial-gradient(at 8% 55%, rgb(3, 105, 161) 0, transparent 77%), radial-gradient(at 43% 33%, rgb(115, 115, 115) 0, transparent 76%), radial-gradient(at 3% 13%, rgb(219, 234, 254) 0, transparent 17%), radial-gradient(at 35% 55%, rgb(6, 182, 212) 0, transparent 72%);',
    'background-color: rgb(5, 150, 105);background-image: radial-gradient(at 61% 88%, rgb(96, 165, 250) 0, transparent 63%), radial-gradient(at 19% 8%, rgb(231, 229, 228) 0, transparent 50%), radial-gradient(at 94% 71%, rgb(147, 51, 234) 0, transparent 83%), radial-gradient(at 81% 63%, rgb(214, 211, 209) 0, transparent 96%), radial-gradient(at 30% 34%, rgb(232, 121, 249) 0, transparent 76%), radial-gradient(at 76% 24%, rgb(240, 171, 252) 0, transparent 100%);',
    'background-color: rgb(6, 78, 59);background-image: radial-gradient(at 1% 10%, rgb(31, 41, 55) 0, transparent 59%), radial-gradient(at 63% 66%, rgb(251, 113, 133) 0, transparent 92%), radial-gradient(at 62% 65%, rgb(125, 211, 252) 0, transparent 20%), radial-gradient(at 82% 40%, rgb(15, 118, 110) 0, transparent 66%), radial-gradient(at 46% 99%, rgb(244, 114, 182) 0, transparent 42%), radial-gradient(at 68% 94%, rgb(168, 85, 247) 0, transparent 81%);',
    'background-color: rgb(187, 247, 208);background-image: radial-gradient(at 73% 44%, rgb(196, 181, 253) 0, transparent 100%), radial-gradient(at 39% 99%, rgb(125, 211, 252) 0, transparent 69%), radial-gradient(at 35% 85%, rgb(233, 213, 255) 0, transparent 92%), radial-gradient(at 13% 51%, rgb(253, 186, 116) 0, transparent 15%), radial-gradient(at 16% 83%, rgb(250, 204, 21) 0, transparent 75%), radial-gradient(at 21% 30%, rgb(154, 52, 18) 0, transparent 18%);',
    'background-color: rgb(8, 145, 178);background-image: radial-gradient(at 33% 51%, rgb(255, 228, 230) 0, transparent 72%), radial-gradient(at 77% 58%, rgb(52, 211, 153) 0, transparent 46%), radial-gradient(at 86% 67%, rgb(146, 64, 14) 0, transparent 45%), radial-gradient(at 44% 48%, rgb(157, 23, 77) 0, transparent 12%), radial-gradient(at 74% 73%, rgb(17, 94, 89) 0, transparent 31%), radial-gradient(at 40% 90%, rgb(229, 231, 235) 0, transparent 84%);',
    'background-color: rgb(157, 23, 77);background-image: radial-gradient(at 29% 77%, rgb(224, 231, 255) 0, transparent 100%), radial-gradient(at 31% 90%, rgb(17, 24, 39) 0, transparent 64%), radial-gradient(at 41% 88%, rgb(180, 83, 9) 0, transparent 2%), radial-gradient(at 93% 83%, rgb(55, 48, 163) 0, transparent 17%), radial-gradient(at 38% 29%, rgb(243, 232, 255) 0, transparent 83%), radial-gradient(at 37% 83%, rgb(249, 168, 212) 0, transparent 14%);',
    'background-color: rgb(88, 28, 135);background-image: radial-gradient(at 86% 62%, rgb(214, 211, 209) 0, transparent 59%), radial-gradient(at 88% 63%, rgb(120, 113, 108) 0, transparent 6%), radial-gradient(at 8% 29%, rgb(20, 184, 166) 0, transparent 93%), radial-gradient(at 91% 9%, rgb(243, 232, 255) 0, transparent 28%), radial-gradient(at 91% 25%, rgb(82, 82, 82) 0, transparent 34%), radial-gradient(at 22% 60%, rgb(192, 38, 211) 0, transparent 49%);',
    'background-color: rgb(245, 245, 244);background-image: radial-gradient(at 18% 39%, rgb(41, 37, 36) 0, transparent 94%), radial-gradient(at 31% 41%, rgb(14, 116, 144) 0, transparent 70%), radial-gradient(at 16% 53%, rgb(14, 116, 144) 0, transparent 79%), radial-gradient(at 56% 42%, rgb(37, 99, 235) 0, transparent 12%), radial-gradient(at 84% 10%, rgb(76, 29, 149) 0, transparent 65%), radial-gradient(at 70% 36%, rgb(163, 163, 163) 0, transparent 99%);',
    'background-color: rgb(37, 99, 235);background-image: radial-gradient(at 71% 100%, rgb(204, 251, 241) 0, transparent 70%), radial-gradient(at 51% 76%, rgb(254, 215, 170) 0, transparent 84%), radial-gradient(at 50% 31%, rgb(30, 41, 59) 0, transparent 30%), radial-gradient(at 98% 57%, rgb(254, 215, 170) 0, transparent 32%), radial-gradient(at 100% 73%, rgb(139, 92, 246) 0, transparent 31%), radial-gradient(at 54% 77%, rgb(103, 232, 249) 0, transparent 34%);',
    'background-color: rgb(126, 34, 206);background-image: radial-gradient(at 50% 34%, rgb(168, 162, 158) 0, transparent 78%), radial-gradient(at 11% 68%, rgb(244, 114, 182) 0, transparent 89%), radial-gradient(at 17% 46%, rgb(107, 33, 168) 0, transparent 87%), radial-gradient(at 80% 14%, rgb(254, 226, 226) 0, transparent 48%), radial-gradient(at 34% 74%, rgb(139, 92, 246) 0, transparent 51%), radial-gradient(at 89% 58%, rgb(91, 33, 182) 0, transparent 84%);',
    'background-color: rgb(68, 64, 60);background-image: radial-gradient(at 51% 100%, rgb(17, 24, 39) 0, transparent 94%), radial-gradient(at 46% 47%, rgb(244, 244, 245) 0, transparent 36%), radial-gradient(at 29% 55%, rgb(129, 140, 248) 0, transparent 93%), radial-gradient(at 38% 32%, rgb(124, 45, 18) 0, transparent 41%), radial-gradient(at 40% 40%, rgb(245, 245, 244) 0, transparent 83%), radial-gradient(at 54% 42%, rgb(21, 94, 117) 0, transparent 71%);',
    'background-color: rgb(22, 101, 52);background-image: radial-gradient(at 6% 55%, rgb(226, 232, 240) 0, transparent 84%), radial-gradient(at 21% 25%, rgb(153, 27, 27) 0, transparent 100%), radial-gradient(at 1% 29%, rgb(41, 37, 36) 0, transparent 6%), radial-gradient(at 81% 7%, rgb(251, 113, 133) 0, transparent 39%), radial-gradient(at 25% 40%, rgb(252, 165, 165) 0, transparent 4%), radial-gradient(at 40% 24%, rgb(148, 163, 184) 0, transparent 11%);',
  ],
  gradient: [
    'background-image: linear-gradient(90deg, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))',
    'background-image: linear-gradient(90deg, rgb(229, 231, 235), rgb(156, 163, 175), rgb(75, 85, 99))',
    'background-image: linear-gradient(90deg, rgb(165, 180, 252), rgb(192, 132, 252))',
    'background-image: linear-gradient(90deg, rgb(233, 213, 255), rgb(192, 132, 252), rgb(107, 33, 168))',
    'background-image: linear-gradient(90deg, rgb(254, 240, 138), rgb(234, 179, 8))',
    'background-image: linear-gradient(90deg, rgb(255, 228, 230), rgb(204, 251, 241))',

    'background-image: radial-gradient(at right top, rgb(13, 148, 136), rgb(13, 148, 136), rgb(0, 0, 0))',
    'background-image: radial-gradient(at center bottom, rgb(187, 247, 208), rgb(203, 213, 225), rgb(59, 130, 246))',
    'background-image: radial-gradient(at left center, rgb(17, 94, 89), rgb(19, 78, 74), rgb(74, 222, 128))',
    
    'background-image: conic-gradient(at right top, rgb(199, 210, 254), rgb(71, 85, 105), rgb(199, 210, 254))',
    'background-image: conic-gradient(at center top, rgb(82, 82, 82), rgb(252, 231, 243), rgb(88, 28, 135))',
    'background-image: conic-gradient(at center top, rgb(204, 251, 241), rgb(17, 94, 89), rgb(64, 64, 64))',
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