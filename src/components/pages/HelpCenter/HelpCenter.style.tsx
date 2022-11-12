import { styled } from '@styles/theme';
import { device } from '@styles/theme/device';
import { Input, Radio, Typography } from 'antd';

export const HelpCenterWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  .row-header {
    padding: 22px 10px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.03)),
      #ffffff;
  }
  .col-header {
    margin-right: 16px;
  }
  .breadcrumb-detail {
    margin-top: 30px;
    margin-left: 10px;
    display: flex;
  }
  .search {
    margin-top: 0px;
    margin-bottom: 30px;
  }
  .divider-horizontal {
    color: #d3d3d3;
  }
`;

export const SearchInput = styled((props) => <Input allowClear {...props} />)`
  border-width: 0;
  border-radius: 56px;
  padding: 5px 5px 5px 10px;
  font-family: 'Inter';
  font-size: 16;
  width: 591px;
  font-weight: 700;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  @media ${device.maxMd} {
    width: 391px;
  }
  @media ${device.maxSm} {
    width: 250px;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const HelpCenterText = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  .text-header {
    font-weight: 500;
    font-size: 15px;
    line-height: 16px;
    color: #222222;
    flex: none;
    order: 3;
    flex-grow: 0;
  }
  .header-typography {
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    color: #222222;
    margin: 20px 0px 40px 0px;
  }
  .header-content {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-transform: capitalize;
    color: #7a7a7a;
    margin-left: 8px;
  }
  .side-text {
    font-weight: 700;
    font-size: 20px;
    line-height: 32px;
    color: #222222;
    margin-left: 5px;
  }
  .content-start {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #222222;
  }
`;

export const RadioWrap = styled(Radio.Group)`
  justify-content: center;
  align-items: center;
`;

export const RadioButton = styled((props) => <Radio.Button {...props} />)`
  ${({ bg }) =>
    bg
      ? {
          background: bg,
        }
      : {
          background: '#FFFFFf !important',
        }}
  ${({ colorText }) =>
    colorText
      ? {
          color: colorText + '!important',
        }
      : {
          color: '#7A7A7A !important',
        }}
  border-radius: 8px !important;
  border: none;
  width: 228px;
  height: 64px;
  display: flex;
  align-items: center;
`;
