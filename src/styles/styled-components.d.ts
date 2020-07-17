import 'styled-components';

declare module 'styled-components' {
  export interface ThemeColors {
    primary: string;
    primaryDarker: string;
    primaryLighter: string;

    secondary: string;
    secondaryLighter: string;
    secondaryDarker: string;

    success: string;
    successLighter: string;
    successDarker: string;

    error: string;
    errorLighter: string;
    errorDarker: string;

    warn: string;
    warnLighter: string;
    warnDarker: string;

    info: string;
    infoLighter: string;
    infoDarker: string;

    background: string;
    backgroundLighter: string;
    backgroundDarker: string;

    gray: string;
    grayLighter: string;
    grayLightiest: string;
    grayDark: string;
    grayDarkest: string;

    black: string;
    blackLighter: string;
    blackDarker: string;

    white: string;
    red: string;
    green: string;
    blue: string;
    orange: string;
    purple: string;
    pink: string;
    yellow: string;
    brown: string;
  }

  export interface ThemeMargins {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  }

  export interface ThemePaddings {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  }

  export interface ThemeFontSizes {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  }

  export interface DefaultTheme {
    themeName: string;

    font: {
      family: string;
      size: string;
    };

    colors: ThemeColors;

    text: ThemeFontSizes;

    margins: ThemeMargins;

    paddings: ThemePaddings;
  }
}
