import { styled } from '@styles/theme';
import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';

export const RowHeader = styled.div`
  height: 96px;
  width: 100%;
  @media ${device.maxMd} {
    display: none;
  }
`;

export const TitleWrapper = styled.div`
  margin: 25px auto;
  margin-bottom: 25px;
  max-width: 1200px;
  width: 95%;
  text-align: left;
`;
export const FilterBackground = styled.div`
  background-color: ${colors.common};
  width: 100%;
`;
export const FDesktop = styled.div`
  position: relative;
  max-width: 1200px;
  width: 95%;
  margin: auto;
  @media ${device.maxMd} {
    display: none;
  }
`;
