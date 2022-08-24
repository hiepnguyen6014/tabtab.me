import { IconApartment } from '@root/public/icons';
import { styled } from '@styles/theme';
import { device } from '@styles/theme/device';
import { Col, Row, Typography } from 'antd';

// Cuttom Icon
export const IconCompany = styled(IconApartment)`
  path {
    fill: #fff;
  }
`;

export const FooterWrapper = styled.footer`
  position: relative;
  clear: both;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 16px;
  line-height: 22px;
  color: #222222 !important;
  background: #f6f6f6;
  h1 {
    font-size: 18px;
    color: #222222 !important;
    font-weight: bold;
    margin: 20px 0;
  }
  a {
    color: #222222;
  }
  .footer-bottom-wrap {
    display: flex;
    height: 69px;
    justify-content: flex-end;
    margin-right: 30px;
    @media ${device.maxSm} {
      display: none;
    }
  }
  .footer-bottom-wrap1 {
    display: none;
    justify-content: space-between;
    margin: 0px 20px;
    padding: 20px 0px;
    border-top: 1px solid #e9e9e9;
    @media ${device.maxSm} {
      display: flex;
    }
  }
  @media ${device.maxSm} {
    display: flex;
  }
`;

export const FooterBackgroundTop = styled.div`
  width: 100%;
  padding: 30px;
`;
export const FooterBackgroundBottom = styled.div`
  background: #f6f6f6;
  width: 100%;
`;

export const FooterMainTop = styled(Row)`
  width: 100%;
  margin: auto;
  @media ${device.maxSm} {
    span {
      display: none;
    }
  }
`;
export const FooterMainMiddle = styled(FooterMainTop)`
  margin-top: 40px;
  @media ${device.maxSm} {
    display: block;
  }
`;

export const FooterMainBottom = styled(FooterMainTop)`
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 30px;
`;

// Component

export const ColInFooter = styled(Col)``;

export const RowInCol = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  svg {
    width: 10%;
  }
  a {
    width: 80%;
  }
`;
export const RowFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  height: 70%;
  @media ${device.maxSm} {
    align-items: center;
  }
`;

export const FooterText = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  .titleTextFooter {
    font-weight: 700;
    margin-bottom: 10px;
    font-size: 16px;
    color: #222222;
    line-height: 20px;
    @media ${device.maxSm} {
      font-size: 16px;
      line-height: 20px;
    }
  }
  .textFooter {
    font-weight: 400;
    margin-bottom: 10px;
    font-size: 16px;
    line-height: 15px;
    cursor: pointer;
    span {
      display: none;
    }
    @media ${device.maxSm} {
      font-size: 16px;
      line-height: 20px;
    }
  }
  .text-Footer {
    font-weight: 400;
    font-size: 12px;
    color: #222222;
    line-height: 15px;
    @media ${device.maxSm} {
      font-size: 12px;
      line-height: 16px;
    }
  }
  .footer-bottom-text {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #7a7a7a;
  }
`;

export const FlexFooter = styled.div`
  display: flex;
  .footerBottom {
    margin-right: 20px;
  }
  .items-between {
    display: flex;
    justify-content: space-between;
  }
`;

// Row middle

export const FooterRowMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const RowApp = styled(FooterRowMiddle)`
  flex-wrap: wrap;
  gap: 10px;
  @media ${device.maxSm} {
    justify-content: center;
  }
`;

export const RowIcons = styled.div`
  display: flex;
  gap: 10%;
  margin-top: 30px;
  svg {
    opacity: 0.5;
    transition: all 0.3s ease;
    &:hover {
      opacity: 1;
    }
  }
  @media ${device.maxSm} {
    justify-content: center;
  }
`;

//Footer bottom

export const ColBottomRight = styled.div`
  float: right;
  gap: 50px;
  /* div{
        display: flex;
        gap: 5px;
            p{
                margin: 0;
            }
    } */
`;

export const HrefLink = styled.a`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
`;

export const FooterDefault = styled.div`
  height: 69px;
  width: 1300px;
  background: #f6f6f6;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 40px
`;
