import { styled } from '@styles/theme';
import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';

export const ChartPlace = styled.div`
  min-height: 500px;
`
export const CardWrap = styled.div`
  width: 100%;
  padding: 24px;
  margin-top: 25px;
  background: #ffffff;
  border: 2px solid #f0f0f0;
  box-sizing: border-box;
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.04);
  border-radius: 16px;
`;

export const AVRRow = styled.div`
  width: 100%;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1,
  h2 {
    font-weight: 600;
    margin: 0;
  }
  h1 {
    font-size: 24px;
    color: ${colors.common};
  }
  h2 {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const ProgressWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const AVRowProgress = styled.div`
  label {
    display: block;
    text-align: right;
  }
  & > div:first-of-type {
    display: grid;
    grid-template-columns: 49.5% 49.5%;
    align-items: center;
    justify-content: space-between;
  }
  & > div {
    display: flex;
    justify-content: center;
    p {
      margin-top: 15px;
      width: 50%;
      font-size: 16px;
      text-align: center;
    }
  }
`;

export const WrapperWithGrid = styled.div`
  display: grid;
  grid-template-columns: 49.5%49.5%;
  justify-content: space-between;
  @media ${device.maxMd} {
    grid-template-columns: 100%;
  }
`;

export const UnitLabel = styled.label`
  position: absolute;
  top: -25px;
  left: 0;
`;

export const BtnWatchPost = styled.div`
  font-size: 16px;
  width:230px;
  height: 35px;
  margin: auto;
  margin-top:30px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color:${colors.common};
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
  border-radius: 2px;
  opacity: ${(props) => (props.accessKey ? 0.3 : 1)};
  cursor: ${(props) => (props.accessKey ? "not-allowed" : 'pointer')};
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`