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
import ContentHelp from '@root/src/components/pages/HelpCenter/Component/ContentHelp';
import HeaderHelpCenter from '@root/src/components/pages/HelpCenter/Component/HeaderHelpCenter';
import HelpSearch from '@root/src/components/pages/HelpCenter/Component/HelpSearch';
import HelpSide from '@root/src/components/pages/HelpCenter/Component/HelpSide';
import {
  HelpCenterText,
  HelpCenterWrap,
} from '@root/src/components/pages/HelpCenter/HelpCenter.style';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';

const HelpCenter: React.FC<{}> = () => {
  const { t: translate } = useTranslation('common');

  return (
    <DefaultLayout t={translate}>
      <div className="container-fluid d-flex justify-content-center">
        <HelpCenterWrap>
          <HelpCenterText>
            <div>
              <HeaderHelpCenter />
            </div>
            <div className="d-flex justify-content-center">
              <HelpSearch />
            </div>
            <Row>
              <Col xs={24} sm={24} lg={7}>
                <HelpSide />
              </Col>
              <Col xs={24} sm={24} lg={17}>
                <ContentHelp />
              </Col>
            </Row>
          </HelpCenterText>
        </HelpCenterWrap>
      </div>
    </DefaultLayout>
  );
};

export default HelpCenter;
