import { styled } from '@styles/theme';
import { device } from '@styles/theme/device';

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  // align-items: center;
  row-gap: 20px;
  [role='item'] {
    width: 33%;
    display: flex;
    align-items: center;
    span {
      width: 50%;
      display: flex;
      align-items: center;
      gap: 15px;
    }
  }
  @media ${device.maxMd} {
    [role='item'] {
      width: 50%;
      // justify-content: space-between;
      // span:last-child{
      //     display: flex;
      //     justify-content: flex-end;
      // }
    }
  }
`;
