import { createTheme } from '@mui/material'

const BREAKPOINTS = {
  lg: 1440,
  md: 1280,
  sm: 640,
  xl: 2160,
  xs: 0,
}

const theme = {
  palette: {
    background: {
      default: '#fbfbfb',
    },
    primary: {
      contrastText: '#FFF',
      main: '#21633f',
    },
    secondary: {
      contrastText: '#FFF',
      main: '#a939393',
    },
  },
  typography: {
    body: {
      '@media (min-width:1440px) and (max-width:2559px)': {
        fontSize: '1rem',
        lineHeight: '1.688rem',
      },
      '@media (min-width:2160px)': { fontSize: '1rem', lineHeight: '1.688rem' },
      '@media (min-width:640px) and (max-width:1439px)': {
        fontSize: '1rem',
        lineHeight: '1.625rem',
      },
      fontSize: '1rem',
      lineHeight: '1.563rem',
    },
    bodylarge: {
      '@media (min-width:1440px) and (max-width:2559px)': {
        fontSize: '1.313rem',
        lineHeight: '2.125',
      },
      '@media (min-width:2160px)': {
        fontSize: '1.313rem',
        lineHeight: '2.188rem',
      },
      '@media (min-width:640px) and (max-width:1439px)': {
        fontSize: '1.25rem',
        lineHeight: '2rem',
      },
      fontSize: '1.25rem',
      lineHeight: '1.938rem',
    },
    bodymedium: {
      '@media (min-width:1440px) and (max-width:2559px)': {
        fontSize: '1.125rem',
        lineHeight: '1.813rem',
      },
      '@media (min-width:2160px)': {
        fontSize: '1.125rem',
        lineHeight: '1.875rem',
      },
      '@media (min-width:640px) and (max-width:1439px)': {
        fontSize: '1.125rem',
        lineHeight: '1.75rem',
      },
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
    },
    bodysmall: {
      '@media (min-width:1440px) and (max-width:2559px)': {
        fontSize: '0.875rem',
        lineHeight: '1.5rem',
      },
      '@media (min-width:2160px)': {
        fontSize: '0.875rem',
        lineHeight: '1.5rem',
      },
      '@media (min-width:640px) and (max-width:1439px)': {
        fontSize: '0.875rem',
        lineHeight: '1.438rem',
      },
      fontSize: '0.875rem',
      lineHeight: '1.438rem',
    },
    caption: {
      fontSize: '0.813rem',
      fontWeight: '600',
      lineHeight: '1.25rem',
    },
    color: 'rgba(23,28,38,1)',
    fontFamily: 'Montserrat',
    fontWeight: '400',
    label: {
      fontSize: '0.875rem',
      fontWeight: '600',
      lineHeight: '1.25rem',
    },
    letterSpacing: '0px',
    small: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
    subtitle1: {
      '@media (min-width:1440px) and (max-width:2559px)': {
        fontSize: '1.688rem',
        lineHeight: '2.188rem',
      },
      '@media (min-width:2160px)': {
        fontSize: '1.75rem',
        lineHeight: '2.25rem',
      },
      '@media (min-width:640px) and (max-width:1439px)': {
        fontSize: '1.625rem',
        lineHeight: '2.063rem',
      },
      fontSize: '1.563rem',
      lineHeight: '2rem',
    },
    subtitle2: {
      '@media (min-width:1440px) and (max-width:2559px)': {
        fontSize: '1.188rem',
        fontWeight: '600',
        lineHeight: '1.625rem',
      },
      '@media (min-width:2160px)': {
        fontSize: '1.188rem',
        fontWeight: '600',
        lineHeight: '1.625rem',
      },
      '@media (min-width:640px) and (max-width:1439px)': {
        fontSize: '1.125rem',
        fontWeight: '600',
        lineHeight: '1.563rem',
      },
      fontSize: '1.125rem',
      fontWeight: '600',
      lineHeight: '1.563rem',
    },
    title1: {
      '@media (min-width:1440px) and (max-width:2559px)': {
        fontSize: '5.063rem',
        letterSpacing: '-0.025rem',
        lineHeight: '5.375rem',
      },
      '@media (min-width:2160px)': {
        fontSize: '6rem',
        letterSpacing: '-0.063rem',
        lineHeight: '6.5rem',
      },
      '@media (min-width:640px) and (max-width:1439px)': {
        fontSize: '3.938rem',
        letterSpacing: '-0.025rem',
        lineHeight: '4.25rem',
      },
      fontSize: '3.125rem',
      letterSpacing: '-0.025rem',
      lineHeight: '3.375rem',
    },
    title2: {
      '@media (min-width:1440px) and (max-width:2559px)': {
        fontSize: '3.375rem',
        lineHeight: '3.813rem',
      },
      '@media (min-width:2160px)': {
        fontSize: '3.75rem',
        letterSpacing: '-0.025rem',
        lineHeight: '4.25rem',
      },
      '@media (min-width:640px) and (max-width:1439px)': {
        fontSize: '2.938rem',
        lineHeight: '3.375rem',
      },
      fontSize: '2.625rem',
      lineHeight: '3rem',
    },
    title3: {
      '@media (min-width:1440px) and (max-width:2559px)': {
        fontSize: '2.438rem',
        lineHeight: '2.938rem',
      },
      '@media (min-width:2160px)': {
        fontSize: '2.625rem',
        lineHeight: '3.125rem',
      },
      '@media (min-width:640px) and (max-width:1439px)': {
        fontSize: '2.188rem',
        lineHeight: '2.563rem',
      },
      fontSize: '2rem',
      lineHeight: '2.313rem',
    },
  },
}

