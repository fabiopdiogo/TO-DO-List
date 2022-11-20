import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  font-family: 'Montserrat', sans-serif;

  body{
    padding: 0;
    margin: 0;
  }
`

function App ({ Component, pageProps }) {
  
  return (
    <>
        <GlobalStyle />
        <Component {...pageProps} />
    </>    
  )
}

export default App