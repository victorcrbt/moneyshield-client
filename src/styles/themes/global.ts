import {
  DefaultTheme,
  ThemeColors,
  ThemeFontSizes,
  ThemeMargins,
  ThemePaddings,
} from 'styled-components';

type Theme = {
  text: ThemeFontSizes;
  margins: ThemeMargins;
  paddings: ThemePaddings;
} & Pick<DefaultTheme, 'font'> & {
    colors: Pick<
      ThemeColors,
      | 'success'
      | 'error'
      | 'warn'
      | 'info'
      | 'successLighter'
      | 'errorLighter'
      | 'warnLighter'
      | 'infoLighter'
      | 'successDarker'
      | 'errorDarker'
      | 'warnDarker'
      | 'infoDarker'
    >;
  };

export default {
  font: {
    family: "'Roboto', sans-serif",
    size: '14px',
  },

  colors: {
    success: '#1bc269',
    successLighter: '#4be794',
    successDarker: '#128749',

    error: '#f04242',
    errorLighter: '#f47171',
    errorDarker: '#ed1212',

    warn: '#e89b27',
    warnLighter: '#ecaa46',
    warnDarker: '#b97713',

    info: '#1da4d1',
    infoLighter: '#4bc0e7',
    infoDarker: '#157b9d',
  },

  text: {
    xxs: '6px',
    xs: '8px',
    sm: '12px',
    md: '14px',
    lg: '18px',
    xl: '24px',
    xxl: '32px',
  },

  margins: {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },

  paddings: {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
} as Theme;
