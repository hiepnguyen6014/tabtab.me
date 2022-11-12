import { styled } from '@styles/theme';
import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';
import { Button, Col, Menu, Radio, Row, Typography } from 'antd';

export const FDesktop = styled(props => <div {...props} />)`
  position: relative;
  max-width: 1200px;
  width: 95%;
  margin: auto;
  ${props =>
    props.grid
      ? {
          'grid-template-columns': '65% 30%',
          display: 'grid',
        }
      : {
          'grid-template-columns': '',
        }}
  margin: auto;
  justify-content: space-between;
  column-gap: 10px;
  grid-row-gap: 20px;
  @media ${device.maxLg} {
    grid-template-columns: 100%;
  }
  @media ${device.maxMd} {
    grid-template-columns: 100%;
  }
  @media ${device.maxSm} {
    grid-template-columns: 100%;
  }
`;

export const FDesktopSecond = styled(props => <div {...props} />)`
  position: relative;
  max-width: 1200px;
  width: 95%;
  margin: auto;
  ${props =>
    props.grid
      ? {
          'grid-template-columns': '30% 69%',
          display: 'grid',
        }
      : {
          'grid-template-columns': '',
        }}
  margin: auto;
  justify-content: space-between;
  column-gap: 10px;
  grid-row-gap: 20px;
  @media ${device.maxLg} {
    grid-template-columns: 100%;
  }
  @media ${device.maxMd} {
    grid-template-columns: 100%;
  }
  @media ${device.maxSm} {
    grid-template-columns: 100%;
  }
`;
export const RowWrap = styled(Row)`
  width: 100%;
  margin: auto;
`;

export const FilterContainer = styled.div`
  border: 1px solid #d3d3d3;
  display: flex;
  justify-content: space-between;
  padding: 9px 16px 9px 16px;
  border-radius: 8px;
  background: #ffffff;
`;

export const WidgetAction = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 40%;
  position: relative;
  button {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    height: 40px;
    width: 100%;
  }
`;

export const WidgetHeader = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  height: 35%;
  a {
    text-decoration: underline;
    color: #ffc22b;
  }
  [role='left'] {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 5%;
    span {
      width: 100%;
    }
    h5 {
      font-size: 14px;
      margin: 0;
      text-align: left;
    }
  }
  & > span:nth-of-type(2) {
    text-align: right;
    width: auto;
  }
`;

export const WidgetHeaderAgent = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  height: 35%;
  a {
    text-decoration: underline;
    color: #ffc22b;
  }
  & > span:nth-of-type(2) {
    text-align: right;
    width: auto;
  }
`;

export const WidgetWrap = styled.div`
  margin-top: 25px;
  width: 100%;
  overflow: hidden;
  float: right;
  min-height: 200px;
  background: #ffffff;
  border: 1px solid rgba(118, 118, 118, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 8px 12px rgba(34, 34, 34, 0.06);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    transform: translateY(-3px);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 25px, #f9c31f 0px 6px 6px;
  }
  // padding: 15px;
  @media ${device.maxSm} {
    transform: scale(0.9);
  }
`;

export const WidgetWrapContact = styled.div`
  margin-top: 15px;
  width: 100%;
  overflow: hidden;
  float: right;
  box-sizing: border-box;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${device.maxSm} {
    transform: scale(0.9);
  }
`;

export const PostWrapper = styled(props => <div {...props} />)`
  overflow: hidden;
  box-shadow: 0px 4px 16px rgba(34, 34, 34, 0.08);
  border-radius: 16px;
  transition: all.2s ease;
  background: white;
  margin-bottom: 20px;
  cursor: pointer;
  [role='separator'] {
    margin: 0;
  }
  [role='row-post'] {
    padding: 9px 12px;
    /* font-size: 100%; */
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 25px, rgba(0, 0, 0, 0.1) 0px 6px 6px;
  }
  @media ${device.maxLg} {
    height: 600px;
    width: 100%;
  }
  @media ${device.maxSm} {
    height: auto;
    width: 100%;
  }
`;

export const ButtonCall = styled(Button)`
  background-color: transparent !important;
  color: #222222;
  font-size: 16px;
  font-weight: 700;
  font-family: Inter;
  border-radius: 8px;
  border: 1px solid #767676;
  svg {
    path {
      fill: #000;
    }
  }
  &:hover {
    background-color: #d44640;
  }
`;

export const ButtonFollow = styled(Button)`
  background: white;
  border-color: #f9c41f;
  &:focus {
    background: #f9c41f !important;
    border-color: #f9c41f;
  }
  &:not(.disable-custom-btn):not(.disable-hover):hover {
    background: #f9c41f !important;
  }
`;
export const ButtonChat = styled(Button)`
  background: #f9c41f;
  border-color: #f9c41f;
  &:focus {
    background: #f9c41f !important;
    border-color: #f9c41f;
  }
  &:not(.disable-custom-btn):not(.disable-hover):hover {
    background: #f9c41f !important;
  }
`;

export const SwapAdd = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: 42px;
  padding: 0px 25px 0px 25px;
  display: flex;
  align-items: center;
  [role='scale'] {
    @media ${device.maxSm} {
      display: none;
      padding: 0px;
    }
  }
`;
export const DefaultWrapperWithBg = styled.div`
  &:nth-of-type(even) {
    width: 100%;
  }
  &:last-child {
    padding-bottom: 100px;
  }
  abbr {
    color: ${colors.common};
  }
  @media ${device.maxMd} {
    padding: ${props => (props.typeof == 'fullScreen' ? 0 : '')};
  }
`;

