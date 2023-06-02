import createMuiTheme from '@material-ui/core/styles/createTheme';

const defaultBorder = (color = '#c6c0b3') => `.1rem solid ${color}`;
const defaultBorderRadius = '0.3rem';
const defaultBoxShadow = '0 0 .5rem 0 rgba(0,0,0,.1)';
const defaultTransition = 'all .25s linear';
const primaryFontFamily = ['myriad-pro', 'Ubuntu', 'Times New Roman', 'sans-seri'].join(',');
const secondaryFontFamily = ['Lato', 'Arial', 'sans-serif'].join(',');

const theme = createMuiTheme({
  name: 'DigitalMethodeTheme',
  palette: {
    primary: {
      main: '#ec6624',
    },
    secondary: {
      main: '#7e7664',
    },
    text: {
      primary: '#2e2a28',
    },
    grey: {
      50: '#fefaf1',
      100: '#f1ece2',
      200: '#e4dfd5',
      300: '#d6d0c4',
      400: '#c6c0b3',
      500: '#b6b0a2',
      600: '#a7a091',
      700: '#989181',
      800: '#8b8473',
      900: '#7e7664',
      A100: '#6c6453',
      A200: '#595243',
      A400: '#443f33',
      A700: '#2f2b29',
    },
    error: {
      light: '#ffe0e0',
      main: '#f00',
      dark: '#ffc7c7',
    },
    info: {
      light: '#eceeff',
      main: '#344bf5',
      dark: '#dadeff',
    },
    warning: {
      light: '#ebda73',
      main: '#EBCD25',
      dark: '#eba406',
    },
    warningTransparent: {
      light: 'rgba(235,218,115,0.2)',
      main: 'rgba(235,205,37,0.2)',
      dark: 'rgba(235,164,6,0.2)',
    },
    urgent: {
      light: '#ffd5c1',
      main: '#c34304',
      dark: '#a33600',
    },
    urgentTransparent: {
      light: 'rgba(255,213,193,0.2)',
      main: 'rgba(195,67,4,0.2)',
      dark: 'rgba(163,54,0,0.2)',
    },
    completed: {
      light: '#daffd6',
      main: '#21d713',
      dark: '#28ac1d',
    },
    studyGuide: {
      light: '#f1f6e0',
      main: '#bad389',
      dark: '#9aba59',
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: primaryFontFamily,
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#000',
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1.6rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '1.6rem',
      fontWeight: 400,
    },
    subtitle1: {
      fontFamily: secondaryFontFamily,
      fontStyle: 'light',
      fontSize: '1.1rem',
    },
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: defaultBorderRadius,
      },
      elevation1: {
        boxShadow: defaultBoxShadow,
      },
    },
    MuiTouchRipple: {
      root: {
        opacity: '.4',
      },
    },
    MuiDialogTitle: {
      root: {
        fontSize: '2.2rem',
        fontWeight: 700,
      },
    },
    MuiDialogContent: {
      root: {
        overflowX: 'hidden',
      },
    },
  },
  props: {
    MuiPaper: {
      square: true,
    },
    MuiPopover: {
      elevation: 1,
    },
    MuiDialogTitle: {
      disableTypography: true,
    },
    MuiTooltip: {
      placement: 'left',
    },
    MuiAccordion: {
      square: true,
    },
  },
  config: {
    defaultBorder,
    defaultBorderRadius,
    defaultBoxShadow,
    defaultTransition,
    primaryFontFamily,
    secondaryFontFamily,
    progressColors: {
      bronze: {
        main: '#edc0a1',
        hover: '#e6ab82',
        icon: '#af6431',
      },
      silver: {
        main: '#dde2e6',
        hover: '#bcc7cf',
        icon: '#82898f',
      },
      gold: {
        main: '#f2da5c',
        hover: '#e6cb3f',
        icon: '#b08413',
      },
    },
    visibilityColors: {
      visible: {
        main: '#fff',
        hover: '#bcc7cf',
        icon: '#ec6624',
      },
      notVisible: {
        main: '#fff',
        hover: '#bcc7cf',
        icon: '#82898f',
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
