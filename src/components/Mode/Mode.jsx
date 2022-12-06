import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const X = styled.img`
  cursor: pointer;
`

const StyledContainerMenu = styled.div`
  position: relative;  
  padding-right: 15px;
  margin-top: 80px;
`

const Mode = ({todo, handleMode}) => {
  
  return (
    <StyledContainerMenu>
      <X src="/icon-moon.svg" height="20px" onClick={() => handleMode()} />     
    </StyledContainerMenu>
  )
}

export default Mode