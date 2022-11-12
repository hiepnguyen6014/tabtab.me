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

import { PostThumbnail } from './PostItemProp/PostComponent/PostThumbnail';
import {
  PostContent,
  PostMiddle,
  PostMiddleFooter,
  PostMiddleItem,
  PostTitle,
  TypographyText,
} from './PostItemProp/PostItem.style';
import { ItemWrapper } from './PostItemProp/PostItemWrapper';

const PostItemProp = ({ post, t }) => {
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
              <Row>
                <Col sm={18}>
                  <Typography.Title className="price">
                    {formatNumToUnit(post.realEstateValueSalePrice, t)}
                  </Typography.Title>
                  <Typography.Title
                    className="wasPrice"
                    style={{ marginTop: '-13px' }}
                  >
                    {formatNumToUnit(post.realEstateValueSalePrice, t)}
                  </Typography.Title>
                </Col>
                <Col sm={6}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Image
                      preview={false}
                      style={{ borderRadius: '50%' }}
                      alt="userAvatar"
                      src={SRC_IMAGE.STAFF2}
                      width="40px"
                      height="40px"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="wrap-post">
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
              </Row>
            </PostTitle>

            <Divider style={{ marginTop: '5px', marginBottom: '7px' }} />

            <PostMiddle className="wrap-post">
              <PostMiddleFooter>
                {
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <VectorCalendar />
                    <label
                      style={{
                        fontSize: 13,
                        fontWeight: '500',
                        marginLeft: 5,
                        fontFamily: 'Inter',
                      }}
                      className="textPostMiddle"
                    >
                      {`${post.realEstateTotalDate.total || ''} ${t(
                        post.realEstateTotalDate.defineName,
                      )}`}
                    </label>
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
      </ItemWrapper>
    </>
  );
};

export default PostItemProp;
