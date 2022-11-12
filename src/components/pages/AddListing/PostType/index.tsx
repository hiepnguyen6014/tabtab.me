import { DownOutlined } from '@ant-design/icons';
import {
  IconCheckOrange,
  IconMobile,
  IconRadio,
  IconRadioGray,
  ProtectIcon,
} from '@root/public/icons';
import {
  Breadcrumb,
  Button,
  Checkbox,
  Col,
  Divider,
  Dropdown,
  Form,
  Input,
  Menu,
  Radio,
  Row,
  Tabs,
  Typography,
  notification,
} from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ContainerInfo } from '../AddListing.style';
import Normal from './Normal';
import Vip1 from './Vip1';
import Vip2 from './Vip2';
import Vip3 from './Vip3';

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);
const { Title, Text } = Typography;
const PostType = (): React.ReactElement => {
  const [state, setState] = React.useState({
    tabs: 1,
  });
  const { tabs } = state;
  const { t: translate } = useTranslation();
  return (
    <div>
      <Title className="mt-2 d-flex align-items-center " level={2}>
        Chọn tin đăng
      </Title>
      <Radio.Group defaultValue="a">
        <Radio.Button
          value="a"
          onClick={() => setState(p => ({ ...p, tabs: 1 }))}
          style={{
            borderRadius: 24,
            marginRight: 12,
            borderColor: '#F9C41F',
            marginBottom: 10,
          }}
        >
          <div style={{ display: 'flex' }}>
            <span>{tabs === 1 ? <IconRadio /> : <IconRadioGray />}</span>
            <p
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                marginLeft: 10,
              }}
            >
              Tin VIP 1
            </p>
          </div>
        </Radio.Button>
        <Radio.Button
          value="b"
          onClick={() => setState(p => ({ ...p, tabs: 2 }))}
          style={{
            borderRadius: 24,
            marginRight: 12,
            borderColor: '#F9C41F',
            marginBottom: 10,
          }}
        >
          <div style={{ display: 'flex' }}>
            <span>{tabs === 2 ? <IconRadio /> : <IconRadioGray />}</span>
            <text
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                marginLeft: 10,
              }}
            >
              Tin VIP 2
            </text>
          </div>
        </Radio.Button>
        <Radio.Button
          value="c"
          onClick={() => setState(p => ({ ...p, tabs: 3 }))}
          style={{
            borderRadius: 24,
            marginRight: 12,
            borderColor: '#F9C41F',
            marginBottom: 10,
          }}
        >
          <div style={{ display: 'flex' }}>
            <span>{tabs === 3 ? <IconRadio /> : <IconRadioGray />}</span>
            <text
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                marginLeft: 10,
              }}
            >
              Tin VIP 3
            </text>
          </div>
        </Radio.Button>
        <Radio.Button
          value="d"
          onClick={() => setState(p => ({ ...p, tabs: 4 }))}
          style={{ borderRadius: 24, marginRight: 12, marginBottom: 10 }}
        >
          <div style={{ display: 'flex' }}>
            <span>{tabs === 4 ? <IconRadio /> : <IconRadioGray />}</span>
            <text
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                marginLeft: 10,
              }}
            >
              Tin thường
            </text>
          </div>
        </Radio.Button>
      </Radio.Group>

      <div
        style={{
          border: '1px solid #F9C41F',
          borderRadius: 12,
          background: '#F9C41F0D',
          padding: 16,
        }}
      >
        <Row>
          <Col lg={12} md={24} sm={24} style={{ marginBottom: 10 }}>
            <div
              style={{ display: 'flex', alignItems: 'center', marginTop: 24 }}
            >
              <text
                style={{
                  fontSize: 16,
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  marginRight: 10,
                }}
              >
                giá
              </text>
              <div>
                <div
                  style={{
                    fontSize: 72,
                    fontFamily: 'Inter',
                    fontWeight: '700',
                    color: '#FF8800',
                    marginBottom: -15,
                  }}
                >
                  40,000 đ
                </div>
                <Typography.Text
                  delete={true}
                  style={{
                    fontSize: 18,
                    fontFamily: 'Inter',
                    fontWeight: '700',
                    color: '#7A7A7A',
                  }}
                >
                  60,000 đ
                </Typography.Text>
              </div>
            </div>
            <div
              style={{ display: 'flex', alignItems: 'center', marginTop: 25 }}
            >
              <IconCheckOrange />
              <text
                style={{
                  fontSize: 16,
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  marginLeft: 10,
                }}
              >
                Tiếp cận hơn 20.000 người/ngày
              </text>
            </div>
            <div
              style={{ display: 'flex', alignItems: 'center', marginTop: 15 }}
            >
              <IconCheckOrange />
              <text
                style={{
                  fontSize: 16,
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  marginLeft: 10,
                }}
              >
                Đứng đầu danh sách các tin đăng
              </text>
            </div>
            <div
              style={{ display: 'flex', alignItems: 'center', marginTop: 15 }}
            >
              <IconCheckOrange />
              <text
                style={{
                  fontSize: 16,
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  marginLeft: 10,
                }}
              >
                Được chèn link video vào bài đăng
              </text>
            </div>
            <div
              style={{ display: 'flex', alignItems: 'center', marginTop: 15 }}
            >
              <IconCheckOrange />
              <text
                style={{
                  fontSize: 16,
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  marginLeft: 10,
                }}
              >
                Đăng tin tối đa 30 ảnh
              </text>
            </div>
            <div
              style={{ display: 'flex', alignItems: 'center', marginTop: 15 }}
            >
              <IconCheckOrange />
              <text
                style={{
                  fontSize: 16,
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  marginLeft: 10,
                }}
              >
                Kích thước tin: {tabs === 1 ? 'Lớn' : 'Vừa'}
              </text>
            </div>
          </Col>
          <Col lg={12} md={24} sm={24}>
            {tabs === 1 && <Vip1 />}
            {tabs === 2 && <Vip2 />}
            {tabs === 3 && <Vip3 />}
            {tabs === 4 && <Normal />}
          </Col>
        </Row>
      </div>
      <Row style={{ marginTop: 20, justifyContent: 'space-between' }}>
        <Col xl={4} lg={6} md={7}>
          <ContainerInfo style={{ marginTop: 15, marginRight: 0 }}>
            <label
              style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: '500' }}
            >
              Sô ngày đăng tin
            </label>
            <div
              style={{
                border: '1px solid #D3D3D3',
                padding: '13px 20px 5px 20px',
                borderRadius: 12,
              }}
            >
              <Dropdown placement="bottomLeft" overlay={menu}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderRadius: 24,
                  }}
                >
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '550',
                      marginRight: 10,
                      color: '#A7A7A7',
                    }}
                  >
                    9
                  </label>
                  <DownOutlined style={{ paddingBottom: 5 }} />
                </div>
              </Dropdown>
            </div>
          </ContainerInfo>
        </Col>
        <Col xl={6} lg={12} md={16}>
          <ContainerInfo style={{ marginTop: 15, marginRight: 0 }}>
            <label
              style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: '500' }}
            >
              Ngày đăng bài
            </label>
            <div
              style={{
                border: '1px solid #D3D3D3',
                padding: '13px 20px 5px 20px',
                borderRadius: 12,
              }}
            >
              <Dropdown placement="bottomLeft" overlay={menu}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderRadius: 24,
                  }}
                >
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '550',
                      marginRight: 10,
                      color: '#A7A7A7',
                    }}
                  >
                    07/05/2021
                  </label>
                  <DownOutlined style={{ paddingBottom: 5 }} />
                </div>
              </Dropdown>
            </div>
          </ContainerInfo>
        </Col>
        <Col xl={4} lg={6} md={7}>
          <ContainerInfo style={{ marginTop: 15, marginRight: 0 }}>
            <label
              style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: '500' }}
            >
              Hướng nhà
            </label>
            <div
              style={{
                border: '1px solid #D3D3D3',
                padding: '13px 20px 5px 20px',
                borderRadius: 12,
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderRadius: 24,
                  }}
                >
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '550',
                      marginRight: 10,
                      color: '#A7A7A7',
                    }}
                  >
                    07/05/2021
                  </label>
                </div>
              </div>
            </div>
          </ContainerInfo>
        </Col>
        <Col xl={6} lg={12} md={8}>
          <ContainerInfo style={{ marginTop: 15, marginRight: 0 }}>
            <label
              style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: '500' }}
            >
              Hướng nhà
            </label>
            <div
              style={{
                border: '1px solid #D3D3D3',
                padding: '13px 20px 5px 20px',
                borderRadius: 12,
              }}
            >
              <Dropdown placement="bottomLeft" overlay={menu}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderRadius: 24,
                  }}
                >
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '550',
                      marginRight: 10,
                      color: '#A7A7A7',
                    }}
                  >
                    07/05/2021
                  </label>
                  <DownOutlined style={{ paddingBottom: 5 }} />
                </div>
              </Dropdown>
            </div>
          </ContainerInfo>
        </Col>
        <Col xl={4} lg={6} md={8}>
          <ContainerInfo style={{ marginTop: 15, marginRight: 0 }}>
            <label
              style={{ fontFamily: 'Inter', fontSize: 16, fontWeight: '500' }}
            >
              Hướng nhà
            </label>
            <div
              style={{
                border: '1px solid #D3D3D3',
                padding: '13px 20px 5px 20px',
                borderRadius: 12,
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderRadius: 24,
                  }}
                >
                  <label
                    style={{
                      fontFamily: 'Inter',
                      fontSize: 16,
                      fontWeight: '550',
                      marginRight: 10,
                      color: '#A7A7A7',
                    }}
                  >
                    07/05/2021
                  </label>
                </div>
              </div>
            </div>
          </ContainerInfo>
        </Col>
      </Row>

      <div style={{ marginTop: 30, display: 'flex', alignItems: 'center' }}>
        <text
          style={{
            marginRight: 15,
            marginLeft: 20,
            fontSize: 16,
            fontWeight: '700',
            fontFamily: 'Inter',
          }}
        >
          Mã khuyến mãi
        </text>
        <Input
          placeholder="Nhập Mã khuyến mãi"
          style={{ width: 200, borderRadius: 8 }}
        />
      </div>

      <div
        style={{
          border: '1px solid #F9C41F',
          borderRadius: 12,
          background: '#F9C41F0D',
          padding: 16,
          marginTop: 30,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 20,
            alignItems: 'center',
          }}
        >
          <text
            style={{
              fontSize: 16,
              fontWeight: '500',
              fontFamily: 'Inter',
              color: '#4E4E4E',
            }}
          >
            Thành tiền (gồm VAT)
          </text>
          <text
            style={{ fontSize: 18, fontWeight: '700', fontFamily: 'Inter' }}
          >
            5.990.000 đ
          </text>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 20,
            alignItems: 'center',
          }}
        >
          <text
            style={{
              fontSize: 16,
              fontWeight: '500',
              fontFamily: 'Inter',
              color: '#4E4E4E',
            }}
          >
            Khuyến mại
          </text>
          <text
            style={{ fontSize: 18, fontWeight: '700', fontFamily: 'Inter' }}
          >
            0đ
          </text>
        </div>
        <Divider />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 20,
            alignItems: 'center',
          }}
        >
          <text
            style={{ fontSize: 16, fontWeight: '700', fontFamily: 'Inter' }}
          >
            Thanh toán
          </text>
          <text
            style={{
              fontSize: 32,
              fontWeight: '700',
              fontFamily: 'Inter',
              color: '#FF8800',
            }}
          >
            5.990.000 đ
          </text>
        </div>
      </div>

      <div
        style={{
          border: '1px solid #F9C41F66',
          borderRadius: 12,
          background: '#F2F2F2',
          padding: 34,
          marginTop: 30,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ProtectIcon />
            <text
              style={{
                fontSize: 15,
                fontWeight: '700',
                fontFamily: 'Inter',
                marginLeft: 10,
              }}
            >
              Tin đăng đã sẵn sàng
            </text>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconMobile />
            <a
              style={{
                fontSize: 20,
                fontWeight: '700',
                fontFamily: 'Inter',
                color: '#F9BD06',
                marginLeft: 10,
              }}
            >
              Xem trước
            </a>
          </div>
        </div>
      </div>

      <Form>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 30,
            marginBottom: 30,
            height: 'auto',
          }}
        >
          <Button
            style={{
              padding: '24px 100px 14px 100px',
              height: 'auto',
              borderRadius: 8,
            }}
          >
            <label
              style={{ fontFamily: 'Inter', fontSize: 20, fontWeight: '700' }}
            >
              ĐĂNG TIN
            </label>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PostType;
