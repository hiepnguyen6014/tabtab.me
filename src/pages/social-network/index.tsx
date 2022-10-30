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
import CenterContentSocial from '@root/src/components/pages/SocialNetWorkPage/Component/CenterContentSocial';
import HeaderContentSocial from '@root/src/components/pages/SocialNetWorkPage/Component/HeaderContentSocial';
import LeftContentSocial from '@root/src/components/pages/SocialNetWorkPage/Component/LeftContentSocial';
import RightContentSocial from '@root/src/components/pages/SocialNetWorkPage/Component/RightContentSocial';
import {
  SocialNetWorkText,
  SocialNetWorkWrap,
} from '@root/src/components/pages/SocialNetWorkPage/SocialNetworkPage.style';
import Discovery from '@root/src/components/pages/Spotlight/PageComponent/Discovery/Discovery';
import Event from '@root/src/components/pages/Spotlight/PageComponent/Events/Events';
import Expert from '@root/src/components/pages/Spotlight/PageComponent/Expert/Expert';
import HeaderSpotlightPage from '@root/src/components/pages/Spotlight/PageComponent/HeaderSpotlightPage';
import Xprofile from '@root/src/components/pages/Spotlight/PageComponent/Xprofile/Xprofile';
import {
  SpotlightText,
  SpotlightWrap,
} from '@root/src/components/pages/Spotlight/SpotlightPage.style';
import Advertising from '@root/src/components/shared/Advertising/Advertising';
import ButtonHidden from '@root/src/components/shared/Chat/ButtonHidden';
import Chat from '@root/src/components/shared/Chat/Chat';
import ChatCustom from '@root/src/components/shared/Chat/ChatCustom';
import ChatPerson from '@root/src/components/shared/Chat/ChatPerson';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';

const SocialNetWork: React.FC<{}> = () => {
  const { t: translate } = useTranslation('common');
  return (
    <div style={{ position: 'relative' }}>
      <DefaultLayout t={translate}>
        <div
          className="container-fluid d-flex justify-content-center"
          style={{ background: '#F0F2F5' }}
        >
          <SocialNetWorkWrap>
            <SocialNetWorkText>
              <HeaderContentSocial />
              <Row className="mt-4">
                <Col xs={0} sm={0} lg={6}>
                  <LeftContentSocial />
                </Col>
                <Col xs={24} sm={24} lg={12}>
                  <CenterContentSocial />
                </Col>
                <Col xs={0} sm={0} lg={6}>
                  <RightContentSocial />
                </Col>
              </Row>
            </SocialNetWorkText>
          </SocialNetWorkWrap>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default SocialNetWork;
