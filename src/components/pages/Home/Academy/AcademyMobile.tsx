import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { SRC_IMAGE } from '@core';
import { IconQuotes } from '@root/public/icons';
import { Col, Image, Row, Typography } from 'antd';

import { AcademyText, AcademyWrap } from './Academy.style';
import CenterNews from './CenterNews';
import InOtherNews from './InOtherNews';
import ListNews from './ListNews';
import OutStanding from './OutStanding';

const AcademyMobile: React.FC<{}> = () => {
  return (
    <div className="d-block d-lg-none">
      <AcademyText>
        <div className="height-50 d-flex align-items-center">
          <Typography className="title-head">In other news</Typography>
        </div>
        <Image
          alt="imgnews"
          src={SRC_IMAGE.ACADEMY4}
          height="100%"
          width="100%"
          preview={false}
        />
        <div className="d-flex py-1">
          <Typography className="category-text m-right-14">Villa</Typography>
          <Typography className="date-text">30 minutes ago</Typography>
        </div>

        <Typography className="title-center py-2">
          The lost history of the electric car – and what it tells us about the
          future of transport
        </Typography>
        <Typography className="content-text py-1">
          Container shipping rates have skyrocketed as the global economy
          bounced back from the Covid-19 pandemic and commodity demand
          recovered, while a shortage of containers exerted pressure on supply
          chains. More recently, a combination of rising retailer orders and
          slower turnaround rates due to Covid-19 outbreaks in several countries
          has driven prices even higher.
        </Typography>
        <Row className="my-3">
          <Col span={24} className="my-3">
            <div className="d-flex align-items-center">
              <Image
                alt="list"
                src={SRC_IMAGE.ACADEMY2}
                preview={false}
                className="img-wrap"
              />
              <div className="m-left-16">
                <div className="d-flex mb-1">
                  <Typography className="category-text m-right-23">
                    Thể loại
                  </Typography>
                  <Typography className="date-text">30 minutes ago</Typography>
                </div>
                <Typography className="title-list-news">
                  Kookaburras hockey gold after extraordinary{' '}
                </Typography>
              </div>
            </div>
          </Col>
          <Col span={24}>
            <div className="d-flex align-items-center">
              <Image
                alt="list"
                src={SRC_IMAGE.ACADEMY3}
                preview={false}
                className="img-wrap"
              />
              <div className="m-left-16">
                <div className="d-flex mb-1">
                  <Typography className="category-text m-right-23">
                    Thể loại
                  </Typography>
                  <Typography className="date-text">30 minutes ago</Typography>
                </div>
                <Typography className="title-list-news">
                  Kick-off and venue of women’s Olympic football
                </Typography>
              </div>
            </div>
          </Col>
        </Row>
        <div className="horizontal-line" />
        <div className="d-flex">
          <div className="d-flex">
            <IconQuotes className="mx-2" width="30px" />
            <Typography className="content-other-news">
              Despite popular opinion, the French love Britain more
            </Typography>
          </div>

          <div className="d-flex">
            <IconQuotes className="mx-2" width="30px" />
            <Typography className="content-other-news">
              Despite popular opinion, the French love Britain more
            </Typography>
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="height-50 d-flex align-items-center">
              <Typography className="title-head">Outstanding</Typography>
            </div>
            <div>
              <div className="d-flex">
                <div className="cirle-nav d-flex justify-content-center align-items-center mx-2">
                  <LeftOutlined style={{ color: '#141414' }} />
                </div>
                <div className="cirle-nav d-flex justify-content-center align-items-center">
                  <RightOutlined style={{ color: '#141414' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="user-box">
            <div className="d-flex m-user-box align-items-center">
              <Image alt="picture" src={SRC_IMAGE.ACADEMY5} preview={false} />
              <div className="px-3 text-center">
                <Typography className="title-list-news">200</Typography>
                <Typography className="content-outstanding">Lesson</Typography>
              </div>
              <div className="px-3 text-center">
                <Typography className="title-list-news">7000</Typography>
                <Typography className="content-outstanding">Student</Typography>
              </div>
              <div className="px-3 text-center">
                <Typography className="title-list-news">4</Typography>
                <Typography className="content-outstanding">
                  Experience
                </Typography>
              </div>
            </div>
            <div className="m-user-box mb-4">
              <Typography className="title-outstanding">
                Kathryn Murphy
              </Typography>
              <div className="d-flex my-1">
                <Typography className="content-text">Merchandising</Typography>
                <Typography className="content-text mx-2">|</Typography>
                <Typography className="content-text">Zalo Corp</Typography>
              </div>
            </div>
          </div>

          <div className="user-box">
            <div className="d-flex m-user-box align-items-center">
              <Image alt="picture" src={SRC_IMAGE.ACADEMY5} preview={false} />
              <div className="px-3 text-center">
                <Typography className="title-list-news">200</Typography>
                <Typography className="content-outstanding">Lesson</Typography>
              </div>
              <div className="px-3 text-center">
                <Typography className="title-list-news">7000</Typography>
                <Typography className="content-outstanding">Student</Typography>
              </div>
              <div className="px-3 text-center">
                <Typography className="title-list-news">4</Typography>
                <Typography className="content-outstanding">
                  Experience
                </Typography>
              </div>
            </div>
            <div className="m-user-box mb-4">
              <Typography className="title-outstanding">
                Kathryn Murphy
              </Typography>
              <div className="d-flex my-1">
                <Typography className="content-text">Merchandising</Typography>
                <Typography className="content-text mx-2">|</Typography>
                <Typography className="content-text">Zalo Corp</Typography>
              </div>
            </div>
          </div>

          <div className="user-box">
            <div className="d-flex m-user-box align-items-center">
              <Image alt="picture" src={SRC_IMAGE.ACADEMY5} preview={false} />
              <div className="px-3 text-center">
                <Typography className="title-list-news">200</Typography>
                <Typography className="content-outstanding">Lesson</Typography>
              </div>
              <div className="px-3 text-center">
                <Typography className="title-list-news">7000</Typography>
                <Typography className="content-outstanding">Student</Typography>
              </div>
              <div className="px-3 text-center">
                <Typography className="title-list-news">4</Typography>
                <Typography className="content-outstanding">
                  Experience
                </Typography>
              </div>
            </div>
            <div className="m-user-box mb-4">
              <Typography className="title-outstanding">
                Kathryn Murphy
              </Typography>
              <div className="d-flex my-1">
                <Typography className="content-text">Merchandising</Typography>
                <Typography className="content-text mx-2">|</Typography>
                <Typography className="content-text">Zalo Corp</Typography>
              </div>
            </div>
          </div>

          <div className="user-box">
            <div className="d-flex m-user-box align-items-center">
              <Image alt="picture" src={SRC_IMAGE.ACADEMY5} preview={false} />
              <div className="px-3 text-center">
                <Typography className="title-list-news">200</Typography>
                <Typography className="content-outstanding">Lesson</Typography>
              </div>
              <div className="px-3 text-center">
                <Typography className="title-list-news">7000</Typography>
                <Typography className="content-outstanding">Student</Typography>
              </div>
              <div className="px-3 text-center">
                <Typography className="title-list-news">4</Typography>
                <Typography className="content-outstanding">
                  Experience
                </Typography>
              </div>
            </div>
            <div className="m-user-box mb-4">
              <Typography className="title-outstanding">
                Kathryn Murphy
              </Typography>
              <div className="d-flex my-1">
                <Typography className="content-text">Merchandising</Typography>
                <Typography className="content-text mx-2">|</Typography>
                <Typography className="content-text">Zalo Corp</Typography>
              </div>
            </div>
          </div>
        </div>
      </AcademyText>
    </div>
  );
};

export default AcademyMobile;
