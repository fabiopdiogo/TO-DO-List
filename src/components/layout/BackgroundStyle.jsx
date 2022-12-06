import styled from "styled-components"

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height:100vh;    
  background-image: url('/bg-desktop-light.jpg');    
  background-repeat: no-repeat;
  flex-direction: column;
  background-size: 100% 50%;    
  background-color:${props => props => props.mode ? props.theme.lightBackground : props.theme.blackBackground};
`