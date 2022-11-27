import styled from "styled-components"
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'

import { taskSchema } from '../modules/task/task.schema'
import Background from "../src/components/layout/Background"
import Checkbox from "../src/components/Checkbox/Checkbox"
import ControlledTextarea from "../src/components/inputs/ControlledTextarea"

import Cards from "../src/components/layout/Cards"

const CardInput = styled.form`  
  font-family: 'Montserrat', sans-serif;
  display: flex;
  width: 600px;
  height: 60px;
  background-color: white;  
  border-radius: 8px;
  align-items: center;
  margin-top: 150px;
`

function HomePage(){
  const { control, register, handleSubmit, formState: { isValid }, reset } = useForm({
    resolver: joiResolver(taskSchema)
  })
  
  const onSubmit = async (data) => {
    console.log(data)
    reset()
  }

  return(
    <div>
      <Background>          
        <CardInput onSubmit={handleSubmit(onSubmit)}>
            <Checkbox />
            <ControlledTextarea
                type="text" 
                name="todo"
                placeholder="Create a new todo..."
                control={control}
                maxLength="65"
            />
        </CardInput>

        <div>
          <Cards />
        </div>
      </Background>
    </div>
  )
}

export default HomePage