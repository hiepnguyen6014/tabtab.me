import { FilterContext } from '@contexts';
import { useContext, useState } from 'react';
import { FMenuPopupSelect } from '../RealEstateFilterPopup/RealEstateFilterPopup.style';
import {
  BtnDeleteItemDark,
  FButtonArrow,
} from '../RealEstateFilterDesktop.style';
import dynamic from 'next/dynamic';

interface Props {
  idQuery: string;
  initValue?: string;
  placeholder?: string;
}
export const FContentItemPopup = (props: Props) => {
  const [isHovered, setIsHovered] = useState(true);

  const { onDeleteValue } = useContext(FilterContext);

  const showClose =
    isHovered && props.initValue ? (
      <BtnDeleteItemDark onClick={() => onDeleteValue(props.idQuery)} />
    ) : (
      <FButtonArrow />
    );
  const DynamicButton = dynamic(() =>
    import('../RealEstateFilterDesktop.style').then((mod) => mod.FButtonItem)
  );
  return (
    <FMenuPopupSelect
      onMouseMove={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <label>{props.initValue || props.placeholder}</label>
      <DynamicButton>{showClose}</DynamicButton>
    </FMenuPopupSelect>
  );
};
