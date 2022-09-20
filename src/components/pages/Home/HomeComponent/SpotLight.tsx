import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  BannerSpotWrapper,
  WrapperSpot,
  SpotlightText,
  DivWrap,
  BannerWrap,
  ImageBannerWrap,
  GeneralText,
  GeneralWrap,
  ImageWrap,
  ColA,
} from '../Home.style';
import {
  IconQuotes,
  VectorPlay,
  VectorPodcast,
} from 'public/icons';
import { SRC_IMAGE } from '@constants';
import Link from 'next/link';
import ItemSpotlight from '../Spotlight/ItemSpotlight';
import ItemSide from '../Spotlight/ItemSide';
// import { ColA } from '../Spotlight/ItemSpotlight.style';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Grid } from '@mui/material';

const SpotLight: React.FC<{}> = () => {
  const router = useRouter();

  const ITEMSPOTLIGHTLIST = [
    {
      image: SRC_IMAGE.IMAGEC,
      iconImage: '',
      textImage: '',
      category: 'Villa',
      colorCategory: '',
      content:
        'Belarus exile group leader Vitaly Shishov found dead in Kyiv, police say.',
      avatar: SRC_IMAGE.USERTAB2,
      time: '30 minutes ago',
      name: 'Marvin McKinney',
    },
    {
      image: SRC_IMAGE.IMAGED,
      iconImage: '',
      textImage: 'Popcast',
      category: 'Interior',
      colorCategory: '#AE9B16',
      content:
        'North Bondi block sells for $22m+ but duplex next door for sale.',
      avatar: SRC_IMAGE.USERTAB3,
      time: '30 minutes ago',
      name: 'Robert Fox',
    },
    {
      image: SRC_IMAGE.IMAGEC,
      iconImage: <VectorPlay height="24px" width="24px" />,
      textImage: 'Video',
      category: 'Interior',
      colorCategory: '#AE9B16',
      content:
        'North Bondi block sells for $22m+ but duplex next door for sale.',
      avatar: SRC_IMAGE.USERTAB1,
      time: '30 minutes ago',
      name: 'Annette Black',
    },
    {
      image: SRC_IMAGE.IMAGEE,
      iconImage: <VectorPodcast height="24px" width="24px" />,
      textImage: 'Popcast',
      category: 'VILLA',
      colorCategory: '',
      content:
        ' BP expects the price of Brent crude to average $60 a barrel over the rest',
      avatar: SRC_IMAGE.USERTAB4,
      time: '30 minutes ago',
      name: 'Wade Warren',
    },
  ];

  const ITEMSPOTLIGHTSIDE = [
    {
      image: SRC_IMAGE.IMAGEF,
      title: 'Property',
      colorTitle: '#EB4E27',
      content: 'North Bondi block sells for 22m',
    },
    {
      image: SRC_IMAGE.IMAGEG,
      title: 'Property',
      colorTitle: '#EB4E27',
      content: ' through share buy backs and has.',
    },
    {
      image: SRC_IMAGE.IMAGEH,
      title: 'Property',
      colorTitle: '#F9C41F',
      content: 'Global oil prices before a quicker than',
    },
  ];

  const [showContent, setShowContent] = useState(true)

  return (
    <WrapperSpot>
      <GeneralText>
        <Link href="/spotlight-page">
          <a>
            <Typography className="title-general">
              Spotlight
            </Typography>
          </a>
        </Link>
        <GeneralWrap>
          <div className="general-between-wrap">
            <div className="general-wrap">
              <IconQuotes />
              <Typography className="content-general">
                Những tin tức mới nhất phù hợp với Hùng
              </Typography>
            </div>
            <div onClick={e => setShowContent(showContent ? false : true)} style={{ cursor: "pointer" }}>
              <Typography className="content-hide">HIDE</Typography>
            </div>
          </div>
        </GeneralWrap>
      </GeneralText>
      {showContent && <div >
        <ColA container
          xs={8} sm={16} md={24} lg={32}>
          <ColA>
            <Link href="/spotlight-page">
              <a>
                <BannerSpotWrapper>
                  <BannerWrap>
                    <img
                      alt="imagePost"
                      src={SRC_IMAGE.IMAGEA}
                      height="100%"
                      width="700px"
                    // preview={false}
                    />
                    <DivWrap>
                      <div className="title-post">
                        <SpotlightText>
                          <Typography className="titleBannerTop">
                            Genres
                          </Typography>
                          <Typography className="titleBannerMiddle">
                            Keep up with the rest of the world
                          </Typography>
                          <Typography className="titleBannerBottom">
                            Here, four sixtysomethings offer advice to those in
                            their.
                          </Typography>
                        </SpotlightText>
                        <div className="d-flex info-group pb-1">
                          <div
                            style={{ width: 36, height: 36 }}
                            className="mx-2"
                          >
                            <img
                              alt="user"
                              src={SRC_IMAGE.STAFF3}
                              height="100%"
                              width="100%"
                            />
                          </div>
                          <SpotlightText>
                            <Typography className="dateBanner">
                              26/05/2021
                            </Typography>
                            <Typography className="dateBanner">
                              by{' '}
                              <Typography className="nameBanner">
                                Jenny Wilson
                              </Typography>
                            </Typography>
                          </SpotlightText>
                        </div>
                      </div>
                    </DivWrap>
                  </BannerWrap>
                </BannerSpotWrapper>
              </a>
            </Link>
          </ColA>
          <ColA >
            <div>
              <SpotlightText>
                <Button>
                  <Typography
                    className="optionPostSpot"
                    style={{
                      borderBottom: '1px solid #F9C41F',
                      paddingBottom: 15,
                    }}
                  >
                    LAST NEWS
                  </Typography>
                </Button>
                <Button>
                  <Typography className="optionPostSpot">
                    MOST VIEW
                  </Typography>
                </Button>
              </SpotlightText>
            </div>
            <div style={{ marginTop: '20px' }} className="px-2">
              {ITEMSPOTLIGHTSIDE.map((items, key) => {
                return (
                  <Link href="/detail-spotlight" key={key}>
                    <a>
                      <ItemSide item={items} />
                    </a>
                  </Link>
                );
              })}
            </div>
          </ColA>
        </ColA>

        <ColA
          container
          xs={8} sm={16} md={24} lg={32}
          spacing={4}
          sx={{ marginTop: '0px', marginBottom: '100px'}}
        // gutter={{
        //   xs: 8,
        //   sm: 16,
        //   md: 24,
        //   lg: 32,
        // }}
        >
          {ITEMSPOTLIGHTLIST.map((item, key) => {
            return (
              <ColA key={key}
                sx={{
                  margin: 0.5
                }}
              >
                <Link href="/detail-spotlight">
                  <a>
                    <ItemSpotlight item={item} />
                  </a>
                </Link>
              </ColA>
            );
          })}
        </ColA>
        <div>
          <Button>
            VIEW ALL
          </Button>
        </div>
      </div>}
    </WrapperSpot>
  );
};

export default SpotLight;
