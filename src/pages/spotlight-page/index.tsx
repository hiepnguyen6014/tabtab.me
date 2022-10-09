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
import { useTranslation } from 'react-i18next';

const SpotLightPage: React.FC<{}> = () => {
  const { t: translate } = useTranslation('common');
  return (
    <DefaultLayout t={translate}>
      <div className="container-fluid d-flex justify-content-center">
        <SpotlightWrap>
          <SpotlightText>
            <HeaderSpotlightPage />
            <Advertising className="padding-y40" />
            <Event />
            <Expert />
            <Xprofile />
            <Discovery />
          </SpotlightText>
        </SpotlightWrap>
      </div>
    </DefaultLayout>
  );
};

export default SpotLightPage;
