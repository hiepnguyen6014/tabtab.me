import { Divider, Row, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { UtiliteStyle } from '../AddListing.style';
import UnitilitiesList from './UntilitiesList';

const { Title } = Typography;

const Untilities = (): React.ReactElement => {
  return (
    <div style={{ marginTop: 0 }}>
      <Title className="mt-2 d-flex align-items-center" level={2}>
        Tiện ích
      </Title>
      <div style={{ marginTop: 32 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: '#4E4E4E',
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              padding: '12px 20px 12px 20px',
            }}
          >
            <label
              style={{
                fontSize: 18,
                fontWeight: '700',
                fontFamily: 'Inter',
                color: 'white',
              }}
            >
              Xung quanh
            </label>
          </div>
          <label
            style={{
              fontSize: 18,
              fontWeight: '700',
              fontFamily: 'Inter',
              color: '#4E4E4E',
            }}
          >
            Selected
          </label>
        </div>
        <Divider
          style={{ borderColor: '#4E4E4E', borderWidth: 6, marginTop: -6 }}
        />
        <Row style={{ marginTop: 22 }}>
          {UnitilitiesList.map((item: any) => (
            <UtiliteStyle key={item.id}>
              {item.icon}
              <Typography.Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  fontFamily: 'Inter',
                  color: '#222222',
                  marginLeft: 10,
                }}
              >
                {item.text}
              </Typography.Text>
            </UtiliteStyle>
          ))}
        </Row>
      </div>
      <div style={{ marginTop: 50 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: '#4E4E4E',
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              padding: '12px 20px 12px 20px',
            }}
          >
            <label
              style={{
                fontSize: 18,
                fontWeight: '700',
                fontFamily: 'Inter',
                color: 'white',
              }}
            >
              Trong compound nhà
            </label>
          </div>
          <label
            style={{
              fontSize: 18,
              fontWeight: '700',
              fontFamily: 'Inter',
              color: '#4E4E4E',
            }}
          >
            Selected
          </label>
        </div>
        <Divider
          style={{ borderColor: '#4E4E4E', borderWidth: 6, marginTop: -6 }}
        />
        <Row style={{ marginTop: 22 }}>
          {UnitilitiesList.map((item: any) => (
            <UtiliteStyle key={item.id}>
              {item.icon}
              <Typography.Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  fontFamily: 'Inter',
                  color: '#222222',
                  marginLeft: 10,
                }}
              >
                {item.text}
              </Typography.Text>
            </UtiliteStyle>
          ))}
        </Row>
      </div>
      <div style={{ marginTop: 50 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: '#4E4E4E',
              borderTopRightRadius: 12,
              borderTopLeftRadius: 12,
              padding: '12px 20px 12px 20px',
            }}
          >
            <label
              style={{
                fontSize: 18,
                fontWeight: '700',
                fontFamily: 'Inter',
                color: 'white',
              }}
            >
              Trong phòng
            </label>
          </div>
          <label
            style={{
              fontSize: 18,
              fontWeight: '700',
              fontFamily: 'Inter',
              color: '#4E4E4E',
            }}
          >
            Selected
          </label>
        </div>
        <Divider
          style={{ borderColor: '#4E4E4E', borderWidth: 6, marginTop: -6 }}
        />
        <Row style={{ marginTop: 22 }}>
          {UnitilitiesList.slice(0, 7).map((item: any) => (
            <UtiliteStyle key={item.id}>
              {item.icon}
              <Typography.Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  fontFamily: 'Inter',
                  color: '#222222',
                  marginLeft: 10,
                }}
              >
                {item.text}
              </Typography.Text>
            </UtiliteStyle>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Untilities;
