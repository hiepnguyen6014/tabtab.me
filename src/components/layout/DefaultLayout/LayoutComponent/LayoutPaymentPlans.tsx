
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

export const LayoutPaymentPlans = (props: {
  t: any;
  hrefMain?: { name: string; href: string };
  post?: MPostDetail;
}) => {
  const { t: translate, post, hrefMain } = props;

  return (
    <>
      <DefaultWrapperWithBg>
        <DefaultContentInWrapperMajor grid={true}>
          <div>
            <RowPrice>
              <RowPriceLeft className="container-fluid">
                <label style={{ fontFamily: "Inter",fontSize:28, fontWeight:"700", marginBottom:20 }}>Payment Plans</label>
                <div style={{ display: 'flex' }}>
                  <div style={{marginRight:24}}>
                    <div style={{ backgroundColor: '#F9C41F', padding: 15 }}>
                      <label style={{ fontFamily: "Inter", fontSize: 16, fontWeight: "700" }}>
                        First Option
                      </label>
                    </div>
                    <div style={{ padding: 15 }}>
                      <label style={{ fontFamily: "Inter", fontSize: 16, fontWeight: "700" }}>
                        Second Option
                      </label>
                    </div>
                  </div>
                  <Table dataSource={data}>
                    <Table.Column
                      title="Installment"
                      dataIndex="install"
                      key="install"
                      render={status => (
                        <span >
                          <label style={{ marginLeft: 5, fontFamily: "Inter", fontSize: 16, fontWeight: "700" }}>Pay installment over 8 months</label>
                        </span>
                      )}
                    />
                    <Table.Column
                      title="Milestone"
                      dataIndex="milestone"
                      key="milestone"
                      render={status => (
                        <label style={{ fontFamily: "Inter", fontSize: 16, fontWeight: "700" }}>30%</label>
                      )}
                    />
                    <Table.Column
                      title="Payment"
                      dataIndex="payment"
                      key="payment"
                      render={status => (
                        <label style={{ fontFamily: "Inter", fontSize: 16, fontWeight: "700" }}>Depends on the actual unit price</label>
                      )}
                    />
                  </Table>
                </div>
              </RowPriceLeft>
            </RowPrice>
          </div>
          <div>

          </div>
        </DefaultContentInWrapperMajor>
      </DefaultWrapperWithBg>
    </>
  );
};
