import { styled } from '@styles/theme';
import { device } from '@styles/theme/device';
import { Radio } from 'antd';

export const RadBtn = styled(props => <Radio.Button {...props} />)`
  width: 100%;
  height: ${props => (props.height ? props.height + 'px' : '32px')};
  border-radius: 8px;
  margin-right: 2px;
  font-weight: 700;
  margin-bottom: 0px;

  span {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: #222222;
    font-size: 1rem;
    margin-bottom: 0px;

    @media ${device.maxSm} {
      height: 100%;
      height: 32px;
      font-size: 0.75rem;
    }

    @media ${device.maxMd} {
      height: 100%;
      min-width: 42px;
      font-size: 0.75rem;
    }
  }

  :first-child,
  :last-child {
    border-radius: 8px;
  }

  ${({ background }) =>
    background &&
    `
    background: #E9E9E9;
    border: none;
  
    :first-child, :last-child {
      border-left: none;
    }
    `}
`;
