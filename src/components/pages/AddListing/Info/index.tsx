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
  Select,
  Typography,
  notification,
} from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  AddListingWrapper,
  AreaInputWrap,
  BoxSelectWrap,
  ContainerInfo,
  SelectWrap,
} from '../AddListing.style';
import DocumentBar from './DocumentBar';
import Edittor from './Edittor';

const { Title } = Typography;

const Info = (): React.ReactElement => {
  const { t: translate } = useTranslation();

  return (
    <AddListingWrapper>
      <div style={{ marginTop: 10 }}>
        <Title className="mt-2 d-flex align-items-center" level={2}>
          Thông tin
        </Title>
        <Form layout="vertical">
          <Row>
            <Col lg={12} md={24}>
              <ContainerInfo style={{ marginTop: 24, marginLeft: 0 }}>
                <label
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 16,
                    fontWeight: '500',
                    marginBottom: 16,
                  }}
                >
                  Giá tiền (VNĐ)
                  <label style={{ color: 'red', marginLeft: 5 }}>*</label>
                </label>
                <div style={{ display: 'flex' }}>
                  <Input
                    style={{
                      borderRadius: 12,
                      height: 52,
                      fontSize: 16,
                      fontWeight: '700',
                      fontFamily: 'Inter',
                      marginRight: 16,
                    }}
                    placeholder="Giá min"
                  />
                  <Input
                    style={{
                      borderRadius: 12,

                      height: 52,
                      fontSize: 16,
                      fontWeight: '700',
                      fontFamily: 'Inter',
                      borderColor: '#F9C41F',
                      background: '#F9C41F1A',
                      width: 250,
                      textAlign: 'center',
                      color: '#333',
                    }}
                    placeholder="Khoảng giá"
                  />
                </div>
                <Radio style={{ marginLeft: 20 }}>
                  <label
                    style={{
                      fontWeight: '400',
                      fontFamily: 'Inter',
                      marginRight: 14,
                      marginTop: 8,
                    }}
                  >
                    Giá thoả thuận
                  </label>
                </Radio>
              </ContainerInfo>
              <ContainerInfo style={{ marginTop: 24, marginLeft: 0 }}>
                <label
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 16,
                    fontWeight: '500',
                    marginBottom: 16,
                  }}
                >
                  Giá tiền (VNĐ)
                  <label style={{ color: 'red', marginLeft: 5 }}>*</label>
                </label>
                <div style={{ display: 'flex' }}>
                  <Input
                    style={{
                      borderRadius: 12,
                      height: 52,
                      fontSize: 16,
                      fontWeight: '700',
                      fontFamily: 'Inter',
                      marginRight: 16,
                    }}
                    placeholder="Giá min"
                  />
                  <Input
                    style={{
                      borderRadius: 12,
                      textAlign: 'center',
                      height: 52,
                      fontSize: 16,
                      fontWeight: '700',
                      fontFamily: 'Inter',
                      borderColor: '#F9C41F',
                      background: '#F9C41F1A',
                      width: 250,
                    }}
                    placeholder="Khoảng diện tích"
                  />
                </div>
              </ContainerInfo>

              <ContainerInfo style={{ marginTop: 15, marginLeft: 0 }}>
                <label
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 16,
                    fontWeight: '500',
                    marginBottom: 9,
                  }}
                >
                  Nhu cầu
                  <label style={{ color: 'red', marginLeft: 5 }}>*</label>
                </label>
                <BoxSelectWrap>
                  <SelectWrap
                    defaultValue="Chọn nhu cầu"
                    style={{
                      width: 300,
                      borderWidth: 0,
                      borderColor: 'white',
                    }}
                    bordered={false}
                  />
                </BoxSelectWrap>
              </ContainerInfo>
            </Col>
            <Col lg={12} md={24}>
              <ContainerInfo>
                <label
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 16,
                    fontWeight: '500',
                    marginBottom: 16,
                  }}
                >
                  Hướng nhà
                  <label style={{ color: 'red', marginLeft: 5 }}>*</label>
                </label>
                <BoxSelectWrap>
                  <Form.Item name="realEstateHouseDirection">
                    <SelectWrap placeholder="Chọn hướng nhà" bordered={false} />
                  </Form.Item>
                </BoxSelectWrap>
              </ContainerInfo>
              <ContainerInfo style={{ paddingTop: '37px' }}>
                <label
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 16,
                    fontWeight: '500',
                    marginBottom: 9,
                  }}
                >
                  Tình trạng pháp lý
                  <label style={{ color: 'red', marginLeft: 5 }}>*</label>
                </label>
                <BoxSelectWrap>
                  <Form.Item name="realEstateJuridicalName">
                    <SelectWrap
                      placeholder={'Chọn giấy tờ pháp lý'}
                      bordered={false}
                    />
                  </Form.Item>
                </BoxSelectWrap>
              </ContainerInfo>
              <ContainerInfo style={{ marginTop: 17, marginLeft: 11 }}>
                <label
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 16,
                    fontWeight: '500',
                    marginBottom: 12,
                  }}
                >
                  Loại bất động sản
                  <label style={{ color: 'red', marginLeft: 5 }}>*</label>
                </label>
                <BoxSelectWrap>
                  <SelectWrap
                    defaultValue="Tên bất động sản"
                    bordered={false}
                  />
                </BoxSelectWrap>
              </ContainerInfo>
            </Col>

            <Form.Item
              style={{ width: '100%', margin: 0 }}
              name="realEstateTitle"
            >
              <label
                style={{
                  fontFamily: 'Inter',
                  fontSize: 16,
                  fontWeight: '500',
                  marginTop: 20,
                }}
              >
                Tiêu đề
                <label style={{ color: 'red', marginLeft: 5 }}>*</label>
              </label>
              <div>
                <DocumentBar />
                <AreaInputWrap
                  maxLength={50}
                  placeholder="Nhập tiêu đề của bạn"
                  rows={1}
                  style={{ resize: 'none', height: 50 }}
                />
              </div>
            </Form.Item>
            <Form.Item style={{ width: '100%' }} name="realEstateDescription">
              <label
                style={{
                  fontFamily: 'Inter',
                  fontSize: 16,
                  fontWeight: '500',
                  marginTop: 20,
                }}
              >
                Mô tả
                <label style={{ color: 'red', marginLeft: 5 }}>*</label>
              </label>
              <div>
                <DocumentBar />
                <AreaInputWrap
                  maxLength={1500}
                  rows={7}
                  style={{ resize: 'none', height: 200 }}
                  placeholder={translate('Mô tả nội dung chi tiết')}
                />
              </div>
            </Form.Item>
          </Row>
        </Form>
      </div>
    </AddListingWrapper>
  );
};

export default Info;
