import styled from "styled-components"
import { useState } from 'react'

import Checkbox from "../Checkbox/Checkbox"
import Delete from "../Delete/Delete"

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
  height: 60px;
  background-color:${props => props.mode ? props.theme.white : props.theme.blackCard};
  border-radius: 8px 8px 0 0;
  align-items: center;
  border-bottom: solid;  
  border-color: #666464;  
`
const Text = styled.p`  
  margin-right: 450px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px; 
  
  color: ${props => props.colorText};  
  text-decoration: ${props => props.checked ? 'line-through' : 'none'};
`

function Post ({todo, deleteTodo,setCheck,mode}){

  const [checked, setChecked] = useState(todo.checked);

  const checkTodo = (checked) => {   
    setCheck(todo.id)
    setChecked(checked)
  }

  var colorText = () =>{
    if(mode){
      if(checked === true){
        return '#9c9696f8'
      }else 'black'      
    }
    else{
      if(checked === true){
        return '#9c9696f8'
      }else return 'white'
    }
  } 

  return(
  <Card mode={mode}>
    <Checkbox checked={todo.checked} checkTodo={checkTodo}/>
    <Text checked={checked} colorText={colorText}>{todo.text}</Text>
    <Delete todo={todo} deleteTodo={deleteTodo}/>
  </Card>
  )  
}

export default Post