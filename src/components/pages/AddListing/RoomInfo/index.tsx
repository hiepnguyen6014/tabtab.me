import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DownOutlined,
  LockOutlined,
  MenuOutlined,
  MobileOutlined,
} from '@ant-design/icons';
import {
  IconBed,
  IconBluePrint,
  IconDoor,
  IconHandCoin,
  VectorAgent,
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
  Typography,
  notification,
} from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { AreaInputWrap } from '../AddListing.style';
import DocumentBar from '../Info/DocumentBar';

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

const { Title } = Typography;
const RoomInfo = (): React.ReactElement => {
  return (
    <div>
      <Title className="mt-2 d-flex align-items-center" level={2}>
        Thông tin phòng
      </Title>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconBed />
          <div
            style={{
              marginLeft: 10,
              fontSize: 16,
              fontFamily: 'Inter',
              fontWeight: '700',
            }}
          >
            Phòng 1
          </div>
        </div>
        <a
          style={{
            background: '#F9C41F',
            padding: '6px 10px 3px 10px',
            borderRadius: 8,
            marginLeft: 25,
          }}
        >
          <label
            style={{ fontSize: 14, fontFamily: 'Inter', fontWeight: '700' }}
          >
            Thêm phòng
          </label>
        </a>
      </div>

      <Row justify="space-between" gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col span={6}>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconDoor />
              <div
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontFamily: 'Inter',
                  fontWeight: '700',
                }}
              >
                Tên phòng
              </div>
            </div>
            <Input
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                borderRadius: 8,
                width: 100,
                marginLeft: 12,
              }}
              placeholder="Nhập tên"
            />
          </div>
        </Col>
        <Col span={6}>
          <Form.Item name="realEstateLandRealitySquare">
            <div
              style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconBluePrint />
                <div
                  style={{
                    marginLeft: 10,
                    fontSize: 16,
                    fontFamily: 'Inter',
                    fontWeight: '700',
                  }}
                >
                  Diện tích
                </div>
              </div>
              <Input
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  fontFamily: 'Inter',
                  borderRadius: 8,
                  width: 100,
                  marginLeft: 12,
                }}
                suffix="m²"
                placeholder="..."
              />
            </div>
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item name="realEstateValueSalePrice">
            <div
              style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IconHandCoin />
                <div
                  style={{
                    marginLeft: 10,
                    fontSize: 16,
                    fontFamily: 'Inter',
                    fontWeight: '700',
                  }}
                >
                  Giá
                </div>
              </div>
              <Input
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  fontFamily: 'Inter',
                  borderRadius: 8,
                  width: 100,
                  marginLeft: 12,
                }}
                suffix="$"
                placeholder="...,...,..."
              />
            </div>
          </Form.Item>
        </Col>
        <Col span={6}>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <VectorAgent />
              <div
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontFamily: 'Inter',
                  fontWeight: '700',
                }}
              >
                Sức chứa
              </div>
            </div>
            <div
              style={{
                border: '1px solid #D3D3D3',
                padding: '0px 10px 0px 10px',
                borderRadius: 8,
                marginLeft: 10,
              }}
            >
              <Dropdown overlay={menu} placement="bottomLeft">
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
                      fontWeight: '500',
                      marginRight: 10,
                      color: '#A7A7A7',
                    }}
                  >
                    ...
                  </label>
                  <DownOutlined style={{ paddingBottom: 5 }} />
                </div>
              </Dropdown>
            </div>
          </div>
        </Col>
      </Row>

      <DocumentBar />
      <AreaInputWrap
        maxLength={1500}
        rows={7}
        style={{ resize: 'none', height: 200 }}
        placeholder={'Mô tả nội dung chi tiết'}
      />
    </div>
  );
};

export default RoomInfo;