// Create a theme instance.
const muiTheme = createTheme({
  breakpoints: {
    values: BREAKPOINTS,
  },
  ...theme,
  components: {
    MuiButton: {
      defaultProps: {
        color: 'primary',

        disableElevation: true,
        disableRipple: true,
        size: 'medium',
        sx: {
          // '&.MuiButton-contained': {},
          '&.MuiButton-outlined': {
            paddingBottom: '0.3rem',
            // padding is added here differently than contained because the outlined button
            // has a border which sits outside the contained area and this makes the button looks larger
            // so the padding is reduced for contained
            paddingTop: '0.3rem',
          },
          borderRadius: '2px',
          borderWidth: '2px',
          fontSize: '1rem',
          fontWeight: '600',
        },
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          '&.MuiButton-contained': {
            '&:disabled': {
              background: 'rgba(22,24,29,0.38)',
              color: 'rgba(255,255,255,1)',
            },
            '&:hover': {
              background: '#27CA7D',
            },
          },
          '&.MuiButton-outlined': {
            '&:disabled': {
              borderColor: 'rgba(22, 24, 29, 0.38)',
              color: 'rgba(22, 24, 29, 0.38)',
            },
            '&:hover': {
              border: '2px solid #27CA7D',
            },
          },
          '&.MuiButton-sizeSmall': {
            fontSize: '0.875rem',
          },
          '&:focus': {
            borderColor: 'rgba(227,228,230, 0.8)',
          },
          textTransform: 'none',
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: 'primary',
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          '&checked': {
            color: '#27CA7D',
          },
          color: 'rgba(22,25,29,0.2)',
          transform: 'scale(0.8)',
        },
      },
    },
    MuiCssBaseline: {},
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '0px',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '0px',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: '0px',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 2,
          marginRight: 0,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          padding: '0.75rem 0.5rem',
        },
        root: {
          '& fieldset': {
            borderRadius: `2px`,
          },
        },
      },
    },

    // newch circ-prog
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '0px',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '&$checked': {
            color: '#27CA7D',
          },
          color: 'rgba(22,25,29,0.2)',
          transform: 'scale(0.8)',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: 'body1',
        variantMapping: {
          body1: 'p',
          body2: 'p',
          h1: 'h1',
          h2: 'h2',
          subtitle1: 'h1',
          subtitle2: 'h3',
        },
      },
    },
  },
})

export default muiTheme
