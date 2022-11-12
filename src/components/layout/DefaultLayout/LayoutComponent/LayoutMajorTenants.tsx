
import { BreadcrumbCustom } from '../../../shared/Breadcrum/index';
import { ButtonSave } from '../../../shared/ButtonSave/index';
import { ButtonShare } from '../../../shared/ButtonShare';
import { TextParagraph } from '../../../shared/TextParagraph';
import { WidgetUserInfo } from '../../../shared/WidgetUserInfo';
import { Block } from './Component.style';
import type { ColumnsType } from 'antd/es/table';
import { PUBLIC_ROUTES, ROUTES } from '@constants';
import { filterKey } from '@contexts';
import { MPostDetail } from '@models/MPostDetail';
import { IconCheck, IconMark, IconTimer, Logo1 } from '@root/public/icons';
import { formatNumToUnit } from '@root/src/core/utils/HandleNumber';
import { colors } from '@styles/theme/colors';
import { Col, Divider, Row, Table, Typography } from 'antd';
import { useState } from 'react';
import {
  DefaultContentInWrapper,
  DefaultLinkText,
  DefaultRowTitle,
  DefaultWrapperWithBg,
} from '..';
import { DefaultContentInWrapperMajor } from './Component.style'
import { TagProperty, RowPrice, RowActions, RowPriceLeft, RowPriceRight } from './Component.style';
import dynamic from 'next/dynamic';

interface DataType {
  key: React.Key;
  title: any;
  name: string;
  type: string;
  floor: number;
}
interface DataType2{
  key: React.Key;
  size: string;
  pricerange: any;
  unit: any;
  floorplans: any;
}

const data: DataType[] = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    title: <IconCheck />,
    name: `Edward King ${i}`,
    type: "Property",
    floor: 123,
  });
}

const data1: DataType2[] = [];
for (let i = 0; i < 5; i++) {
  data1.push({
    key: i,
    size:"56.16m²",
    pricerange:"123",
    unit:"123",
    floorplans: 123,
  });
}

const DynamicNotifyOutdate = dynamic(
  () => import('../../../shared/WidgetUserInfo/NotifyOutdate').then(
    (mod: any) => mod.NotifyOutdate
  )
);

export const LayoutMajorTenants = (props: {
  t: any;
  hrefMain?: { name: string; href: string };
  post?: MPostDetail;
}) => {
  const { t: translate, post, hrefMain } = props;

  const [pathname, setPathname] = useState({
    1: ROUTES.MAIN_FLOOR.href,
    2: ROUTES.BROKERAGE_FLOOR_PAGE.href,
    default: ROUTES.MAIN_FLOOR.href
  }[post.agency])
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const arrHref = [
    hrefMain,
    { name: post.AreaProvinceName, href: pathname, query: { [filterKey.areaProvinceId.idQuery]: post.AreaProvinceId } },
    { name: post.AreaDistrictName, href: pathname, query: { [filterKey.areaProvinceId.idQuery]: post.AreaProvinceId, [filterKey.areaDistrictId.idQuery]: post.AreaDistrictId } },
    { name: post.AreaWardName, href: pathname, query: { [filterKey.areaProvinceId.idQuery]: post.AreaProvinceId, [filterKey.areaDistrictId.idQuery]: post.AreaDistrictId, [filterKey.areaWardId.idQuery]: post.AreaWardId } },
  ];

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <DefaultWrapperWithBg>
        <DefaultContentInWrapperMajor grid={true}>
          <div>
            <RowPrice>
              <RowPriceLeft className="container-fluid">
                <label style={{ fontFamily: "Inter",fontSize:28, fontWeight:"700", marginBottom:20 }}>Major Tenants</label>

                <Table dataSource={data}>
                  <Table.Column
                    title="Logo"
                    dataIndex="logo"
                    key="logo"
                    render={status => (
                      <span style={{ width: 80 }}>
                        <Logo1 />
                        <label style={{ marginLeft: 5, fontFamily: "Inter", fontSize: 16, fontWeight: "700" }}>Ten-X</label>
                      </span>
                    )}
                  />
                  <Table.Column
                    title="Tên"
                    dataIndex="name"
                    key="name"
                    render={status => (
                      <label style={{ fontFamily: "Inter", fontSize: 16, fontWeight: "700" }}>Tên công ty có thể rất dài tới khúc này</label>
                    )}
                  />
                  <Table.Column
                    title="Lĩnh Vực"
                    dataIndex="type"
                    key="type"
                    render={status => (
                      <label style={{ fontFamily: "Inter", fontSize: 16, fontWeight: "700" }}>Property</label>
                    )}
                  />
                  <Table.Column
                    title="Floor"
                    dataIndex="floor"
                    key="floor"
                    render={status => (
                      <label style={{ fontFamily: "Inter", fontSize: 16, fontWeight: "700" }}>123</label>
                    )}
                  />
                </Table>

              </RowPriceLeft>

            </RowPrice>
            <RowPrice style={{marginTop:30}}>
              <RowPriceLeft className="container-fluid">
                <label style={{ fontFamily: "Inter",fontSize:28, fontWeight:"700", marginBottom:20 }}>Price</label>

                <Table dataSource={data1}>
                  <Table.Column
                    title="Type"
                    dataIndex="type"
                    key="type"
                    render={status => (
                      <label style={{ marginLeft: 5, fontFamily: "Inter", fontSize: 16, fontWeight: "700" }}>Studio</label>
                    )}
                  />
                  <Table.Column
                    title="Size"
                    dataIndex="size"
                    key="size"
                    render={status => (
                      <label style={{ fontFamily: "Inter", fontSize: 16, fontWeight: "700" }}>237.27m²</label>
                    )}
                  />
                  <Table.Column
                    title="PriceRange"
                    dataIndex="pricerange"
                    key="pricerange"
                    render={status => (
                      <label style={{ fontFamily: "Inter", fontSize: 16, fontWeight: "700" }}>$343,824 - $616,902</label>
                    )}
                  />
                  <Table.Column
                    title="No.of Units"
                    dataIndex="unit"
                    key="unit"
                    render={status => (
                      <label style={{ fontFamily: "Inter", fontSize: 16, fontWeight: "700" }}>32</label>
                    )}
                  />
                  <Table.Column
                    title="Floorplans"
                    dataIndex="floorplans"
                    key="floorplans"
                    render={status => (
                      <label style={{ fontFamily: "Inter", fontSize: 16, fontWeight: "700" }}></label>
                    )}
                  />
                </Table>

              </RowPriceLeft>

            </RowPrice>
          </div>
          <div>
            <RowActions>
            </RowActions>
            <WidgetUserInfo t={translate} post={props.post} />
            <DynamicNotifyOutdate/>
          </div>
        </DefaultContentInWrapperMajor>
      </DefaultWrapperWithBg>
    </>
  );
};
