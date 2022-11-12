import { IconCloseCircle, IconPlay } from '@root/public/icons';
import { styled } from '@styles/theme';
import { Image } from 'antd';

export const BoxVideoWrap = styled.div`
  position: relative;
  width: 100%;
  max-height: 400px;
  background: #222222;
  text-align: center;
`;

export const ButtonCloseModal = styled(IconCloseCircle)`
  transform: scale(1.7);
  & > path {
    fill: #fff;
  }
`;
export const ThumbnailVideo = styled(Image)`
  max-height: 400px;
  object-fit: contain;
  object-position: center;
`;
export const ModalButtonPlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(30, 39, 46, 0.5);
  z-index: 9;
`;

export const ButtonPlay = styled(IconPlay)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  cursor: pointer;
`;
