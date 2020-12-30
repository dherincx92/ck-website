/**
 * Themes, per MaterialUI documentation.
 * Reference: https://material-ui.com/customization/globals/
 * author: derek663@gmail.com
 * last_updated: 12/30/2020
 */


import { createMuiTheme } from '@material-ui/core/styles';

/**
 * palette: defines color definitions of "primary" and "secondary"
 * typography: defines font-family, size, and all related attributes
 * props: overrides default properties of named component
 * overrides: used in conjuction with '@global' to define global settings
 */
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#ffffff"
        }
    },
    typography: {
        fontFamily: 'Montserrat, sans-serif'
    },
    props: {
        MuiAppBar: {
            color: 'transparent'
        }
    },
    overrides: {
        MuiCssBaseline: {
        '@global': {
            html: {
                backgroundColor: 'black',
            },
        },
      },
      MuiButton: {
        text: {
            fontSize: '20px',
            color: 'white'
        }
      }
    },
  });

  export default theme