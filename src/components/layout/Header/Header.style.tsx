import { Button, Col, Row, Select, Typography } from 'antd';

import Image from 'next/image';
import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';
import { styled } from '@styles/theme';

const COLOR_LIGHT = '#fff';
const COLOR_DARK = '#222222';
const changeTheme = (theme: string) => {
  return theme == 'true' ? COLOR_LIGHT : COLOR_DARK;
};

export const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-left: 50px;
  align-items: center;
  position: relative;
  & > span {
    cursor: pointer;
    position: absolute !important;
    top: 0%;
    left: 0;
    width: 130px !important;
    height: 36% !important;
  }
  @media ${device.maxMd} {
    height: 60px;
    width: 100px;
    & > span {
      position: relative !important;
      height: 50% !important;
    }
  }
`;

export const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 99;
  color: ${COLOR_LIGHT};
  font-size: 18px;
  @media ${device.maxMd} {
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1) !important;
    background-color: transparent;
    border: none;
    top: 3%;
  }
`;

export const MainContentDesktop = styled.div`
  max-width: 1300px;
  width: 90%;
  height: 101px;
  margin: auto;
  display: grid;
  grid-template-columns: 16%49%35%;
  justify-content: space-between;
  align-items: center;

  @media ${device.maxLg} {
    grid-template-columns: 18%50%30%;
  }
  @media ${device.maxMd} {
    display: none;
  }
`;
export const MainMobile = styled.div`
  margin: auto;
  width: 95%;
  top: 0;
  width: 100%;
  z-index: 99;
  margin: 10px;
  height: 51px;
  display: none;
  @media ${device.maxMd} {
    display: block;
  }
`;

export const LinksWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5%;
  width: 100%;
  min-width: 250px;
  height: 100%;
  color: ${(props) => changeTheme(props.typeof)};
  a {
    position: relative;
    padding: 0;
    color: ${(props) => changeTheme(props.typeof)};
    white-space: nowrap;
  }
  [typeof='current'] {
    &:after {
      content: '';
      position: absolute;
      top: -34px;
      left: -12%;
      width: 120%;
      height: 3px;
      background: ${colors.common};
    }
  }
`;

export const TabTabWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 3%;
  width: 100%;
  min-width: 250px;
  height: 100%;
  color: ${(props) => changeTheme(props.typeof)};
  a {
    position: relative;
    padding: 0;
    color: ${(props) => changeTheme(props.typeof)};
    white-space: nowrap;
  }
  [typeof='current'] {
    &:after {
      content: '';
      position: absolute;
      top: -34px;
      left: -12%;
      width: 120%;
      height: 3px;
      background: ${colors.common};
    }
  }
`;

export const HeaderAction = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  gap: 5%;
`;

export const HeaderButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 10px;
  background: transparent !important;
  box-shadow: none !important;
  height: 40px;
  color: ${COLOR_LIGHT};
`;

// UserAction

export const ManagerPost = styled(HeaderButton)`
  border: 1px solid ${(props) => changeTheme(props.typeof)};
  color: ${(props) => changeTheme(props.typeof)};
  svg > path {
    fill: ${(props) => changeTheme(props.typeof)};
  }
  @media (max-width: 1190px) {
    display: none;
  }
`;
export const Post = styled(HeaderButton)`
  background: ${colors.common} !important;
  &:hover {
    border: 1px solid ${colors.common};
    color: #fff;
  }
  @media (max-width: 970px) {
    display: none;
  }
`;
export const Account = styled(HeaderAction)`
  gap: 5px;
  cursor: pointer;
  height: 50%;
  position: relative;
  vertical-align: middle;
`;
export const TextUserName = styled.span`
  a {
    color: ${(props) => changeTheme(props.typeof)};
  }
  color: ${(props) => changeTheme(props.typeof)};
  cursor: pointer;
  user-select: none;
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DropdownAccount = styled.div`
  background: ${COLOR_LIGHT};
  a{
    color:#222222;
  }
  min-width: 200px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.12),
    0px 9px 10px 1px rgba(0, 0, 0, 0.05);
  filter: drop-shadow(0px 6px 16px rgba(0, 0, 0, 0.08));
`;
export const DropdownItem = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 15%75%10%;
  align-items: center;
  padding: 10px;
`;

export const ManagerPostInDrop = styled.div`
  display: none;
  width: 100%;
  svg > path {
    fill: #222222;
  }
  @media (max-width: 1190px) {
    display: block;
  }
`;

export const PostInDrop = styled(ManagerPostInDrop)`
  display: none !important;
  @media (max-width: 970px) {
    display: block !important;
  }
`;

export const TextPost = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

// END-USER ACTION

//MOBILE
export const MainContentMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const RowContentMobile = styled(Row)`
  width: 100vw;
`;

export const ColContentMobile = styled(Col)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SearchMobile = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  height: 40px;
  border: 1px solid #e9e9e9;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 56px;
  box-sizing: border-box;
  position: absolute;
  background: #ffffff;
  top: 0%;
  bottom: 0%;
  .vertical-line-search {
    background: #a7a7a7;
    border-radius: 37px;
    width: 2px;
    height: 16px;
  }
  .inputSearch {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    border: none;
    width: 100%;

    &:focus-visible {
      outline: none;
    }
  }
`;

export const ButtonOnSearch = styled.button`
  width: 32px;
  overflow: hidden;
  height: 32px;
  border: none;
  border-radius: 100px;
  background: #f9c41f;
  color: #fff !important;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  line-height:12px;
  svg {
    path {
      fill: #fff;
    }
  }
  &:hover{
    color: #ffff !important;
  }
`;

export const TextWrap = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  .text-select{
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #4E4E4E;
  }
  .text-search{
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #7A7A7A;
  }
`
export const ButtonWrap = styled(props => <div {...props} />)`
  display:flex;
  padding: 5px;
  align-items: center;
  border-radius: 8px;
  margin-bottom:15px;
  &:hover{
    background-color: #0000000D
  }
`
export const ButtonWrapLogin = styled(props => <div {...props} />)`
  display:flex;
  padding: 10px;
  align-items: center;
  background-color: #F9C41F;
  border-radius: 8px;
  margin-bottom: 14px;
  justify-content: center;
  &:hover{
    background-color: #F9C41F
  }
`
