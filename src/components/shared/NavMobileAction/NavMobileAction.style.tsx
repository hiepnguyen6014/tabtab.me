import { IconArrowDown } from '@root/public/icons';
import { styled } from '@styles/theme';
import { device } from '@styles/theme/device';

export const NavMobile = styled.div`
  z-index: 100;
  display: none;
  width: 100%;
  position: absolute;
  top: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
  @media ${device.maxMd} {
    display: block;
  }
`;

export const NavMobileWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  width: 95%;
  margin: auto;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  height: 70px;
  & > div {
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    & > div {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  [type='empty'] {
    path {
      fill: #fff !important;
    }
  }
  svg > path {
    fill: #fff;
  }
`;

export const IconBack = styled(IconArrowDown)`
  transform: rotate(90deg);
  path {
    fill: #fff;
  }
`;
