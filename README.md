# chartjs-keyboard-plugin

The plugin adds keyboard navigation to the Chart.js library. It supports a few navigation strategies that allow specifying usage scenarios and improving user experience.

To test the plugin, you can use the [Demo application](https://kuzanatoliy.github.io/chartjs-demo/).

Watch the [Demo](https://www.youtube.com/watch?v=rJHDyqld9X8).

### Installation

#### npm

```bash
npm install @kuzanatoliorg/chartjs-keyboard-plugin --save-dev
```

#### yarn

```bash
yarn add @kuzanatoliorg/chartjs-keyboard-plugin --dev
```

#### pnpm

```bash
pnpm add @kuzanatoliorg/chartjs-keyboard-plugin --dev
```

### Configuration

The main property to control keyboard behavior is `strategy`. It allows you to choose one of five strategies that can change the user experience.

```javascript
const chart = new Chart(ctx, {
    // ...
    options: {
        plugins: {
            // ...
            chartjsKeyboardPlugin: {
              strategy: 'data-first',
            },
        }
    }
});
```

The plugin supports five strategies:

**balance (default)** - Navigate through datasets using the Up / Down arrow keys and through data items using the Left / Right arrow keys.

**data-first** - Navigate through the dataset from data item to data item and move to the next or previous dataset on corner items.

**dataset-first** - Navigate through data from dataset to dataset and move to the next or previous data item on corner items.

**data** - Navigate through data, activating the data item for all datasets.

**dataset** - Navigate through datasets, activating data in the dataset.

The `direction` property controls the navigation direction and allows configuring the plugin to work in RTL mode.

```javascript
const chart = new Chart(ctx, {
    // ...
    options: {
        plugins: {
            // ...
            chartjsKeyboardPlugin: {
              direction: 'rtl',
            },
        }
    }
});
```

The plugin supports `ltr` (default) and `rtl` directions.

### TypeScript

To use the plugin with TypeScript, you need to add types to the `chart.js` module. For example, add a `global.d.ts` file with the following definition:

```typescript
import { ChartType } from 'chart.js';
import { type TChartjsKeyboardPluginOptions } from '@kuzanatoliorg/chartjs-keyboard-plugin';

declare module 'chart.js' {
  interface PluginOptionsByType<TType extends ChartType> {
    chartjsKeyboardPlugin?: TChartjsKeyboardPluginOptions;
  }
}
```
