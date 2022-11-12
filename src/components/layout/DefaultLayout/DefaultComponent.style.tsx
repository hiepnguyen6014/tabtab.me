import { styled } from '@styles/theme';
import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';
import { Button, Radio } from 'antd';

export const Container = styled.div`
  padding-top: ${({ hasTopPadding }: { hasTopPadding: boolean }) =>
    hasTopPadding ? '80px' : '0'};
`;

export const DefaultRowHeader = styled.div`
  height: 96px;
  display: block;
  width: 100%;
  background: transparent;
  @media ${device.maxMd} {
    display: none;
  }
`;

export const DefaultHeaderForMobile = styled.div`
  height: 96px;
  display: block;
  display: none;
  background-color: ${colors.common};
  @media ${device.maxMd} {
    display: block;
  }
`;

export const DefaultWrapperWithBg = styled.div`
  &:nth-of-type(even) {
    background: #ffffff;
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

export const DefaultProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
  grid-template-rows: auto;
  justify-content: space-between;
  grid-column-gap: 1%;
  grid-row-gap: 20px;

  @media ${device.maxLg} {
    grid-template-columns: 33% 33% 33%;
  }
  @media ${device.maxMd} {
    grid-template-columns: 49% 49%;
  }
  @media ${device.maxSm} {
    grid-template-columns: 100%;
    justify-content: space-between;
  }
`;

export const DefaultContentNoGrid = styled.div`
  max-width: 1200px;
  width: 95%;
  margin: auto;
  padding: 30px 0;
  @media ${device.maxMd} {
    padding: ${props => (props.typeof == 'fullScreen' ? '0' : '')};
    width: ${props => (props.typeof == 'fullScreen' ? '100%' : '')};
  }
`;
export const DefaultContentInWrapper = styled(props => <div {...props} />)`
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
  @media ${device.maxMd} {
    grid-template-columns: 59% 40%;
  }
  @media ${device.maxSm} {
    grid-template-columns: 100%;
  }
`;
export const DefaultLinkText = styled.a`
  color: #ffc22b !important;
  font-size: 16px !important;
  text-decoration: underline !important;
`;
export const DefaultRowTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h1 {
    font-size: 24px;
    font-weight: bolder;
    color: #222222;
    line-height: 32px;
    position: relative;
    // padding-left: 14px;
    // &::before {
    //   content: '';
    //   height: 20px;
    //   top: 20%;
    //   width: 4px;
    //   background-color: ${colors.common};
    //   position: absolute;
    //   left: 0;
    // }
  }
`;

export const LandingWrapContent = styled.div`
  h1 {
    color: ${colors.common} !important;
    font-size: 22px;
    line-height: 28px;
  }
  p {
    font-size: 18px;
    line-height: 24px;
  }
`;
export const ButtonWrap = styled(props => <Button {...props} />)`
  width: 170px;
  display: flex;
  gap: 10px;
  align-items: center;
  ${props =>
    props.background
      ? {
          background: props.background,
        }
      : {
          background: '#ffffff',
        }}
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
  border-radius: 8px;
`;

export const ButtonWrapProperties = styled(props => <Button {...props} />)`
  display: flex;
  gap: 10px;
  align-items: center;
  ${props =>
    props.background
      ? {
          background: props.background,
        }
      : {
          background: '#ffffff',
        }}
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
  border-radius: 8px;
`;

export const RadioWrap = styled(Radio.Group)`
  background: #e9e9e9;
  border-radius: 12px;
  display: flex;
`;
