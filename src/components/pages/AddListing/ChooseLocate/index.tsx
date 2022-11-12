import { SRC_IMAGE } from '@constants';
import { PlaceHolderIcon, ProtectIcon } from '@root/public/icons';
import { getArea, getAreaStreet } from '@root/src/core/services/addlisting';
import { Checkbox, Col, Divider, Form, Row, Select, Typography } from 'antd';
import Image from 'next/image';
import React, {
  ReactElement,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';

import { HideOnMobile } from '../../Home/Home.style';
import {
  AddListingWrapper,
  LocateAutoComplete,
  LocateSelect,
  Location3,
} from '../AddListing.style';

const { Title } = Typography;

const ChooseLocate = (): ReactElement => {
  return (
    <AddListingWrapper>
      <Title className="mt-2 d-flex align-items-center" level={2}>
        Chọn vị trí
      </Title>
      <Form layout="vertical">
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
                  <Form.Item style={{ marginTop: 0 }} name="">
                    <LocateAutoComplete
                      placeholder={'Chọn dự án'}
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
                  <Form.Item name="areaProvinceId">
                    <LocateSelect
                      placeholder={'Chọn Tỉnh/ Thành Phố'}
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
                    Quận / Huyện
                    <label style={{ color: 'red', marginLeft: 5 }}>*</label>
                  </div>
                  <Form.Item style={{}} name="areaDistrictId">
                    <LocateSelect
                      placeholder={'Chọn Quận/ Huyện'}
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
                    Phường / Xã
                    <label style={{ color: 'red', marginLeft: 5 }}>*</label>
                  </div>
                  <Form.Item name="areaWardId">
                    <LocateSelect
                      placeholder={'Chọn Phường / Xã'}
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
                    Đường / Phố
                    <label style={{ color: 'red', marginLeft: 5 }}>*</label>
                  </div>
                  <Form.Item style={{ marginTop: 0 }} name="areaStreetId">
                    <LocateAutoComplete
                      placeholder={'Chọn Đường / Phố'}
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
                  >
                    <LocateAutoComplete bordered={false} />
                  </Form.Item>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={8} sm={6}>
            <PlaceHolderIcon />
            <label> tới đúng vị trí của bất động sản trên bản đồ.</label>
            <div style={{ padding: '0 10px 0 10px', marginTop: '22px' }}>
              <Image src={SRC_IMAGE.MAP} width={384} height={470} alt="map" />
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
    </AddListingWrapper>
  );
};

export default ChooseLocate;
