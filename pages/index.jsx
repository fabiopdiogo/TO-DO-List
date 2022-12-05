import styled from "styled-components"
import { useState } from 'react'

import CreateTask from "../src/components/inputs/CreateTask"
import Cards from "../src/components/layout/Cards"
import Background from "../src/components/layout/Background"

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
    cursor: pointer;
  `
  const Ativos = styled.h4`
    cursor: pointer;
  `
  const Feitos = styled.h4`
    cursor: pointer;
  `
  const Clear = styled.h5`
    margin-right:10px;
    cursor: pointer;    
  `

function HomePage(){
 
  const [todos, setTodos] = useState([]);
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);

  const addTodo = (todo) => {
    setTodos([...todos,todo])    
  };

  const deleteTodo = (id) => {   
    var filtered = todos.filter((todo) => todo.id != id)
    setTodos(filtered)
  }

  const setCheck = (id) => {   
    todos.find((todo) =>{
      if (todo.id === id){
        var value = todo.checked
        todo.checked = !value
      }
    })
    
  }
  const showTodos = (value) => {  
    if(value == 'All'){
      setAll(true)
      setActive(false)
      setDone(false)
    } 
    if(value == 'Active'){
      setAll(false)
      setActive(true)
      setDone(false)
    }
    if(value == 'Done'){
      setAll(false)
      setActive(false)
      setDone(true)
    }
  }  

 return(
    <div>
      <Background>      
          <CreateTask addTodo={addTodo}/>
          <TodosContainer>           
            {              
              all && todos.map((todo) =>(
                <Cards
                todo={todo}
                key={todo.id}
                deleteTodo={deleteTodo}
                setCheck={setCheck}
                />
              ))
            }
            {              
              active && 
              todos.map((todo) =>{                
                console.log(todo)                
                var aux = todo.checked
                console.log(aux === false)
                if(aux === false){                  
                  <Cards
                    todo={todo}
                    key={todo.id}
                    deleteTodo={deleteTodo}
                    setCheck={setCheck}
                  />
                }      
              })
            }    
            {              
              done && 
              todos.map((todo) =>{
                console.log(todo)                
                var aux = todo.checked
                console.log(aux === true)
                if(aux === true){                  
                  <Cards
                  todo={todo}
                  key={todo.id}
                  deleteTodo={deleteTodo}
                  setCheck={setCheck}
                  />
                }           
                
              })
            }                    
            {              
              <Bottom>          
                <ItemsLeft>{todos.length} pendentes </ItemsLeft>
                <Mid>
                    <Todos onClick={() => showTodos('All')}>Todos</Todos>
                    <Ativos onClick={() => showTodos('Active')}>Ativos</Ativos>
                    <Feitos onClick={() => showTodos('Done')}>Feitos</Feitos>
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