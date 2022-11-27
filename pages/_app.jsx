import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    background-color: hsl(0, 0%, 98%);
    font-family: 'Montserrat', sans-serif;
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