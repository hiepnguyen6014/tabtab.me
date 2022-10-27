import { BoxAction, BoxContainer, BoxMargin } from './ResidentialStyled';
import { Button, Divider, InputNumber, Select, Slider, Typography } from 'antd';
import React, { useState } from 'react';

import { AREA_DATA_SELECT } from '../FilterData/FilterData';

const Residential = () => {
  const { Option } = Select;
  const [valueInput, setValueInput] = useState<any>(0);
  const [valueAfter, setValueValueAfter] = useState<any>(0);
  const onChange = (value: any) => {
    setValueInput(value[0]);
    setValueValueAfter(value[1]);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const handleValue = () => {
    setValueInput(0);
    setValueValueAfter(0);
  };
  return (
    <BoxContainer>
      <Typography>Khu vực & dự án</Typography>
      <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
        <BoxMargin>
          <Select
            placeholder="Tỉnh/Thành"
            style={{ width: '100%' }}
            onChange={handleChange}
            defaultOpen
          >
            {AREA_DATA_SELECT.map((select) => (
              <Option key={select.value}>{select.value}</Option>
            ))}
          </Select>
        </BoxMargin>
        <BoxMargin style={{marginTop:"20px"}}>
          <Select
            placeholder="Quận/Huyện"
            style={{ width: '100%' }}
            onChange={handleChange}
            defaultOpen
          >
            {AREA_DATA_SELECT.map((select) => (
              <Option key={select.value}>{select.value}</Option>
            ))}
          </Select>
        </BoxMargin>
        <BoxMargin>
          <Select
            placeholder="Phường/Xã"
            style={{ width: '100%' }}
            onChange={handleChange}
            defaultOpen
          >
            {AREA_DATA_SELECT.map((select) => (
              <Option key={select.value}>{select.value}</Option>
            ))}
          </Select>
        </BoxMargin>
        <BoxMargin>
          <Select
            placeholder="Đường/Phố"
            style={{ width: '100%' }}
            onChange={handleChange}
            defaultOpen
          >
            {AREA_DATA_SELECT.map((select) => (
              <Option key={select.value}>{select.value}</Option>
            ))}
          </Select>
        </BoxMargin>
        <BoxMargin>
          <Select
            placeholder="Dự án"
            style={{ width: '100%' }}
            onChange={handleChange}
            defaultOpen
          >
            {AREA_DATA_SELECT.map((select) => (
              <Option key={select.value}>{select.value}</Option>
            ))}
          </Select>
        </BoxMargin>
      </div>
      <div>
        <Divider style={{ margin: '12px 0' }} />
        <BoxAction>
          <Button
            style={{ background: '#fff' }}
            type="text"
            onClick={handleValue}
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
