import { createGlobalStyle,ThemeProvider } from 'styled-components'

import theme from '../src/theme'

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
   
    font-family: 'Montserrat', sans-serif;
  }
`

function App ({ Component, pageProps }) {
  
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </>    
  )
}

export default App