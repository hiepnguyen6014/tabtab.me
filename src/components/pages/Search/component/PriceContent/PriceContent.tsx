import {
  BoxContainer,
  BoxDayWeek,
  BoxDivider,
  BoxDividerOne,
  BoxTypographyPrice,
  BoxTypographySelectType,
  BoxWrapper,
  BoxWrapperTwo,
  BoxWrrapperRadius,
  Container,
  LabalOne,
  Label,
  Text,
  TextOne,
} from './PriceContentStyled';
import {
  ButtonApply,
  ButtonClasses,
  ButtonClear,
  DivPrice,
} from '../../Search.style';
import { Col, Divider, Dropdown, Menu, Row, Typography } from 'antd';

import { IconArrowDown } from '@root/public/icons';
import React from 'react';

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
    <Container>
      <BoxTypographyPrice>Price</BoxTypographyPrice>
      <BoxTypographySelectType>Select Type</BoxTypographySelectType>
      <BoxContainer>
        <BoxWrapper>
          <ButtonClasses>
            <Label>Hour</Label>
          </ButtonClasses>
        </BoxWrapper>
        <BoxDivider type="vertical" />
        <BoxDayWeek>
          <ButtonClasses>
            <Label>Day</Label>
          </ButtonClasses>
        </BoxDayWeek>
        <BoxDivider type="vertical" />
        <BoxDayWeek>
          <ButtonClasses>
            <Label>Week</Label>
          </ButtonClasses>
        </BoxDayWeek>
        <BoxDivider type="vertical" />
        <BoxWrrapperRadius>
          <ButtonClasses>
            <Label>Month</Label>
          </ButtonClasses>
        </BoxWrrapperRadius>
      </BoxContainer>

      <BoxTypographySelectType>Select Type</BoxTypographySelectType>
      <BoxWrapperTwo>
        <Dropdown overlay={menu} placement="bottomLeft" trigger={['click']}>
          <DivPrice>
            <LabalOne>$ Any</LabalOne>
            <IconArrowDown />
          </DivPrice>
        </Dropdown>
        <Text>to</Text>
        <Dropdown overlay={menu} placement="bottomLeft" trigger={['click']}>
          <DivPrice>
            <LabalOne>$ Any</LabalOne>
            <IconArrowDown />
          </DivPrice>
        </Dropdown>
      </BoxWrapperTwo>
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
            <Text>Clear</Text>
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
            <TextOne>Apply</TextOne>
          </ButtonApply>
        </Col>
      </Row>
    </Container>
  );
};

export default PriceContent;
