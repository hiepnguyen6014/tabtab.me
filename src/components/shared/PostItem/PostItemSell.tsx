import { ROUTES, TRACKING_GOOGLE } from '@constants';
import { MPostDetail } from '@models/MPostDetail';
import { formatNumToUnit } from '@root/src/core/utils/HandleNumber';
import { Divider, Skeleton, Typography } from 'antd';
import { useRouter } from 'next/router';
import {
  IconAI,
  IconCoin,
  IconCoinMini,
  IconLineChart,
  IconMark,
} from 'public/icons';

import { PostAgencyFooter } from './PostComponent/PostAgencyFooter';
import { PostProjectFooter } from './PostComponent/PostProjectFooter';
import { PostThumbnail } from './PostComponent/PostThumbnail';
import {
  PostContent,
  PostMiddle,
  PostMiddleItem,
  PostTitle,
} from './PostItem.style';
import { ItemWrapper } from './PostItemWrapper';

// import { useEffect } from 'react';
// import * as ga from '@ga';

const PostItemSell: React.FC<{
  post: MPostDetail;
  t: any;
}> = ({ post, t: translate }) => {
  const {
    realEstateId,
    agency,
    realEstatePostTypeId,
    realEstateValueSalePrice,
    realEstateJuridical,
    realEstateLocation,
  } = post;
  const router = useRouter();
  const handleRedirect = (idPost: number) => {
    const pathname = {
      1: ROUTES.MAIN_FLOOR.href,
      0: ROUTES.BROKERAGE_FLOOR_PAGE.href,
      default: ROUTES.MAIN_FLOOR.href,
    }[agency];
    router.push({
      pathname: pathname + ROUTES.DETAIL.href,
      query: { id: idPost },
    });
  };

  //   useEffect(() => {
  //   if (agency === 0) {
  //     ga.event(window, TRACKING_GOOGLE.AGENCY_POST)
  //   } else {
  //     ga.event(window, TRACKING_GOOGLE.USER_POST)
  //   };
  // }, []);

  if (post?.isHidden === 1) return <></>;

  return (
    <>
      <ItemWrapper>
        <PostThumbnail
          post={post}
          t={translate}
          demo={{
            name: realEstateJuridical,
            action: () => handleRedirect(realEstateId),
          }}
        />

        <PostContent onClick={() => handleRedirect(realEstateId)}>
          <PostTitle>
            <Typography.Title ellipsis={{ rows: 2 }} level={5}>
              {post.realEstateTitle}
            </Typography.Title>
            {realEstateLocation && (
              <Typography.Paragraph ellipsis={{ rows: 1 }}>
                <span>
                  <IconMark />
                </span>
                {realEstateLocation}
              </Typography.Paragraph>
            )}
          </PostTitle>
          <Divider />

          <PostMiddle>
            <PostMiddleItem>
              {
                <>
                  <IconCoinMini />
                  {!realEstateValueSalePrice ||
                  realEstateValueSalePrice === 0 ||
                  typeof realEstateValueSalePrice == 'undefined' ? (
                    <h1>{translate('unit.deal')}</h1>
                  ) : (
                    <h1>
                      {formatNumToUnit(realEstateValueSalePrice, translate)}
                      {post.realEstatePostTypeId === 2
                        ? '/' + translate('common.month')
                        : ''}
                    </h1>
                  )}
                </>
              }
            </PostMiddleItem>

            {/* <PostMiddleItem>
              {
                <>
                  <IconAI />
                  <h1>
                    {formatNumToUnit(realEstateValueSalePrice, translate)}
                  </h1>
                </>
              }
            </PostMiddleItem> */}

            <PostMiddleItem>
              {
                <>
                  <IconLineChart />
                  <h1>
                    {formatNumToUnit(realEstateValueSalePrice, translate)}
                  </h1>
                </>
              }
            </PostMiddleItem>
          </PostMiddle>
          <Divider />
          {
            {
              0: <PostAgencyFooter t={translate} post={post} />,
              1: <PostProjectFooter post={post} />,
              default: <PostProjectFooter post={post} />,
            }[agency]
          }
        </PostContent>
      </ItemWrapper>
    </>
  );
};

export default PostItemSell;
