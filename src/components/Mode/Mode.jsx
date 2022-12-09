import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const X = styled.img`
  cursor: pointer;
`

const StyledContainerMenu = styled.div`
  position: relative;  
  padding-right: 15px;
`

const Mode = ({handleMode,mode}) => {
  
  var image = '' 
  
  {mode ? image = "/icon-moon.svg" : image = "/icon-sun.svg"}
  
  return (
    <StyledContainerMenu>
      <X src={image} height="20px" onClick={() => handleMode()} />     
    </StyledContainerMenu>
  )
}

export default Mode