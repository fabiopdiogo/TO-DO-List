import styled from "styled-components"
import { useState } from 'react'

import CreateTask from "../src/components/inputs/CreateTask"
import Cards from "../src/components/layout/Cards"
import Background from "../src/components/layout/Background"

function HomePage(){
 
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos,todo])    
    console.log(todo)
  };

  const deleteTodo = (id) => {   
    var filtered = todos.filter((todo) => todo.id != id)
    setTodos(filtered)
  }

 return(
    <div>
      <Background>          
        <CreateTask addTodo={addTodo}/>
        {
          todos.map((todo) =>(
            <Cards
             todo={todo}
             key={todo.id}
             deleteTodo={deleteTodo}
            />
          ))
        }
      </Background>
    </div>
  )
}

export default HomePage