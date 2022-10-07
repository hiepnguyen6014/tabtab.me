import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  AirConditioning,
  BikeStorage,
  CarParking,
  CleaningService,
  Collaborative,
  Convention,
  CoworkingSpace,
  DisabledAccess,
  Electricity,
  Enterprise,
  FactoryWarehouse,
  Favorite,
  HelpCenter,
  HoursSecurity,
  HouseManager,
  IconCaffe,
  IconKitchen,
  IconShower,
  Lift,
  OutdoorPublic,
  Pet,
  PrivateOffice,
  ReceptionistAvailable,
  SharedOffice,
  Support247,
  VirtualOfflice,
  Water,
} from '@root/public/icons';
import {
  BoxFavorite,
  BoxFavoriteOne,
  BoxHiddenMobile,
  BoxIntroduce,
  BoxLogoX,
  BoxLogoXOne,
  BoxPaddingRow,
  BoxSalePrice,
  BoxStopLoss,
  BoxWrapper,
  BoxWrapperMini,
  BoxWrapperOne,
  ButtonApply,
  ButtonClasses,
  ButtonClear,
  DivPrice,
  FDesktop,
  ImageHome,
  RowWrap,
  SalePrice,
  SpanPrice,
  WrapperHideMap,
} from './Search.style';
import {
  Button,
  Checkbox,
  Col,
  Divider,
  Dropdown,
  Grid,
  Image,
  Menu,
  Popover,
  Radio,
  Row,
  Typography,
} from 'antd';
import { IconArrowDown, IconBell } from '@root/public/icons';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper';
import React, { useEffect, useState } from 'react';
import {
  SEARCH_DATA,
  SEARCH_DATA_MINI,
  SEARCH_DATA_ROW,
} from './component/SearchData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getListRealEstate, getPostByRating } from '../../../core/services';

import DefaultLayout from '../../layout/DefaultLayout/DefaltLayout';
import { FilterProvider } from '@root/src/core/contexts/filterContext';
import InfoHome from './component/InfoHome';
import ListItem from '../Home/HomeComponent/ListItem';
import { MPostDetail } from '@models/MPostDetail';
import { SRC_IMAGE } from '@core';
import SwiperGlobal from '../../shared/SwiperGlobal';

interface Props {
  posts: MPostDetail[];
  t: any;
}

