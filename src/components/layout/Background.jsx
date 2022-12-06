import styled from "styled-components"
import
{
    StyledContainer
} from './BackgroundStyle.jsx';


function Background({children,mode}){
  return(
    <StyledContainer mode={mode}>
      {children}
    </StyledContainer>
  )
}

export default Background