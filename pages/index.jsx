import styled from "styled-components"
import Background from "../src/components/layout/Background"
import Checkbox from "../src/components/Checkbox/Checkbox"

const CardInput = styled.div`
  display: flex;
  width: 600px;
  height: 60px;
  background-color: white;  
  border-radius: 8px;
`

function HomePage(){
  return(
    <div>
      <Background>          
        <CardInput>
            <Checkbox />
            <p>Hello World</p>
        </CardInput>
      </Background>
    </div>
  )
}

export default HomePage