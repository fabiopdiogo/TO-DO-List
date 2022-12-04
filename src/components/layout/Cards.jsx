import styled from "styled-components"
import { useState } from 'react'

import Checkbox from "../Checkbox/Checkbox"
import Delete from "../Delete/Delete"

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
  height: 60px;
  background-color: white;  
  border-radius: 8px 8px 0 0;
  align-items: center;
  border-bottom: solid;  
  border-color: #666464;

  color: ${props => props.checked ? '#9c9696f8' : 'black'};
  text-decoration: ${props => props.checked ? 'line-through' : 'none'};
`
const Text = styled.b`
  font-size: 14px;
`

function Post ({todo, deleteTodo}){

  const [checked, setChecked] = useState(false);

  const checkTodo = (checked) => {   
    setChecked(checked)
    console.log(checked)
  }

  return(
  <Card checked={checked}>
    <Checkbox todo={todo} checkTodo={checkTodo}/>
    <Text>{todo.text}</Text>
    <Delete todo={todo} deleteTodo={deleteTodo}/>
  </Card>
  )  
}

export default Post