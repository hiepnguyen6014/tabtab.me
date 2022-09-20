import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {
  WrapperSpot,
  TextWrap,
  ColWrap,
  VerticalLine,
  SpotlightText,
  GeneralText,
  GeneralWrap,
} from '../Home.style';
import { IconQuotes } from 'public/icons';
import { SRC_IMAGE } from '@constants';
import { useState } from 'react';

const Opinion: React.FC<{}> = () => {
  const [showContent, setShowContent] = useState(true)

  return (
    <WrapperSpot>
      <GeneralText>
        <Typography className="title-general">Opinion</Typography>
        <GeneralWrap>
          <div className="general-between-wrap">
            <div className="general-wrap">
              <IconQuotes />
              <Typography
                className="content-general"
              >
                Nhận định chuyên gia cho riêng Hùng
              </Typography>
            </div>
            <div onClick={e => setShowContent(showContent ? false : true)} style={{ cursor: "pointer" }}>
              <Typography
                className='content-hide'
              >
                HIDE
              </Typography>
            </div>
          </div>
        </GeneralWrap>
      </GeneralText>
      {showContent && <Grid
        container
        xs={8} sm={16} md={24} lg={32}
      // gutter={{
      //   xs: 8,
      //   sm: 16,
      //   md: 24,
      //   lg: 32,
      // }}
      >
        <ColWrap className="gutter-row" xs={12} md={6}>
          <TextWrap>
            <div className="wrap-text">
              <Typography className="text-opinion">
                There are fines of up to €3,000 if you don’t self-isolate on.
              </Typography>
            </div>

            <Typography className="text-name">
              Darrell Steward
            </Typography>
            <Typography className="text-role">
              Chief Operations Officer
            </Typography>
            <div className="flex-wrap">
              <VerticalLine />
              <Typography className="text-company">
                APPLE
              </Typography>
              <VerticalLine />
            </div>
          </TextWrap>

          <div
            style={{
              justifyContent: 'center',
              objectPosition: 'center',
              display: 'flex',
              objectFit: 'cover',
            }}
          >
            <div className="circle-wrap">
              <img
                src={SRC_IMAGE.CIRCLE}
                alt="Picture of the author"
                width="100%"
                height="100%"
                // preview={false}
                style={{
                  justifyContent: 'center',
                  objectPosition: 'center',
                  display: 'flex',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div className="image-wrap">
              <img
                src={SRC_IMAGE.STAFF3}
                alt="Picture of the author"
                width="100%"
                height="100%"
              // preview={false}
              />
              <div className="horizotalLine" style={{ marginTop: "-5px" }} />
            </div>
          </div>
          {/* <div className="horizotalLine"/> */}
        </ColWrap>
        <ColWrap className="gutter-row" xs={12} md={6}>
          <TextWrap>
            <div className="wrap-text">
              <Typography className="text-opinion">
                Once neglected in favour of supposedly healthier products or
                produced
              </Typography>
            </div>

            <Typography className="text-name">
              Albert Flores
            </Typography>
            <Typography className="text-role">
              Chief Operations Officer
            </Typography>
            <div className="flex-wrap">
              <VerticalLine />
              <Typography className="text-company">
                ANGIA
              </Typography>
              <VerticalLine />
            </div>
          </TextWrap>
          <div
            style={{
              justifyContent: 'center',
              objectPosition: 'center',
              display: 'flex',
              objectFit: 'contain',
            }}
          >
            <div className="circle-wrap">
              <img
                src={SRC_IMAGE.CIRCLE}
                alt="Picture of the author"
                width="100%"
                height="100%"
              // preview={false}
              />
            </div>
            <div className="image-wrap">
              <img
                src={SRC_IMAGE.STAFF1}
                alt="Picture of the author"
                width="100%"
                height="100%"
              // preview={false}
              />
              <div className="horizotalLine" style={{ marginTop: "-5px" }} />
            </div>
          </div>


        </ColWrap>
        <ColWrap className="gutter-row" xs={12} md={6}>
          <TextWrap>
            <div className="wrap-text">
              <Typography className="text-opinion">
                Better than ever, thanks to chefs who are adding bone marrow
              </Typography>
            </div>
            <Typography className="text-name">
              Marvin McKinney
            </Typography>
            <Typography className="text-role">
              Chief Operations Officer
            </Typography>
            <div className="flex-wrap">
              <VerticalLine />
              <Typography className="text-company">
                ANGIA
              </Typography>
              <VerticalLine />
            </div>
          </TextWrap>
          <div
            style={{
              justifyContent: 'center',
              objectPosition: 'center',
              display: 'flex',
              objectFit: 'contain',
            }}
          >
            <div className="circle-wrap">
              <img
                src={SRC_IMAGE.CIRCLE}
                alt="Picture of the author"
                width="100%"
                height="100%"
              // preview={false}
              />
            </div>
            <div className="image-wrap">
              <img
                src={SRC_IMAGE.STAFF2}
                alt="Picture of the author"
                width="100%"
                height="100%"
              // preview={false}
              />
              <div className="horizotalLine" style={{ marginTop: "-5px" }} />
            </div>
          </div>

        </ColWrap>
        <ColWrap className="gutter-row" xs={12} md={6}>
          <TextWrap>
            <div className="wrap-text">
              <Typography className="text-opinion">
                It was in the Fat Duck that I first noticed it, around the turn
                of the millennium
              </Typography>
            </div>
            <Typography className="text-name">
              Kristin Watson
            </Typography>
            <Typography className="text-role">
              Sale Manager
            </Typography>
            <div className="flex-wrap">
              <VerticalLine />
              <Typography className="text-company">
                REVER
              </Typography>
              <VerticalLine />
            </div>
          </TextWrap>
          <div
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              objectPosition: 'center',
              display: 'flex',
              objectFit: 'contain',
            }}
          >
            <div className="circle-wrap">
              <img
                src={SRC_IMAGE.CIRCLE}
                alt="Picture of the author"
                width="100%"
                height="100%"
              // preview={false}
              />
            </div>
            <div className="image-wrap">
              <img
                src={SRC_IMAGE.STAFF4}
                alt="Picture of the author"
                width="100%"
                height="100%"
              // preview={false}
              />
              <div className="horizotalLine" style={{ marginTop: "-5px" }} />
            </div>
          </div>

        </ColWrap>
      </Grid>}
    </WrapperSpot>
  );
};

export default Opinion;
