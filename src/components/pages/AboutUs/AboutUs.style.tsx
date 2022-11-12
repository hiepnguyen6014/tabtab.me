import { styled } from '@styles/theme';
import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';
import { Image, Radio, Typography } from 'antd';

export const AboutUsWrap = styled.div`
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
    /* padding: 10px 50px; */
    margin-top: 30px;
    margin-left: 10px;
    display: flex;
  }
  .horizontal-line {
    width: 100%;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    width: 100px;
    height: 4px;
    background: #f9c41f;
  }
  .between-item {
    display: flex;
    justify-content: space-between;
  }
  .spacing-top {
    margin-top: 20px;
  }
  .baseline-row {
    display: flex;
    align-items: baseline;
  }
  .button-custom {
    background: #ffffff;
    border: 1px solid #e9e9e9;
    border-radius: 8px;
  }
  .img-wrap {
    border-radius: 8px;
    object-fit: cover;
  }
  .horizontal-line-content {
    flex: none;
    order: 1;
    flex-grow: 0;
    background: #222222;
    width: 200px;
    margin-top: 20px;
    height: 2px;
  }
  .side-vertical-content {
    margin: 26px 0px;
  }
  .hide-sm-screen {
    @media ${device.maxSm} {
      display: none;
    }
  }
  .vertical-line {
    border: 1px solid #e9e9e9;
    width: 100%;
    height: 0px;
    margin-top: 20px;
    margin-bottom: 20px;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
  .m-top-50 {
    margin-top: 50px;
  }
  .button-seemore {
    border: 1px solid rgba(20, 20, 20, 0.2);
    border-radius: 22px;
    padding: 12px 40px;
    gap: 10px;
    display: flex;
    align-items: center;
    flex: none;
    background: #ffffff;
    width: 152px;
    height: 44px;
    order: 1;
    flex-grow: 0;
  }
  .bookmark {
    position: absolute;
    margin: auto;
    margin-top: 10px;
    margin-right: 10px;
    text-align: end;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .image-content {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .article {
    width: 100%;
    height: 650px;
    margin-top: 20px;
    position: relative;
    overflow: hidden;
    @media ${device.maxSm} {
      /* min-height: 428px; */
    }
  }
  .content-on-img {
    position: absolute;
    bottom: -50px;
    margin: 50px;
    padding: 30px 30px 0px 30px;
    margin-left: 70px;
    background: #f9c41f;
    height: auto;
    width: 486px;
    border: 1px solid #ff0000;
  }
  .article1 {
    width: 100%;
    height: auto;
    margin-top: 20px;
    display: flex;
    position: relative;
  }
  .content-on-img1 {
    position: absolute;
    margin: auto;
    text-align: center;
    display: flex;
    top: 0;
    bottom: 0%;
    left: 40%;
    height: 48px;
    width: 300px;
  }
  .horizontal-divider {
    flex: none;
    order: 1;
    flex-grow: 0;
    background: #ffffff;
    width: 100%;
    height: 6px;
    margin-bottom: 6px;
  }
  .horizontal-separate {
    flex: none;
    order: 1;
    flex-grow: 0;
    background: #f9c41f;
    width: 72px;
    height: 4px;
    margin: 12px 0px;
  }
  .res-col {
    @media ${device.maxMd} {
      margin: 50px 0px;
    }
  }
  .my-adjust {
    margin-top: 20px;
    margin-bottom: 40px;
    @media ${device.maxMd} {
      margin-top: -70px;
      margin-bottom: -20px;
    }
  }
  @media ${device.maxSm} {
    span {
      display: none;
    }
  }
`;

export const AboutUsText = styled(Typography)`
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
  .header-content {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-transform: capitalize;
    color: #7a7a7a;
    margin-left: 8px;
  }
  .title-content {
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    color: #222222;
    @media ${device.maxSm} {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
    }
  }
  .content-intro {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #4e4e4e;
  }
  .detail-decorated {
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #4e4e4e;
  }
  .button-review {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #4e4e4e;
  }
  .name-user {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #222222;
    @media ${device.maxMd} {
      font-size: 24px;
      line-height: 32px;
    }
  }
  .role-user {
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    color: #7a7a7a;
  }
  .coin-user {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #f9c41f;
  }
  .review-text {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #7a7a7a;
  }
  .heart-number {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: #a7a7a7;
    margin-left: 4px;
    margin-top: 3px;
  }
  .content-paragraph {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #222222;
  }
  .title-post {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
  }
  .detailPostSpot {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #222222;
  }
  .rating-review {
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    color: #000000;
    margin-right: 100px;
  }
  .review-star {
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
  }
  .name-review {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #222222;
  }
  .date-review {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #7a7a7a;
  }
  .review-comment {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
  }
  .seemore-text {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #222222;
    text-align: center;
    text-transform: uppercase;
  }
  .titlePostSpot {
    font-size: 14px;
    line-height: 17px;
    font-weight: 700;
    margin-bottom: -15px;
    text-transform: uppercase;
    color: #33a7e2;
    @media ${device.maxMd} {
      font-size: 17px;
      line-height: 21px;
    }
  }
  .contentPostSpot {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 15px;
    color: #222222;
    @media ${device.maxMd} {
      font-size: 18px;
      line-height: 24px;
    }
  }
  .timePostSpot {
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    margin-left: 10px;
    color: #7a7a7a;
    @media ${device.maxMd} {
      font-size: 16px;
      line-height: 19px;
    }
  }
  .userPostSpot {
    font-size: 14px;
    line-height: 17px;
    font-weight: 700;
    color: #222222;
    @media ${device.maxMd} {
      font-size: 17px;
      line-height: 21px;
    }
  }
`;

export const AboutUsParagraph = styled.p`
  font-family: 'Inter';
  font-style: normal;
  .content-aboutus {
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: #4e4e4e;
  }
  h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    color: #222222;
  }
  h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    color: #000000;
    @media ${device.maxMd} {
      margin-top: 50px;
      margin-bottom: 20px;
    }
  }
  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    @media ${device.maxMd} {
      margin: 20px 0px;
    }
  }
  .recruitment {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #7a7a7a;
  }
  .content-p {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #4e4e4e;
  }
  .whyus-title {
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: #000000;
    width: 200px;
    @media ${device.maxMd} {
      width: 100%;
    }
  }
  .whyus-content {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #4e4e4e;
    width: 316px;
    @media ${device.maxMd} {
      width: 100%;
    }
  }
  .province {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    margin-top: 10px;
  }
`;

export const WrapperAboutUs = styled.div`
  display: flex;
  width: 100%;
  margin: 10px;
`;

export const RadioWrap = styled(Radio.Group)`
  background: #e9e9e9;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 64px;
  padding: 5px;
`;

export const RadioButton = styled(props => <Radio.Button {...props} />)`
  /* ${({ bg }) =>
    bg
      ? {
          background: bg,
        }
      : {
          background: '#e9e9e9 !important',
        }}
  ${({ colorText }) =>
    colorText
      ? {
          color: colorText + '!important',
        }
      : {
          color: '#7A7A7A !important',
        }} */
  border-radius: 8px !important;
  border: none;
  color: #7a7a7a !important;
  width: 195px;
  background: #e9e9e9 !important;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  .ant-radio-button {
    background: #f9bd06 !important;
    border-radius: 8px !important;
  }
`;
