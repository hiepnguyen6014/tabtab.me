import { MPostDetail } from '@models/MPostDetail';
import { TextEmail } from '@root/src/components/shared';
import { Avatar, Button, Divider, Image, Typography } from 'antd';
import Link from 'next/link';
import {
  IconChartTabTab,
  IconCoinTabTab,
  IconEmailTabTab,
  IconMessTabTab,
  IconMortage,
  IconReview,
  IconStartRating,
  Location,
  VectorHeart,
} from 'public/icons';
import { useState } from 'react';

import {
  ButtonChat,
  WidgetAction,
  WidgetHeader,
  WidgetHeaderAgent,
  WidgetWrap,
} from '../FindPerson.style';

export default function Person(props: { post: MPostDetail; t: any }) {
  const { t } = props;
  const { firstName, lastName, userAvatar, realEstatePhone, realEstateEmail } =
    props.post;

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
            display: 'flex',
            justifyContent: 'end',
            width: '100%',
            marginTop: 20,
            paddingRight: 20,
            marginBottom: -10,
          }}
        >
          <VectorHeart />
        </div>
        <div style={{ padding: '0 24px 24px 24px' }}>
          <WidgetHeaderAgent>
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: 15,
                }}
              >
                <Avatar
                  // style={{ border: "4px solid #FF8800" }}
                  src={userAvatar}
                  size={120}
                >
                  {lastName ? lastName.charAt(0).trim().toUpperCase() : 'A'}
                </Avatar>
              </div>
              <span>
                <Typography.Title
                  style={{
                    fontSize: 24,
                    fontWeight: '700',
                    fontFamily: 'Inter',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {lastName || firstName
                    ? firstName + ' ' + lastName
                    : 'Ẩn danh'}
                </Typography.Title>
                {/* <TicketProject style={{ background: backgroundColorTicket[agency] }}><IconKey /><label>{t(agencyName)}</label></TicketProject> */}
                <span className="align-items-center d-flex">
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
                  <Divider type="vertical" />
                  <div className="align-items-center d-flex">
                    <label
                      style={{
                        fontSize: 16,
                        fontWeight: '700',
                        color: '#F9C41F',
                        fontFamily: 'Inter',
                      }}
                    >
                      24t
                    </label>
                    <IconCoinTabTab style={{ marginLeft: 5 }} />
                  </div>
                </span>
              </span>
            </div>
            {/* <span>{t('detail.widgetUser.poster')}</span> */}
          </WidgetHeaderAgent>
          <Divider />
          <div
            style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}
          >
            <span
              style={{
                height: 'auto',
                width: '45%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Location style={{ marginRight: 9 }} />
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  fontFamily: 'Inter',
                  color: '#7A7A7A',
                }}
              >
                Location
              </div>
            </span>
            <span
              style={{ fontSize: 16, fontWeight: 600, fontFamily: 'Inter' }}
            >
              Ho chi minh ctiy
            </span>
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}
          >
            <span
              style={{
                height: 'auto',
                width: '45%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
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
            </span>
            <span
              style={{ fontSize: 16, fontWeight: 600, fontFamily: 'Inter' }}
            >
              mail@gmail.com
            </span>
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}
          >
            <span
              style={{
                height: 'auto',
                width: '45%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <IconMortage style={{ marginRight: 9 }} />
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  fontFamily: 'Inter',
                  color: '#7A7A7A',
                }}
              >
                Chứng nhận
              </span>
            </span>
            <span
              style={{ fontSize: 16, fontWeight: 600, fontFamily: 'Inter' }}
            >
              Chứng nhận
            </span>
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}
          >
            <span
              style={{
                height: 'auto',
                width: '45%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <IconChartTabTab style={{ marginRight: 9 }} />
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  fontFamily: 'Inter',
                  color: '#7A7A7A',
                }}
              >
                Hạng
              </span>
            </span>
            <span
              style={{ fontSize: 16, fontWeight: 600, fontFamily: 'Inter' }}
            >
              Top 1
            </span>
          </div>
          <div
            style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}
          >
            <span
              style={{
                height: 'auto',
                width: '45%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <IconReview style={{ marginRight: 9 }} />
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  fontFamily: 'Inter',
                  color: '#7A7A7A',
                }}
              >
                Review
              </span>
            </span>
            <span>
              <IconStartRating />
            </span>
          </div>
          <WidgetAction>
            <TextEmail t={t} email={contactRecord.email}>
              <Link href="/" legacyBehavior>
                <ButtonChat
                  style={{
                    borderRadius: 8,
                    height: 'auto',
                    padding: 13,
                    marginTop: 18,
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
                    Chat trực tiếp với anh An
                  </label>
                </ButtonChat>
              </Link>
            </TextEmail>
          </WidgetAction>
        </div>
      </WidgetWrap>
    </>
  );
}
