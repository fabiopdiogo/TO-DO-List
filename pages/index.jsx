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

  const TodosContainer = styled.div`
    display: flex;
    flex-direction: column;
  `
  const Bottom =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 600px;
    height: 60px;
    background-color: white;  
    border-radius: 0 0 8px 8px ;    
  `
  const ItemsLeft = styled.b`
    margin-left:10px;
    font-size: 11px;
  `
  const Mid = styled.div`
    display:flex;
    flex-direction: row;
    gap:25px;
  `
  const Todos = styled.h4`
  `
  const Ativos = styled.h4`
  `
  const Feitos = styled.h4`
  `
  const Clear = styled.h5`
    margin-right:10px;
  `
  

 return(
    <div>
      <Background>      
          <CreateTask addTodo={addTodo}/>
          <TodosContainer>
            {
              todos.map((todo) =>(
                <Cards
                todo={todo}
                key={todo.id}
                deleteTodo={deleteTodo}
                />
              ))
            }
            {
              todos.length > 0 &&
              <Bottom>          
                <ItemsLeft>{todos.length} pendentes </ItemsLeft>
                <Mid>
                    <Todos>Todos</Todos>
                    <Ativos>Ativos</Ativos>
                    <Feitos>Feitos</Feitos>
                </Mid>
                <Clear>Limpar Feitos</Clear>
              </Bottom>

            }
            
          </TodosContainer>     
      </Background>
    </div>
  )
}

export default HomePage