import { SRC_IMAGE } from '@core';
import { MPostDetail } from '@models/MPostDetail';
import {
  Favorited,
  IconCheck,
  IconHeart,
  IconPhoneSmall,
  IconStar,
  IconStartabtab,
} from '@root/public/icons';
import {
  Button,
  Checkbox,
  Col,
  Divider,
  Image,
  Row,
  Table,
  Typography,
} from 'antd';

import {
  SpotlightText,
  SpotlightWrap,
} from '../../../pages/Spotlight/Spotlight.style';
import {
  ColWrap,
  DefaultContentInWrapperMajor,
  DefaultWrapperWithBg,
  FDesktop,
  FilterContainer,
  RowPrice,
  RowPriceLeft,
} from '../ELearning.style';

export default function RatingReview(props: {
  t: any;
  hrefMain?: { name: string; href: string };
  post?: MPostDetail;
}) {
  const { t: translate, post, hrefMain } = props;

  return (
    <FDesktop grid={true}>
      <DefaultWrapperWithBg style={{ marginTop: 75 }}>
        <RowPrice>
          <RowPriceLeft>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 25,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <text
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 20,
                    fontWeight: '700',
                    marginRight: 28,
                  }}
                >
                  Rating & Review
                </text>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <IconStar />
                  <text
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 20,
                      fontWeight: '700',
                      marginLeft: 10,
                    }}
                  >
                    Rating & Review
                  </text>
                </div>
              </div>
            </div>
            <Row
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 15,
              }}
            >
              <Col
                lg={12}
                xl={11}
                md={12}
                sm={24}
                xs={24}
                style={{ marginTop: 15 }}
              >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '700',
                      marginBottom: 30,
                    }}
                  >
                    Most Liked
                  </label>
                </div>
                <div
                  style={{
                    paddingTop: 16,
                    paddingBottom: 16,
                    paddingLeft: 26,
                    paddingRight: 26,
                    borderStyle: 'solid',
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: '#888888',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 24,
                  }}
                >
                  <Favorited />
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '700',
                      marginRight: 10,
                      marginLeft: 10,
                    }}
                  >
                    671
                  </label>
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '500',
                      color: '#7A7A7A',
                    }}
                  >
                    Engaging Teacher
                  </label>
                </div>
                <div
                  style={{
                    paddingTop: 16,
                    paddingBottom: 16,
                    paddingLeft: 26,
                    paddingRight: 26,
                    borderStyle: 'solid',
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: '#888888',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 24,
                  }}
                >
                  <Favorited />
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '700',
                      marginRight: 10,
                      marginLeft: 10,
                    }}
                  >
                    671
                  </label>
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '500',
                      color: '#7A7A7A',
                    }}
                  >
                    Engaging Teacher
                  </label>
                </div>
                <div
                  style={{
                    paddingTop: 16,
                    paddingBottom: 16,
                    paddingLeft: 26,
                    paddingRight: 26,
                    borderStyle: 'solid',
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: '#888888',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 24,
                  }}
                >
                  <Favorited />
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '700',
                      marginRight: 10,
                      marginLeft: 10,
                    }}
                  >
                    671
                  </label>
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '500',
                      color: '#7A7A7A',
                    }}
                  >
                    Engaging Teacher
                  </label>
                </div>
              </Col>
              <Col
                lg={12}
                xl={11}
                md={12}
                sm={24}
                xs={24}
                style={{ marginTop: 15 }}
              >
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '700',
                      marginBottom: 20,
                    }}
                  >
                    Expectations Met?
                  </label>
                </div>
                <div
                  style={{
                    paddingTop: 16,
                    paddingBottom: 16,
                    paddingLeft: 26,
                    paddingRight: 26,
                    borderRadius: 8,
                    borderColor: '#888888',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 5,
                    justifyContent: 'flex-end',
                  }}
                >
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '700',
                      marginRight: 10,
                      marginLeft: 10,
                    }}
                  >
                    Exceeded
                  </label>
                  <div
                    style={{
                      backgroundColor: '#E9E9E9',
                      width: '50%',
                      height: 12,
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#F9C41F',
                        width: '60%',
                        height: 12,
                      }}
                    />
                  </div>
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '500',
                      color: '#7A7A7A',
                      width: 30,
                      marginLeft: 10,
                    }}
                  >
                    60%
                  </label>
                </div>
                <div
                  style={{
                    paddingTop: 16,
                    paddingBottom: 16,
                    paddingLeft: 26,
                    paddingRight: 26,
                    borderRadius: 8,
                    borderColor: '#888888',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 5,
                    justifyContent: 'flex-end',
                  }}
                >
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '700',
                      marginRight: 10,
                      marginLeft: 10,
                    }}
                  >
                    Yes
                  </label>
                  <div
                    style={{
                      backgroundColor: '#E9E9E9',
                      width: '50%',
                      height: 12,
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#F9C41F',
                        width: '20%',
                        height: 12,
                      }}
                    />
                  </div>
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '500',
                      color: '#7A7A7A',
                      width: 30,
                      marginLeft: 10,
                    }}
                  >
                    20%
                  </label>
                </div>
                <div
                  style={{
                    paddingTop: 16,
                    paddingBottom: 16,
                    paddingLeft: 26,
                    paddingRight: 26,
                    borderRadius: 8,
                    borderColor: '#888888',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 5,
                    justifyContent: 'flex-end',
                  }}
                >
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '700',
                      marginRight: 10,
                      marginLeft: 10,
                    }}
                  >
                    Somewhat
                  </label>
                  <div
                    style={{
                      backgroundColor: '#E9E9E9',
                      width: '50%',
                      height: 12,
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#F9C41F',
                        width: '5%',
                        height: 12,
                      }}
                    />
                  </div>
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '500',
                      color: '#7A7A7A',
                      width: 30,
                      marginLeft: 10,
                    }}
                  >
                    5%
                  </label>
                </div>
                <div
                  style={{
                    paddingTop: 16,
                    paddingBottom: 16,
                    paddingLeft: 26,
                    paddingRight: 26,
                    borderRadius: 8,
                    borderColor: '#888888',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 5,
                    justifyContent: 'flex-end',
                  }}
                >
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '700',
                      marginRight: 10,
                      marginLeft: 10,
                    }}
                  >
                    Not really
                  </label>
                  <div
                    style={{
                      backgroundColor: '#E9E9E9',
                      width: '50%',
                      height: 12,
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#F9C41F',
                        width: '81%',
                        height: 12,
                      }}
                    />
                  </div>
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '500',
                      color: '#7A7A7A',
                      width: 30,
                      marginLeft: 10,
                    }}
                  >
                    81%
                  </label>
                </div>
              </Col>
            </Row>

            <SpotlightWrap>
              <SpotlightText>
                <Row className=" m-top-50">
                  <Col sm={24} lg={12} className="px-3 pb-4">
                    <div className="d-flex">
                      <Image
                        alt="pic"
                        src={SRC_IMAGE.PERSON1}
                        height="78px"
                        width="78px"
                        preview={false}
                      />
                      <div className="mx-4 mt-3 d-flex align-self-center">
                        <div>
                          <Typography.Title className="name-review">
                            Arlene McCoy
                          </Typography.Title>
                          <Typography.Paragraph className="date-review">
                            20/02/2021
                          </Typography.Paragraph>
                        </div>
                      </div>
                    </div>
                    <Typography className="review-comment">
                      A real local gem! It only take 1 hour to arrive at the
                      place. You can take bus, taxi or even a bike to get there.
                      I really feel loved and at peace when I stay there. The
                      house , the garden and
                    </Typography>
                  </Col>

                  <Col sm={24} lg={12} className="px-3 pb-4">
                    <div className="d-flex">
                      <Image
                        alt="pic"
                        src={SRC_IMAGE.PERSON2}
                        height="78px"
                        width="78px"
                        preview={false}
                      />
                      <div className="mx-4 mt-3 d-flex align-self-center">
                        <div>
                          <Typography.Title className="name-review">
                            Arlene McCoy
                          </Typography.Title>
                          <Typography.Paragraph className="date-review">
                            20/02/2021
                          </Typography.Paragraph>
                        </div>
                      </div>
                    </div>
                    <Typography className="review-comment">
                      Amazing apartment in a fantastic location. Clean, modern
                      and spacious with such a comfortable bed. There was a
                      kettle, microwave and a few small items for cooking in the
                    </Typography>
                  </Col>
                </Row>
                <div className="d-flex justify-content-center my-5">
                  <Button
                    className="button-seemore"
                    style={{ background: '#F0F2F5' }}
                  >
                    <Typography className="seemore-text">See more</Typography>
                  </Button>
                </div>
              </SpotlightText>
            </SpotlightWrap>
          </RowPriceLeft>
        </RowPrice>
      </DefaultWrapperWithBg>
    </FDesktop>
  );
}
