import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const X = styled.img`
  cursor: pointer;
`

const StyledContainerMenu = styled.div`
  position: relative;  
  padding-right: 5px;
`

const Delete = ({todo, deleteTodo}) => {
  const [show, setShow] = useState(false)
  const menuRef = useRef(null)
  
  return (
    <StyledContainerMenu>
      <X src="/icon-cross.svg" height="20px" onClick={() => deleteTodo(todo.id)} />     
    </StyledContainerMenu>
  )
}

export default Delete