import styled from 'styled-components'

const Textarea = styled.input`
  resize: none;
  width: 100%;
  height: 60px;  
  border:none;  
  outline: 0;
  box-sizing: border-box;
  border-radius: 10px;  
  background-color: ${props => props.mode ? props.theme.white : props.theme.blackCard};
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;  
  color: ${props => props.mode ? props.theme.blackCard : props.theme.white};
`
export default Textarea
