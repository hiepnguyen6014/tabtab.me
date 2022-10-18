import { styled } from '@styles/theme';
import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';
import { Button, Typography } from 'antd';

export const ItemPostWrap = styled.div`
  max-width: 280px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  .test1 {
    padding: 10px;
    position: relative;
  }
  .item__margin--10 {
    padding: 10px;
  }
  .test2 {
    position: absolute;
    bottom: 0%;
    left: 0%;
    right: 0%;
    top: 68%;
  }
`;

export const ItemPostText = styled(Typography)`
  font-family: Inter;
  font-style: normal;
  .item__text--date {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #222222;
  }
  .item__text--content {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #222222;
    padding: 20px 0px;
  }
  .item__text--location {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #4e4e4e;
  }
  .btn__text--add {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #222222;
  }
`;

export const ButtonAddCalendar = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 100%;
  height: 36px;
  background: rgba(249, 196, 31, 0.1);
  border: 1px solid #f9c41f;
  border-radius: 8px;
`;
