import { MPostDetail } from '@models/MPostDetail';
import { Avatar, Button, Divider, Image, Input, Typography } from 'antd';
import {
  IconPhoneSmall,
  IconPhoneTabTab,
  IconUser,
  IconWarning,
  VectorUser,
} from 'public/icons';
import { useState } from 'react';

import { TextEmail } from '../TextMail';
import { TextPhoneNumber } from '../TextPhoneNumber/index';
import { LockContact } from './LockContact';
import {
  ButtonCall,
  ButtonMess,
  TicketProject,
  WidgetAction,
  WidgetHeader,
  WidgetWrap,
} from './Widget.style';

export const NotifyOutdate = (props: { post: MPostDetail; t: any }) => {
  const backgroundColorTicket = ['#FA7E55', '#3FAEFF'];
  return (
    <>
      <WidgetWrap style={{ backgroundColor: '#F9C41F', marginTop: 50 }}>
        <div style={{ padding: 24 }}>
          <IconWarning style={{ marginBottom: 24 }} />
          <Typography.Title style={{ fontFamily: 'Inter' }} level={3}>
            Thông tin đã hết hạn
          </Typography.Title>
          <Typography.Text
            style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: '500' }}
          >
            Dừng lo, hãy để Tabtab hỗ trợ bạn
          </Typography.Text>
          <div style={{ display: 'flex', marginTop: 24 }}>
            <Input
              style={{
                borderRadius: 8,
                fontFamily: 'Inter',
                paddingLeft: 14,
                fontSize: 16,
                fontWeight: '700',
                backgroundColor: 'white',
                marginRight: 24,
              }}
              placeholder="Name"
              bordered={false}
              prefix={<IconUser />}
            />
            <Input
              style={{
                borderRadius: 8,
                fontFamily: 'Inter',
                paddingLeft: 14,
                fontSize: 16,
                fontWeight: '700',
                backgroundColor: 'white',
              }}
              placeholder="Name"
              bordered={false}
              prefix={<IconPhoneSmall />}
            />
          </div>
          <Button
            type="primary"
            style={{
              backgroundColor: '#222222',
              borderRadius: 8,
              height: 'auto',
              padding: 13,
              marginTop: 24,
              width: '100%',
              whiteSpace: 'break-spaces',
            }}
          >
            <label
              style={{ fontSize: 16, fontWeight: '700', fontFamily: 'Inter' }}
            >
              TÔI MUỐN LIÊN HỆ NGAY
            </label>
          </Button>
        </div>
      </WidgetWrap>
    </>
  );
};
