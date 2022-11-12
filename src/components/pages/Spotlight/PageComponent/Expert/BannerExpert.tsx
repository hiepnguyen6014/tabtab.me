import { SRC_IMAGE } from '@core';
import { VectorBookmark } from '@root/public/icons';
import { Image, Typography } from 'antd';

import {
  BannerExpertWrap,
  BannerWrap,
  DivWrap,
  ImageBannerWrap,
  TextBanner,
} from './Expert.style';

const BannerExpert = () => {
  return (
    <>
      <BannerExpertWrap>
        <BannerWrap>
          <div className="bookmark">
            <VectorBookmark height="28px" width="28px" />
          </div>
          <ImageBannerWrap
            alt="imagePost"
            src={SRC_IMAGE.IMAGEA}
            preview={false}
            width="100%"
            height="100%"
          />
          <DivWrap>
            <TextBanner>
              <div className="title-post">
                <Typography className="first-banner__text--style">
                  Genres
                </Typography>
                <Typography className="second-banner__text--style">
                  Keep up with the rest of the world
                </Typography>
                <Typography className="third-banner__text--style">
                  Here, four sixtysomethings offer advice to those in their.
                </Typography>
                <div className="d-flex info-group pb-1">
                  <div style={{ width: 36, height: 36 }} className="mx-2">
                    <Image
                      alt="user"
                      src={SRC_IMAGE.STAFF3}
                      width={36}
                      height={36}
                      className="rounded-circle"
                    />
                  </div>
                  <div>
                    <Typography className="date-banner__text--style">
                      26/05/2021
                    </Typography>
                    <Typography.Text className="date-banner__text--style">
                      by
                    </Typography.Text>
                    <Typography.Text className="name-banner__text--style">
                      Jenny Wilson
                    </Typography.Text>
                  </div>
                </div>
              </div>
            </TextBanner>
          </DivWrap>
        </BannerWrap>
      </BannerExpertWrap>
    </>
  );
};

export default BannerExpert;
