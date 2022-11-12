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
import {
  AboutUsText,
  AboutUsWrap,
} from '@root/src/components/pages/AboutUs/AboutUs.style';
import BoardManagement from '@root/src/components/pages/AboutUs/Component/BoardManagement';
import ContentAboutUs from '@root/src/components/pages/AboutUs/Component/ContentAboutUs';
import Recruitment from '@root/src/components/pages/AboutUs/Component/Recruitment';
import WhyUs from '@root/src/components/pages/AboutUs/Component/WhyUs';
import { useTranslation } from 'react-i18next';

import HeaderAboutUs from '../../components/pages/AboutUs/Component/HeaderAboutUs';

const AboutUs: React.FC<{}> = () => {
  const { t: translate } = useTranslation('common');
  return (
    <DefaultLayout t={translate}>
      <div className="container-fluid d-flex justify-content-center">
        <div>
          <AboutUsWrap>
            <AboutUsText>
              <div>
                <HeaderAboutUs />
              </div>
              <ContentAboutUs />
            </AboutUsText>
            <WhyUs />
            <BoardManagement />
            <Recruitment />
          </AboutUsWrap>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AboutUs;
