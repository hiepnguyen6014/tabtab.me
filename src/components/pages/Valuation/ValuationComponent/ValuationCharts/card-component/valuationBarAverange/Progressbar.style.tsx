import { styled } from '@styles/theme';
import { device } from '@styles/theme/device';

export const Wrap = styled.div`
  padding: 0;
  width: 100%;
  height: 10px;
  overflow: hidden;
  background: #e5e5e5;
  border-radius: 2px;
  margin-bottom: 8px;
  ${props =>
    props.typeof == 'left' && {
      transform: 'rotateY(180deg)',
    }}
`;
export const WrapBar = styled.div`
  position: relative;
  float: left;
  min-width: 70%;
  height: 100%;
  background: cornflowerblue;
  @media ${device.maxMd} {
    min-width: 100%;
  }
`;

export const BarMark = styled.div`
  position: absolute;
  display: flex;
  width: 120px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 20px;
  ${props =>
    props.typeof == 'right'
      ? { left: 'calc(70% - 60px)' } /* 100% - width of BarMark */
      : { right: 'calc(70% - 60px)' }}
  label {
    font-size: 20px;
    word-break: normal;
    white-space: nowrap;
    font-weight: 400;
  }
  @media ${device.maxMd} {
    width: 100%;
    label {
      white-space: normal;
      width: 50%;
      text-align: ${props => (props.typeof == 'right' ? 'right' : 'left')};
    }
    ${props =>
      props.typeof == 'right'
        ? { left: '0', alignItems: 'flex-end' }
        : { right: '0', alignItems: 'flex-start' }}
  }
`;
