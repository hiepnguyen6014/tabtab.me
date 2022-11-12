import { Button, Checkbox, Divider, Image, Row, Typography } from 'antd';

import { styled } from '@styles/theme';

export const BoxContainer = styled.div`
  padding: 12;
  width: 350;
`;

export const BoxTypography = styled.div`
  fontsize: 20;
  fontfamily: 'Inter';
  fontweight: '700';
  marginbottom: 24;
`;

export const BoxCheckBox = styled(Checkbox)`
  display: 'flex';
  align-items: 'center';
  padding-left: 8px;
  margin-bottom: 24px;
`;
