import {
  AREA_DATA_SELECT,
  DISTRICT_DATA,
  PROJECT_DATA,
  PROVINCE_DATA,
  STREET_DATA,
  WARDS_DATA,
} from '../FilterData/FilterData';
import { BoxAction, BoxContainer, BoxMargin } from './ResidentialStyled';
import { Button, Divider, InputNumber, Select, Slider, Typography } from 'antd';
import React, { useState } from 'react';

const Residential = () => {
  const { Title } = Typography;
  const { Option } = Select;
  

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  
  return (
    <BoxContainer>
      <Title level={4} style={{color:"#7A7A7A"}}>Khu vực & dự án</Title>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <BoxMargin>
          <Select
            placeholder="Tỉnh/Thành"
            style={{ width: '100%' }}
            onChange={handleChange}
          >
            {PROVINCE_DATA.map((select) => (
              <Option key={select.value}>{select.value}</Option>
            ))}
          </Select>
        </BoxMargin>
        <BoxMargin style={{ marginTop: '20px' }}>
          <Select
            placeholder="Quận/Huyện"
            style={{ width: '100%' }}
            onChange={handleChange}
          >
            {DISTRICT_DATA.map((select) => (
              <Option key={select.value}>{select.value}</Option>
            ))}
          </Select>
        </BoxMargin>
        <BoxMargin>
          <Select
            placeholder="Phường/Xã"
            style={{ width: '100%' }}
            onChange={handleChange}
          >
            {WARDS_DATA.map((select) => (
              <Option key={select.value}>{select.value}</Option>
            ))}
          </Select>
        </BoxMargin>
        <BoxMargin>
          <Select
            placeholder="Đường/Phố"
            style={{ width: '100%' }}
            onChange={handleChange}
          >
            {STREET_DATA.map((select) => (
              <Option key={select.value}>{select.value}</Option>
            ))}
          </Select>
        </BoxMargin>
        <BoxMargin>
          <Select
            placeholder="Dự án"
            style={{ width: '100%' }}
            onChange={handleChange}
          >
            {PROJECT_DATA.map((select) => (
              <Option key={select.value}>{select.value}</Option>
            ))}
          </Select>
        </BoxMargin>
      </div>
      <div>
        <Divider style={{ marginTop:"30px" }} />
        <BoxAction>
          <Button
            style={{ background: '#fff' }}
            type="text"
          >
            Đặt lại
          </Button>
          <Button>Áp dụng</Button>
        </BoxAction>
      </div>
    </BoxContainer>
  );
};

export default Residential;
