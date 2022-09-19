import { Divider } from 'antd';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
import { ItemWrapper } from './PostItem/PostItemWrapper';
import { PostThumbnail } from './PostItem/PostComponent/PostThumbnail';
import {
  PostContent,
  PostMiddle,
  PostMiddleItem,
  PostTitle,
  PostMiddleFooter,
  TypographyText,
} from './PostItem/PostItem.style';
import { SRC_IMAGE } from '@core';
import { formatNumToUnit } from '@root/src/core/utils/HandleNumber';
import { useRouter } from 'next/router';
import {ROUTES} from "@constants"

const PostItemSell= ({post, t}) => {

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
          action: () => handleRedirect(realEstateId)
        }}
        />
        <PostContent onClick={()=> handleRedirect(realEstateId)}>
          <TypographyText>
            <PostTitle>
              <div style={{display:'flex' , justifyContent:'space-between'}}>
                <div >
                  <Typography className="price">
                    {formatNumToUnit(post.realEstateValueSalePrice, t)}
                  </Typography>
                  <Typography
                    className="wasPrice"
                    style={{ marginTop: '-13px' }}
                  >
                    {formatNumToUnit(post.realEstateValueSalePrice, t)}
                  </Typography>
                </div>
                <div >
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <img
                      // preview={false}
                      style={{ borderRadius: '50%' }}
                      alt="userAvatar"
                      src={SRC_IMAGE.STAFF2}
                      width="40px"
                      height="40px"
                    />
                  </div>
                </div>
              </div>
              <div>
                <Typography className="detailPost" style={{overflow:'clip'}}>
                  {post.realEstateTitle}
                </Typography>
                <Typography
                  className="addressPost"
                  style={{ marginTop: '0px' }}
                >
                  {post.realEstateLocation}
                </Typography>
              </div>
            </PostTitle>
            <Divider />

            <PostMiddle className='wrap-post'>
              <PostMiddleItem>
                {
                  <>
                    <VectorSquare />
                    <Typography className="textPostMiddle">
                      {/* {post.realEstateLandRealitySquare} */}
                      {parseFloat(post.realEstateLandRealitySquare).toLocaleString()}
                    </Typography>
                  </>
                }
              </PostMiddleItem>

              <PostMiddleItem>
                {
                  <>
                    <VectorTree />
                    <Typography className="textPostMiddle">
                      ---
                    </Typography>
                  </>
                }
              </PostMiddleItem>

              <PostMiddleItem>
                {
                  <>
                    <VectorUser />
                    <Typography className="textPostMiddle">
                      Chính chủ
                    </Typography>
                  </>
                }
              </PostMiddleItem>
            </PostMiddle>
            <PostMiddle className='wrap-post'>
              <PostMiddleItem>
                {
                  <>
                    <VectorHouse />
                    <Typography className="textPostMiddle">
                    {/* {post.realEstateLandRealitySquare} */}
                    {parseFloat(post.realEstateLandRealitySquare).toLocaleString()}
                    </Typography>
                  </>
                }
              </PostMiddleItem>

              <PostMiddleItem>
                {
                  <>
                    <VectorDirection />
                    <Typography className="textPostMiddle">
                      ---
                    </Typography>
                  </>
                }
              </PostMiddleItem>

              <PostMiddleItem>
                {
                  <>
                    <VectorBuilding />
                    <Typography className="textPostMiddle">
                      Chung cư
                    </Typography>
                  </>
                }
              </PostMiddleItem>
            </PostMiddle>
            <Divider style={{ marginTop: '5px', marginBottom: '7px' }} />
            <PostMiddle className='wrap-post'>
              <PostMiddleFooter>
                {
                  <span style={{ display: 'flex'}}>
                    <VectorCalendar />
                    <Typography className="textPostMiddle">
                      {`${post.realEstateTotalDate.total || ''} ${t(post.realEstateTotalDate.defineName)}`}
                    </Typography>
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
                        // alignItems: 'center',
                        background: '#F9C41F',
                        color: "#222222"
                      }}
                    >
                      <VectorTalk />
                      {/* <label className="textPostMiddle"> */}
                        CHAT NOW
                      {/* </label> */}
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

export default PostItemSell;