export const DefaultContentInWrapperMajor = styled(props => <div {...props} />)`
  max-width: 1200px;
  padding: 30px 0;
  width: 95%;
  ${props =>
    props.grid
      ? {
          'grid-template-columns': '69% 30%',
          display: 'grid',
        }
      : {
          'grid-template-columns': '',
        }}
  margin: auto;
  justify-content: space-between;
  column-gap: 10px;
  grid-row-gap: 20px;
  @media ${device.maxLg} {
    grid-template-columns: 80%;
  }
  @media ${device.maxSm} {
    grid-template-columns: 100%;
  }
`;

export const RowPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.maxMd} {
    display: block;
  }
`;
export const RowPriceLeft = styled(props => <div {...props} />)`
  span {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    ${props =>
      props.gap
        ? {
            gap: '12px',
          }
        : {
            gap: '',
          }}
    font-size: 16px;
    margin-bottom: 14px;
    svg {
      transform: scale(1);
    }
    label {
      margin: 0;
    }
  }
`;
export const ColWrap = styled(Col)`
  .flex-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wrap-text {
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.maxMd} {
      min-height: 200px;
    }
    @media ${device.maxSm} {
      min-height: 150px;
    }
  }
  .circle-wrap {
    position: relative;
    object-fit: contain;
    object-position: cover;
    @media ${device.maxSm} {
      min-height: 50px;
      width: 60%;
      height: 50%;
    }
  }
  .image-wrap {
    position: absolute;
    object-fit: cover;
    @media ${device.maxSm} {
      min-height: 50px;
      width: 60%;
      height: 40%;
    }
  }
  @media ${device.maxSm} {
    margin-bottom: 30px;
  }
`;
export const TypographyText = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  text-align: start;
  .price {
    font-size: 20px;
    line-height: 28px;
    color: #ff8800;
    font-weight: 700;
  }
  .wasPrice {
    font-size: 16px;
    line-height: 19px;
    color: #7a7a7a;
    font-weight: 500;
    text-decoration-line: line-through;
  }
  .detailPost {
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
  }
  .addressPost {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #7a7a7a;
  }
  .textPostMiddle {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    margin-left: 5px;
  }
  .subTitle {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #7a7a7a;
    margin-left: 5px;
  }
  .linkShowPost {
    margin-left: 30px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #000000;
  }
  .category {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #4e4e4e;
  }
  .inContentItem {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
  }
`;

export const ButtonCustom = styled(Button)`
  padding: 10px; 
  border-radius: 9px; 
  display: flex; 
  justify-content: center;
  width: 100%;
  background-color: white;
  .ant-btn:focus{
    color:#fff;
    background-color: #F9C41F;
    border: 1px solid #F9C41F;
  }
}
`;
export const RadoCustom = styled(Radio.Button)`
.ant-radio-button-checked{
  background: #222222;
  border-radius:24px;
  color: red !important;
  .ant-typography{
    color: red !important;
}
`;
export const RadioSearch = styled(Radio.Group)`
  background: #e9e9e9;
  border-radius: 8px;
  padding: 4px;
  .radio-active {
    &:active {
      background: #f9c41f !important;
    }
  }
`;
export const PostContent = styled.div`
  height: 100%;
`;
export const PostMiddle = styled.div`
  padding: 9px 12px;
  display: flex;
  height: 12%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 0px;
`;
export const PostMiddleItem = styled.div`
  display: flex;
  gap: 5px;
  height: 100%;
  align-items: center;
  justify-content: start;
  overflow: hidden;
  h1 {
    font-size: 15px;
    font-weight: 600;
    max-width: 120px;
    color: #d54640;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const PostTitle = styled.div`
  padding: 9px 12px;
  /* font-size: 14px; */
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div {
    margin: 0;
    color: #222222;
    line-height: 20px;
    svg {
      margin-right: 5px;
    }
  }
  .wrap-post {
    min-height: 90px;
    @media ${device.maxSm} {
      min-height: auto;
    }
  }
`;
export const PostMiddleFooter = styled.div`
  display: flex;
  height: 50%;
  align-items: center;
  justify-content: start;
  overflow: hidden;
  h1 {
    font-size: 15px;
    font-weight: 600;
    max-width: 120px;
    color: #d54640;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const DropdownFilter = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 20px 5px 20px;
  justify-content: center;
  border: 1px solid #7a7a7a;
  border-radius: 8px;
  margin-right: 15px;
  background: #ffffff;
`;

export const RowFilter = styled(Row)`
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: end;
  @media ${device.maxMd} {
    justify-content: start;
  }
`;
export const CustomLikeShare = styled(Row)`
  @media ${device.maxLg} {
    display: none;
  }
`;

export const ColCustom = styled(Col)`
  [role='container'] {
    padding: 28px;
    @media ${device.maxMd} {
      padding: 15px 0 15px 0;
    }
  }
  [role='font1'] {
    font-size: 24px;
    @media ${device.maxMd} {
      font-size: 16px;
    }
  }
  [role='font2'] {
    font-size: 16px;
    @media ${device.maxMd} {
      font-size: 14px;
    }
  }
`;

export const UtiliteStyle = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: 26px;
  padding: 6px 15px 6px 15px;
  display: flex;
  align-items: center;
  margin-right: 12px;
  margin-top: 12px;
`;

export const TeacherContainer = styled.div`
  margin-bottom: 12px;
  display: flex;
  @media ${device.maxMd} {
    display: block;
  }
`;
