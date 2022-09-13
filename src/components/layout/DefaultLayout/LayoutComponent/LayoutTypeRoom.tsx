import { MPostDetail } from '@models/MPostDetail';
import {
  IconAppleTV,
  IconBedTabTab,
  IconBluePrint,
  IconChromeCast,
  IconDoor,
  IconFloor,
  IconGreenScreen,
  IconPhotoCopier,
  IconPrinter,
  IconSafari,
  IconScanner,
} from '@root/public/icons';
import { Button, Col, Divider, Image, Row, Typography } from 'antd';
import dynamic from 'next/dynamic';
import {
  DefaultRowTitle,
  DefaultWrapperWithBg,
} from '..';
import { DefaultContentInWrapper } from './Component.style'
import { ListWrapper } from "../../../shared/Utilities/Utilities.style"
import { RowPriceLeft, ColCustom, ColCustomPrice, ColCustomQuipment } from './Component.style';
import { SRC_IMAGE } from '@constants';

export const LayoutTypeRoom = (props: { t: any; post: MPostDetail }) => {
  const { t: translate, post } = props;
  const DynamicUtility = dynamic(
    () => import('../../../shared/Utilities/ListUtilities')
  );
  const DynamicNotifyOutdate = dynamic(
    () => import('../../../shared/WidgetUserInfo/NotifyOutdate').then(
      (mod: any) => mod.NotifyOutdate
    )
  );

  return (
    <>
      <DefaultWrapperWithBg>
        <DefaultContentInWrapper>
          <RowPriceLeft>
            <DefaultRowTitle>
              <label style={{ fontSize: 28, fontWeight: "700", marginBottom: 20 }}>Loại phòng - Kinds of room</label>
            </DefaultRowTitle>
            <Row style={{ backgroundColor: '#F2F2F2', padding: 12, borderRadius: 8 }}>
              <Col xl={8} md={14} sm={23} xs={23} style={{ marginRight: 34 }}>
                <Image src={SRC_IMAGE.TYPEROOM} width={'100%'} />
                <div style={{ display: 'flex', marginTop: 26 }}>
                  <span style={{ width: '50%' }}>
                    <IconBluePrint />
                    <label style={{ marginLeft: 10 }}>52m</label>
                  </span>
                  <span style={{ width: '50%' }}>
                    <IconSafari />
                    <label style={{ marginLeft: 10 }}>Nam</label>
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ width: '50%' }}>
                    <IconBluePrint />
                    <label style={{ marginLeft: 10 }}>Biển</label>
                  </span>
                  <span style={{ width: '50%' }}>
                    <IconBedTabTab />
                    <label style={{ marginLeft: 10 }}>1</label>
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ width: '50%' }}>
                    <IconDoor />
                    <label style={{ marginLeft: 10 }}>2</label>
                  </span>
                </div>
              </Col>
              <ColCustomQuipment xl={4} md={8} sm={22} xs={22}>
                <div >
                  <Typography.Title level={5} style={{ color: "#F9BD06", marginBottom: 20 }}>Equipment</Typography.Title>
                  <div style={{ marginBottom: 20 }}>
                    <span>
                      <IconPrinter />
                      <label style={{ fontSize: 16, fontWeight: '500', marginLeft: 10 }}>Printer</label>
                    </span>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <span>
                      <IconScanner />
                      <label style={{ fontSize: 16, fontWeight: '500', marginLeft: 10 }}>Scanner</label>
                    </span>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <span>
                      <IconPhotoCopier />
                      <label style={{ fontSize: 16, fontWeight: '500', marginLeft: 10 }}>Photocopier</label>
                    </span>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <span>
                      <IconAppleTV />
                      <label style={{ fontSize: 16, fontWeight: '500', marginLeft: 10 }}>Apple tV</label>
                    </span>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <span>
                      <IconChromeCast />
                      <label style={{ fontSize: 16, fontWeight: '500', marginLeft: 10 }}>Chormecast</label>
                    </span>
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <span>
                      <IconGreenScreen />
                      <label style={{ fontSize: 16, fontWeight: '500', marginLeft: 10 }}>Greenscreen</label>
                    </span>
                  </div>
                </div>
              </ColCustomQuipment>
              <ColCustomPrice xl={5} md={22} sm={22} xs={22}>
                <div style={{ marginBottom: 28, display: 'flex', justifyContent: 'end' }}>
                  <label style={{
                    fontSize: 14,
                    fontWeight: '600',

                    backgroundColor: "#FF0000",
                    borderRadius: 8,
                    padding: 8,
                    paddingLeft: 12,
                    paddingRight: 12,
                    color: 'white'
                  }}>
                    Ưu đãi phút chót -30%
                  </label>
                </div>
                <Typography.Title level={4} style={{ color: "#4E4E4E", justifyContent: 'end', display: 'flex' }} delete={true}>398,300 đ</Typography.Title>
                <Typography.Title level={2} style={{ color: "#FF8800", marginTop: 8, justifyContent: 'end', display: 'flex' }}>1,898,300 đ</Typography.Title>
              </ColCustomPrice>
              <ColCustom xl={6} sm={22} md={22} xs={22}
                className="d-flex align-items-center"
              >
                <Button style={{ padding: 18, backgroundColor: "#F9C41F", borderRadius: 8, width: '100%', height: 'auto' }}>
                  <label style={{ fontSize: 20, fontWeight: "700", display: 'flex', justifyContent: 'center' }}>Book</label>
                </Button>
              </ColCustom>
            </Row>
          </RowPriceLeft>
        </DefaultContentInWrapper>
      </DefaultWrapperWithBg>
    </>
  );
};
