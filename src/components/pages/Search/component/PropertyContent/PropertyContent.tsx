import { ButtonApply, ButtonClear } from '../../Search.style'
import { Checkbox, Col, Row, Typography } from 'antd'
import { Convention, CoworkingSpace, Enterprise, PrivateOffice, SharedOffice, VirtualOfflice } from '@root/public/icons'

import React from 'react'

const PropertyContent = () => {
  return (
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
  )
}

export default PropertyContent