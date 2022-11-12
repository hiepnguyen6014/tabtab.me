import { styled } from '@styles/theme';

export const LockWrap = styled.div`
  position: absolute;
  padding: 10px;
  display: flex;
  z-index: 3;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  height: 100%;
  background: rgba(236, 240, 241, 0.9);
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
  border-radius: 2px;
  overflow: hidden;
  label {
    margin: 0;
    color: #d54640;
    font-weight: 500;
    font-size: 15px;
    text-align: center;
    cursor: pointer;
    user-select: none;
    &:hover {
      text-decoration: underline;
    }
  }
  &:hover {
    svg {
      animation: rotate 0.5s infinite;
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(25deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-25deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
