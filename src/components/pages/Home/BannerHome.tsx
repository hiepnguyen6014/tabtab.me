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

export const BannerHome = (props: { t: any }) => {
  const arrayImg = [SRC_LOGO.BANNER_TAB, SRC_LOGO.BANNER_TAB, SRC_LOGO.BANNER_TAB];

  return (
    <BannerWrapper>
      <CarouselInBanner
        dotPosition="bottom"
        autoplay
        speed={3000}
        autoplaySpeed={2000}
      >
        {arrayImg.map((value, key) => (
          <ImageBanner
            alt="tabtab"
            key={key}
            preview={false}
            src={value}
            width="100%"
            height="100%"
          />
        ))}
      </CarouselInBanner>
      <ContentInBanner>
        <Content>
          <SpotlightText>
            <Typography.Title level={2} className="bannerText">
              {props.t('header.logan1')}
            </Typography.Title>
            <Typography.Title
              level={2}
              className="bannerSmallText"
              style={{ paddingBottom: '10%' }}
            >
              {props.t('header.logan2')}
            </Typography.Title>
          </SpotlightText>
          <span className="search-content">
            <SearchHome t={props.t} />
          </span>
        </Content>
      </ContentInBanner>
    </BannerWrapper>
  );
};
