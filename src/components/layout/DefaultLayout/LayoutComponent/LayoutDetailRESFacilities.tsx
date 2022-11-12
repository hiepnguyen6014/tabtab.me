import { SRC_IMAGE } from '@constants';
import { MPostDetail } from '@models/MPostDetail';
import {
  IconAccount,
  IconAppleTV,
  IconBeanBag,
  IconBoardGames,
  IconCaffe,
  IconChromeCast,
  IconCoffee,
  IconCommunityDrinks,
  IconComunityApp,
  IconConditionning,
  IconDrinkWater,
  IconErgonomicChair,
  IconEvent,
  IconFreeTea,
  IconGreenScreen,
  IconHeating,
  IconKitchen,
  IconLockers,
  IconLounge,
  IconOutdoor,
  IconPhotoCopier,
  IconPrinter,
  IconScanner,
  IconShower,
  IconSlack,
  IconSnacks,
  IconStading,
  IconWifi,
  IconWorkShop,
  IconnCommunityLunches,
} from '@root/public/icons';
import { Image, Typography } from 'antd';
import dynamic from 'next/dynamic';

import { DefaultRowTitle, DefaultWrapperWithBg } from '..';
import { DefaultContentInWrapper } from './Component.style';
import { ListWrapper } from './Component.style';
import { AdGoogle, RowPriceLeft } from './Component.style';

export const LayoutDetailRESFacilities = (props: {
  t: any;
  post: MPostDetail;
}) => {
  const { t: translate, post } = props;
  const DynamicUtility = dynamic(
    () => import('../../../shared/Utilities/ListUtilities'),
  );
  const DynamicNotifyOutdate = dynamic(() =>
    import('../../../shared/WidgetUserInfo/NotifyOutdate').then(
      (mod: any) => mod.NotifyOutdate,
    ),
  );

  const data = {
    ClassicBasics: [
      {
        icon: '',
        name: 'High-Speed Wifi',
      },
      {
        icon: '',
        name: 'Heating',
      },
      {
        icon: '',
        name: 'Air Conditioning',
      },
    ],
  };

  return (
    <>
      <DefaultWrapperWithBg>
        <DefaultContentInWrapper grid={true}>
          <RowPriceLeft>
            <DefaultRowTitle>
              <label
                style={{
                  fontFamily: 'Inter',
                  fontSize: 28,
                  fontWeight: '700',
                  marginBottom: 20,
                }}
              >
                Facilites
              </label>
            </DefaultRowTitle>
            <ListWrapper style={{ marginBottom: 48 }}>
              <div role="item">
                <Typography.Title
                  level={5}
                  style={{
                    fontFamily: 'Inter',
                    color: '#F9BD06',
                    marginBottom: 20,
                  }}
                >
                  Classic Basics
                </Typography.Title>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconWifi />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    High-Speed Wifi
                  </label>
                </div>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconHeating />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Heating
                  </label>
                </div>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconConditionning />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Air conditioning
                  </label>
                </div>
              </div>
              <div role="item">
                <Typography.Title
                  level={5}
                  style={{
                    fontFamily: 'Inter',
                    color: '#F9BD06',
                    marginBottom: 20,
                  }}
                >
                  Seating
                </Typography.Title>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconStading />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Standing
                  </label>
                </div>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconBeanBag />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Beanbages
                  </label>
                </div>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconErgonomicChair />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Ergonomic chairs
                  </label>
                </div>
              </div>
              <div role="item">
                <Typography.Title
                  level={5}
                  style={{
                    fontFamily: 'Inter',
                    color: '#F9BD06',
                    marginBottom: 20,
                  }}
                >
                  Relax zones
                </Typography.Title>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconLounge />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Lounge
                  </label>
                </div>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconOutdoor />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Outdoor
                  </label>
                </div>
              </div>
            </ListWrapper>
            <ListWrapper style={{ marginBottom: 48 }}>
              <div role="item">
                <Typography.Title
                  level={5}
                  style={{
                    fontFamily: 'Inter',
                    color: '#F9BD06',
                    marginBottom: 20,
                  }}
                >
                  Faclities
                </Typography.Title>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconKitchen />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Kitchen
                  </label>
                </div>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconLockers />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Personal Lockers
                  </label>
                </div>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconShower />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Showers
                  </label>
                </div>
              </div>
              <div role="item">
                <Typography.Title
                  level={5}
                  style={{
                    fontFamily: 'Inter',
                    color: '#F9BD06',
                    marginBottom: 20,
                  }}
                >
                  Catering
                </Typography.Title>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconDrinkWater />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Free drinking water
                  </label>
                </div>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconSnacks />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Snacks avaliable
                  </label>
                </div>
              </div>
              <div role="item">
                <Typography.Title
                  level={5}
                  style={{
                    fontFamily: 'Inter',
                    color: '#F9BD06',
                    marginBottom: 20,
                  }}
                >
                  Caffeine fix
                </Typography.Title>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconCoffee />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Free coffee
                  </label>
                </div>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconFreeTea />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Free tea
                  </label>
                </div>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconCaffe />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Onsite caffe
                  </label>
                </div>
              </div>
            </ListWrapper>
            <ListWrapper style={{ marginBottom: 48 }}>
              <div role="item">
                <Typography.Title
                  level={5}
                  style={{
                    fontFamily: 'Inter',
                    color: '#F9BD06',
                    marginBottom: 20,
                  }}
                >
                  Community
                </Typography.Title>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconEvent style={{ marginTop: 5 }} />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Events
                  </label>
                </div>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconWorkShop />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Workshops
                  </label>
                </div>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconnCommunityLunches />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Community Lunches
                  </label>
                </div>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconCommunityDrinks />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Community Drinks
                  </label>
                </div>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconSlack />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Slack For Members
                  </label>
                </div>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconComunityApp />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Community App
                  </label>
                </div>
              </div>
              <div role="item">
                <Typography.Title
                  level={5}
                  style={{
                    fontFamily: 'Inter',
                    color: '#F9BD06',
                    marginBottom: 20,
                  }}
                >
                  Equipment
                </Typography.Title>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconPrinter />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Printer
                  </label>
                </div>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconScanner />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Scanner
                  </label>
                </div>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconPhotoCopier />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Photocopier
                  </label>
                </div>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconAppleTV />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Apple tV
                  </label>
                </div>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconChromeCast />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Chormecast
                  </label>
                </div>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconGreenScreen />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Greenscreen
                  </label>
                </div>
              </div>
              <div role="item">
                <Typography.Title
                  level={5}
                  style={{
                    fontFamily: 'Inter',
                    color: '#F9BD06',
                    marginBottom: 20,
                  }}
                >
                  Cool stuff
                </Typography.Title>
                <div style={{ marginBottom: 20, display: 'flex' }}>
                  <IconBoardGames />
                  <label
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      marginLeft: 10,
                    }}
                  >
                    Board games
                  </label>
                </div>
              </div>
            </ListWrapper>
          </RowPriceLeft>
          <AdGoogle>
            <img src={SRC_IMAGE.AD1} height={'auto'} width={'auto'} />
          </AdGoogle>
        </DefaultContentInWrapper>
      </DefaultWrapperWithBg>
    </>
  );
};
