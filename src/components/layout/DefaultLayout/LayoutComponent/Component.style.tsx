import { styled } from "@styles/theme";
import { device } from "@styles/theme/device";
import { Button, Col } from "antd";

export const RowPrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${device.maxMd}{
      display: block;
    }
`

export const RowActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 37px;
  gap: 15px;
`

export const RowPriceLeft = styled(props => <div {...props} />)`
  span {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    ${props => props.gap ? {
    gap: '12px'
  } :
    {
      gap: ''
    }}
    font-size: 16px;
    margin-bottom: 14px;
    svg {
      transform: scale(1.0);
    }
    label {
      margin: 0;
    }
  }
`;

export const RowPriceRight = styled.div`
  text-align: right;
  display: flex;
  align-items: center;
  gap:25%;
  justify-content: flex-end;
  margin-top: -35px;
  margin-bottom: -15px;
  div:nth-of-type(2){
    position: relative;
    &:after{
      content:'';
      position: absolute;
      left:-20%;
      background: #222222;
      width: 1px;
      opacity: .1;
      height:45%;
      top: 20%;
    }
  }
  label {
    font-size: 16px;
    font-weight: bold;
    white-space: nowrap;
  }
  h1{
    font-size: 32px;
    color: #d54640;
    font-weight: bolder;
    word-break: normal;
    white-space: nowrap;
  }
  @media ${device.maxMd}{
    text-align: left;
    gap:15%;
    justify-content: flex-start;
  }
  @media ${device.maxMd}{
    margin-top:30px;
    margin-bottom:30px;
  }
`;

export const TagProperty = styled.label`
  padding: 2px 8px;
  text-transform: uppercase;
  display: inline-block;
  line-height: 24px;
  font-size:14px;
  color: #fff;
  border-radius: 2px;
  margin-bottom: 10px;
`

export const Block = styled.div`
  width: 122px;
  font-size: 14px;
  border-radius: 8px;
  padding: 20px 18px;
  margin: 5px 5px 5px 0px;
  background: radial-gradient(77.22% 75% at 97.5% 97.35%, #F9AF1F 0%, #F9C91F 100%);
  text-align: center;
  height: 150px;

  @media ${device.maxSm}{
    width: 100px;
    font-size: 12px;
  }

`
export const ButtonVote = styled.div`
    font-size: 14px;
    font-weight: 600;
    font-family: Inter;
    display: flex;
    gap:10px;
    align-items: center;
    border: 1px solid #F9C41F;
    padding:5px 10px;
`

export const ButtonRatingReview = styled.div`
    font-size: 14px;
    font-weight: 600;
    font-family: Inter;
    display: flex;
    gap:10px;
    align-items: center;
    color: #ffffff;
    background-color: #003580;
    border-radius: 6px 6px 6px 0;
    padding:5px 10px;
`

export const AdGoogle = styled.div`
  height: 20px;
  @media ${device.maxSm}{
    display: none;
  }
`
export const AdGoogle2 = styled.div`
height: 20px;
@media ${device.maxLg}{
  display: none;
}
`
export const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    // align-items: center;
    row-gap: 20px;
    [role='item']{
        width: 33%;
        // display: flex;
        align-items: center;
        span{
            width: 50%;
            display: flex;
            align-items: center;
            gap:15px
        }
    }
    @media ${device.maxMd}{
        [role='item']{
            width: 50%;
            // justify-content: space-between;
            // span:last-child{
            //     display: flex;
            //     justify-content: flex-end;
            }
        }
    }
`

export const ListWrapperForPartners = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    // align-items: center;
    row-gap: 20px;
    [role='item']{
        width: 40%;
        // display: flex;
        align-items: center;
        span{
            width: 50%;
            display: flex;
            align-items: center;
            gap:15px
        }
    }
    @media ${device.maxMd}{
        [role='item']{
            width: 40%;
            // justify-content: space-between;
            // span:last-child{
            //     display: flex;
            //     justify-content: flex-end;
            }
        }
    }
`

export const BlockName = styled.div`
    display: flex;
    background-color: #F9C41F0D;
    border: 4px solid #F9C41F;
    border-radius: 8px;
    @media ${device.maxMd}{
      display: block;
    }
`
export const ColCustom = styled(Col)`
  border-radius: 8px;
  border: 1px solid #F9C41F; 
  padding: 32px;
  background-color: #F9C41F1A;
  @media ${device.maxXl}{
    border: 0px;
    background-color: #F2F2F2;
    padding: 0px;
    margin-top:12px;
  }
`

export const ColCustomPrice = styled(Col)`
  margin-left: 3px;
  margin-right:12px;
  padding: 24px;
  background-color: white;
  border-radius: 0px 8px 8px 0px; 
  @media ${device.maxXl}{
    background-color: #F2F2F2;
    margin-top:10px;
  }
`

export const ColCustomQuipment = styled(Col)`
  background-color: white;
  padding: 24px;
  border-radius: 8px 0px 0px 8px; 
  @media ${device.maxXl}{
    border-radius:8px;
}
`

export const DefaultContentInWrapper = styled(props => <div {...props} />)`
  max-width: 1200px;
  padding: 30px 0;
  width: 95%;
  ${props => props.grid ? {
    'grid-template-columns': "69% 30%",
    display: "grid"

  } : {
    'grid-template-columns': ''
  }}
  margin: auto;
  justify-content: space-between;
  column-gap: 10px;
  grid-row-gap:20px;
  @media ${device.maxMd} {
    grid-template-columns: 59% 40%;
  }
  @media ${device.maxSm} {
    grid-template-columns: 100%;
  }
`;

export const DefaultContentInWrapperBN = styled(props => <div {...props} />)`
  max-width: 1200px;
  padding: 30px 0;
  width: 95%;
  ${props => props.grid ? {
    'grid-template-columns': "69% 30%",
    display: "grid"

  } : {
    'grid-template-columns': ''
  }}
  margin: auto;
  justify-content: space-between;
  column-gap: 10px;
  grid-row-gap:20px;
  @media ${device.maxLg} {
    grid-template-columns: 80%;
  }
  @media ${device.maxSm} {
    grid-template-columns: 100%;
  }
`;

export const DefaultContentInWrapperMajor = styled(props => <div {...props} />)`
  max-width: 1200px;
  padding: 30px 0;
  width: 95%;
  ${props => props.grid ? {
    'grid-template-columns': "69% 30%",
    display: "grid"

  } : {
    'grid-template-columns': ''
  }}
  margin: auto;
  justify-content: space-between;
  column-gap: 10px;
  grid-row-gap:20px;
  @media ${device.maxLg} {
    grid-template-columns: 80%;
  }
  @media ${device.maxSm} {
    grid-template-columns: 100%;
  }
`;

export const ImageSize = styled.img`
  height: auto;
  widthL: auto;
  @media ${device.maxMd}{
    width: 200px;
  }
  @media ${device.maxSm}{
    width: 150px;
  }
`

export const ImageContainer = styled.div`
  border:1px solid #E9E9E9;
  display: flex;
  justify-content: space-between;
  @media ${device.maxMd}{
    display:block;
    margin-top: 8px;
  }
`