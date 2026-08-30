import type { TNavigationDirection } from './navigation-direction.types.js';
import type { TNavigationStrategy } from './navigation-strategy.types.js';

export type TChartjsKeyboardPluginOptions = {
  strategy?: TNavigationStrategy;
  direction?: TNavigationDirection;
};
