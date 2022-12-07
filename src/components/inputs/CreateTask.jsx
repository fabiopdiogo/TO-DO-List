import styled from "styled-components"
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import Checkbox from "../Checkbox/Checkbox"
import { taskSchema } from '../../../modules/task/task.schema'
import ControlledTextarea from '../inputs/ControlledTextarea'

const CardInput = styled.form`  
  font-family: 'Montserrat', sans-serif;
  display: flex;
  width: 600px;
  height: 60px;
  background-color: ${props => props.mode ? props.theme.white : props.theme.blackCard};
  border-radius: 8px;
  align-items: center;
  margin-bottom: 50px;
`


function CreateTask({addTodo,mode}){
  const { control, register, handleSubmit, formState: { isValid }, reset } = useForm({
    resolver: joiResolver(taskSchema)
  })
 
  const [text, setText] = useState(null)
  const [id, setId] = useState(0)  
  const [checked, setChecked] = useState(false);

  const onSubmit = async (data) =>{   
     const todoObj = { text: data.todo, id: id, checked: checked }
     setId(id + 1)
     addTodo(todoObj)
     reset()
  }
  return(
    <CardInput onSubmit={handleSubmit(onSubmit)} mode={mode}>
        <Checkbox />
        <ControlledTextarea
            type="text" 
            name="todo"
            control={control}
            placeholder="Create a new todo..."
            maxLength="65"            
            mode={mode}
        />       
   </CardInput>
  )

}

export default CreateTask