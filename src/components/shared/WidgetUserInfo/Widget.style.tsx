import { styled } from '@styles/theme';
import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';
import { Button } from '@mui/material';

// Layout for all
export const WidgetWrap = styled.div`
  width: 100%;
  overflow:hidden;
  float: right;
  min-height: 200px;
  background: #FFFFFF;
  border: 1px solid rgba(118, 118, 118, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 8px 12px rgba(34, 34, 34, 0.06);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // padding: 15px;
  @media ${device.maxSm} {
    transform: scale(0.9);
  }
`;

export const WidgetHeader = styled.div`
  display: flex;
  gap:10px;  
  justify-content: space-between;
  align-items: center;
  height: 35%;
  a {
    text-decoration: underline;
    color: #ffc22b;
  }
  [role='left'] {
    display: flex;
    align-items: center;
    width:100%;
    gap:5%;
    span{
      width: 100%;
    }
    h5{
      font-size:14px;
      margin:0;
      text-align: left;
    }
  }
  &>span:nth-of-type(2){
    text-align:right;
    width:auto;
  }
`;
export const WidgetLocked = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background: #f5f5f5 !important;
  border: 1px solid #d9d9d9 !important;
  color: #d44640 !important;
  svg > path {
    fill: #d44640 !important;
  }
`;

export const WidgetAction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 40%;
  position:relative;
  button {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    height: 40px;
    width: 100%;
  }
`;
export const ButtonCall = styled(Button)`
   background-color: transparent !important;
   color: #222222;
   font-size: 16px;
   font-weight: 700;
   font-family: Inter;
   border-radius: 8px;
   border:1px solid #767676;
      svg {
        path {
          fill: #000;
        }
      }
      &:hover{
        background-color: #d44640;
      }
`
export const ButtonMess = styled(Button)`
  border:1px solid #F9C41F;
  background-color: #F9C41F;
  font-size:16px;
  font-weight: 700;
  font-family: Inter;
  border-radius: 8px;
  color: #222222;
`

export const WidgetFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;
`;

const Ticket = styled.span`
  display: inline-block;
  margin-top: 5px !important;
  border-radius: 2px;
  padding: 0 10px;
  margin-bottom:5px;
  max-width: 90px !important;
  text-align: center;
  label{
    font-size: 12px;
    line-height:20px;
    vertical-align:top;
  }
  svg{
    margin-right:5px;
  }
`;

// Project
export const TicketProject = styled(Ticket)`
  color: #fff;
  word-break: normal;
  white-space: nowrap;
`;
// Agency
export const TicketAgency = styled(Ticket)`
  background: #fff7e6;
  border: 1px solid #ffd591;
  color: #fa8c16;
  svg > path {
    fill: #fa8c16;
  }
`;
