import { SRC_IMAGE } from '@core';
import { IconArrowDown, Plus, SearchYellow } from '@root/public/icons';
import PaginationWrapCustom from '@root/src/components/shared/PaginationCustom/PaginationCustom';
import {
  Col,
  Divider,
  Dropdown,
  Input,
  Menu,
  Pagination,
  Radio,
  Row,
  Typography,
} from 'antd';
import type { MenuProps } from 'antd';
import React, { useState } from 'react';

import { ColWrap } from '../../Home/Home.style';
import {
  ButtonCustom,
  DropdownFilter,
  FDesktop,
  HideMenu,
  MenuCustom,
  RadioSearch,
  RadoCustom,
  RowFilter,
  ShowMenu,
} from '../Academy.style';
import ProductClasses from '../UpcommingClass/ProductClasses';

type MenuItem = Required<MenuProps>['items'][number];
export default function ELearning({ data, translate }) {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  const items: MenuItem[] = [
    getItem('Tên menu 1', '1'),
    getItem('Tên menu 2', '2'),
    getItem('Tên menu 3', '3'),
    getItem('Tên menu 4', '4'),
    getItem('Tên menu 5', '5'),
    getItem('Tên menu 6', '6'),
    getItem('Tên menu 7', '7'),
    getItem('Tên menu 8', '8'),
    getItem('Tên menu 9', '9'),
    getItem('Tên menu 10', '10'),
  ];
  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.antgroup.com"
            >
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.aliyun.com"
            >
              2nd menu item
            </a>
          ),
        },
        {
          key: '3',
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.luohanacademy.com"
            >
              3rd menu item
            </a>
          ),
        },
      ]}
    />
  );
  return (
    <div>
      <FDesktop grid={true} style={{ marginTop: 120 }}>
        <div>
          <Typography.Title level={2}>E- Learning</Typography.Title>
          <HideMenu>
            <MenuCustom
              mode="inline"
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              style={{
                width: 256,
                borderRadius: 12,
                paddingTop: 45,
                paddingBottom: 20,
              }}
              items={items}
            />
          </HideMenu>
          <ShowMenu>
            <Radio.Group defaultValue="1">
              <Radio.Button
                className="radio-active"
                value="1"
                style={{
                  padding: '9px 19px 9px 19px',
                  height: 'auto',
                  borderRadius: 8,
                  marginRight: 10,
                  marginBottom: 10,
                }}
              >
                <Typography
                  style={{ fontSize: 13, fontWeight: 700, fontFamily: 'Inter' }}
                >
                  Tên menu 1
                </Typography>
              </Radio.Button>
              <Divider
                type="vertical"
                style={{ marginLeft: 0, marginRight: 0, height: 40 }}
              />
              <Radio.Button
                className="radio-active"
                value="2"
                style={{
                  padding: '9px 19px 9px 19px',
                  height: 'auto',
                  borderRadius: 8,
                  marginRight: 10,
                  marginBottom: 10,
                }}
              >
                <Typography
                  style={{ fontSize: 13, fontWeight: 700, fontFamily: 'Inter' }}
                >
                  Tên menu 2
                </Typography>
              </Radio.Button>
              <Divider
                type="vertical"
                style={{ marginLeft: 0, marginRight: 0, height: 40 }}
              />
              <Radio.Button
                className="radio-active"
                value="3"
                style={{
                  padding: '9px 19px 9px 19px',
                  height: 'auto',
                  borderRadius: 8,
                  marginRight: 10,
                  marginBottom: 10,
                }}
              >
                <Typography
                  style={{ fontSize: 13, fontWeight: 700, fontFamily: 'Inter' }}
                >
                  Tên menu 3
                </Typography>
              </Radio.Button>
              <Radio.Button
                className="radio-active"
                value="3"
                style={{
                  padding: '9px 19px 9px 19px',
                  height: 'auto',
                  borderRadius: 8,
                  marginRight: 10,
                  marginBottom: 10,
                }}
              >
                <Typography
                  style={{ fontSize: 13, fontWeight: 700, fontFamily: 'Inter' }}
                >
                  Tên menu 4
                </Typography>
              </Radio.Button>
              <Radio.Button
                className="radio-active"
                value="3"
                style={{
                  padding: '9px 19px 9px 19px',
                  height: 'auto',
                  borderRadius: 8,
                  marginRight: 10,
                  marginBottom: 10,
                }}
              >
                <Typography
                  style={{ fontSize: 13, fontWeight: 700, fontFamily: 'Inter' }}
                >
                  Tên menu 5
                </Typography>
              </Radio.Button>
              <Radio.Button
                className="radio-active"
                value="3"
                style={{
                  padding: '9px 19px 9px 19px',
                  height: 'auto',
                  borderRadius: 8,
                  marginRight: 10,
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      fontFamily: 'Inter',
                      marginRight: 20,
                    }}
                  >
                    Tên menu 6
                  </Typography>
                  <IconArrowDown />
                </div>
              </Radio.Button>
            </Radio.Group>
          </ShowMenu>
        </div>
        <div>
          <RowFilter style={{ display: 'flex', alignItems: 'center' }}>
            <Col lg={4} md={4} xs={24} style={{ marginBottom: 20 }}>
              <label
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  fontFamily: 'Inter',
                  color: '#4E4E4',
                }}
              >
                SORT BY
              </label>
            </Col>
            <Col lg={6} md={6} xs={12} style={{ marginBottom: 20 }}>
              <Dropdown overlay={menu} placement="bottomLeft">
                <DropdownFilter
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '500',
                    }}
                  >
                    Popular
                  </label>
                  <IconArrowDown />
                </DropdownFilter>
              </Dropdown>
            </Col>
            <Col lg={6} md={6} xs={12} style={{ marginBottom: 20 }}>
              <Dropdown overlay={menu} placement="bottomLeft">
                <DropdownFilter
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '500',
                    }}
                  >
                    Last 6 days
                  </label>
                  <IconArrowDown />
                </DropdownFilter>
              </Dropdown>
            </Col>
            <Col lg={5} md={4} xs={10} style={{ marginBottom: 20 }}>
              <Dropdown overlay={menu} placement="bottomLeft">
                <DropdownFilter
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '500',
                    }}
                  >
                    Filters
                  </label>
                  <IconArrowDown />
                </DropdownFilter>
              </Dropdown>
            </Col>
          </RowFilter>
          <Row gutter={24} style={{ marginTop: 24 }}>
            {data.map((item, key) => (
              <ColWrap
                key={key}
                className="gutter-row"
                sm={24}
                lg={12}
                xl={12}
                md={12}
                xs={24}
              >
                <ProductClasses post={item} t={translate} />
              </ColWrap>
            ))}
          </Row>
          <PaginationWrapCustom total={10} pageSize={1} />
          <div style={{ height: 50 }} />
        </div>
      </FDesktop>
    </div>
  );
}
