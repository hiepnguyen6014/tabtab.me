import {
  BoxCheckBox,
  BoxContainer,
  BoxTypography,
  Text,
} from './MofilterStyled';
import { ButtonApply, ButtonClear } from '../../Search.style';
import { Checkbox, Col, Row, Typography } from 'antd';

import { MORE_FILER_DATA } from '../SearchData';
import React from 'react';

const MoreFiler = () => {
  return (
    <BoxContainer>
      <BoxTypography>Property types</BoxTypography>
      <Row gutter={24}>
        {MORE_FILER_DATA.map((item, key) => (
          <Col span={12} key={key}>
            <BoxCheckBox style={{ marginBottom: 24 }}>
              <text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  fontFamily: 'Inter',
                  marginLeft: 8,
                }}
              >
                {item.icon}
                <text style={{ marginLeft: 8 }}>{item.title}</text>
              </text>
            </BoxCheckBox>
          </Col>
        ))}
      </Row>
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
            <Text>Apply</Text>
          </ButtonApply>
        </Col>
      </Row>
    </BoxContainer>
  );
};

export default MoreFiler;
