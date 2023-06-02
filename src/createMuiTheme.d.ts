import { Theme } from '@material-ui/core/styles/createTheme';
import { SimplePaletteColorOptions } from '@material-ui/core/styles/createPalette';
import 'styled-components';

type ProgressColor = {
  main: string;
  hover: string;
  icon: string;
};

type ProgressColors = {
  bronze: ProgressColor;
  silver: ProgressColor;
  gold: ProgressColor;
};

type VisibilityColor = {
  main: string;
  hover: string;
  icon: string;
};

type VisibilityColors = {
  notVisible: VisibilityColor;
  visible: VisibilityColor;
};

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    name: string;
    config: {
      defaultBorder: (color: string = '#cfcabd') => string;
      defaultBorderRadius: string;
      defaultBoxShadow: string;
      defaultTransition: string;
      primaryFontFamily: string;
      secondaryFontFamily: string;
      progressColors: ProgressColors;
      visibilityColors: VisibilityColors;
    };
  }

  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    name: string;
    config: {
      defaultBorder: (color: string = '#cfcabd') => string;
      defaultBorderRadius: string;
      defaultBoxShadow: string;
      defaultTransition: string;
      primaryFontFamily: string;
      secondaryFontFamily: string;
      progressColors: ProgressColors;
      visibilityColors: VisibilityColors;
    };
  }
}

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    info: SimplePaletteColorOptions;
    urgent: SimplePaletteColorOptions;
    urgentTransparent: SimplePaletteColorOptions;
    warning: SimplePaletteColorOptions;
    warningTransparent: SimplePaletteColorOptions;
    completed: SimplePaletteColorOptions;
    studyGuide: SimplePaletteColorOptions;
  }
  interface PaletteOptions {
    info: SimplePaletteColorOptions;
    urgent: SimplePaletteColorOptions;
    urgentTransparent: SimplePaletteColorOptions;
    warning: SimplePaletteColorOptions;
    warningTransparent: SimplePaletteColorOptions;
    completed: SimplePaletteColorOptions;
    studyGuide: SimplePaletteColorOptions;
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
