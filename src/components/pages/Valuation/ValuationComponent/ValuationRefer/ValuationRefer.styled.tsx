import { styled } from '@styles/theme';
import { device } from '@styles/theme/device';

export const VReferWrap = styled.div`
  padding: 40px 0;
`;

export const VRefer = styled.div`
  display: grid;
  grid-template-columns: 16.6%16.6%16.6%16.6%16.6%16.6%;
  color: #1890ff;
  font-size: 16px;
  line-height: 30px;
  @media ${device.maxMd} {
    grid-template-columns: 20%20%20%20%20%;
  }
  @media ${device.maxSm} {
    grid-template-columns: 33.3%33.3%33.3%;
  }
`;

export const VReferItem = styled.span`
  cursor: pointer;
  user-select: none;
  &:hover {
    text-decoration: underline;
  }
`;
