import { BoxAction, BoxContainer, BoxInput } from './AreaStyled';
import { Button, Divider, InputNumber, Select, Slider } from 'antd';
import React, { useState } from 'react';
import Transfer, { TransferDirection } from 'antd/lib/transfer';

const mockData: any = Array.from({ length: 10 }).map((_, i) => ({
  key: i.toString(),
  title: `content${i + 1}`,
  description: `description of content${i + 1}`,
}));

const initialTargetKeys = mockData.filter(item => Number(item.key) > 10).map(item => item.key);

const Area = () => {
  const [valueInput, setValueInput] = useState<any>(0);
  const [valueAfter, setValueValueAfter] = useState<any>(0);
  const onChange = (value: any) => {
    setValueInput(value[0]);
    setValueValueAfter(value[1]);
  };

  const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const onChangeScroll = (nextTargetKeys: string[], direction: TransferDirection, moveKeys: string[]) => {
    // console.log('targetKeys:', nextTargetKeys);
    // console.log('direction:', direction);
    // console.log('moveKeys:', moveKeys);
    setTargetKeys(nextTargetKeys);
  };

  const onSelectChange = (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => {
    // console.log('sourceSelectedKeys:', sourceSelectedKeys);
    // console.log('targetSelectedKeys:', targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const onScroll = (direction: TransferDirection, e: React.SyntheticEvent<HTMLUListElement>) => {
    // console.log('direction:', direction);
    // console.log('target:', e.target);
  };

  return (
    <BoxContainer>
      <BoxInput>
        <InputNumber min={0}  value={valueInput} />
        <InputNumber  max={500} value={valueAfter} />
      </BoxInput>
      <Slider range step={10} onChange={onChange} min={0} max={500} />
      <Transfer
      dataSource={mockData}
      titles={['Source', 'Target']}
      targetKeys={targetKeys}
      selectedKeys={selectedKeys}
      onChange={onChangeScroll}
      onSelectChange={onSelectChange}
      onScroll={onScroll}
      render={item => item.title}
    />
    <Divider/>
    <BoxAction>
      <Button style={{background:"#fff"}} type="text">Đặt lại</Button>
     <Button>Áp dụng</Button>
      </BoxAction>
    </BoxContainer>
  );
};

export default Area;
