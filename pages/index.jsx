import styled from "styled-components"
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { taskSchema } from '../modules/task/task.schema'
import Background from "../src/components/layout/Background"
import Checkbox from "../src/components/Checkbox/Checkbox"
import ControlledTextarea from "../src/components/inputs/ControlledTextarea"

import { joiResolver } from '@hookform/resolvers/joi'

const CardInput = styled.form`
  display: flex;
  width: 600px;
  height: 60px;
  background-color: white;  
  border-radius: 8px;
  align-items: center;
  margin-top: 150px;
`

function HomePage(){
  const { control,register, handleSubmit, formState: { isValid }, reset } = useForm({
    resolver: joiResolver(taskSchema),
    mode:'all'
  })
  
  const onSubmit = async (data) => {
    console.log(data)
  }

  return(
    <div>
      <Background>          
        <CardInput onSubmit={handleSubmit(onSubmit)}>
            <Checkbox />
            <ControlledTextarea
                type="text" 
                name="text"
                placeholder="Create a new todo..."
                control={control}
                maxLength="65"
            />
        </CardInput>
      </Background>
    </div>
  )
}

export default HomePage