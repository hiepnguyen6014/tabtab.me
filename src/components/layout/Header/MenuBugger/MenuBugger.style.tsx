import { styled } from '@styles/theme';
import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';
import { Button, Divider, Menu } from 'antd';

export const MenuBuggerWrap = styled.div`
  display: none;
  @media ${device.maxMd} {
    display: block;
  }
`;
export const MenuComponent = styled.div`
  display: flex;
  cursor: pointer;
  user-select: none;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 32px;
  padding: 3px 8px;
  background: rgba(236, 240, 241, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 16px;
`;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 20px;
`;
export const ButtonClose = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  filter: drop-shadow(0px 2px 0px rgba(0, 0, 0, 0.016));
  border-radius: 2px;
  &:hover {
    svg > path {
      fill: ${colors.common};
    }
  }
`;

export const DividerCustom = styled(Divider)`
  margin: 0;
`;

export const MenuContentMain = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
export const MenuUserRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  [typeof='login'] {
    color: ${colors.common};
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const ButtonPost = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  background: ${colors.common} !important;
  box-shadow: none !important;
  height: 32px;
  color: #fff;
  svg {
    transform: scale(0.8);
  }
`;

export const MenuLinkWraps = styled.div`
  display: flex;
  a {
    color: #222222;
  }
  flex-direction: column;
  gap: 15px;
`;

export const MenuUserLink = styled(Menu)`
  svg > path {
    fill: #222222;
  }
`;
