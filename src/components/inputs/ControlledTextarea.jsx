import { useController } from 'react-hook-form'
import styled from 'styled-components'
import Textarea from './Textarea'



function ControlledTextarea ({...props}){
  return(
    <Textarea {...props} />
  )
}

export default ControlledTextarea