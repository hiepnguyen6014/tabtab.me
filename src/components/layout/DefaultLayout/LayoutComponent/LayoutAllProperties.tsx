import { DownOutlined } from '@ant-design/icons';
import { PUBLIC_ROUTES, ROUTES, SRC_IMAGE } from '@constants';
import { filterKey } from '@contexts';
import { MPostDetail } from '@models/MPostDetail';
import {
  IconBathroom,
  IconBed,
  IconBluePrint,
  IconCheck,
  IconMark,
  IconShower,
  IconTimer,
  Logo1,
} from '@root/public/icons';
import { RadBtn } from '@root/src/components/shared/RadioButton/RadioButton.style';
import { formatNumToUnit } from '@root/src/core/utils/HandleNumber';
import { colors } from '@styles/theme/colors';
import {
  Col,
  Divider,
  Dropdown,
  Menu,
  Row,
  Space,
  Table,
  Typography,
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import dynamic from 'next/dynamic';

import {
  DefaultContentInWrapper,
  DefaultLinkText,
  DefaultRowTitle,
  DefaultWrapperWithBg,
} from '..';
import { BreadcrumbCustom } from '../../../shared/Breadcrum/index';
import { ButtonSave } from '../../../shared/ButtonSave/index';
import { ButtonShare } from '../../../shared/ButtonShare';
import { TextParagraph } from '../../../shared/TextParagraph';
import { WidgetUserInfo } from '../../../shared/WidgetUserInfo';
import { RadioWrap } from '../DefaultComponent.style';
import { Block } from './Component.style';
import { DefaultContentInWrapperMajor } from './Component.style';
import {
  AdGoogle2,
  ImageContainer,
  RowActions,
  RowPrice,
  RowPriceLeft,
  RowPriceRight,
  TagProperty,
} from './Component.style';

const DynamicNotifyOutdate = dynamic(() =>
  import('../../../shared/WidgetUserInfo/NotifyOutdate').then(
    (mod: any) => mod.NotifyOutdate,
  ),
);

const allProperties = [
  { label: 'Sale(12)', value: 'sale' },
  { label: 'Rent', value: 'rent' },
  { label: 'Sold', value: 'sold' },
  { label: 'Rented', value: 'rented' },
];

const allOptions = [
  { label: 'All', value: 'all' },
  { label: '1 Bed', value: '1bed' },
  { label: '2 Beds', value: '2bed' },
  { label: '3 Beds+', value: '3bed' },
];

export const LayoutAllProperties = (props: {
  t: any;
  hrefMain?: { name: string; href: string };
  post?: MPostDetail;
}) => {
  const { t: translate, post, hrefMain } = props;

  const data = [{}, {}, {}, {}];

  const menu = (
    <Menu
      items={[
        {
          label: <a>1st menu item</a>,
          key: '0',
        },
        {
          label: <a>2nd menu item</a>,
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <img src={SRC_IMAGE.IMAGEA} height={150} width={150}></img>
          <div style={{ marginLeft: 20, marginRight: 20 }}>
            <label
              style={{ fontFamily: 'Inter', fontWeight: '700', fontSize: 18 }}
            >
              Parc 21 Residenece | Type A
            </label>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex' }}>
                <IconBed />
                <label
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    fontSize: 16,
                    marginLeft: 10,
                  }}
                >
                  2
                </label>
              </div>
              <div style={{ display: 'flex' }}>
                <IconBathroom />
                <label
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    fontSize: 16,
                    marginLeft: 5,
                  }}
                >
                  2
                </label>
              </div>
              <div style={{ display: 'flex' }}>
                <IconBluePrint />
                <label
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: '500',
                    fontSize: 16,
                    marginLeft: 5,
                  }}
                >
                  2
                </label>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            marginRight: 32,
            justifyContent: 'flex-end',
          }}
        >
          <label
            style={{
              fontFamily: 'Inter',
              fontWeight: '700',
              fontSize: 28,
              color: '#FF8800',
            }}
          >
            $128,999
          </label>
        </div>
      </ImageContainer>
    );
  };

  return (
    <>
      <DefaultWrapperWithBg>
        <DefaultContentInWrapperMajor>
          <div>
            <RowPrice>
              <RowPriceLeft className="container-fluid">
                <label
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 28,
                    fontWeight: '700',
                    marginBottom: 20,
                  }}
                >
                  All properties
                </label>

                {/* <Row
                  style={{
                    padding: 4,
                    borderRadius: 9,
                    backgroundColor: '#E9E9E9',
                  }}
                >
                  <Col span={6}>
                    <div
                      style={{
                        padding: 10,
                        backgroundColor: '#F9BD06',
                        borderRadius: 9,
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <label
                        style={{
                          fontSize: 16,
                          fontWeight: 700,
                          fontFamily: 'Inter',
                        }}
                      >
                        Sale(12)
                      </label>
                    </div>
                  </Col>
                  <Col span={6}>
                    <div
                      style={{
                        padding: 10,
                        borderRadius: 9,
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <label
                        style={{
                          fontSize: 16,
                          fontWeight: 700,
                          fontFamily: 'Inter',
                        }}
                      >
                        Rent
                      </label>
                    </div>
                  </Col>
                  <Divider type="vertical" style={{ height: 'auto' }} />
                  <Col span={5}>
                    <div
                      style={{
                        padding: 10,
                        borderRadius: 9,
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <label
                        style={{
                          fontSize: 16,
                          fontWeight: 700,
                          fontFamily: 'Inter',
                        }}
                      >
                        Sold
                      </label>
                    </div>
                  </Col>
                  <Divider type="vertical" style={{ height: 'auto' }} />
                  <Col span={5}>
                    <div
                      style={{
                        padding: 10,
                        borderRadius: 9,
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      <label
                        style={{
                          fontSize: 16,
                          fontWeight: 700,
                          fontFamily: 'Inter',
                        }}
                      >
                        Rented
                      </label>
                    </div>
                  </Col>
                </Row> */}
                <Row>
                  <Col
                    style={{
                      padding: 4,
                      borderRadius: 9,
                      backgroundColor: '#E9E9E9',
                    }}
                    lg={24}
                    md={24}
                    sm={24}
                    xs={24}
                  >
                    {/* <TagList tagsData={allProperties} /> */}

                    <RadioWrap defaultValue="sale">
                      {allProperties.map(item => (
                        <RadBtn
                          background="#E9E9E9"
                          height="52"
                          value={item.value}
                        >
                          {item.label}
                        </RadBtn>
                      ))}
                    </RadioWrap>
                  </Col>
                </Row>
                <Row style={{ marginTop: '20px' }}>
                  <Col
                    style={{
                      padding: 4,
                      borderRadius: 9,
                      backgroundColor: '#E9E9E9',
                    }}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={24}
                  >
                    <RadioWrap defaultValue="all">
                      {allOptions.map(item => (
                        <RadBtn height="48" value={item.value}>
                          {item.label}
                        </RadBtn>
                      ))}
                    </RadioWrap>
                  </Col>
                  <Col
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                  >
                    <Dropdown overlay={menu} trigger={['click']}>
                      <div
                        style={{
                          backgroundColor: 'white',
                          borderRadius: 9,
                          display: 'flex',
                          justifyContent: 'space-between',
                          paddingRight: 15,
                          paddingLeft: 15,
                          padding: 10,
                          marginRight: 4,
                        }}
                      >
                        <label
                          style={{
                            marginRight: 30,
                            fontSize: 14,
                            fontWeight: 700,
                            fontFamily: 'Inter',
                          }}
                        >
                          All properties
                        </label>
                        <DownOutlined />
                      </div>
                    </Dropdown>
                    <Dropdown overlay={menu} trigger={['click']}>
                      <div
                        style={{
                          backgroundColor: 'white',
                          borderRadius: 9,
                          display: 'flex',
                          justifyContent: 'space-between',
                          paddingRight: 15,
                          paddingLeft: 15,
                          padding: 10,
                        }}
                      >
                        <label
                          style={{
                            marginRight: 30,
                            fontSize: 14,
                            fontWeight: 700,
                            fontFamily: 'Inter',
                          }}
                        >
                          All properties
                        </label>
                        <DownOutlined />
                      </div>
                    </Dropdown>
                  </Col>
                </Row>
                <Row>
                  <Col
                    style={{
                      display: 'flex',
                      padding: 4,
                      borderRadius: 9,
                      backgroundColor: '#E9E9E9',
                      marginTop: 20,
                    }}
                  ></Col>
                </Row>
              </RowPriceLeft>
            </RowPrice>
            <RowPrice style={{ marginTop: 30 }}>
              <RowPriceLeft className="container-fluid">
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
