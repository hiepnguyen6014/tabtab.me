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
import DefaultLayout from '@root/src/components/layout/DefaultLayout/DefaltLayout';
import FirstContent from '@root/src/components/pages/Policy/Component/FirstContent';
import HeaderPolicy from '@root/src/components/pages/Policy/Component/HeaderPolicy';
import SecondContent from '@root/src/components/pages/Policy/Component/SecondContent';
import TermsOfService from '@root/src/components/pages/Policy/Component/TermsOfService';
import ThirdContent from '@root/src/components/pages/Policy/Component/ThirdContent';
import {
  Flex,
  PolicyText,
  PolicyWrap,
} from '@root/src/components/pages/Policy/Policy.style';
import { SearchItem } from '@root/src/components/shared/SearchItem/SearchItem';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';

const Policy: React.FC<{}> = () => {
  const { t: translate } = useTranslation('common');

  return (
    <DefaultLayout t={translate}>
      <div className="container-fluid d-flex justify-content-center" style={{background: '#f0f2f5'}}>
      <PolicyWrap>
          <PolicyText>
            <HeaderPolicy />
            <Flex className="justify-content-center">
              <SearchItem className="search-style my-5" />
            </Flex>
            <Row>
              <Col xs={0} sm={0} lg={6}>
                <TermsOfService />
              </Col>
              <Col xs={24} sm={24} lg={18}>
                <FirstContent />
                <SecondContent />
                <ThirdContent />
              </Col>
            </Row>
          </PolicyText>
      </PolicyWrap>
      </div>
    </DefaultLayout>
  );
};

export default Policy;
