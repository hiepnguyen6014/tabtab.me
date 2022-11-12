import { CalendarSun, VectorCalendar } from '@root/public/icons';
import { Image, Typography } from 'antd';

import { ButtonAddCalendar } from './ItemPostInfo.style';

const ButtonAdd = () => {
  return (
    <div className="item__margin--10">
      <ButtonAddCalendar>
        <VectorCalendar />

        <Typography className="btn__text--add">Add to Calendar</Typography>
      </ButtonAddCalendar>
    </div>
  );
};

export default ButtonAdd;
