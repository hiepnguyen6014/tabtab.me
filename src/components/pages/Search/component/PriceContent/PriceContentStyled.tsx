import { Button, Divider, Image, Row, Typography } from 'antd';

import { styled } from '@styles/theme';

export const Container = styled.div`
  padding: 12px;
`;

export const BoxTypographyPrice = styled(Typography)`
  font-size: 20px;
  font-family: Inter;
  font-weight: 700;
`;
export const BoxTypographySelect = styled(Typography)`
  font-size: 16;
  font-family: Inter;
  font-weight: 700;
  margin-top: 24px;
  margin-bottom: 16px;
`;
export const BoxTypographySelectType = styled(Typography)`
  font-size: 16px;
  font-family: Inter;
  font-weight: 700;
  margin-top: 28px;
  margin-bottom: 16px;
`;

export const BoxContainer = styled.div`
  border-radius: 8px;
  padding: 4px;
  display: flex;
  align-items: center;
`;

export const BoxWrapper = styled.div`
  background: '#E9E9E9';
  padding: 4px 0px 4px 4px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  font-family: Inter;
  padding: 6px 24px 6px 24px;
  white-space: break-spaces;
`;

export const BoxDivider = styled(Divider)`
  margin-right: 0px;
  margin-left: 0px;
  height: 50px;
  border-color: '#D3D3D3';
`;

export const BoxDayWeek = styled.div`
  background: '#E9E9E9';
  padding: '4px 0px 4px 0px';
`;

export const BoxDividerOne = styled(Divider)`
  margin-right: 0px;
  margin-left: 0px;
  height: 50px;
  border-color: '#D3D3D3';
`;

export const BoxWrapperTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LabalOne = styled.label`
  font-family: Inter;
  font-size: 16px;
  font-weight: 550;
`;

export const Text = styled.text`
  font-size: 16px;
  font-weight: 700;
  font-family: Inter;
  color: white;
`;

export const TextOne = styled.text`
  font-size: 16px;
  font-weight: 700;
  font-family: Inter;
`;

export const BoxWrrapperRadius = styled.div`
  background: '#E9E9E9';
  padding: 4px 4px 4px 0px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;
