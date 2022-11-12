import { SearchHome } from '@components';
import { SRC_LOGO } from '@constants';
import { Carousel, Typography } from 'antd';

import {
  BackgroundGradient,
  BannerImage,
  BannerWrapper,
  ContentInBanner,
  SearchWrapper,
} from './Home.style';

export const BannerHome = (props: { t: any }) => {
  const arrayImg = [
    SRC_LOGO.BANNER_TAB,
    SRC_LOGO.BANNER_TAB,
    SRC_LOGO.BANNER_TAB,
    SRC_LOGO.BANNER_TAB,
    SRC_LOGO.BANNER_TAB,
  ];

  return (
    <BannerWrapper>
      <Carousel dotPosition="bottom" autoplay autoplaySpeed={3000} infinite>
        {arrayImg.map((value, key) => (
          <BannerImage
            key={`header-image-${key}`}
            alt={`header-image-${key}`}
            preview={false}
            src={value}
          />
        ))}
      </Carousel>
      <BackgroundGradient />
      <ContentInBanner>
        <Typography.Title level={1} className="bannerText">
          {props.t('header.logan1')}
        </Typography.Title>
        <Typography.Text>{props.t('header.logan2')}</Typography.Text>
      </ContentInBanner>
      <SearchWrapper>
        <SearchHome t={props.t} />
      </SearchWrapper>
    </BannerWrapper>
  );
};
