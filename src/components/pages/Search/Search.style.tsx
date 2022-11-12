import { Button, Image, Row } from 'antd';

import { Swiper } from 'swiper/react';
import { device } from '@styles/theme/device';
import { styled } from '@styles/theme';

export const FDesktop = styled.div`
  position: relative;
  max-width: 1200px;
  width: 95%;
  margin: auto;
`;
export const RowWrap = styled(Row)`
  width: 100%;
  margin: auto;
`;
export const ButtonClasses = styled(Button)`
  background: #e9e9e9;
  border-width: 0px;
  height: auto;
  &:focus {
    background: #f9bd06;
    border-width: 0px;
    border-radius: 8px;
  }
`;

export const DivPrice = styled.div`
  display: flex;
  width: 200px;
  align-items: center;
  padding: 12px;
  justify-content: space-between;
  border: 1px solid #7a7a7a;
  border-radius: 12px;
  margin-right: 15px;
`;
export const ButtonClear = styled(Button)`
  background: #4e4e4e;
  border-color: #4e4e4e;
  &:focus {
    background: #4e4e4e !important;
    border-color: #4e4e4e;
  }
  &:not(.disable-custom-btn):not(.disable-hover):hover {
    background: #4e4e4e !important;
  }
`;

export const ButtonApply = styled(Button)`
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

export const WrapperHideMap = styled(Row)`
  margin-top: 16px;
  @media ${device.maxMd} {
    margin-top: 30px;
    padding:0 16px;
  }
`;



export const BoxIntroduce = styled.div`
  margin-top: 120px;
  @media ${device.maxSm} {
    margin-top: 0;
  }
`;

export const BoxWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  height: 560px;
  @media ${device.maxSm} {
    height: 365px
  }
`;

export const BoxWrapperOne = styled.div`
  display: flex;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  max-height: 304px;
`;

export const BoxWrapperMini = styled.div`
background: #ffffff;
box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
border-radius: 8px;
height: 498px;
 @media ${device.maxSm} {
 
  height: 406px;
 }
`

export const BoxWrapperFooter = styled.div`
background: #ffffff;
box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
border-radius: 8px;
height: 404px;
 @media ${device.maxSm} {
 
   height: 345px;
 }

`

export const BoxSalePrice = styled.div`
  z-index: 1;
  position: absolute;
  top: 15px;
  left: 30px;
  padding: 2px 8px;
  @media ${device.maxSm} {
    top:0px;
    left: 0px;
  }
`;

export const BoxStopLoss = styled.div`
background: #ffffff;
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
border-radius: 4px;
z-index: 1;
position: absolute;
top: 45px;
left: 30px;
@media ${device.maxSm} {
  padding: 1.16667px 4.66667px;
}
`

export const SpanPrice = styled.span`
background: #ffffff;
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
border-radius: 4px;
padding: 2px 8px;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  color: #000000;
  @media ${device.maxSm} {
    padding: 1.16667px 4.66667px;
    border-radius: 2px;
    font-size: 8.16667px;
  }
`;

export const BoxLogoX = styled.div`
  transform: translateY(-22px);
  right: 22px;
  z-index: 1;
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 2px 6px;
  @media ${device.maxSm} {
    transform: translateY(-14px);
    right: 8px;
    width:67px;
    height:21px;
    border-radius: 4px;
  }
`;

export const BoxLogoXOne = styled.div`
  transform: translateY(-35px);
  right: 345px;
  z-index: 2;
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 1px 5px;
  @media ${device.maxSm} {
    left: 106px;
    right: 190px;
  }
`;

export const BoxFavorite = styled.div`
  position: absolute;
  z-index: 1;
  top: 10px;
  right: 30px;
  cursor: pointer;
  @media ${device.maxSm} {
    right: 15px;
    
  }
`;

export const BoxFavoriteOne = styled.div`
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 260px;
  cursor: pointer;
  @media ${device.maxSm} {
    right: 15px;
    left: 135px;
    top: 3px;
  }
`;

export const BoxHiddenMobile = styled.div`
  @media ${device.maxSm} {
    display: none;
  }
`;

export const BoxPaddingRow = styled.div`
  padding: 8px 16px 11px 17px;
  @media(max-width:1200px) {
    width:100%;
  }
  @media ${device.maxSm} {
    padding: 8px 4px 11px 10px;
  }
`;

export const BoxWrapperData = styled.div`
padding: '14px 16px 16px 18px';
@media ${device.maxSm} {
  padding: 14px 10px 16px 10px;
}
`

export const BoxWrapperRowContent = styled.div`
display: flex;
background: #FFFFFF;
box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
border-radius: '8px';
height: 304px;

@media ${device.maxSm} {
  height: 220px;
  max-width:380px;
  width:100%;
}
`

export const BoxImageSlide = styled.div`
  max-width:282px;
`

export const BoxLabelEndow = styled.div`
font-size: 14px;
font-weight: bold;
font-family: 'Inter';
color: #4E4E4E;
margin-left: 10px;
`

export const BoxWrapperLable = styled.div`
  display: flex;
  align-items: center;
  @media ${device.maxSm} {
    margin-left: 10px;
    margin-top:30px;
  }
`


