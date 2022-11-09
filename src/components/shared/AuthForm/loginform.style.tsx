import { styled } from '@styles/theme';
import { device } from '@styles/theme/device';
import { Button, Modal } from 'antd';

export const ModalWrapper = styled(Modal)`
  border-radius: 12px;
  overflow: hidden;
  background: #ffffff;
  padding: 0;
  box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.12);
  .ant-modal-header {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    font-family: 'Inter';
    border-bottom: 1px solid #d3d3d3;
  }
  .ant-modal-close-x {
    border: 1px solid #222222;
    border-radius: 50%;
    width: 28px;
    height: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 20px;
  }
  @media ${device.maxMd} {
    width: 343px !important;
  }
`;

export const FormLoginLabel = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 500;
  margin-top: 70px;
  span {
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
  }
  span:first-child {
    color: #ce1d1d;
    border-bottom: 2px solid #ce1d1d;
  }
`;

export const EmailImageWrapper = styled.div`
  height: 100px;
  width: 100px;
  margin: 25px auto;
  background-color: #d44640;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 30px 2px #d44640;
  span {
    height: 27px;
    width: 35px;
    color: white;
    svg {
      height: 100%;
      width: 100%;
    }
  }
`;

export const ReturnLoginBtn = styled(Button)`
  background: #ce1d1d;
  display: block;
  width: 100%;
  color: white;
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  span {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media ${device.maxMd} {
    width: 75%;
  }
`;
