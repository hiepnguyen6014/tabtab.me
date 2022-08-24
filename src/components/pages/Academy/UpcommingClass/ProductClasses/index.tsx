import { Avatar, Button, Col, Divider, Image, Row, Skeleton, Typography } from 'antd';
import {
  IconBook,
  IconHour,
  IconStartRating,
  VectorBuilding,
  VectorCalendar,
  VectorDirection,
  VectorHouse,
  VectorSquare,
  VectorTalk,
  VectorTree,
  VectorUser,
} from 'public/icons';
import { PostThumbnail } from './PostThumbnail';
import {
  PostContent,
  PostMiddle,
  PostMiddleItem,
  PostTitle,
  PostMiddleFooter,
  TypographyText,
} from '../../Academy.style';
import { PostWrapper, WidgetHeader } from '../../Academy.style'
import { SRC_IMAGE } from '@core';
import { formatNumToUnit } from '@root/src/core/utils/HandleNumber';
import { useRouter } from 'next/router';
import { ROUTES } from "@constants"

const PostItemSell = ({ post, t }) => {

  const {
    realEstateId,
    agency,
    realEstatePostTypeId,
    realEstateValueSalePrice,
    realEstateJuridical,
    realEstateLocation,
    lastName,
    firstName,
    userAvatar
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

  const findPage = (e, path) => {
    router.push(path)
  }

  return (
    <>
      <PostWrapper>
        <PostThumbnail
          post={post}
          t={t}
          demo={{
            name: realEstateJuridical,
            action: () => handleRedirect(realEstateId)
          }}
        />
        <PostContent onClick={(e) => {handleRedirect(realEstateId),findPage(e, "/e-learning")}}>
          <TypographyText>
            <PostTitle>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
                <IconStartRating />
                <label style={{ fontSize: 14, fontWeight: '500', fontFamily: "Inter", color: "7A7A7A", marginLeft: 6 }}>3290</label>
              </div>
              <Row className='wrap-post'>
                <Typography.Title className="detailPost" style={{ fontSize: 18, fontWeight: '700', fontFamily: "Inter", overflow: 'clip' }}>
                  Earlier this year, a confusing reorganisation and reduction of refuse
                </Typography.Title>
                <Typography.Title
                  className="addressPost"
                  style={{ fontSize: 16, fontWeight: '400', fontFamily: "Inter", marginTop: 0 }}
                >
                  Earlier this year, a confusing reorganisation and reduction of refuse
                </Typography.Title>
              </Row>
              <div style={{ marginTop: 16 }}>
                <Typography.Title className="price" style={{ fontSize: 24, fontWeight: '700', fontFamily: "Inter" }}>
                  {formatNumToUnit(post.realEstateValueSalePrice, t)}
                </Typography.Title>
                <Typography.Title
                  className="wasPrice"
                  style={{ marginTop: '-5px' }}
                >
                  was {formatNumToUnit(post.realEstateValueSalePrice, t)}
                </Typography.Title>
              </div>
            </PostTitle>

            <PostMiddle className='wrap-post'>
              <PostMiddleItem>
                {
                  <>
                    <VectorUser />
                    <Typography.Text className="textPostMiddle">
                      3290
                    </Typography.Text>
                  </>
                }
              </PostMiddleItem>

              <PostMiddleItem>
                {
                  <>
                    <IconBook />
                    <Typography.Text className="textPostMiddle">
                      32
                    </Typography.Text>
                  </>
                }
              </PostMiddleItem>

              <PostMiddleItem>
                {
                  <>
                    <IconHour />
                    <Typography.Text className="textPostMiddle">
                      230 HOUR
                    </Typography.Text>
                  </>
                }
              </PostMiddleItem>

            </PostMiddle>
            <PostTitle style={{marginBottom:10}}>
              <Divider style={{ marginTop: '10px', marginBottom: '20px' }} />
              <WidgetHeader>
                <span role="left">
                  <div>
                    <Avatar src={userAvatar} size={48}>{lastName ? lastName.charAt(0).trim().toUpperCase() : 'A'}</Avatar>
                  </div>
                  <span>
                    <div style={{ display: 'flex' }}>
                      <Typography.Title style={{ fontSize: 18, fontWeight: '700', fontFamily: "Inter", marginBottom:0}}>
                        {lastName || firstName ? firstName + " " + lastName : "Ẩn danh"}
                      </Typography.Title>
                      <div style={{borderRadius:8, padding:'2px 8px 2px 8px', background:'#F9C41F', marginLeft:8}}>
                        <label style={{fontSize:12, fontWeight:'700', fontFamily:"Inter"}}>Teacher</label>
                      </div>
                    </div>
                    <span className='align-items-center d-flex mt-2' >
                      <label style={{ fontSize: 16, fontWeight: '500', color: "#7A7A7A", fontFamily: "Inter" }}>Merchandising</label>
                      <Divider type='vertical' style={{ marginRight: 5, marginLeft: 5 }} />
                      <label style={{ fontSize: 16, fontWeight: '500', color: "#7A7A7A", fontFamily: "Inter" }}>Zalo Corp</label>
                    </span>
                  </span>
                </span>
              </WidgetHeader>
            </PostTitle>

          </TypographyText>
        </PostContent>
      </PostWrapper>
    </>
  );
};

export default PostItemSell;
