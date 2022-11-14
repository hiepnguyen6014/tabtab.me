// libs
import { DoubleRightOutlined } from '@ant-design/icons';
import { SRC_IMAGE } from '@constants';
import { PlaceHolderIcon, ProtectIcon } from '@root/public/icons';
import {
  DISTRICT_DATA,
  PROVINCE_DATA,
} from '@root/src/components/shared/AddListing';
import { reactLocalStorage } from '@utils';
import { Checkbox, Col, Divider, Form, Row, Typography } from 'antd';
import Image from 'next/image';
import React, { useEffect } from 'react';

import { HideOnMobile } from '../../Home/Home.style';
import {
  AddListingWrapper,
  LocateAutoComplete,
  LocateSelect,
  Location3,
} from '../AddListing.style';
import { ButtonNextStep } from '../AddListing.style';

const { Title } = Typography;

const ChooseLocate: React.FC<{
  onClickNext: () => void;
}> = ({ onClickNext }) => {
  const [form] = Form.useForm();

  const onSubmit = () => {
    const data = form.getFieldsValue();

    // check data not have value undefined
    const isDataValid = Object.values(data).every(value => value !== undefined);

    if (isDataValid) {
      reactLocalStorage.setObject('add-listing-step-1', data);
      onClickNext();
    } else {
      form.validateFields();
    }
  };

  useEffect(() => {
    const data = reactLocalStorage.getObject('add-listing-step-1', {});
    form.setFieldsValue(data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AddListingWrapper>
      <Title className="mt-2 d-flex align-items-center" level={2}>
        Chọn vị trí
      </Title>
      <Form layout="vertical" form={form} onFinish={onClickNext}>
        <Row>
          <Col lg={8} sm={6}>
            <ProtectIcon />
            <label>
              Để tăng độ tin cậy và thu hút của tin đăng, hãy kéo biểu tượng
            </label>
            <div style={{ paddingRight: 10 }}>
              <div className="text-center my-4">
                <div className="fieldsetinput" style={{ marginBottom: 32 }}>
                  <div
                    className="legend"
                    style={{
                      marginLeft: 14,
                      marginBottom: -16,
                      fontFamily: 'Inter',
                      fontSize: 14,
                      fontWeight: '500',
                    }}
                  >
                    Tên dự án
                    <label style={{ color: 'red', marginLeft: 5 }}>*</label>
                  </div>
                  <Form.Item
                    style={{ marginTop: 0 }}
                    name="projectName"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập tên dự án',
                      },
                    ]}
                  >
                    <LocateAutoComplete
                      placeholder={'Tên dự án'}
                      bordered={false}
                    />
                  </Form.Item>
                </div>
              </div>

              <div className="text-center">
                <div className="fieldsetinput">
                  <div
                    className="legend"
                    style={{
                      marginLeft: 14,
                      marginBottom: -16,
                      fontFamily: 'Inter',
                      fontSize: 14,
                      fontWeight: '500',
                    }}
                  >
                    Tỉnh / Thành phố
                    <label style={{ color: 'red', marginLeft: 5 }}>*</label>
                  </div>
                  <Form.Item
                    name="areaProvinceId"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng chọn tỉnh / thành phố',
                      },
                    ]}
                  >
                    <LocateSelect
                      placeholder={'Chọn Tỉnh/ Thành Phố'}
                      bordered={false}
                      options={PROVINCE_DATA}
                    />
                  </Form.Item>
                </div>
              </div>

              <div className="text-center my-4">
                <div className="fieldsetinput" style={{ marginBottom: 32 }}>
                  <div
                    className="legend"
                    style={{
                      marginLeft: 14,
                      marginBottom: -16,
                      fontFamily: 'Inter',
                      fontSize: 14,
                      fontWeight: '500',
                    }}
                  >
                    Quận / Huyện
                    <label style={{ color: 'red', marginLeft: 5 }}>*</label>
                  </div>
                  <Form.Item
                    style={{}}
                    name="areaDistrictId"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng chọn quận / huyện',
                      },
                    ]}
                  >
                    <LocateSelect
                      placeholder={'Chọn Quận/ Huyện'}
                      bordered={false}
                      options={DISTRICT_DATA}
                    />
                  </Form.Item>
                </div>
              </div>

              <div className="text-center my-4">
                <div className="fieldsetinput" style={{ marginBottom: 32 }}>
                  <div
                    className="legend"
                    style={{
                      marginLeft: 14,
                      marginBottom: -16,
                      fontFamily: 'Inter',
                      fontSize: 14,
                      fontWeight: '500',
                    }}
                  >
                    Phường / Xã
                    <label style={{ color: 'red', marginLeft: 5 }}>*</label>
                  </div>
                  <Form.Item
                    name="areaWardId"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng chọn phường / xã',
                      },
                    ]}
                  >
                    <LocateSelect
                      placeholder={'Chọn Phường / Xã'}
                      bordered={false}
                      options={DISTRICT_DATA}
                    />
                  </Form.Item>
                </div>
              </div>

              <div className="text-center my-4">
                <div className="fieldsetinput" style={{ marginBottom: 32 }}>
                  <div
                    className="legend"
                    style={{
                      marginLeft: 14,
                      marginBottom: -16,
                      fontFamily: 'Inter',
                      fontSize: 14,
                      fontWeight: '500',
                    }}
                  >
                    Đường
                    <label style={{ color: 'red', marginLeft: 5 }}>*</label>
                  </div>
                  <Form.Item
                    style={{ marginTop: 0 }}
                    name="areaStreetId"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng chọn đường',
                      },
                    ]}
                  >
                    <LocateAutoComplete
                      placeholder={'Nguyễn Văn Linh'}
                      bordered={false}
                    />
                  </Form.Item>
                </div>
              </div>

              <div className="text-center my-4">
                <div className="fieldsetinput" style={{ marginBottom: 32 }}>
                  <div
                    className="legend"
                    style={{
                      marginLeft: 14,
                      marginBottom: -16,
                      fontFamily: 'Inter',
                      fontSize: 14,
                      fontWeight: '500',
                    }}
                  >
                    Địa chỉ cụ thể
                    <label style={{ color: 'red', marginLeft: 5 }}>*</label>
                  </div>
                  <Form.Item
                    style={{ marginTop: 0 }}
                    name="realEstateLocationHomeNumber"
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng nhập địa chỉ cụ thể',
                      },
                    ]}
                  >
                    <LocateAutoComplete
                      bordered={false}
                      placeholder="Số nhà, tên đường"
                    />
                  </Form.Item>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={8} sm={6}>
            <PlaceHolderIcon />
            <label> tới đúng vị trí của bất động sản trên bản đồ.</label>
            <div style={{ padding: '0 10px 0 10px', marginTop: '22px' }}>
              <Image
                src={SRC_IMAGE.MAP}
                width={384}
                height={470}
                alt="map"
                priority
              />
            </div>
          </Col>
          <HideOnMobile>
            <Col lg={8} sm={6}>
              <div style={{ paddingLeft: 10, marginTop: 55 }}>
                <Location3>
                  <div style={{ display: 'flex', padding: '17px 17px 0 17px' }}>
                    <ProtectIcon />
                    <label
                      style={{
                        fontFamily: 'Inter',
                        fontSize: 14,
                        fontWeight: '700',
                        paddingLeft: '10px',
                      }}
                    >
                      Độ uy tín của tin đăng
                    </label>
                  </div>
                  <Divider
                    style={{
                      borderColor: '#39B4F333',
                      marginTop: 17,
                      marginBottom: 17,
                    }}
                  />
                  <div style={{ padding: '0 17px 17px 17px' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Checkbox onChange={() => console.log('change')}>
                        <label
                          style={{
                            fontSize: 14,
                            fontWeight: '500',
                            fontFamily: 'Inter',
                          }}
                        >
                          Thông tin chi tiết:
                        </label>
                      </Checkbox>
                      <label
                        style={{
                          fontSize: 14,
                          fontWeight: '500',
                          fontFamily: 'Inter',
                          color: '#7A7A7A',
                        }}
                      >
                        0/10
                      </label>
                    </div>
                    <Divider
                      style={{
                        marginTop: 10,
                        marginBottom: 17,
                        borderColor: '#39B4F333',
                      }}
                    />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Checkbox onChange={() => console.log('change')}>
                        <label
                          style={{
                            fontSize: 14,
                            fontWeight: '500',
                            fontFamily: 'Inter',
                          }}
                        >
                          Thông tin BĐS:
                        </label>
                      </Checkbox>
                      <label
                        style={{
                          fontSize: 14,
                          fontWeight: '500',
                          fontFamily: 'Inter',
                          color: '#7A7A7A',
                        }}
                      >
                        3/10
                      </label>
                    </div>
                    <Divider
                      style={{
                        marginTop: 10,
                        marginBottom: 17,
                        borderColor: '#39B4F333',
                      }}
                    />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Checkbox onChange={() => console.log('change')}>
                        <label
                          style={{
                            fontSize: 14,
                            fontWeight: '500',
                            fontFamily: 'Inter',
                          }}
                        >
                          Hình ảnh:
                        </label>
                      </Checkbox>
                      <label
                        style={{
                          fontSize: 14,
                          fontWeight: '500',
                          fontFamily: 'Inter',
                          color: '#7A7A7A',
                        }}
                      >
                        2/10
                      </label>
                    </div>
                    <Divider
                      style={{
                        marginTop: 10,
                        marginBottom: 17,
                        borderColor: '#39B4F333',
                      }}
                    />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Checkbox onChange={() => console.log('change')}>
                        <label
                          style={{
                            fontSize: 14,
                            fontWeight: '500',
                            fontFamily: 'Inter',
                          }}
                        >
                          Thông tin chi tiết:
                        </label>
                      </Checkbox>
                      <label
                        style={{
                          fontSize: 14,
                          fontWeight: '500',
                          fontFamily: 'Inter',
                          color: '#7A7A7A',
                        }}
                      >
                        0/10
                      </label>
                    </div>
                    <Divider
                      style={{
                        marginTop: 10,
                        marginBottom: 17,
                        borderColor: '#39B4F333',
                      }}
                    />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Checkbox onChange={() => console.log('change')}>
                        <label
                          style={{
                            fontSize: 14,
                            fontWeight: '500',
                            fontFamily: 'Inter',
                          }}
                        >
                          Thông tin liên hệ:
                        </label>
                      </Checkbox>
                      <label
                        style={{
                          fontSize: 14,
                          fontWeight: '500',
                          fontFamily: 'Inter',
                          color: '#7A7A7A',
                        }}
                      >
                        0/10
                      </label>
                    </div>
                  </div>
                </Location3>
              </div>
            </Col>
          </HideOnMobile>
        </Row>
      </Form>
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <ButtonNextStep onClick={() => onSubmit()}>
          Next
          <DoubleRightOutlined />
        </ButtonNextStep>
      </div>
    </AddListingWrapper>
  );
};

export default ChooseLocate;
