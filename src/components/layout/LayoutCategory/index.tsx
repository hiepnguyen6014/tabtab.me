import { IconArrowDown } from '@root/public/icons';
import { FilterProvider } from '@root/src/core/contexts/filterContext';
import { checkIsHomePage } from '@utils';
import { Col, Row } from 'antd';
import dynamic from 'next/dynamic';

import HeaderComponent from '../Header/index';
import RealEstateFilter from '../RealEstateFilter';
import { FMenuDropdown } from '../RealEstateFilter/RealEstateFilterDesktop.style';
import { FMenuItemPopup } from '../RealEstateFilter/RealEstateFilterPopup/RealEstateFilterPopup.style';
import { FDesktop, FilterBackground, RowHeader } from './Container.style';

interface Props {
  children?: any;
  fullWidth?: boolean;
  toggleType?: boolean;
  t: any;
}
const CategoryLayout = (props: Props) => {
  const { t: translate, toggleType } = props;
  const DynamicFooter = dynamic(() => import('../Footer/Footer'));
  return (
    <>
      <HeaderComponent t={props.t} />

      <RowHeader />
      <FilterProvider>
        <FilterBackground>
          <RealEstateFilter toggleType={toggleType} t={translate} />
        </FilterBackground>
      </FilterProvider>

      {/* <FilterProvider>
        <FDesktop>
          <div style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: '700', color: "#7A7A7A", marginTop: 60 }}>
            Hơn 300 nhà
          </div>
          <div style={{ fontFamily: 'Inter', fontSize: 32, fontWeight: '700' }}>
            Nhà ở tại Quận 7
          </div>
          <Row style={{ display: 'flex', marginTop: 20 }}>
            <Col>
              <div style={{ display: 'flex', alignItems: 'center', padding: '5px 20px 5px 20px', justifyContent: 'center', border: "1px solid #7A7A7A", borderRadius: 24, marginRight: 15 }}>
                <label style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: '550', marginRight: 10 }}>Price</label>
                <IconArrowDown />
              </div>
            </Col>
            <Col>
              <div style={{ display: 'flex', alignItems: 'center', padding: '5px 20px 5px 20px', justifyContent: 'center', border: "1px solid #7A7A7A", borderRadius: 24, marginRight: 15 }}>
                <label style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: '550', marginRight: 10 }}>New Projects</label>
                <IconArrowDown />
              </div>
            </Col>
            <Col>
              <div style={{ display: 'flex', alignItems: 'center', padding: '5px 20px 5px 20px', justifyContent: 'center', border: "1px solid #7A7A7A", borderRadius: 24, marginRight: 15 }}>
                <label style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: '550', marginRight: 10 }}>Property types</label>
                <IconArrowDown />
              </div>
            </Col>
            <Col>
              <div style={{ display: 'flex', alignItems: 'center', padding: '5px 20px 5px 20px', justifyContent: 'center', border: "1px solid #7A7A7A", borderRadius: 24, marginRight: 15 }}>
                <label style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: '550', marginRight: 10 }}>Bedrooms</label>
                <IconArrowDown />
              </div>
            </Col>
            <Col>
              <div style={{ display: 'flex', alignItems: 'center', padding: '5px 20px 5px 20px', justifyContent: 'center', border: "1px solid #7A7A7A", borderRadius: 24, marginRight: 15 }}>
                <label style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: '550', marginRight: 10 }}>More filters</label>
                <IconArrowDown />
              </div>
            </Col>
          </Row>

        </FDesktop>

      </FilterProvider> */}

      <main style={{ position: 'relative' }}>{props.children}</main>

      <DynamicFooter t={props.t} />
    </>
  );
};

export default CategoryLayout;
