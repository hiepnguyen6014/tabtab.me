import { PUBLIC_ROUTES } from '@constants';
import { MNewsPost } from '@models/MNewsPost';
import { Typography } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';

import {
  DefaultContentNoGrid,
  DefaultWrapperWithBg,
} from '../../../layout/DefaultLayout/DefaultComponent.style';
import PostItemHotNews from '../../../shared/PostItem/PostItemHotNews';
import {
  ButtonShowMore,
  ButtonShowMoreMobile,
  RowOtherNews,
  RowTitle,
} from './detail.style';

export const OtherNews = (props: { t: any; otherNews: MNewsPost[] }) => {
  const { t: translate, otherNews } = props;
  const [showMore, setShowMore] = useState(otherNews.length <= 4);
  const router = useRouter();
  if (!props.otherNews || !props.otherNews.length) return <></>;
  const propsCol = {
    left: {
      lg: { span: 12 },
      md: { span: 24 },
    },
    right: {
      lg: { span: 12 },
      md: { span: 24 },
    },
  };
  const renderNews = props.otherNews
    .slice(0, showMore ? 8 : 4)
    .map((post, key) => (
      <PostItemHotNews
        key={key}
        post={post}
        t={translate}
        customCol={{ left: propsCol.left, right: propsCol.right }}
      />
    ));

  const onClick = () => {
    if (showMore) {
      router.push(PUBLIC_ROUTES.HOTNEWS.href);
    } else {
      setShowMore(true);
    }
  };
  return (
    <>
      <DefaultWrapperWithBg>
        <DefaultContentNoGrid>
          <RowTitle>
            <Typography.Title style={{ margin: 0 }} level={3}>
              {translate('news.otherNews')}
            </Typography.Title>
            <ButtonShowMore onClick={onClick}>
              {translate(!showMore ? 'button.showMore' : 'button.all')}
            </ButtonShowMore>
          </RowTitle>
          <RowOtherNews>{renderNews}</RowOtherNews>

          <ButtonShowMoreMobile disabled={showMore} onClick={onClick}>
            {translate(!showMore ? 'button.showMore' : 'button.all')}
          </ButtonShowMoreMobile>
        </DefaultContentNoGrid>
      </DefaultWrapperWithBg>
    </>
  );
};
