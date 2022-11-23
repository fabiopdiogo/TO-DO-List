import styled from "styled-components"
import { useState } from 'react'
import Background from "../src/components/layout/Background"
import Checkbox from "../src/components/Checkbox/Checkbox"
import ControlledTextarea from "../src/components/inputs/ControlledTextarea"

const CardInput = styled.form`
  display: flex;
  width: 600px;
  height: 60px;
  background-color: white;  
  border-radius: 8px;
  align-items: center;
  margin-top: 150px;
`


function HomePage(){
  const [todo, setTodo] = useState('')
  const handleForm = (event) => {
    event.preventDefault()
    console.log(todo)
  }
  return(
    <div>
      <Background>          
        <CardInput onSubmit={handleForm}>
            <Checkbox />
            <ControlledTextarea
                type="text"
                label="New_Todo" 
                placeholder="Create a new todo..."
                onChange={(event) => {setTodo(event.target.value)}}
            />
        </CardInput>
      </Background>
    </div>
  )
}

export default HomePage