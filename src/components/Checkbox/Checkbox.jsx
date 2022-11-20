import {useState} from 'react';

import
{
   CheckboxContainer,
   HiddenCheckbox,
   StyledCheckbox,
   Text
} from './styles';

function Checkbox() {
  const [checked, setChecked] = useState(false);
   
   function handleCheckboxChange(){
      setChecked(!checked);
   }
   return (
    <CheckboxContainer 
      checked={checked}
      onClick={handleCheckboxChange}
    >
    <HiddenCheckbox 
      onChange={handleCheckboxChange}
      checked={checked}
    />
    <StyledCheckbox 
         checked={checked}
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