import { createTheme } from '@mui/material/styles';

import * as appStyles from './styles';


export const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 16,
    color: appStyles.text,
    caption: appStyles.caption
  },    

  components: {
    MuiLink: {
      defaultProps: appStyles.link,

      styleOverrides: {
        root: {
          textDecoration: 'none',
          '&:focus': {      
            outline: 'none'
          },
          '&:first-child': {
            margin: '0 .46875rem 0 0'
          },
          '&:last-child': {
            margin: '0 0 0 .46875rem'
          },            
          '&:hover': {
            color: appStyles.laranja
          },            
          '&:active': {
            color: appStyles.laranja
          }
        }
      }
    },

    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1', h2: 'h2', h3: 'h3',
          h4: 'h4', h5: 'h5', h6: 'h6',
          subtitle1: 'p', subtitle2: 'p',
          body1: 'p', body2: 'p', caption: 'p',
        },
      },
    }
  }
});