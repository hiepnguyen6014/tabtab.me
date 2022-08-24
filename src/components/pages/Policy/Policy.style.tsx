import { styled } from '@styles/theme';
import { device } from '@styles/theme/device';
import { Typography } from 'antd';

export const PolicyWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  background: #f0f2f5;
  //CustomHeader
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

  //Custom
  .search-style {
    width: 591px;
    height: 48px;
    border: 1px solid #e9e9e9;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    border-radius: 56px;
    background: #ffffff;
  }
  .marginY-20 {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  //first
  .box-content {
    border-radius: 12px;
    background: #ffffff;
    padding: 24px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media ${device.maxMd} {
    padding: 6px
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Vertical = styled.div`
  width: 5px;
  height: 20px;
  background: #f9bd06;
  margin: 0px 10px;
`;

// export const PolicyText = styled(Typography)`
export const PolicyText = styled((props) => <Typography {...props} />)`
  font-family: Inter;
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
  .header-content {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-transform: capitalize;
    color: #7a7a7a;
    margin-left: 8px;
  }
  //Terms
  .terms-text {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    ${({ colorText }) =>
      colorText
        ? {
            color: colorText,
          }
        : {
            color: '#7A7A7A',
          }};
  }
  //First
  .first-content1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    color: #000000;
    @media ${device.maxMd} {
      padding: 20px;
    }
  }
  .first-content2 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #4e4e4e;
    margin-top: 10px;
  }
  //Second
  .second-content1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #f9bd06;
    margin-top: 20px;
    @media ${device.maxMd} {
      padding: 20px;
    }
  }
  .second-content2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
    margin-top: 20px;
    @media ${device.maxMd} {
      padding: 20px;
    }
  }
  .second-content3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
    margin-top: 20px;
    @media ${device.maxMd} {
      padding: 20px;
    }
  }
  //Third
  .third-content1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #f9bd06;
    margin-top: 20px;
    @media ${device.maxMd} {
      padding: 20px;
    }
  }
  .third-content2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #222222;

    margin-top: 20px;
  }
  .third-content3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #7a7a7a;

    margin-top: 20px;
  }
`;