export default function Search(props: Props) {
  const { t: translate, posts } = props;
  const [hideMap, setHideMap] = useState(false);
  const [page, setPage] = useState(1);
  useEffect(() => {
    // getData()
  }, []);
  const getData = async () => {
    const listByRating: any = await getListRealEstate({
      // "filter": {
      //     "realEstateTitle": "a"
      // }
    });
  };

  const handleHideMap = () => {
    setHideMap(!hideMap);
  };

  const listData = [
    {
      title: 'Outdoor Public Space',
      icon: <OutdoorPublic />,
    },
    {
      title: 'Admin Support',
      icon: <HouseManager />,
    },
    {
      title: 'Cleaning Included',
      icon: <CleaningService />,
    },
    {
      title: 'Bike Storage Available',
      icon: <BikeStorage />,
    },
    {
      title: 'Electricity Included',
      icon: <Electricity />,
    },
    {
      title: 'Disabled Access',
      icon: <DisabledAccess />,
    },
    {
      title: 'Kitchen',
      icon: <IconKitchen />,
    },
    {
      title: 'Collaborative Public Space',
      icon: <Collaborative />,
    },
    {
      title: 'After Hours Security',
      icon: <HoursSecurity />,
    },
    {
      title: 'Pet Friendly',
      icon: <Pet />,
    },
    {
      title: 'Ground Floor Concierge',
      icon: <HelpCenter />,
    },
    {
      title: 'Air Conditioning',
      icon: <AirConditioning />,
    },
    {
      title: 'Car Parking In Building',
      icon: <CarParking />,
    },
    {
      title: 'High Speed Lift',
      icon: <Lift />,
    },
    {
      title: 'Receptionist Available',
      icon: <ReceptionistAvailable />,
    },
    {
      title: 'Cafe/Retail in Building',
      icon: <IconCaffe />,
    },
    {
      title: 'Storage Available',
      icon: <FactoryWarehouse />,
    },
    {
      title: 'Shower Facility Included',
      icon: <IconShower />,
    },
    {
      title: '24/7 Access',
      icon: <Support247 />,
    },
    {
      title: 'Water/Sink in Room',
      icon: <Water />,
    },
  ];

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: 'label 1',
        },
        {
          key: '2',
          label: 'label 2',
        },
        {
          key: '3',
          label: 'label 3',
        },
      ]}
    />
  );

  const PriceContent = (
    <div style={{ padding: 12 }}>
      <Typography
        style={{ fontSize: 20, fontFamily: 'Inter', fontWeight: '700' }}
      >
        Price
      </Typography>
      <Typography
        style={{
          fontSize: 16,
          fontFamily: 'Inter',
          fontWeight: '700',
          marginTop: 24,
          marginBottom: 16,
        }}
      >
        Select Type
      </Typography>
      <div
        style={{
          borderRadius: 8,
          padding: 4,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            background: '#E9E9E9',
            padding: '4px 0px 4px 4px',
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        >
          <ButtonClasses>
            <label
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                padding: '6px 24px 6px 24px',
                whiteSpace: 'break-spaces',
              }}
            >
              Hour
            </label>
          </ButtonClasses>
        </div>
        <Divider
          type="vertical"
          style={{
            marginRight: 0,
            marginLeft: 0,
            height: 50,
            borderColor: '#D3D3D3',
          }}
        />
        <div style={{ background: '#E9E9E9', padding: '4px 0px 4px 0px' }}>
          <ButtonClasses>
            <label
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                padding: '6px 24px 6px 24px',
                whiteSpace: 'break-spaces',
              }}
            >
              Day
            </label>
          </ButtonClasses>
        </div>
        <Divider
          type="vertical"
          style={{
            marginRight: 0,
            marginLeft: 0,
            height: 50,
            borderColor: '#D3D3D3',
          }}
        />
        <div style={{ background: '#E9E9E9', padding: '4px 0px 4px 0px' }}>
          <ButtonClasses>
            <label
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                padding: '6px 24px 6px 24px',
                whiteSpace: 'break-spaces',
              }}
            >
              Week
            </label>
          </ButtonClasses>
        </div>
        <Divider
          type="vertical"
          style={{
            marginRight: 0,
            marginLeft: 0,
            height: 50,
            borderColor: '#D3D3D3',
          }}
        />
        <div
          style={{
            background: '#E9E9E9',
            padding: '4px 4px 4px 0px',
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}
        >
          <ButtonClasses>
            <label
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                padding: '6px 24px 6px 24px',
                whiteSpace: 'break-spaces',
              }}
            >
              Month
            </label>
          </ButtonClasses>
        </div>
      </div>

      <Typography
        style={{
          fontSize: 16,
          fontFamily: 'Inter',
          fontWeight: '700',
          marginTop: 28,
          marginBottom: 16,
        }}
      >
        Select Type
      </Typography>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Dropdown overlay={menu} placement="bottomLeft" trigger={['click']}>
          <DivPrice>
            <label
              style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: '550' }}
            >
              $ Any
            </label>
            <IconArrowDown />
          </DivPrice>
        </Dropdown>
        <Typography
          style={{ fontSize: 16, fontFamily: 'Inter', fontWeight: '700' }}
        >
          to
        </Typography>
        <Dropdown overlay={menu} placement="bottomLeft" trigger={['click']}>
          <DivPrice>
            <label
              style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: '550' }}
            >
              $ Any
            </label>
            <IconArrowDown />
          </DivPrice>
        </Dropdown>
      </div>
      <Row gutter={16}>
        <Col span={12}>
          <ButtonClear
            style={{
              padding: 14,
              width: '100%',
              height: 'auto',
              marginTop: 16,
              borderRadius: 8,
            }}
          >
            <text
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                color: 'white',
              }}
            >
              Clear
            </text>
          </ButtonClear>
        </Col>
        <Col span={12}>
          <ButtonApply
            style={{
              padding: 14,
              width: '100%',
              height: 'auto',
              marginTop: 16,
              borderRadius: 8,
            }}
          >
            <text
              style={{ fontSize: 16, fontWeight: '700', fontFamily: 'Inter' }}
            >
              Apply
            </text>
          </ButtonApply>
        </Col>
      </Row>
    </div>
  );

  const PropertyContent = (
    <div style={{ padding: 12, width: 350 }}>
      <Typography
        style={{
          fontSize: 20,
          fontFamily: 'Inter',
          fontWeight: '700',
          marginBottom: 24,
        }}
      >
        Property types
      </Typography>
      <Checkbox
        style={{
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 8,
          marginBottom: 24,
        }}
      >
        <div style={{ paddingRight: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <PrivateOffice />
            <text
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                marginLeft: 8,
              }}
            >
              Private Office
            </text>
          </div>
          <text
            style={{
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Inter',
              color: '#7A7A7A',
            }}
          >
            Lockable private office within a shared, serviced or coworking
            space.
          </text>
        </div>
      </Checkbox>
      <Checkbox
        style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}
      >
        <div style={{ paddingRight: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CoworkingSpace />
            <text
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                marginLeft: 8,
              }}
            >
              Coworking Space
            </text>
          </div>
          <text
            style={{
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Inter',
              color: '#7A7A7A',
            }}
          >
            Furnished open plan desk(s) located in a dedicated coworking space.
          </text>
        </div>
      </Checkbox>
      <Checkbox
        style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}
      >
        <div style={{ paddingRight: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <SharedOffice />
            <text
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                marginLeft: 8,
              }}
            >
              Shared Office
            </text>
          </div>
          <text
            style={{
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Inter',
              color: '#7A7A7A',
            }}
          >
            Open plan desk(s) inside another business who is sharing their
            space.
          </text>
        </div>
      </Checkbox>
      <Checkbox
        style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}
      >
        <div style={{ paddingRight: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Enterprise />
            <text
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                marginLeft: 8,
              }}
            >
              Enterprise Space
            </text>
          </div>
          <text
            style={{
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Inter',
              color: '#7A7A7A',
            }}
          >
            Dedicated space for bigger teams with private rooms, facilities
          </text>
        </div>
      </Checkbox>
      <Checkbox
        style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}
      >
        <div style={{ paddingRight: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <VirtualOfflice />
            <text
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                marginLeft: 8,
              }}
            >
              Virtual Office
            </text>
          </div>
          <text
            style={{
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Inter',
              color: '#7A7A7A',
            }}
          >
            Professional business address, telephone number and casual office
          </text>
        </div>
      </Checkbox>
      <Checkbox
        style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}
      >
        <div style={{ paddingRight: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Convention />
            <text
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                marginLeft: 8,
              }}
            >
              Sublet/Conventional Space
            </text>
          </div>
          <text
            style={{
              fontSize: 14,
              fontWeight: '400',
              fontFamily: 'Inter',
              color: '#7A7A7A',
            }}
          >
            Lockable private office within a shared, serviced or coworking
            space.
          </text>
        </div>
      </Checkbox>
      <Row gutter={16}>
        <Col span={12}>
          <ButtonClear
            style={{
              padding: 14,
              width: '100%',
              height: 'auto',
              marginTop: 16,
              borderRadius: 8,
            }}
          >
            <text
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                color: 'white',
              }}
            >
              Clear
            </text>
          </ButtonClear>
        </Col>
        <Col span={12}>
          <ButtonApply
            style={{
              padding: 14,
              width: '100%',
              height: 'auto',
              marginTop: 16,
              borderRadius: 8,
            }}
          >
            <text
              style={{ fontSize: 16, fontWeight: '700', fontFamily: 'Inter' }}
            >
              Apply
            </text>
          </ButtonApply>
        </Col>
      </Row>
    </div>
  );

  const MoreFilter = (
    <div style={{ padding: 12, width: 650 }}>
      <Typography
        style={{
          fontSize: 20,
          fontFamily: 'Inter',
          fontWeight: '700',
          marginBottom: 24,
        }}
      >
        Property types
      </Typography>
      <Row gutter={24}>
        {listData.map((item, key) => (
          <Col span={12} key={key}>
            <Checkbox style={{ marginBottom: 24 }}>
              <text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  fontFamily: 'Inter',
                  marginLeft: 8,
                }}
              >
                {item.icon}
                <text style={{ marginLeft: 8 }}>{item.title}</text>
              </text>
            </Checkbox>
          </Col>
        ))}
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <ButtonClear
            style={{
              padding: 14,
              width: '100%',
              height: 'auto',
              marginTop: 16,
              borderRadius: 8,
            }}
          >
            <text
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                color: 'white',
              }}
            >
              Clear
            </text>
          </ButtonClear>
        </Col>
        <Col span={12}>
          <ButtonApply
            style={{
              padding: 14,
              width: '100%',
              height: 'auto',
              marginTop: 16,
              borderRadius: 8,
            }}
          >
            <text
              style={{ fontSize: 16, fontWeight: '700', fontFamily: 'Inter' }}
            >
              Apply
            </text>
          </ButtonApply>
        </Col>
      </Row>
    </div>
  );

  const BedRoomContent = (
    <div style={{ padding: 12, width: 400 }}>
      <Typography
        style={{
          fontSize: 20,
          fontFamily: 'Inter',
          fontWeight: '700',
          marginBottom: 32,
        }}
      >
        Property types
      </Typography>
      <Row gutter={8}>
        <Col>
          <a
            style={{
              border: '1px solid #E9E9E9',
              borderRadius: 8,
              padding: '10px 15px 10px 15px',
            }}
          >
            <text
              style={{ fontSize: 16, fontWeight: '700', fontFamily: 'Inter' }}
            >
              Studio
            </text>
          </a>
        </Col>
        <Col>
          <a
            style={{
              border: '1px solid #E9E9E9',
              borderRadius: 8,
              padding: '9px 15px 9px 15px',
              background: page == 1 ? '#F9C41F' : 'white',
            }}
            onClick={() => setPage(1)}
          >
            <text
              style={{ fontSize: 16, fontWeight: '700', fontFamily: 'Inter' }}
            >
              1
            </text>
          </a>
        </Col>
        <Col>
          <a
            style={{
              border: '1px solid #E9E9E9',
              borderRadius: 8,
              padding: '9px 15px 9px 15px',
              background: page == 2 ? '#F9C41F' : 'white',
            }}
            onClick={() => setPage(2)}
          >
            <text
              style={{ fontSize: 16, fontWeight: '700', fontFamily: 'Inter' }}
            >
              2
            </text>
          </a>
        </Col>
        <Col>
          <a
            style={{
              border: '1px solid #E9E9E9',
              borderRadius: 8,
              padding: '9px 15px 9px 15px',
              background: page == 3 ? '#F9C41F' : 'white',
            }}
            onClick={() => setPage(3)}
          >
            <text
              style={{ fontSize: 16, fontWeight: '700', fontFamily: 'Inter' }}
            >
              3
            </text>
          </a>
        </Col>
        <Col>
          <a
            style={{
              border: '1px solid #E9E9E9',
              borderRadius: 8,
              padding: '9px 15px 9px 15px',
              background: page == 4 ? '#F9C41F' : 'white',
            }}
            onClick={() => setPage(4)}
          >
            <text
              style={{ fontSize: 16, fontWeight: '700', fontFamily: 'Inter' }}
            >
              4
            </text>
          </a>
        </Col>
        <Col>
          <a
            style={{
              border: '1px solid #E9E9E9',
              borderRadius: 8,
              padding: '9px 15px 9px 15px',
              background: page == 5 ? '#F9C41F' : 'white',
            }}
            onClick={() => setPage(5)}
          >
            <text
              style={{ fontSize: 16, fontWeight: '700', fontFamily: 'Inter' }}
            >
              5+
            </text>
          </a>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={12}>
          <ButtonClear
            style={{
              padding: 14,
              width: '100%',
              height: 'auto',
              marginTop: 16,
              borderRadius: 8,
            }}
          >
            <text
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                color: 'white',
              }}
            >
              Clear
            </text>
          </ButtonClear>
        </Col>
        <Col span={12}>
          <ButtonApply
            style={{
              padding: 14,
              width: '100%',
              height: 'auto',
              marginTop: 16,
              borderRadius: 8,
            }}
          >
            <text
              style={{ fontSize: 16, fontWeight: '700', fontFamily: 'Inter' }}
            >
              Apply
            </text>
          </ButtonApply>
        </Col>
      </Row>
    </div>
  );

  return (
    <FDesktop>
      <BoxIntroduce>
        <h2
          style={{
            fontFamily: 'Inter',
            fontSize: 16,
            fontWeight: '700',
            color: '#7A7A7A',
          }}
        >
          Hơn 300 nhà
        </h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: 'Inter', fontSize: 32, fontWeight: '700' }}>
            Nhà ở tại Quận 7
          </div>
          <Button onClick={handleHideMap}>
            {hideMap ? 'SHOW MAPS' : 'HIDE MAPS'}
          </Button>
        </div>
      </BoxIntroduce>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
        <Col span={hideMap ? 24 : 12}>
          <BoxHiddenMobile>
            <Row style={{ display: 'flex', marginTop: 20 }}>
              <Col style={{ marginBottom: 20 }}>
                <Popover
                  placement="bottomRight"
                  content={PriceContent}
                  trigger="click"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '5px 20px 5px 20px',
                      justifyContent: 'center',
                      border: '1px solid #7A7A7A',
                      borderRadius: 24,
                      marginRight: 15,
                    }}
                  >
                    <label
                      style={{
                        fontFamily: 'Inter',
                        fontSize: 16,
                        fontWeight: '550',
                        marginRight: 10,
                      }}
                    >
                      Price
                    </label>
                    <IconArrowDown />
                  </div>
                </Popover>
              </Col>
              <Col style={{ marginBottom: 20 }}>
                <Popover
                  placement="bottomRight"
                  content={PropertyContent}
                  trigger="click"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '5px 20px 5px 20px',
                      justifyContent: 'center',
                      border: '1px solid #7A7A7A',
                      borderRadius: 24,
                      marginRight: 15,
                    }}
                  >
                    <label
                      style={{
                        fontFamily: 'Inter',
                        fontSize: 16,
                        fontWeight: '550',
                        marginRight: 10,
                      }}
                    >
                      New Projects
                    </label>
                    <IconArrowDown />
                  </div>
                </Popover>
              </Col>
              <Col style={{ marginBottom: 20 }}>
                <Popover
                  placement="bottomRight"
                  content={PropertyContent}
                  trigger="click"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '5px 20px 5px 20px',
                      justifyContent: 'center',
                      border: '1px solid #7A7A7A',
                      borderRadius: 24,
                      marginRight: 15,
                    }}
                  >
                    <label
                      style={{
                        fontFamily: 'Inter',
                        fontSize: 16,
                        fontWeight: '550',
                        marginRight: 10,
                      }}
                    >
                      Property types
                    </label>
                    <IconArrowDown />
                  </div>
                </Popover>
              </Col>
              <Col style={{ marginBottom: 20 }}>
                <Popover
                  placement="bottomRight"
                  content={BedRoomContent}
                  trigger="click"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '5px 20px 5px 20px',
                      justifyContent: 'center',
                      border: '1px solid #7A7A7A',
                      borderRadius: 24,
                      marginRight: 15,
                    }}
                  >
                    <label
                      style={{
                        fontFamily: 'Inter',
                        fontSize: 16,
                        fontWeight: '550',
                        marginRight: 10,
                      }}
                    >
                      Bedrooms
                    </label>
                    <IconArrowDown />
                  </div>
                </Popover>
              </Col>
              <Col style={{ marginBottom: 20 }}>
                <Popover
                  placement="bottomRight"
                  content={MoreFilter}
                  trigger="click"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '5px 20px 5px 20px',
                      justifyContent: 'center',
                      border: '1px solid #7A7A7A',
                      borderRadius: 24,
                      marginRight: 15,
                    }}
                  >
                    <label
                      style={{
                        fontFamily: 'Inter',
                        fontSize: 16,
                        fontWeight: '550',
                        marginRight: 10,
                      }}
                    >
                      More filters
                    </label>
                    <IconArrowDown />
                  </div>
                </Popover>
              </Col>
            </Row>
          </BoxHiddenMobile>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconBell />
            <label
              style={{
                fontSize: 14,
                fontWeight: '400',
                fontFamily: 'Inter',
                color: '#4E4E4E',
                marginLeft: 10,
              }}
            >
              Ưu đãi khách hàng tháng 8/2021.
            </label>
          </div>
          {!hideMap && (
            <WrapperHideMap className="wrapperHideMap">
              <Col span={24}>
                <div>
                  <Image
                    src={SRC_IMAGE.MAPS}
                    alt="Map"
                    width="100%"
                    height="100%"
                  />
                </div>
              </Col>
            </WrapperHideMap>
          )}
        </Col>
        {!hideMap && (
          <Col span={12}>
            <div>
              <Image
                src={SRC_IMAGE.MAPS}
                alt="Map"
                width="100%"
                height="100%"
              />
            </div>
          </Col>
        )}
        {hideMap && (
          <WrapperHideMap
            gutter={[
              { xs: 0, sm: 0, md: 24, lg: 24 },
              { xs: 24, sm: 24, md: 24, lg: 32 },
            ]}
          >
            {SEARCH_DATA.map((search, index) => (
              <Col sm={24} lg={12} key={index}>
                <BoxWrapper key={index}>
                  <SwiperGlobal
                    width="100%"
                    height="300px"
                    arrayImage={search.imageHome}
                  />
                  <BoxSalePrice>
                    <SpanPrice>sale {search.sale} off</SpanPrice>
                  </BoxSalePrice>
                  <BoxLogoX>
                    <Image preview={false} src={SRC_IMAGE.LOGOXIMAGE} />
                  </BoxLogoX>
                  <BoxFavorite>
                    <Favorite />
                  </BoxFavorite>
                  <div style={{ padding: '14px 16px 16px 18px' }}>
                    <InfoHome dataHome={search}/>
                  </div>
                </BoxWrapper>
              </Col>
            ))}
            {SEARCH_DATA_ROW.map((search, index) => (
              <Col sm={24} lg={12}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: '#FFFFFF',
                    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.16)',
                    borderRadius: '8px',
                    maxHeight: '304px',
                  }}
                  key={index}
                >
                  <div style={{ maxWidth: '282px' }}>
                    <SwiperGlobal
                      width="100%"
                      height="304px"
                      arrayImage={search.imageHome}
                    />
                    <BoxSalePrice>
                      <SpanPrice>sale {search.sale} off</SpanPrice>
                    </BoxSalePrice>
                    <BoxLogoXOne>
                      <Image preview={false} src={SRC_IMAGE.LOGOXIMAGE} />
                    </BoxLogoXOne>
                    <BoxFavoriteOne>
                      <Favorite />
                    </BoxFavoriteOne>
                  </div>

                  <BoxPaddingRow>
                    <InfoHome dataHome={search} row />
                  </BoxPaddingRow>
                </div>
              </Col>
            ))}
            <Row>
              <Col sm={24} lg={12} style={{ padding: 10 }}>
                <img src={SRC_IMAGE.ADGOOGLE} height="100%" width="100%" />
              </Col>
              <Col sm={24} lg={12} style={{ padding: 10 }}>
                <img src={SRC_IMAGE.ADGOOGLE} height="100%" width="100%" />
              </Col>
            </Row>
            <Row
              gutter={[
                { xs: 6, sm: 12, md: 24, lg: 24 },
                { xs: 24, sm: 24, md: 24, lg: 0 },
              ]}
            >
              {SEARCH_DATA_MINI.map((search, index) => (
                <Col xs={24} sm={12} md={12} lg={6} key={index}>
                  <BoxWrapperMini key={index}>
                    <SwiperGlobal
                      width="100%"
                      height="188px"
                      arrayImage={search.imageHome}
                    />
                    <BoxSalePrice>
                      <SpanPrice>sale {search.sale} off</SpanPrice>
                    </BoxSalePrice>
                    <BoxStopLoss>
                      <SpanPrice>CẮT LỖ {search.stopLoss}</SpanPrice>
                    </BoxStopLoss>
                    <BoxLogoX>
                      <Image preview={false} src={SRC_IMAGE.LOGOXIMAGE} />
                    </BoxLogoX>
                    <BoxFavorite>
                      <Favorite />
                    </BoxFavorite>
                    <div style={{ padding: '14px 7px 16px 8px' }}>
                      <InfoHome dataHome={search} row hiddenPrice changeImage/>
                    </div>
                  </BoxWrapperMini>
                </Col>
              ))}
            </Row>
            <Row>
              <Col sm={24} lg={12} style={{ padding: 10 }}>
                <img src={SRC_IMAGE.ADGOOGLE} height="100%" width="100%" />
              </Col>
              <Col sm={24} lg={12} style={{ padding: 10 }}>
                <img src={SRC_IMAGE.ADGOOGLE} height="100%" width="100%" />
              </Col>
            </Row>
          </WrapperHideMap>
        )}
      </Row>

      {/* <RowWrap
                    gutter={{
                        xs: 8,
                        sm: 16,
                        md: 24,
                        lg: 32,
                    }}>
                    <ListItem t={translate} data={posts.slice(0, 2)} type={2} />
                    <Row >
                        <Col sm={24} lg={12} style={{ padding: 20 }}>
                            <img src={SRC_IMAGE.ADGOOGLE} height="100%" width="100%" />
                        </Col>
                        <Col sm={24} lg={12} style={{ padding: 20 }}>
                            <img src={SRC_IMAGE.ADGOOGLE} height="100%" width="100%" />
                        </Col>
                    </Row>

                    <ListItem t={translate} data={posts.slice(0, 2)} type={3} />
                    <Row>
                        <Col sm={24} lg={12} style={{ padding: 20 }}>
                            <img src={SRC_IMAGE.ADGOOGLE} height="100%" width="100%" />
                        </Col>
                        <Col sm={24} lg={12} style={{ padding: 20 }}>
                            <img src={SRC_IMAGE.ADGOOGLE} height="100%" width="100%" />
                        </Col>
                    </Row>

                    <ListItem t={translate} data={posts.slice(0, 4)} type={1} />
                    <Row>
                        <Col sm={24} lg={12} style={{ padding: 20 }}>
                            <img src={SRC_IMAGE.ADGOOGLE} height="100%" width="100%" />
                        </Col>
                        <Col sm={24} lg={12} style={{ padding: 20 }}>
                            <img src={SRC_IMAGE.ADGOOGLE} height="100%" width="100%" />
                        </Col>
                    </Row>

                    <ListItem t={translate} data={posts.slice(0, 4)} type={4} />

                </RowWrap> */}
    </FDesktop>
  );
}
