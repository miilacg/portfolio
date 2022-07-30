import { ThemeProvider } from '@mui/material/styles';

import { theme } from '../materialui/theme';

import Footer from '../components/Footer'
import Header from '../components/Header'

import '../styles/globals.scss'


export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={ theme }>
      <Header />
      <Component { ...pageProps } />
      <Footer />
    </ThemeProvider>
  )
}