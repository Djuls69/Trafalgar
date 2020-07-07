import { createMuiTheme } from '@material-ui/core/styles'

const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#67C3F3',
      dark: '#5A98F2'
    }
  },
  spacing: 10,
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: '4.8rem',
      lineHeight: 1.2
    },
    h2: {
      fontWeight: '700',
      fontSize: '3.6rem',
      lineHeight: '1.2'
    },
    h3: {
      fontWeight: '700',
      fontSize: '2.4rem',
      lineHeight: '1.8'
    },
    h4: {
      fontWeight: '700',
      fontSize: '2.2rem',
      lineHeight: '2.1'
    },
    h5: {
      fontWeight: '700',
      fontSize: '2.1rem',
      lineHeight: '1.6'
    },
    fontFamily: "'Muli', sans-serif",
    fontWeightLight: '300',
    fontWeightRegular: '400',
    fontWeightMedium: '600',
    fontWeightBold: '700',
    body1: {
      fontFamily: "'Muli', sans-serif",
      fontWeight: '300',
      fontSize: '2.1rem',
      lineHeight: '1.8',
      letterSpacing: '0.00938em'
    },
    body2: {
      fontFamily: "'Muli', sans-serif",
      fontWeight: '300',
      fontSize: '1.6rem',
      lineHeight: '1.8',
      letterSpacing: '0.00938em',
      color: '#7d7987'
    },
    button: {
      fontWeight: '700',
      fontSize: '1.8rem',
      textTransform: 'initial'
    }
  }
})

export default customTheme
