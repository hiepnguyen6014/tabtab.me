import { styled } from '@styles/theme';
import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';
import { Divider, Typography } from 'antd';

export const SpotlightWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  .wrap-background {
    width: 1200px;
  }
  .breadcrumb-detail {
    margin-top: 30px;
    margin-left: 10px;
    display: flex;
  }
  .padding-y40 {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const Flex = styled.div`
  display: flex;
  padding: 10px;
`;

export const DividerH = styled(Divider)`
  margin-top: 10px;
  margin-bottom: 7px;
`;

export const SpotlightText = styled(Typography)`
  font-family: Inter;
  font-style: normal;
  .header-content {
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    text-transform: capitalize;
    color: #7a7a7a;
    margin-left: 8px;
  }
  .project-title__text--style {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #222222;
  }
  .name-province__text--color {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #f9bd06;
  }
  .name-project__text--color {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #000000;
    margin-top: 2px;
  }
  .title-spotlight__text--style {
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    color: #222222;
    padding: 36px 0px;
  }
`;
