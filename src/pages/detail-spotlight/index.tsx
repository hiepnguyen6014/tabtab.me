import '@fontsource/inter';
import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';
import DefaultLayout from '@root/src/components/layout/DefaultLayout/DefaultLayout';
import CheckOutArticles from '@root/src/components/pages/Spotlight/Component/CheckOutArticles';
import ColContent from '@root/src/components/pages/Spotlight/Component/ColContent';
import ColSlide from '@root/src/components/pages/Spotlight/Component/ColSlide';
import HeaderSpotLight from '@root/src/components/pages/Spotlight/Component/HeaderSpotlight';
import RatingReview from '@root/src/components/pages/Spotlight/Component/RatingReview';
import {
  SpotlightText,
  SpotlightWrap,
} from '@root/src/components/pages/Spotlight/Spotlight.style';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';

const DetailSpotLight: React.FC<{}> = () => {
  const { t: translate } = useTranslation('common');
  return (
    <DefaultLayout t={translate}>
      <div className="container-fluid d-flex justify-content-center">
        <SpotlightWrap>
          <SpotlightText>
            <span>
              <HeaderSpotLight />
            </span>
            <Row>
              <Col xs={24} sm={24} lg={17}>
                <ColContent />
              </Col>
              <Col xs={0} sm={0} lg={7}>
                <ColSlide />
              </Col>
            </Row>
            <RatingReview />
            <CheckOutArticles />
          </SpotlightText>
        </SpotlightWrap>
      </div>
    </DefaultLayout>
  );
};

export default DetailSpotLight;
