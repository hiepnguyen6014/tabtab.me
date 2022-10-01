import { Input, Typography } from 'antd';

import { device } from '@styles/theme/device';
import { styled } from '@styles/theme';

export const ChatWrap = styled.div`
  position: fixed;
  float: right;
  bottom: 0%;
  right: 0%;
  width: 266px;
  height: 716px;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  text-align: center;
  border-radius: 14px 14px 0px 0px;
  @media ${device.maxSm} {
    display: none;
  }
`;

export const ChatSmallWrap = styled.div`
  position: fixed;
  float: right;
  bottom: 0%;
  right: 0%;
  width: 266px;
  height: 64px;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  text-align: center;
  border-radius: 14px 14px 0px 0px;
  @media ${device.maxSm} {
    display: none;
  }
`;



export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin: 12px;
  gap: 12px;
`;

export const SearchMessage = styled(Input)`
  background: #e9e9e9;
  border-radius: 8px;
  width: 242px;
  height: 32px;
  margin: 5px 0px;
  .ant-input{
    background: #e9e9e9;
  }
`;

export const SearchMessageText = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  .style__text--600--16--19 {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #222222;
    text-align: start;
  }
  .style__text--500--12--15 {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #7a7a7a;
    text-align: start;
  }
  .style__text--500--16--19 {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
`;

export const DotMessage = styled.div`
  width: 12px;
  height: 12px;
  background: #0cdbce;
  border: 1px solid #ffffff;
  border-radius: 50%;
  position: absolute;
  bottom: 5px;
  right: 0;
`;

export const ChatPersonWrap = styled.div`
  position: fixed;
  float: right;
  bottom: 0%;
  right: 300px;
  width: 312px;
  height: 420px;
  background: #ffffff;
  border: 1px solid #d3d3d3;
  text-align: center;
  border-radius: 14px 14px 0px 0px;
`;

export const BoxFriend = styled.div`
  max-width: 211px;
  background: #eef0f3;
  border: 1px solid #e1e5ea;
  border-radius: 12px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #222222;
  padding: 8px;
`;

export const BoxUser = styled.div`
  max-width: 211px;
  background: rgba(249, 189, 6, 0.1);
  border: 1px solid #f9bd06;
  border-radius: 12px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #222222;
  padding: 8px;
`;

export const MessageBox = styled(Input)`
  width: 211px;
  background: #e5e8ec;
  border-radius: 59px;
`;
