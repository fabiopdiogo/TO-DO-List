import styled from "styled-components"

import Checkbox from "../Checkbox/Checkbox"

const CardInput = styled.div`
  display: flex;
  width: 600px;
  height: 60px;
  background-color: white;  
  border-radius: 8px 8px 0 0;
  align-items: center;
  margin-top: 150px;
  border-bottom: solid;  
  border-color: grey;
`
function Post ({text}){
  return(
  <CardInput>
    <Checkbox/>
    {text}
  </CardInput>
  )  
}

export default Post