import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const X = styled.img`
  cursor: pointer;
`

const StyledContainerMenu = styled.div`
  position: relative;  
  padding-right: 15px;
`

const Delete = ({todo, deleteTodo}) => {
  
  return (
    <StyledContainerMenu>
      <X src="/icon-cross.svg" height="20px" onClick={() => deleteTodo(todo.id)} />     
    </StyledContainerMenu>
  )
}

export default Delete