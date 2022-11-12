import { styled } from '@styles/theme';
import { device } from '@styles/theme/device';
import { Carousel, Image } from 'antd';
export const BannerDesktop = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 50% 50%;
  position: relative;
  @media ${device.maxMd} {
    display: none;
  }
`;

export const BannerMobile = styled.div`
  position:relative;
  display: none !important;
  min-height: 250px;
  @media ${device.maxMd} {
    display: block !important;
  }
`
export const BannerMobileCarousel = styled(Carousel)`
  width: 100%;
`;

export const ImageWrapper = styled(Image)`
  object-fit: cover;
  object-position: center;
  height:100%;
  width:100%;
`;

export const BannerLeft = styled.div`
  padding-right: 10px;
  height: 100%;
`;

export const BannerRight3Pic = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`
export const BannerRight4Pic = styled.div`
  display:grid;
  height:100%;
  width:100%;
  grid-template-columns: 50% 50%;
  grid-template-rows:50% 50%;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

export const ButtonShowAllImage = styled.div`
  position: absolute;
  bottom: 3%;
  right: 1%;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
  border-radius: 2px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  gap: 5px;
  cursor:pointer;
  user-select:none;
  p {
    margin: 0;
    padding: 0;
  }
`;

export const ButtonShowAllImageMobile = styled(ButtonShowAllImage)`
position:absolute;
z-index:9;
`
