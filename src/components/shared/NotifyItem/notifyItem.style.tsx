import { styled } from '@styles/theme';
import { device } from '@styles/theme/device';
import { Col, Row } from 'antd';

export const NotifyItemRow = styled(props => <div {...props} />)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 92px;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 20px;
  padding-right: 20px;
  border: 2px solid rgba(118, 118, 118, 0.1);
  background: ${props => (props.theme ? '#FFFCF5' : '#FFFFFF')};
`;

export const NotifyMainCol = styled(Row)`
  width: 90%;
  height: 100%;
`;
export const NotifyIconCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 92px;
  width: 92px;
  height: 100%;
  background: #ffc22b;
  @media ${device.maxSm} {
    min-width: 80px;
  }
`;

export const MainItem = styled(props => <Col {...props} />)`
  display: flex;
  align-items: center;
  padding-left: 20px;
  h5 {
    font-weight: ${props => (props.theme ? '600' : '')};
    font-size: 14px;
    margin-bottom: 5px;
    color: ${props => (props.theme ? '#FFC22B' : '')};
  }
  p {
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    margin: 0;
    font-size: 16px;
    line-height: 20px;
  }
`;
export const MainItemAction = styled.div`
  gap: 20px;
  row-gap: 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
  svg:nth-of-type(2) {
    cursor: pointer;
  }
  @media ${device.maxSm} {
    flex-direction: column;
  }
`;
