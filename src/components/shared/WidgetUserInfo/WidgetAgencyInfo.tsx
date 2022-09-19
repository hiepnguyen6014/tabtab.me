import { Avatar, CardHeader } from '@mui/material';
import { IconAgency, IconLocked } from 'public/icons';
import { TicketAgency, WidgetAction, WidgetFooter, WidgetLocked } from './Widget.style';
export const WidgetAgencyInfo = () => {
  return (
    <div>
      <div>
        <span role="left">
          <CardHeader
            avatar={
              <Avatar>A </Avatar>
            }
            style={{ textAlign: 'left' }}
            title="Nguyen Van A"
          ></CardHeader>
          {/* <div>
            <TicketAgency><IconAgency />Môi giới</TicketAgency>
          </div> */}
        </span>
        {/* <span>
          <a href="">Xem trang</a>
        </span> */}
      </div>
      <WidgetAction>
        <WidgetLocked startIcon={<IconLocked />}>
          Đổi điểm để mở khoá Thông tin liên  hệ
        </WidgetLocked>
      </WidgetAction>
      <WidgetFooter>Xem thêm 15 BĐS cùng người đăng</WidgetFooter>
    </div>
  );
};
