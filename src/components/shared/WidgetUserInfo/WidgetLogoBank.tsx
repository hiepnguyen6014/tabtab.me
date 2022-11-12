import { MPostDetail } from '@models/MPostDetail';
import { Avatar, Button, Divider, Image, Typography } from 'antd';
import {
  IconChartTabTab,
  IconCoinTabTab,
  IconEmailTabTab,
  IconFBTabTab,
  IconIN,
  IconInstagramTabTab,
  IconKey,
  IconMessTabTab,
  IconMessage,
  IconMortage,
  IconPhoneCall,
  IconPhoneTabTab,
  IconReview,
  IconSocial,
  IconStartRating,
  IconTiktok,
} from 'public/icons';
import { useState } from 'react';

import { RowPriceLeft } from '../../layout/DefaultLayout/LayoutComponent/Component.style';
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

export const WidgetLogoBank = (props: { post: MPostDetail; t: any }) => {
  const { t } = props;
  const {
    firstName,
    lastName,
    userAvatar,
    agencyName,
    realEstateId,
    paymentRecords,
    realEstatePhone,
    realEstateEmail,
    agency,
  } = props.post;

  const [contactRecord, setContactRecord] = useState({
    phone: realEstatePhone,
    email: realEstateEmail,
  });

  const backgroundColorTicket = ['#FA7E55', '#3FAEFF'];
  return (
    <>
      <WidgetWrap>
        <div
          style={{
            backgroundColor: '#222222',
            height: 'auto',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            padding: 5,
          }}
        >
          <label
            style={{
              color: 'white',
              fontSize: 26,
              fontWeight: '700',
              fontFamily: 'Inter',
            }}
          >
            Logo Bank
          </label>
        </div>
        <div style={{ padding: 16 }}>
          <WidgetHeader>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: 10 }}>
                <Avatar src={userAvatar} size={70}>
                  {lastName ? lastName.charAt(0).trim().toUpperCase() : 'A'}
                </Avatar>
              </div>
              <div>
                <Typography.Title
                  style={{
                    fontSize: 24,
                    fontWeight: '700',
                    fontFamily: 'Inter',
                  }}
                >
                  {lastName || firstName
                    ? firstName + ' ' + lastName
                    : t('detail.widgetUser.icognito')}
                </Typography.Title>
                {/* <TicketProject style={{ background: backgroundColorTicket[agency] }}><IconKey /><label>{t(agencyName)}</label></TicketProject> */}
                <div className="align-items-center d-flex">
                  <label
                    style={{
                      fontSize: 12,
                      fontWeight: '500',
                      color: '#7A7A7A',
                      fontFamily: 'Inter',
                    }}
                  >
                    Sale Manager
                  </label>
                  <Divider type="vertical" />
                  <label
                    style={{
                      fontSize: 12,
                      fontWeight: '500',
                      color: '#7A7A7A',
                      fontFamily: 'Inter',
                    }}
                  >
                    CMC Corp
                  </label>
                </div>
              </div>
            </div>
            {/* <span>{t('detail.widgetUser.poster')}</span> */}
          </WidgetHeader>
          <Divider style={{ marginTop: 10, marginBottom: 10 }} />
          <div
            style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}
          >
            <div style={{ height: 'auto', width: '45%', display: 'flex' }}>
              <IconPhoneTabTab style={{ marginRight: 9, paddingTop: 1 }} />
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  fontFamily: 'Inter',
                  color: '#7A7A7A',
                }}
              >
                Phone
              </span>
            </div>
            <span
              style={{ fontSize: 16, fontWeight: 600, fontFamily: 'Inter' }}
            >
              0909672981
            </span>
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', marginBottom: 0 }}
          >
            <div style={{ height: 'auto', width: '45%', display: 'flex' }}>
              <IconEmailTabTab style={{ marginRight: 9, paddingTop: 1 }} />
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  fontFamily: 'Inter',
                  color: '#7A7A7A',
                }}
              >
                Email
              </span>
            </div>
            <span
              style={{ fontSize: 16, fontWeight: 600, fontFamily: 'Inter' }}
            >
              mail@gmail.com
            </span>
          </div>
          <WidgetAction style={{ marginTop: -20 }}>
            <TextEmail t={t} email={contactRecord.email}>
              <Button
                type="primary"
                style={{
                  backgroundColor: '#F9C41F',
                  borderRadius: 8,
                  height: 'auto',
                  padding: 13,
                  marginTop: 24,
                  width: '100%',
                  whiteSpace: 'break-spaces',
                }}
              >
                <IconMessTabTab />
                <label
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    fontFamily: 'Inter',
                  }}
                >
                  Chat với anh Cody
                </label>
              </Button>
            </TextEmail>
          </WidgetAction>
        </div>
      </WidgetWrap>
    </>
  );
};
