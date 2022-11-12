import { Divider } from 'antd';
import React from 'react';

import { Button } from '../../../Button';
import {
  FILTER_DIRECTION,
  FILTER_DIRECTION_HORIZONTAL,
  FILTER_NUMBER_ROOM,
} from '../FilterData/FilterData';
import {
  BoxAction,
  BoxContainer,
  BoxDirection,
  BoxDirectionHorizontal,
  BoxNumberRoom,
  BoxRoom,
  BoxTitle,
  BoxTitleDirection,
} from './FilterAddStyled';

const FilterAdd = () => {
  return (
    <BoxContainer>
      <BoxTitle>Số phòng ngủ</BoxTitle>
      <BoxRoom>
        {FILTER_NUMBER_ROOM.map(number => (
          <BoxNumberRoom key={number.id}>{number.value}</BoxNumberRoom>
        ))}
      </BoxRoom>
      <BoxTitleDirection>Hướng nhà</BoxTitleDirection>
      <BoxDirection>
        {FILTER_DIRECTION.map(direction => (
          <BoxNumberRoom key={direction.id}>{direction.value}</BoxNumberRoom>
        ))}
      </BoxDirection>
      <BoxDirectionHorizontal>
        {FILTER_DIRECTION_HORIZONTAL.map(direction => (
          <BoxNumberRoom key={direction.id}>{direction.value}</BoxNumberRoom>
        ))}
      </BoxDirectionHorizontal>
      <BoxTitleDirection>Nội dung hiện có</BoxTitleDirection>
      <BoxDirection>
        <BoxNumberRoom>Hình ảnh</BoxNumberRoom>
        <BoxNumberRoom>Video</BoxNumberRoom>
        <BoxNumberRoom>3D & 360</BoxNumberRoom>
      </BoxDirection>
      <Divider />
      <BoxAction>
        <Button style={{ background: '#fff' }} type="text">
          Đặt lại
        </Button>
        <Button>Áp dụng</Button>
      </BoxAction>
    </BoxContainer>
  );
};

export default FilterAdd;
