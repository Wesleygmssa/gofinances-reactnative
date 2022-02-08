import 'styled-components';
import theme from './theme';
import {type} from '@babel/core';

declare module 'styled-components'{
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType{}
}