import { styled } from '@styles/theme';
import { device } from '@styles/theme/device';
import {
  Button,
  Divider,
  Input,
  Radio,
  Typography,
  Modal,
  Pagination,
  Image,
} from 'antd';

export const RoommateWrap = styled.div`
  height: 536px;
  width: 282px;
  position: relative;
  border-radius: 24px;
`;

export const ItemRoommateWrap = styled((props) => <div {...props} />)`
  height: 518px;
  width: 282px;
  border-radius: 24px;
  backdrop-filter: blur(120px);
  ${({ colorWrap }) =>
    colorWrap
      ? {
          background: colorWrap,
        }
      : {
          background: '#470a37 !important',
        }}
  .padding-content {
    padding: 8px 16px;
  }
`;

export const BannerRoommate = styled.div`
  width: 282px;
  height: 282px;
  position: relative;
`;

export const ModalRoommate = styled(Modal)`
  .ant-modal-body {
    width: 972px !important;
    height: 598px !important;
    background: #ffffff;
    border-radius: 24% !important;
    padding: 8px;
    @media ${device.maxMd} {
      width: 100% !important;
      height: auto !important;
    }
  }
  .ant-modal-content {
    border-radius: 24px !important;
  }
  .ant-modal-close-x {
    display: none;
  }
`;

export const ImageWrap = styled(Image)`
  @media ${device.maxMd} {
    object-fit: cover;
  }
`;

export const TextInBanner = styled.div`
  width: 282px;
  height: auto;
  position: absolute;
  top: 73%;
  bottom: 0;
  left: 0;
  right: 0;
  padding-left: 20px;
`;

export const DetailRoommate = styled.div`
  width: 282px;
  height: 36px;
  position: absolute;
  display: flex;
  justify-content: center;
  top: 93%;
  bottom: 0;
  left: 2%;
  right: 0;
`;

export const ButtonDetail = styled(Button)`
  width: 153px;
  height: 36px;
  background: rgba(249, 196, 31, 0.3);
  border: 1px solid #f9c41f;
  backdrop-filter: blur(32px);
  border-radius: 100px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;

export const SearchingForWrap = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 100px;
  align-items: center;
  padding: 8px 16px 8px 12px;
  gap: 10px;
  height: 36px;
  width: fit-content;
  display: flex;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;

export const ButtonChat = styled.div`
  background: #f9c41f;
  border: 1px solid #f9c41f;
  backdrop-filter: blur(32px);
  border-radius: 100px;
  align-items: center;
  height: 48px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #222222;
`;

export const DividerItem = styled(Divider)`
  margin-top: 10px;
  margin-bottom: 20px;
  border-color: #ffffff;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemRoommateText = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  .name-roommate {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #ffffff;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
  .info-roommate {
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.6);
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    margin-left: 5px;
  }
  .work-roommate {
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    color: rgba(255, 255, 255, 0.8);
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
  .coin-dollar {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #f9c41f;
    margin-right: 5px;
  }
  .content-roommate {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.8);
  }
  .search-info {
    font-weight: 700;
    font-size: 12px;
    line-height: 20px;
    color: #ffffff;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .distance-roommate {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    margin-left: 10px;
  }
`;

export const ButtonShadow = styled(Button)`
  border-color: transparent;
  color: #ffffff;
  background: #ff8800;
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  gap: 10px;
  position: absolute;
  width: 66px;
  height: 32px;
  box-shadow: 0 0 40px 40px #ff8800 inset, 0 0 33px 34px #ffffff;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  top: 30%;
  left: 10%;
  right: 0;
  bottom: 0%;
`;

export const ButtonClose = styled(Button)`
  color: #ffffff;
  background: transparent;
  border-radius: 100px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 24px;
  gap: 14px;
  position: absolute;
  width: 131px;
  height: 45px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  top: -10%;
  left: 86%;
  right: 0;
  bottom: 0%;
  @media ${device.maxMd} {
    top: -5%;
  left: 76%;
  right: 0;
  bottom: 0%;
  }
  @media ${device.maxSm} {
    top: -4%;
  left: 66%;
  right: 0;
  bottom: 0%;
  }
`;
