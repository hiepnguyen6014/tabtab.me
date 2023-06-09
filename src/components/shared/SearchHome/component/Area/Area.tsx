import { BoxAction, BoxContainer, BoxInput } from './AreaStyled';
import { Button, Divider, InputNumber, Select, Slider } from 'antd';
import React, { useState } from 'react';

import { AREA_DATA_SELECT } from '../FilterData/FilterData';
import { RightOutlined } from '@ant-design/icons';

const Area = () => {
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
  }

  return (
    <BoxContainer>
      <div>
      <BoxInput>
        <InputNumber min={0}  value={valueInput} />
        <RightOutlined/>
        <InputNumber  max={500} value={valueAfter}/>
      </BoxInput>
      <Slider range step={10} onChange={onChange} min={0} max={500} />
      <Select placeholder="Diện tích" style={{ width: '100%' }}  onChange={handleChange} defaultOpen>
        <Option>Tất cả diện tích</Option>
        {AREA_DATA_SELECT.map((select) =>(
          <Option key={select.value}>{select.value}</Option>
        ))}
  </Select>
      </div>
   <div>
   <Divider style={{margin:"12px 0"}}/>
    <BoxAction>
      <Button style={{background:"#fff"}} type="text" onClick={handleValue}>Đặt lại</Button>
     <Button>Áp dụng</Button>
      </BoxAction>
   </div>
    </BoxContainer>
  );
};

export default Area;
