import styled from "styled-components"
import { useState } from 'react'

import CreateTask from "../src/components/inputs/CreateTask"
import Cards from "../src/components/layout/Cards"
import Background from "../src/components/layout/Background"
import Modo from "../src/components/Mode/Mode"

  const Main = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1000px;
  `
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
    background-color: ${props => props.mode ? props.theme.white : props.theme.blackCard};
    color: ${props => props.mode ? props.theme.blackCard : props.theme.white};
    border-radius: 0 0 8px 8px ;   

    @media (max-width: 670px){
      width: 500px;
    }  
    @media (max-width: 530px){
      width: 350px;

    } 
  `
  const ItemsLeft = styled.b`
    margin-left:10px;
    font-size: 11px;
  `
  const Mid = styled.div`
    display:flex;
    flex-direction: row;
    gap:25px;

    @media (max-width: 530px){
      gap:10px;
  } 
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
  const H1 = styled.h1`
    font-size: 40px;
    color:${props => props.theme.white};
  `
  const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `

function HomePage(){
 
  const [todos, setTodos] = useState([]);
  const [all, setAll] = useState(true);
  const [active, setActive] = useState(false);
  const [done, setDone] = useState(false);
  const [mode, setMode] = useState(true);

  const handleMode = () => {
    setMode(!mode)
    console.log(mode)    
  };

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
  const clearCompleted = () => {   
    var filtered = todos.filter((todo) => todo.checked != true)
    setTodos(filtered)
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
      <Background mode={mode}>      
        <Main>
          <Header>
            <H1>T O D O</H1>
            <Modo handleMode={handleMode} mode={mode}/>
          </Header>          
          <CreateTask addTodo={addTodo} mode={mode}/>
          <TodosContainer>           
            {              
              all && todos.map((todo) =>(
                <Cards
                todo={todo}
                key={todo.id}
                deleteTodo={deleteTodo}
                setCheck={setCheck}
                mode={mode}
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
                  return(<Cards
                    todo={todo}
                    key={todo.id}
                    deleteTodo={deleteTodo}
                    setCheck={setCheck}
                  />)
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
                  return(<Cards
                  todo={todo}
                  key={todo.id}
                  deleteTodo={deleteTodo}
                  setCheck={setCheck}
                  />)
                }           
                
              })
            }                    
            {              
              <Bottom mode={mode}>          
                <ItemsLeft>{todos.length} pendentes </ItemsLeft>
                <Mid>
                    <Todos onClick={() => showTodos('All')}>Todos</Todos>
                    <Ativos onClick={() => showTodos('Active')}>Ativos</Ativos>
                    <Feitos onClick={() => showTodos('Done')}>Feitos</Feitos>
                </Mid>
                <Clear onClick={() => clearCompleted()}>Limpar Feitos</Clear>
              </Bottom>
            }
          
            
          </TodosContainer> 
        </Main>    
      </Background>
    </div>
  )
}

export default HomePage