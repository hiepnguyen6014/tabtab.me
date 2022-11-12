import { IconArrowDown } from '@root/public/icons';
import { Col, Dropdown, Menu, Row, Space, Typography } from 'antd';
import { useState } from 'react';
import { MenuBox, TextWrap } from './DropdownSearchBar.style';

export const DropdownSearchBar = (props: { t: any }) => {
  const [filter, setFilter] = useState('Sell');

  const listRealEstate = [
    { label: 'Sell', query: 'sell' },
    { label: 'Rent', query: 'lease' },
  ];

  const handleSelect = (item) => {
    setFilter(item.label);
  };

  const overlayMenu = () => {
    return (
      <MenuBox>
        <Menu defaultSelectedKeys={['desc']}>
          {listRealEstate.map((item, key) => (
            <Menu.Item key={key}>
              <a onClick={() => handleSelect(item)}>{item.label}</a>
            </Menu.Item>
          ))}
        </Menu>
      </MenuBox>
    );
  };

  return (
    <Row className="d-flex justify-content-center align-items-center">
      <Col>
        <Typography.Title level={5}></Typography.Title>
      </Col>
      <Col>
        <Dropdown trigger={['click']} overlay={overlayMenu}>
          <Space align="center" style={{ padding: '6px' }}>
            <IconArrowDown />
            <TextWrap>
              <Typography className="text-select">{filter}</Typography>
            </TextWrap>
          </Space>
        </Dropdown>
      </Col>
    </Row>
  );
};
