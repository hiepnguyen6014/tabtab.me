import { styled } from '@styles/theme';
import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';
import { Button } from 'antd';

export const ValFilter = styled.div`
  display: grid;
  grid-template-columns: 24%24%24%24%;
  width: 100%;
  gap: 1%;
  justify-content: space-between;
  row-gap: 10px;
  align-items: center;
  @media ${device.maxSm} {
    grid-template-columns: 100%;
  }
`;

export const FVSubmit = styled(Button)`
  width: 100%;
  height: 40px;
  background-color: ${colors.common};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  svg {
    transform: scale(0.3);
    path {
      fill: #fff;
    }
  }
`;

export const FVBtn = styled.div`
  position: absolute;
  right: 5%;
  top: 10px;
  svg {
    path {
      fill: #bebebe;
    }
  }
`;
