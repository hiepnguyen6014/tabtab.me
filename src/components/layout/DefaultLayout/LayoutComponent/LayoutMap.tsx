
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
  installment: string;
  milestone: any;
  payment: any;
}

const data: DataType[] = [];
for (let i = 0; i < 3; i++) {
  data.push({
    key: i,
    installment: `Edward King ${i}`,
    milestone: "Property",
    payment: 123,
  });
}

export const LayoutMap = (props: {
  t: any;
  hrefMain?: { name: string; href: string };
  post?: MPostDetail;
}) => {
  const { t: translate, post, hrefMain } = props;

  return (
    <>
      <DefaultWrapperWithBg style={{marginBottom:70, marginTop:50}}>
        <DefaultContentInWrapperMajor>
          <RowPrice>
            <RowPriceLeft className="container-fluid">
                <label style={{ fontFamily: "Inter",fontSize:28, fontWeight:"700", marginBottom:20 }}>Map</label>
              <Row style={{marginBottom:5}}>
                <Col>
                  <label style={{ padding: 5, paddingLeft: 10,paddingRight:10, borderRadius:8 }}>
                    Shopping
                  </label>
                </Col>
                <Col>
                  <label style={{ padding: 5, paddingLeft: 10,paddingRight:10, backgroundColor:'#F9C41F', borderRadius:8}}>
                    Food
                  </label>
                </Col>
                <Col>
                  <label style={{ padding: 5, paddingLeft: 10,paddingRight:10, borderRadius:8 }}>
                    Restaurent
                  </label>
                </Col>
                <Col>
                  <label style={{ padding: 5, paddingLeft: 10,paddingRight:10, borderRadius:8 }}>
                    Schools
                  </label>
                </Col>
                <Col>
                  <label style={{ padding: 5, paddingLeft: 10,paddingRight:10, borderRadius:8 }}>
                    Shopping
                  </label>
                </Col>
                <Col>
                  <label style={{ padding: 5, paddingLeft: 10,paddingRight:10, borderRadius:8 }}>
                    Shopping
                  </label>
                </Col>
              </Row>
              <img src={SRC_IMAGE.MAP} height='100%' width="100%" />
            </RowPriceLeft>

          </RowPrice>

        </DefaultContentInWrapperMajor>
      </DefaultWrapperWithBg>
    </>
  );
};
