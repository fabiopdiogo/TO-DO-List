import {useState} from 'react';

import
{
   CheckboxContainer,
   HiddenCheckbox,
   StyledCheckbox,
   Text
} from './styles';

function Checkbox({checked,checkTodo}) {

   const [checked2, setChecked2] = useState(checked);

   function handleCheckboxChange(){      
      checkTodo(!checked)
      setChecked2(!checked)
   }
   return (
    <CheckboxContainer 
      checked={checked2}
      onClick={handleCheckboxChange}
    >
    <HiddenCheckbox 
      onChange={handleCheckboxChange}
      checked={checked2}
    />
    <StyledCheckbox 
         checked={checked2}
         onChange={handleCheckboxChange}
      >
         <img
            alt="tick icon"
            style={{width: '15px'}}
            src={'/icon-check.svg'}
         />
      </StyledCheckbox>
    </CheckboxContainer>
   )
}
export default Checkbox;