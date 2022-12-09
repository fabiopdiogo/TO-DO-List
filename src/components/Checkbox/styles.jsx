import styled from 'styled-components';
export const CheckboxContainer = styled.div`
   margin: 0px 10px;
   border-radius: 5px;
   
   
   display: flex;
   align-items: center;
`;

export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
   overflow: hidden;
   white-space: nowrap;width: 1px;
   height: 1px;
   margin: -1px;
   padding: 0;
   
`;

export const Text = styled.label`
   color: ${props => props.checked ? '#FFF' : '#555'};
`;

export const StyledCheckbox = styled.label`
   width: 23px;
   height: 23px;
   margin-right: 6px;
   border-radius: 50%;
   background: #f6f6f6;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: ${props => props.checked ? 'hsl(280, 87%, 65%)' : '#E5E5E5'};
   cursor: pointer;

   img {
      display: ${props => props.checked ? 'flex' : 'none'};
      filter: invert(75%) sepia(11%) saturate(6042%) hue- rotate(30deg) brightness(105%) contrast(68%);
   }
`;