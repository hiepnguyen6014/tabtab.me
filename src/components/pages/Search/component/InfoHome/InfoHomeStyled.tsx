import { Button } from 'antd';
import { device } from '@styles/theme/device';
import styled from '@emotion/styled';
export const BoxWrapper = styled.div``;

export const BoxTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #ff8800;

  @media ${device.maxSm} {
    font-size: 11.6667px;
    line-height: 16px;
  }
`;

export const BoxInfoPrice = styled.div`
  max-width: 230px;
  width: 100%;
`;

export const BoxFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoxPriceInfoMation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.maxSm} {
    max-width: 110px;
  }
`;

export const BoxCost = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-decoration-line: line-through;
  margin-bottom: 0px;
  color: #7a7a7a;
  @media ${device.maxSm} {
    font-size: 9.33333px;
    line-height: 11px;
  }
`;

export const BoxArea = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-transform: lowercase;
  margin-bottom: 0px;
  color: #7a7a7a;
  @media ${device.maxSm} {
    font-size: 9.33333px;
    line-height: 11px;
  }
`;

export const BoxTitleHome = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  margin-top: 8px;

  color: #222222;
  @media ${device.maxSm} {
    margin-top: 0px;
    font-size: 9.33333px;
    line-height: 12px;
  }
`;

export const BoxTitleHomeMini = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-top: 8px;

  color: #222222;
  @media ${device.maxSm} {
    margin-top: 0px;
    font-size: 11.6667px;
    line-height: 16px;
  }
`;

export const BoxDescriptionHome = styled.span`
  margin-top: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: #7a7a7a;

  @media ${device.maxSm} {
    margin-top: 0px;
    font-size: 8.16667px;
    line-height: 10px;
  }
`;

export const BoxDetailHome = styled.div`
  margin-top: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoxDetailDescription = styled.div`
  display: flex;
  align-items: center;
`;

export const BoxInfo = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  margin-left: 10px;
  color: #4e4e4e;
  @media ${device.maxSm} {
    font-size: 8.16667px;
    line-height: 12px;
  }
`;

export const BoxContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonMessage = styled(Button)`
  width: 130px;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  outline: none;
  border: none;
  padding: 8px 12px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #222222 !important;
  background: #f9c41f;
  border-color: #f9c41f;
  &:focus {
    background: #f9c41f !important;
    border-color: #f9c41f;
  }
  &:not(.disable-custom-btn):not(.disable-hover):hover {
    background: #f9c41f !important;
    color: #222222 !important;
  }

  @media ${device.maxSm} {
    width: 90px;
    max-height: 26px;
    font-size: 8.16667px;
    line-height: 12px;
    padding: 4px 7px 3px 7px;
  }
`;

export const BoxDetailHomeColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
