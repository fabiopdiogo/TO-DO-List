import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    background-color: hsl(0, 11.764705882352903%, 93.33333333333333%);
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