import styled from "styled-components"

import Checkbox from "../Checkbox/Checkbox"
import Delete from "../Delete/Delete"

const CardInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
  height: 60px;
  background-color: white;  
  border-radius: 8px 8px 0 0;
  align-items: center;
  margin-top: 150px;
  border-bottom: solid;  
  border-color: grey;
`
function Post ({todo, deleteTodo}){
  return(
  <CardInput>
    <Checkbox/>
    {todo.text}
    <Delete todo={todo} deleteTodo={deleteTodo}/>
  </CardInput>
  )  
}

export default Post