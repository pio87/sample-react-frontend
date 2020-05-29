import 'styled-components';
import { AppTheme } from '../config/themes/themes';

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {};
}
