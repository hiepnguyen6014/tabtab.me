import { styled } from '@styles/theme';
import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';
import { Image, Typography } from 'antd';

export const SpotlightWrap = styled.div`
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
  .hide-sm-screen{
    @media ${device.maxSm} {
      display: none
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
  @media ${device.maxSm} {
    span {
      display: none;
    }
  }
`;

export const SpotlightText = styled(Typography)`
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