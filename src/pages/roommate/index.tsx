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
import FilterRoommate from '@root/src/components/pages/Roommate/Component/FilterRoommate';
import HeaderRoommate from '@root/src/components/pages/Roommate/Component/HeaderRoommate';
import RoommateList from '@root/src/components/pages/Roommate/Component/RoommateList';
import {
  RoommateText,
  RoommateWrap,
} from '@root/src/components/pages/Roommate/Roomate.style';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const Roommate: React.FC<{}> = () => {
  const { t: translate } = useTranslation('common');
  return (
    <DefaultLayout t={translate}>
      <div className="container-fluid d-flex justify-content-center">
        <RoommateWrap>
          <RoommateText>
            <HeaderRoommate />
            <FilterRoommate />
            <RoommateList />
          </RoommateText>
          <Typography></Typography>
        </RoommateWrap>
      </div>
    </DefaultLayout>
  );
};

export default Roommate;
