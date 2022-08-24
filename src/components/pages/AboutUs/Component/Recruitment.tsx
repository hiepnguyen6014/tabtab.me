import { SRC_IMAGE } from '@core';
import { SearchYellow } from '@root/public/icons';
import { SearchInput } from '@root/src/components/layout/RealEstateFilter/FilterSearch/FilterSearch.style';
import { Col, Divider, Image, Row } from 'antd';
import { AboutUsParagraph, RadioButton, RadioWrap } from '../AboutUs.style';

const Recruitment: React.FC<{}> = () => {
  return (
    <div className="my-4">
      <AboutUsParagraph>
        <h2>Recruitment</h2>
        <div className="article1">
          <Image
            src={SRC_IMAGE.EXAMPLEP1}
            preview={false}
            alt="pictures"
            width="100%"
            height="95%"
          />
          <div className="content-on-img1">
            <div>
              <SearchInput
                style={{
                  borderWidth: 0,
                  borderRadius: 56,
                  padding: '5px 5px 5px 10px',
                  fontFamily: 'Inter',
                  fontSize: 16,
                  fontWeight: '700',
                  boxShadow: ' 0px 0px 8px rgba(0, 0, 0, 0.1)',
                }}
                placeholder={'Bắt đầu tìm kiếm'}
                suffix={<SearchYellow />}
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mb-5 mt-4">
          <RadioWrap defaultValue="1">
            <RadioButton value="1" >
              <p className="province">Ha noi</p>
            </RadioButton>
            <Divider type="vertical" style={{ height: 36, color: '#D3D3D3', margin: 0 }} />
            <RadioButton value="2">
              <p className="province">Ho Chi Minh</p>
            </RadioButton>
            <Divider type="vertical" style={{ height: 36, color: '#D3D3D3', margin: 0 }} />
            <RadioButton value="3">
              <p className="province">Binh Duong</p>
            </RadioButton>
          </RadioWrap>
        </div>
        <Row
          className="container-fluid mx-0"
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <Col xs={12} sm={12} lg={8} className="gutter-row">
            <Image alt="dsffs" preview={false} src={SRC_IMAGE.ACADEMY3} width="100%" />
            <h3>Seller</h3>
            <p className="recruitment">5 vacancies</p>
          </Col>
          <Col xs={12} sm={12} lg={8} className="gutter-row">
            <Image alt="dsffs" preview={false} src={SRC_IMAGE.ACADEMY3} width="100%" />
            <h3>Seller</h3>
            <p className="recruitment">5 vacancies</p>
          </Col>
          <Col xs={12} sm={12} lg={8} className="gutter-row">
            <Image alt="dsffs" preview={false} src={SRC_IMAGE.ACADEMY3} width="100%" />
            <h3>Seller</h3>
            <p className="recruitment">5 vacancies</p>
          </Col>
          <Col xs={12} sm={12} lg={8} className="gutter-row">
            <Image alt="dsffs" preview={false} src={SRC_IMAGE.ACADEMY3} width="100%" />
            <h3>Seller</h3>
            <p className="recruitment">5 vacancies</p>
          </Col>
          <Col xs={12} sm={12} lg={8} className="gutter-row">
            <Image alt="dsffs" preview={false} src={SRC_IMAGE.ACADEMY3} width="100%" />
            <h3>Seller</h3>
            <p className="recruitment">5 vacancies</p>
          </Col>
          <Col xs={12} sm={12} lg={8} className="gutter-row">
            <Image alt="dsffs" preview={false} src={SRC_IMAGE.ACADEMY3} width="100%" />
            <h3>Seller</h3>
            <p className="recruitment">5 vacancies</p>
          </Col>
          <Col xs={12} sm={12} lg={8} className="gutter-row">
            <Image alt="dsffs" preview={false} src={SRC_IMAGE.ACADEMY3} width="100%" />
            <h3>Seller</h3>
            <p className="recruitment">5 vacancies</p>
          </Col>
          <Col xs={12} sm={12} lg={8} className="gutter-row">
            <Image alt="dsffs" preview={false} src={SRC_IMAGE.ACADEMY3} width="100%" />
            <h3>Seller</h3>
            <p className="recruitment">5 vacancies</p>
          </Col>
          <Col xs={12} sm={12} lg={8} className="gutter-row">
            <Image alt="dsffs" preview={false} src={SRC_IMAGE.ACADEMY3} width="100%" />
            <h3>Seller</h3>
            <p className="recruitment">5 vacancies</p>
          </Col>
        </Row>
      </AboutUsParagraph>
    </div>
  );
};

export default Recruitment;
