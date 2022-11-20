import styled from "styled-components"

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height:100vh;  
  background-image: url('/bg-desktop-light.jpg');    
  background-repeat: no-repeat;
  flex-direction: column;
  background-size: 100% 40%;
    
`


function Background({children}){
  return(
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export default Background