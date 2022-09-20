import { SearchHome } from '@components';
import {
  BannerWrapper,
  CarouselInBanner,
  Content,
  ContentInBanner,
  ImageBanner,
  SpotlightText,
} from './Home.style';
import { Typography } from 'antd';
import { SRC_IMAGE, SRC_LOGO } from '@constants';
import Image from 'material-ui-image';
// import Carousel from 'react-material-ui-carousel';

export const BannerHome = (props: { t: any }) => {
  const arrayImg = [SRC_LOGO.BANNER_TAB, SRC_LOGO.BANNER_TAB, SRC_LOGO.BANNER_TAB];

  return (
    <>
      <BannerWrapper>
        <CarouselInBanner
          autoPlay={true}
          stopAutoPlayOnHover={true}
        // duration={100}
        >
          {arrayImg.map((value, key) => (
            <img src={value} style={{ height: '700px', width: '100%' }} />
            // <ImageBanner
            //   alt="tabtab"
            //   key={key}
            //   src={value}
            //   width="100%"
            //   height="700px"
            // />
          ))}
        </CarouselInBanner>
        <ContentInBanner>
          <Content>
            <SpotlightText>
              <Typography level={2} className="bannerText">
                {props.t('header.logan1')}
              </Typography>
              <Typography
                level={2}
                className="bannerSmallText"
                style={{ paddingBottom: '10%' }}
              >
                {props.t('header.logan2')}
              </Typography>
            </SpotlightText>
            <span className="search-content">
              <SearchHome t={props.t} />
            </span>
          </Content>
        </ContentInBanner>
      </BannerWrapper>


    </>
  );
};
