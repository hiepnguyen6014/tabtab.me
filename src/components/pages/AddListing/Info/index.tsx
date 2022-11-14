import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import {
  AREA_DATA_SELECT,
  EXPECT_DATA_SELECT,
  FILTER_DIRECTION,
  POLICE_DATA,
  PRICE_DATA_SELECT,
  TYPE_DATA_SELECT,
} from '@root/src/components/shared/AddListing';
import { Checkbox, Col, Form, Input, Row, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  AddListingWrapper,
  AreaInputWrap,
  BoxSelectWrap,
  ContainerInfo,
  SelectWrap,
} from '../AddListing.style';
import { ButtonNextStep } from '../AddListing.style';
import DocumentBar from './DocumentBar';

// import Edittor from './Edittor';

const { Title } = Typography;

const Info: React.FC<{
  onClickPrev: () => void;
  onClickNext: () => void;
}> = ({ onClickPrev, onClickNext }) => {
  const { t: translate } = useTranslation();

  const onSubmit = () => {
    console.log('submit');
  };

  return (
    <AddListingWrapper>
      <div style={{ marginTop: 10 }}>
        <Title className="mt-2 d-flex align-items-center" level={2}>
          Thông tin
        </Title>
        <Form layout="vertical">
          <Row>
            <Col lg={12} md={24}>
              <ContainerInfo style={{ marginTop: 12, marginLeft: 0 }}>
                <label
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 16,
                    fontWeight: '500',
                    marginBottom: 16,
                  }}
                  htmlFor="minPrice"
                >
                  Giá tiền (VNĐ)
                  <label style={{ color: 'red', marginLeft: 5 }}>*</label>
                </label>

                <div style={{ display: 'flex' }}>
                  <Form.Item
                    name="minPrice"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập giá tiền',
                      },
                    ]}
                    style={{
                      width: '100%',
                    }}
                  >
                    <Input
                      style={{
                        borderRadius: 12,
                        height: 52,
                        fontSize: 16,
                        fontWeight: '500',
                        fontFamily: 'Inter',
                        marginRight: 16,
                      }}
                      placeholder="Giá min"
                    />
                  </Form.Item>
                  <Form.Item
                    name="rangePrice"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập khoảng giá tiền',
                      },
                    ]}
                    style={{
                      width: 320,
                    }}
                  >
                    <BoxSelectWrap>
                      <SelectWrap
                        placeholder="Khoảng giá"
                        style={{
                          borderWidth: 0,
                          borderColor: 'white',
                        }}
                        bordered={false}
                        options={PRICE_DATA_SELECT}
                        dropdownAlign={{
                          offset: [-7, 6],
                        }}
                      />
                    </BoxSelectWrap>
                  </Form.Item>
                </div>
                <Form.Item name="negotiable">
                  <Checkbox style={{ marginLeft: 20 }}>
                    <label
                      style={{
                        fontWeight: '400',
                        fontFamily: 'Inter',
                        marginRight: 14,
                        marginTop: 8,
                        userSelect: 'none',
                      }}
                      htmlFor="negotiable"
                    >
                      Giá thoả thuận
                    </label>
                  </Checkbox>
                </Form.Item>
              </ContainerInfo>
              <ContainerInfo style={{ marginLeft: 0 }}>
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
                  <Form.Item
                    style={{
                      width: '100%',
                    }}
                    name="maxPrice"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập giá tiền',
                      },
                    ]}
                  >
                    <Input
                      style={{
                        borderRadius: 12,
                        height: 52,
                        fontSize: 16,
                        fontWeight: '700',
                        fontFamily: 'Inter',
                        marginRight: 16,
                      }}
                      placeholder="Giá tiền"
                    />
                  </Form.Item>
                  <Form.Item
                    name="rangeArea"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập khoảng diện tích',
                      },
                    ]}
                    style={{
                      width: 320,
                    }}
                  >
                    <BoxSelectWrap>
                      <SelectWrap
                        placeholder="Khoảng diện tích"
                        style={{
                          borderWidth: 0,
                          borderColor: 'white',
                        }}
                        bordered={false}
                        options={AREA_DATA_SELECT}
                        dropdownAlign={{
                          offset: [-7, 6],
                        }}
                      />
                    </BoxSelectWrap>
                  </Form.Item>
                </div>
              </ContainerInfo>

              <ContainerInfo style={{ marginLeft: 0 }}>
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
                <Form.Item
                  name="expect"
                  rules={[{ required: true, message: 'Vui lòng nhập nhu cầu' }]}
                >
                  <BoxSelectWrap id="expect_info">
                    <SelectWrap
                      defaultValue="Chọn nhu cầu"
                      style={{
                        width: '100%',
                        borderWidth: 0,
                        borderColor: 'white',
                      }}
                      bordered={false}
                      options={EXPECT_DATA_SELECT}
                      dropdownAlign={{
                        offset: [-7, 6],
                      }}
                    />
                  </BoxSelectWrap>
                </Form.Item>
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
                  <Form.Item
                    name="realEstateHouseDirection"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <SelectWrap
                      placeholder="Chọn hướng nhà"
                      bordered={false}
                      options={FILTER_DIRECTION}
                      dropdownAlign={{
                        offset: [-7, 6],
                      }}
                    />
                  </Form.Item>
                </BoxSelectWrap>
              </ContainerInfo>
              <ContainerInfo style={{ paddingTop: '63px' }}>
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
                      placeholder="Chọn giấy tờ pháp lý"
                      bordered={false}
                      options={POLICE_DATA}
                      dropdownAlign={{
                        offset: [-7, 6],
                      }}
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
                    marginBottom: 7,
                  }}
                >
                  Loại bất động sản
                  <label style={{ color: 'red', marginLeft: 5 }}>*</label>
                </label>
                <BoxSelectWrap>
                  <SelectWrap
                    defaultValue="Tên bất động sản"
                    bordered={false}
                    options={TYPE_DATA_SELECT}
                    dropdownAlign={{
                      offset: [-7, 6],
                    }}
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
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <ButtonNextStep onClick={() => onClickPrev()}>
              <DoubleLeftOutlined />
              Prev
            </ButtonNextStep>
          </div>
          <div>
            <ButtonNextStep onClick={() => onSubmit()}>
              Next
              <DoubleRightOutlined />
            </ButtonNextStep>
          </div>
        </div>
      </div>
    </AddListingWrapper>
  );
};

export default Info;
