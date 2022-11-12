import { ROUTES } from '@constants';
import { SRC_IMAGE } from '@core';
import { formatNumToUnit } from '@root/src/core/utils/HandleNumber';
import { Button, Col, Divider, Image, Row, Skeleton, Typography } from 'antd';
import { useRouter } from 'next/router';
import {
  VectorBuilding,
  VectorCalendar,
  VectorDirection,
  VectorHouse,
  VectorSquare,
  VectorTalk,
  VectorTree,
  VectorUser,
} from 'public/icons';

import { PostThumbnail } from './PostItemH/PostComponent/PostThumbnail';
import {
  Container,
  PostContent,
  PostMiddle,
  PostMiddleFooter,
  PostMiddleItem,
  PostTitle,
  TypographyText,
} from './PostItemH/PostItem.style';
import { ItemWrapper } from './PostItemH/PostItemWrapper';

const PostItemH = ({ post, t }) => {
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

  return (
    <>
      <ItemWrapper>
        <Container>
          <PostThumbnail
            post={post}
            t={t}
            demo={{
              name: realEstateJuridical,
              action: () => handleRedirect(realEstateId),
            }}
          />
          <PostContent onClick={() => handleRedirect(realEstateId)}>
            <TypographyText>
              <PostTitle>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div>
                    <Typography.Title className="price">
                      {formatNumToUnit(post.realEstateValueSalePrice, t)}
                    </Typography.Title>
                    <Typography.Title
                      className="wasPrice"
                      style={{ marginTop: '-13px' }}
                    >
                      {formatNumToUnit(post.realEstateValueSalePrice, t)}
                    </Typography.Title>
                  </div>
                  <div>
                    <Image
                      preview={false}
                      style={{ borderRadius: '50%' }}
                      alt="userAvatar"
                      src={SRC_IMAGE.STAFF2}
                      width="40px"
                      height="40px"
                    />
                  </div>
                </div>
                <div className="wrap-post">
                  <Typography.Title
                    className="detailPost"
                    style={{ overflow: 'clip' }}
                  >
                    {post.realEstateTitle}
                  </Typography.Title>
                  <Typography.Title
                    className="addressPost"
                    style={{ marginTop: '0px' }}
                  >
                    {post.realEstateLocation}
                  </Typography.Title>
                </div>
              </PostTitle>
              <Divider style={{ marginTop: '0px', marginBottom: '0px' }} />

              <PostMiddle className="wrap-post">
                <PostMiddleItem>
                  {
                    <>
                      <VectorSquare />
                      <Typography.Text className="textPostMiddle">
                        {/* {post.realEstateLandRealitySquare} */}
                        {parseFloat(
                          post.realEstateLandRealitySquare,
                        ).toLocaleString()}
                      </Typography.Text>
                    </>
                  }
                </PostMiddleItem>

                <PostMiddleItem>
                  {
                    <>
                      <VectorTree />
                      <Typography.Text className="textPostMiddle">
                        ---
                      </Typography.Text>
                    </>
                  }
                </PostMiddleItem>

                <PostMiddleItem>
                  {
                    <>
                      <VectorUser />
                      <Typography.Text className="textPostMiddle">
                        Chính chủ
                      </Typography.Text>
                    </>
                  }
                </PostMiddleItem>
              </PostMiddle>
              <PostMiddle className="wrap-post">
                <PostMiddleItem>
                  {
                    <>
                      <VectorHouse />
                      <Typography.Text className="textPostMiddle">
                        {/* {post.realEstateLandRealitySquare} */}
                        {parseFloat(
                          post.realEstateLandRealitySquare,
                        ).toLocaleString()}
                      </Typography.Text>
                    </>
                  }
                </PostMiddleItem>

                <PostMiddleItem>
                  {
                    <>
                      <VectorDirection />
                      <Typography.Text className="textPostMiddle">
                        ---
                      </Typography.Text>
                    </>
                  }
                </PostMiddleItem>

                <PostMiddleItem>
                  {
                    <>
                      <VectorBuilding />
                      <Typography.Text className="textPostMiddle">
                        Chung cư
                      </Typography.Text>
                    </>
                  }
                </PostMiddleItem>
              </PostMiddle>
              <Divider style={{ marginTop: '0px', marginBottom: '0px' }} />
              <PostMiddle className="wrap-post">
                <PostMiddleFooter>
                  {
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                      <VectorCalendar />
                      <Typography.Text className="textPostMiddle">
                        {`${post.realEstateTotalDate.total || ''} ${t(
                          post.realEstateTotalDate.defineName,
                        )}`}
                      </Typography.Text>
                    </span>
                  }
                </PostMiddleFooter>

                <PostMiddleFooter>
                  {
                    <>
                      <Button
                        style={{
                          borderRadius: '6px',
                          display: 'flex',
                          alignItems: 'center',
                          background: '#F9C41F',
                        }}
                      >
                        <VectorTalk />
                        <label className="textPostMiddle">CHAT NOW</label>
                      </Button>
                    </>
                  }
                </PostMiddleFooter>
              </PostMiddle>
            </TypographyText>
          </PostContent>
        </Container>
      </ItemWrapper>
    </>
  );
};

export default PostItemH;
