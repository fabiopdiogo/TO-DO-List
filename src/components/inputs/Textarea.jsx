import styled from 'styled-components'

const Textarea = styled.input`
  resize: none;
  width: 100%;
  height: 60px;  
  border:none;
  box-sizing: border-box;
  border-radius: 10px;  
  background-color: ${props => props.theme.inputBackground};
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;  
`
export default Textarea
