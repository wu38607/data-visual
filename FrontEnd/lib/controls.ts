import * as React from 'react';
import Loadable from '@hoc/loadable';
import { IChartConfig } from '@components/chart';

export interface IUpdateChart {
  (chartConfig: IChartConfig, callback?: () => void): void;
}

export interface IControlProps {
  updateChart: IUpdateChart;
  chart: IChartConfig;
  name: string;
  colors: string[];
}

export interface StyleControl {
  name: string;
  Component: React.ComponentClass<IControlProps>;
}

export interface DataControl {
  name: string;
  Component: React.ComponentClass<IControlProps>;
}


// export interface IControlMap {
//   readonly [p: string]: StyleControl | DataControl;
// }

export const ControlMap = {
  Palette: {
    name: '调色盘',
    Component: Loadable(() => import('@controls/palette'))
  },
  DataEditor: {
    name: '数据编辑器',
    Component: Loadable(() => import('@controls/data-editor'))
  },
  Title: {
    name: '标题',
    Component: Loadable(() => import('@controls/title'))
  }
};