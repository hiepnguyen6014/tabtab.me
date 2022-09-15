
import { BreadcrumbCustom } from '../../../shared/Breadcrum/index';
import { ButtonSave } from '../../../shared/ButtonSave/index';
import { ButtonShare } from '../../../shared/ButtonShare';
import { TextParagraph } from '../../../shared/TextParagraph';
import { WidgetUserInfo } from '../../../shared/WidgetUserInfo';
import { Block } from './Component.style';
import type { ColumnsType } from 'antd/es/table';
import { PUBLIC_ROUTES, ROUTES, SRC_IMAGE } from '@constants';
import { filterKey } from '@contexts';
import { MPostDetail } from '@models/MPostDetail';
import { IconBathroom, IconBed, IconBluePrint, IconCheck, IconMark, IconShower, IconTimer, Logo1 } from '@root/public/icons';
import { formatNumToUnit } from '@root/src/core/utils/HandleNumber';
import { colors } from '@styles/theme/colors';
import { Col, Divider, Row, Table, Typography, Dropdown, Menu, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {
  DefaultContentInWrapper,
  DefaultLinkText,
  DefaultRowTitle,
  DefaultWrapperWithBg,
} from '..';
import { DefaultContentInWrapperMajor } from './Component.style'
import { TagProperty, RowPrice, RowActions, RowPriceLeft, RowPriceRight, ImageContainer, AdGoogle2 } from './Component.style';
import dynamic from 'next/dynamic';
import router from 'next/router';
import { FormControl, Grid, InputLabel, MenuItem, Tab } from '@mui/material';
import { Option } from 'antd/lib/mentions';
import DropDown from '@root/src/components/shared/mui/Dropdown';
import { ChangeEvent, useState } from 'react';
import TabList from '@root/src/components/shared/mui/TabList';

const DynamicNotifyOutdate = dynamic(
  () => import('../../../shared/WidgetUserInfo/NotifyOutdate').then(
    (mod: any) => mod.NotifyOutdate
  )
);

interface Option {
  label: string,
  value: string,
}

export const LayoutAllProperties = (props: {
  t: any;
  hrefMain?: { name: string; href: string };
  post?: MPostDetail;
}) => {
  const { t: translate, post, hrefMain } = props;

  const properties: Option[] = [
    { label: 'Sale', value: 'sale' },
    { label: 'Rent', value: 'rent' },
    { label: 'Sold', value: 'sold' },
    { label: 'Rented', value: 'rented' },
  ];

  const options: Option[] = [
    { label: 'All', value: 'all' },
    { label: '1 Bed', value: 'oneBed' },
    { label: '2 Beds', value: 'twoBeds' },
    { label: '3 Beds +', value: '3BedsPlus' },
  ]

  const [val1, setVal1] = useState<number>(0);
  const [val2, setVal2] = useState<number>(0);

  const handleOnChange = (e) => {
    console.log('event: ', e.target.value)
    setVal1(e.target.value);
  }

  const handleOnClick = (value: string) => {
  }

  const data = [
    {},
    {},
    {},
    {}
  ]

  const menu = (
    <Menu
      items={[
        {
          label: <a >1st menu item</a>,
          key: '0',
        },
        {
          label: <a >2nd menu item</a>,
          key: '1',
        },
        {
          label: '3rd menu item',
          key: '3',
        },
      ]}
    />
  );

  const ItemRE = () => {
    return (
      <ImageContainer>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src={SRC_IMAGE.IMAGEA} height={150} width={150}></img>
          <div style={{ marginLeft: 20, marginRight: 20 }}>
            <label style={{ fontFamily: 'Inter', fontWeight: '700', fontSize: 18 }}>
              Parc 21 Residenece | Type A
            </label>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex' }}>
                <IconBed />
                <label style={{ fontFamily: 'Inter', fontWeight: '500', fontSize: 16, marginLeft: 10 }}>
                  2
                </label>
              </div>
              <div style={{ display: 'flex' }}>
                <IconBathroom />
                <label style={{ fontFamily: 'Inter', fontWeight: '500', fontSize: 16, marginLeft: 5 }}>
                  2
                </label>
              </div>
              <div style={{ display: 'flex' }}>
                <IconBluePrint />
                <label style={{ fontFamily: 'Inter', fontWeight: '500', fontSize: 16, marginLeft: 5 }}>
                  2
                </label>
              </div>
            </div>
          </div>
        </div>
        <div style={{ alignItems: 'center', display: 'flex', marginRight: 32, justifyContent: 'flex-end' }}>
          <label style={{ fontFamily: 'Inter', fontWeight: '700', fontSize: 28, color: '#FF8800', }}>
            $128,999
          </label>
        </div>


      </ImageContainer>
    )
  }

  return (
    <>
      <DefaultWrapperWithBg>
        <DefaultContentInWrapperMajor grid={true}>
          <div>
            <RowPrice>
              <RowPriceLeft>
                <label style={{ fontFamily: "Inter", fontSize: 28, fontWeight: "700", marginBottom: 20 }}>All properties</label>
                {/* <UnstyledTabsCustomized items={properties} type="property" onClick={handleOnClick} /> */}
                <TabList items={properties} type="property" onClick={handleOnClick} />

                {/* <Row style={{ padding: 4, borderRadius: 9, backgroundColor: "#E9E9E9" }}>
                  <Col span={6}>
                    <div style={{ padding: 10, backgroundColor: '#F9BD06', borderRadius: 9, display: 'flex', justifyContent: 'center' }}>
                      <label style={{ fontSize: 16, fontWeight: 700, fontFamily: "Inter" }}>
                        Sale(12)
                      </label>
                    </div>
                  </Col>
                  <Col span={6}>
                    <div style={{ padding: 10, borderRadius: 9, display: 'flex', justifyContent: 'center' }}>
                      <label style={{ fontSize: 16, fontWeight: 700, fontFamily: "Inter" }}>
                        Rent
                      </label>
                    </div>
                  </Col>
                  <Divider type='vertical' style={{ height: 'auto' }} />
                  <Col span={5}>
                    <div style={{ padding: 10, borderRadius: 9, display: 'flex', justifyContent: 'center' }}>
                      <label style={{ fontSize: 16, fontWeight: 700, fontFamily: "Inter" }}>
                        Sold
                      </label>
                    </div>
                  </Col>
                  <Divider type='vertical' style={{ height: 'auto' }} />
                  <Col span={5}>
                    <div style={{ padding: 10, borderRadius: 9, display: 'flex', justifyContent: 'center' }}>
                      <label style={{ fontSize: 16, fontWeight: 700, fontFamily: "Inter" }}>
                        Rented
                      </label>
                    </div>
                  </Col>
                </Row> */}
                <Grid container spacing={4} style={{ marginTop: '5px' }}>
                  <Grid item xs={12} md={6} lg={6}>
                    {/* <UnstyledTabsCustomized items={options} type="options" onClick={handleOnClick} /> */}
                    <TabList items={options} type="options" onClick={handleOnClick} />
                  </Grid>
                  {/* <Grid item xs={12} md={8} lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <div style={{ padding: '5px', borderRadius: '12px', backgroundColor: '#E9E9E9' }}>
                      <UnstyledSelectObjectValues />
                      <UnstyledSelectObjectValues />
                    </div>
                  </Grid> */}
                  <Grid item xs={12} md={6} lg={6}>
                    <div style={{ display: 'flex', 'justifyContent': 'space-between', backgroundColor: '#E9E9E9', padding: '4px', borderRadius: '12px' }}>
                      <DropDown
                        value={val1}
                        onChangeValue={(event) => handleOnChange(event)}
                        // onChangeValue={(event: ChangeEvent<HTMLInputElement>) => setVal1(event.target.value)}
                        items={[
                          { key: "Item1", value: 1 },
                          { key: "Item2", value: 2 },
                          { key: "Item3", value: 3 },
                        ]}
                        placeholder="All properties"
                      />
                      <DropDown
                        value={val2}
                        onChangeValue={(event) => handleOnChange(event)}
                        items={[
                          { key: "Item1", value: 1 },
                          { key: "Item2", value: 2 },
                          { key: "Item3", value: 3 },
                        ]}
                        placeholder="All properties"

                      />
                    </div>
                  </Grid>
                  {/* <Grid item xs={6} md={8} lg={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <DropDown
                      value={val}
                      handleChange={handleChange}
                      items={[
                        { key: "Last 7 Days", value: 7 },
                        { key: "Last 28 Days", value: 28 },
                        { key: "Last 90 Days", value: 90 }
                      ]}
                    />
                  </Grid> */}
                  {/* <Col style={{ display: 'flex', padding: 4, borderRadius: 9, backgroundColor: "#E9E9E9", marginTop: 20 }}>
                    <div style={{ padding: 10, paddingRight: 40, paddingLeft: 40, backgroundColor: '#F9BD06', borderRadius: 9, display: 'flex', justifyContent: 'center', marginRight: 4 }}>
                      <label style={{ fontSize: 14, fontWeight: 700, fontFamily: "Inter" }}>
                        All
                      </label>
                    </div>
                    <div style={{ padding: 10, backgroundColor: 'white', borderRadius: 9, display: 'flex', justifyContent: 'center', paddingRight: 25, paddingLeft: 25, marginRight: 4 }}>
                      <label style={{ fontSize: 14, fontWeight: 700, fontFamily: "Inter" }}>
                        1 Bed
                      </label>
                    </div>
                    <div style={{ padding: 10, backgroundColor: 'white', borderRadius: 9, display: 'flex', justifyContent: 'center', paddingRight: 20, paddingLeft: 20, marginRight: 4 }}>
                      <label style={{ fontSize: 14, fontWeight: 700, fontFamily: "Inter" }}>
                        2 Beds
                      </label>
                    </div>
                    <div style={{ padding: 10, backgroundColor: 'white', borderRadius: 9, display: 'flex', justifyContent: 'center', paddingRight: 20, paddingLeft: 20 }}>
                      <label style={{ fontSize: 14, fontWeight: 700, fontFamily: "Inter" }}>
                        3 Beds+
                      </label>
                    </div>
                  </Col> */}

                  {/* <Col style={{ display: 'flex', padding: 4, borderRadius: 9, backgroundColor: "#E9E9E9", marginTop: 20 }}>
                    <Dropdown overlay={menu} trigger={['click']}>
                      <div style={{ backgroundColor: 'white', borderRadius: 9, display: 'flex', justifyContent: 'space-between', paddingRight: 15, paddingLeft: 15, padding: 10, marginRight: 4 }} >
                        <label style={{ marginRight: 30, fontSize: 14, fontWeight: 700, fontFamily: "Inter" }}>
                          All properties
                        </label>
                        <DownOutlined />
                      </div>
                    </Dropdown>
                    <Dropdown overlay={menu} trigger={['click']}>
                      <div style={{ backgroundColor: 'white', borderRadius: 9, display: 'flex', justifyContent: 'space-between', paddingRight: 15, paddingLeft: 15, padding: 10 }} >
                        <label style={{ marginRight: 30, fontSize: 14, fontWeight: 700, fontFamily: "Inter" }}>
                          All properties
                        </label>
                        <DownOutlined />
                      </div>
                    </Dropdown>
                  </Col> */}
                </Grid>
              </RowPriceLeft>
            </RowPrice>
            <RowPrice style={{ marginTop: 30 }}>
              <RowPriceLeft>
                {data.map((item, key) => (
                  <ItemRE key={key} />
                ))}
              </RowPriceLeft>
            </RowPrice>
          </div>
          <AdGoogle2>
            <img src={SRC_IMAGE.AD1} height={'auto'} width={'auto'} />
          </AdGoogle2>
        </DefaultContentInWrapperMajor>
      </DefaultWrapperWithBg>
    </>
  );
};
