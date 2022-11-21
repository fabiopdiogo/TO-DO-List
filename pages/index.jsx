import styled from "styled-components"
import Background from "../src/components/layout/Background"
import Checkbox from "../src/components/Checkbox/Checkbox"
import ControlledTextarea from "../src/components/inputs/ControlledTextarea"

const CardInput = styled.div`
  display: flex;
  width: 600px;
  height: 60px;
  background-color: white;  
  border-radius: 8px;
  align-items: center;
  margin-top: 150px;
`

function HomePage(){
  return(
    <div>
      <Background>          
        <CardInput>
            <Checkbox />
            <ControlledTextarea
              type="text"
              name="new_task" 
              id="new_task" 
              placeholder="Create a new todo..."
              />
        </CardInput>
      </Background>
    </div>
  )
}

export default HomePage