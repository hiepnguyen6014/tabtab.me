import { IconArrowDown, IconCloseCircle } from '@root/public/icons';
import { styled } from '@styles/theme';
import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';
import { Button, Dropdown, Input, Menu, Select } from 'antd';

export const FDesktop = styled.div`
  display: grid;
  grid-template-columns: 13%13%13%13%13%13%22%;
  height: 64px;
  position: relative;
  max-width: 1200px;
  width: 95%;
  background-color: ${colors.common};
  margin: auto;
  @media ${device.maxMd} {
    display: none;
  }
`;

export const BtnDeleteItemDark = styled(IconCloseCircle)`
  path {
    fill-opacity: 1;
  }
`;

export const BtnDeleteItemLight = styled(IconCloseCircle)``;

export const FButtonArrow = styled(IconArrowDown)`
  path {
    fill: #fff;
  }
`;
export const FButtonItem = styled.div`
  position: absolute;
  right: 5%;
`;

export const FDropdown = styled((props: any) => (
  <Dropdown trigger={['click']} placement="bottomLeft" {...props} />
))`
  padding-left: 10px;
  cursor: pointer;
  &:first-of-type {
    padding-left: 0;
  }
`;

export const FButtonDropdown = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  border-right: 1px solid rgba(236, 240, 241, 0.5);
  padding-right: 10px;
  cursor: pointer;
  user-select: none;
  position: relative;
  label {
    width: 90%;
    cursor: pointer;
  }
  svg {
    path {
      fill: #fff;
    }
  }
`;

export const FMenuDropdown = styled(Menu)`
  max-height: 300px !important;
  max-width: 250px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #d91f35;
  }
`;

export const FMenuItem = styled(Menu.Item)``;

// FSlider
export const FSliderWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
  padding: 10px;
`;
export const FSliderValue = styled.div`
  display: grid;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 45%4%45%;
  span {
    text-align: center;
  }
`;
export const FSliderValueOption = styled(Input)`
  width: 100%;
  height: 100%;
  text-align: center;
  border: 1px solid #222222;
`;
