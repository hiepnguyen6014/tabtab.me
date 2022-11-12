import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { SRC_IMAGE } from '@core';
import { MPostDetail } from '@models/MPostDetail';
import { VectorHeart } from '@root/public/icons';
import { Image, Typography } from 'antd';
import React from 'react';

import {
  ContentInItem,
  ContentInItemPost,
  ContentItem,
  PostThumbnailWrapper,
  TypographyText,
} from '../PostItem.style';

interface DemoProperty {
  name?: string;
  backgroundTag?: string;
  action?: Function;
}

export const PostThumbnail: React.FC<{
  post: MPostDetail;
  demo?: DemoProperty;
  t: any;
}> = ({ post, demo, t }) => {
  const { realEstateImage } = post;
  const handleRedirect = () => {
    if (demo.action) demo.action();
  };

  return (
    <PostThumbnailWrapper onClick={handleRedirect}>
      <Image
        alt=""
        height={290}
        width="100%"
        src={realEstateImage || 'error'}
        preview={false}
        onClick={handleRedirect}
        fallback="data:image/webp;base64,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"
      />
      <ContentInItemPost>
        <TypographyText>
          <ContentInItem>
            <div className="pad-bottom">
              <div className="pad-top">
                <div
                  style={{
                    width: 118,
                    height: 24,
                    background: '#FFFFFF',
                    marginBottom: '8px',
                    borderRadius: '4px',
                  }}
                >
                  <Typography.Text className="inContentItem mx-2">
                    SALE 15% OFF
                  </Typography.Text>
                </div>
                <VectorHeart />
              </div>
              <div
                style={{
                  width: 98,
                  height: 24,
                  background: '#FFFFFF',
                  marginBottom: '20px',
                  borderRadius: '4px',
                }}
              >
                <Typography.Text className="inContentItem mx-2">
                  Cắt lỗ 15%
                </Typography.Text>
              </div>
            </div>

            <div
              style={{ marginBottom: '28%' }}
              className="d-flex justify-content-between"
            >
              <div
                style={{ width: 24, height: 24, background: '#FFFFFF' }}
                className="rounded-circle d-flex justify-content-center align-items-center"
              >
                <LeftOutlined />
              </div>
              <div
                style={{ width: 24, height: 24, background: '#FFFFFF' }}
                className="rounded-circle d-flex justify-content-center align-items-center"
              >
                <RightOutlined />
              </div>
            </div>
          </ContentInItem>
        </TypographyText>
      </ContentInItemPost>
    </PostThumbnailWrapper>
  );
};
