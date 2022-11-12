import { styled } from '@styles/theme';
import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';

export const FMobile = styled.div`
    display:none; 
    @media ${device.maxMd} {
      display: block;
    }
`;

export const FMobileTop = styled.div`
   & > div{
       padding: 0 15px;
       display: flex;
       justify-content: center;
       align-items: flex-end;
       height: 150px;
       background: ${colors.common};
       padding-bottom: 20px;
       input{
           height:30px;
       }
   }
`;

// Bottom
export const FMobileBot = styled.div`
  padding: 20px 15px;
  background: #f8f8f8;
  display: grid;
  grid-template-columns: 49%49%;
  row-gap: 10px;
  margin: auto;
  justify-content: space-between;
`;
export const FMobileBotContent = styled.div`
  display: flex;
  margin: auto;
  gap: 10px;
  flex-wrap: wrap;
  padding: 20px 0;
  width: 95%;
  justify-content: space-between;
`;
