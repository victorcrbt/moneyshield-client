import { DefaultTheme } from 'styled-components';

import globalThemeStyles from './global';

export default {
  themeName: 'light',

  font: {
    ...globalThemeStyles.font,
    size: '14px',
  },

  colors: {
    ...globalThemeStyles.colors,
    primary: '#B42B9D',
    primaryLighter: '#d03eb8',
    primaryDarker: '#982585',

    secondary: '#19B5AC',
    secondaryLighter: '#1fe0d7',
    secondaryDarker: '#128781',

    background: '#F6F4FC',
    backgroundLighter: '#fff',
    backgroundDarker: '#e8e3f7',

    gray: '#bdbdbd',
    grayLighter: '#cccccc',
    grayLightiest: '#e6e6e6',
    grayDark: '#a6a6a6',
    grayDarkest: '#8c8c8c',

    black: '#121212',
    blackLighter: '#444',
    blackDarker: '#000',

    white: '#fff',
    red: '#f20d0d',
    green: '#26d93e',
    blue: '#2142d9',
    orange: '#fa8500',
    purple: '#fa8500',
    pink: '#eb13ce',
    yellow: '#f5f105',
    brown: '#854900',
  },

  text: globalThemeStyles.text,

  margins: globalThemeStyles.margins,

  paddings: globalThemeStyles.paddings,
} as DefaultTheme;
