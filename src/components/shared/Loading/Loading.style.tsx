import { styled } from '@styles/theme';
import { colors } from '@styles/theme/colors';
import { device } from '@styles/theme/device';

export const RingWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: transparent;
  border: 3px solid ${colors.common};
  border-radius: 50%;
  text-align: center;
  line-height: 150px;
  font-family: sans-serif;
  font-size: 20px;
  color: ${colors.common};
  letter-spacing: 4px;
  text-transform: uppercase;
  text-shadow: 0 0 10px #fff000;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  &:before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    width: 105%;
    height: 105%;
    border: 3px solid transparent;
    border-top: 3px solid #3FAEFF;
    border-right: 3px solid #3FAEFF;
    border-radius: 50%;
    animation: animateC 2s linear infinite;
  }
  span {
    display: block;
    position: absolute;
    top: calc(50% - 2px);
    left: 50%;
    width: 50%;
    height: 4px;
    background: transparent;
    transform-origin: left;
    animation: animate 2s linear infinite;
  }
  span:before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #3FAEFF;
    top: -6px;
    right: -8px;
    box-shadow: 0 0 20px #3FAEFF;
  }
  @keyframes animateC {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes animate {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(405deg);
    }
  }
`;

export const LoadingWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: transparent;
  /* border: 3px solid ${colors.common}; */
  text-align: center;
  justify-content: center;
  line-height: 150px;
  font-weight: 700;
  font-family: sans-serif;
  font-size: 50px;
  color: ${colors.common};
  letter-spacing: 4px;
  text-transform: uppercase;
  /* text-shadow: 0 0 10px #fff000;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); */
  /* &:before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    width: 105%;
    height: 105%;
    border: 3px solid transparent;
    border-top: 3px solid #3FAEFF;
    border-right: 3px solid #3FAEFF;
    border-radius: 50%;
    animation: animateC 2s linear infinite;
  } */
  /* span {
    display: block;
    position: absolute;
    top: calc(50% - 2px);
    left: 50%;
    width: 50%;
    height: 4px;
    background: transparent;
    transform-origin: left;
    animation: animate 2s linear infinite;
  } */
  /* span:before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #3FAEFF;
    top: -6px;
    right: -8px;
    box-shadow: 0 0 20px #3FAEFF;
  } */
  @keyframes animateC {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes animate {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(405deg);
    }
  }
`;



export const PlaceHolderContain = styled(props => <div {...props}/>)`
  width: 100%;
  height: ${props=> props.height || "50px"};
  display:flex;
  justify-content:center;
  align-items:center;
  &>div{
    display:block !important;
    height:100%;
    width:100%;
  }
  @media ${device.maxMd}{
      height:${props => props.heightMb || ""};
  }
`