import { FilterContext } from '@contexts';
import { useContext, useEffect, useState } from 'react';
import {  BtnDeleteItemLight, FButtonArrow, FButtonDropdown, FButtonItem } from '../RealEstateFilterDesktop.style';

interface Props {
  idQuery:string;
  initValue?: string;
  placeholder?:string
}
export const FContentItem = (props: Props) => {
  
  const [isClick, setIsClick] = useState(false);

  const {
    onDeleteValue
  } = useContext(FilterContext);

  const showClose =
    isClick && props.initValue  ? <BtnDeleteItemLight onClick={()=> onDeleteValue(props.idQuery)}/> : <FButtonArrow />;
  
    return(
      <FButtonDropdown onClick={()=>setIsClick(true)} onMouseLeave={()=>setIsClick(false)}>
          <label>{props.initValue || props.placeholder}</label>
          <FButtonItem >
              {showClose}
          </FButtonItem>
      </FButtonDropdown>
  )
};
