import { TNavigationDirection } from '../types/navigation-direction.types';

type TNavigationDirectionKey = 'LTR' | 'RTL';

export const NavigationDirection: Record<
  TNavigationDirectionKey,
  TNavigationDirection
> = {
  LTR: 'ltr',
  RTL: 'rtl',
} as const;
