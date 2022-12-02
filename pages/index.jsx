import styled from "styled-components"
import { useState } from 'react'

import CreateTask from "../src/components/inputs/CreateTask"
import Cards from "../src/components/layout/Cards"
import Background from "../src/components/layout/Background"

function HomePage(){
 
  const [todos, setTodos] = useState([]);

  const todoHandler = (todo) => {
    setTodos([...todos,todo])    
    console.log(todo)
  };

 return(
    <div>
      <Background>          
        <CreateTask todoHandler={todoHandler}/>
        {
          todos.map((todo) =>(
            <Cards/>
          ))
        }
      </Background>
    </div>
  )
}

export default HomePage