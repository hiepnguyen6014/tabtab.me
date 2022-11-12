import { Avatar, Button, Typography } from 'antd';
import { IconAgency, IconLocked, IconPhone } from 'public/icons';

import {
  TicketAgency,
  WidgetAction,
  WidgetFooter,
  WidgetHeader,
  WidgetLocked,
  WidgetWrap,
} from './Widget.style';

export const WidgetAgencyInfo = () => {
  return (
    <>
      <WidgetWrap style={{ height: '260px' }}>
        <WidgetHeader>
          <span role="left">
            <Avatar size={60}>A</Avatar>
            <span>
              <Typography.Title level={5} ellipsis={{ rows: 1 }}>
                Môi giới #1
              </Typography.Title>
              <TicketAgency>
                <IconAgency />
                Môi giới
              </TicketAgency>
            </span>
          </span>
          <span>
            <a href="">Xem trang</a>
          </span>
        </WidgetHeader>
        <WidgetAction>
          <WidgetLocked ghost icon={<IconLocked />}>
            Đổi điểm để mở khoá Thông tin liên hệ
          </WidgetLocked>
        </WidgetAction>
        <WidgetFooter>Xem thêm 15 BĐS cùng người đăng</WidgetFooter>
      </WidgetWrap>
    </>
  );
};
