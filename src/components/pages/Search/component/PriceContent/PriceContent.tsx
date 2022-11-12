import { IconArrowDown } from '@root/public/icons';
import { Col, Divider, Dropdown, Menu, Row, Typography } from 'antd';
import React from 'react';

import {
  ButtonApply,
  ButtonClasses,
  ButtonClear,
  DivPrice,
} from '../../Search.style';

const PriceContent = () => {
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
  return (
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
};

export default PriceContent;
