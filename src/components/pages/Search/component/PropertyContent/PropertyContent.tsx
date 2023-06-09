import {
  BoxCheckBox,
  BoxContainer,
  BoxTypography,
} from './PropertyContentStyled';
import { ButtonApply, ButtonClear } from '../../Search.style';
import { Checkbox, Col, Row, Typography } from 'antd';
import {
  Convention,
  CoworkingSpace,
  Enterprise,
  PrivateOffice,
  SharedOffice,
  VirtualOfflice,
} from '@root/public/icons';

import React from 'react';

const PropertyContent = () => {
  return (
    <BoxContainer>
      <BoxTypography>Property types</BoxTypography>
      <BoxCheckBox>
        <div style={{ paddingRight: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <PrivateOffice />
            <text
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
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
      </BoxCheckBox>
      <BoxCheckBox
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: 24,
          marginLeft: 0,
        }}
      >
        <div style={{ paddingRight: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CoworkingSpace />
            <text
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
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
      </BoxCheckBox>
      <BoxCheckBox
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: 24,
          marginLeft: 0,
        }}
      >
        <div style={{ paddingRight: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <SharedOffice />
            <text
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
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
      </BoxCheckBox>
      <BoxCheckBox
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: 24,
          marginLeft: 0,
        }}
      >
        <div style={{ paddingRight: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Enterprise />
            <text
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
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
      </BoxCheckBox>
      <BoxCheckBox
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: 24,
          marginLeft: 0,
        }}
      >
        <div style={{ paddingRight: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <VirtualOfflice />
            <text
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
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
      </BoxCheckBox>
      <BoxCheckBox
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: 24,
          marginLeft: 0,
        }}
      >
        <div style={{ paddingRight: 30 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Convention />
            <text
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
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
      </BoxCheckBox>
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
    </BoxContainer>
  );
};

export default PropertyContent;
