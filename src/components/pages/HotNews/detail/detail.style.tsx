import { styled } from '@styles/theme';
import { device } from '@styles/theme/device';
import { Image, Button } from 'antd';

export const BannerWrapper = styled.div`
  max-height: 500px;
  width: 100%;
`;

export const RowOtherNews = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-between;
  align-items: center;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

export const RowTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;
export const ButtonShowMore = styled(Button)`
  height: 40px;
  width: 103px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: #ffc22b;
  @media ${device.maxMd} {
    display: none;
  }
`;
export const ButtonShowMoreMobile = styled(Button)`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  text-align: center;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
  border-radius: 2px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  color: #d54640;
  display: none;
  margin-top: 10px;
  @media ${device.maxMd} {
    display: block;
  }
`;
