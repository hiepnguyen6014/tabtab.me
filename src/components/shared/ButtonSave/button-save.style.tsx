import { IconSaveComplete } from '@root/public/icons';
import { styled } from '@styles/theme';
import { device } from '@styles/theme/device';

export const ButtonSaveWrap = styled(props => <div {...props} />)`
  font-size: 14px;
  font-weight: 600;
  font-family: Inter;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  ${props =>
    props.bg
      ? {
          background: props.bg,
        }
      : {
          background: '',
        }}
  ${props =>
    props.bordered == 'true'
      ? {
          border: '1px solid #D9D9D9',
          padding: '4px 15px',
        }
      : ''}
    @media ${device.maxSm} {
    display: none;
  }
`;
export const IconSaved = styled(IconSaveComplete)``;
