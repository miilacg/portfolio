import { createTheme } from '@mui/material/styles';

import * as appStyles from './styles';


export const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif",
    color: appStyles.text,
    fontSize: 16,    
    fontWeight: '400',

    caption: appStyles.caption,
    h1: appStyles.h1,
    h2: appStyles.h2,
    h3: appStyles.h3,
    h5: appStyles.h5,
    subtitle2: appStyles.subtitle2
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
          h5: 'h5', h6: 'h6', subtitle2: 'p',
          body1: 'p', body2: 'p', caption: 'p',
        },
      },
    }
  }
});