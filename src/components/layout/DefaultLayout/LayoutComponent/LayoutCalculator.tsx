import { SRC_IMAGE } from '@core';
import { MPostDetail } from '@models/MPostDetail';
import { Favorited, IconHeart } from '@root/public/icons';
import { formatNumToUnit } from '@root/src/core/utils/HandleNumber';
import {
  Button,
  Col,
  Divider,
  Image,
  InputNumber,
  Row,
  Slider,
  Table,
  Typography,
} from 'antd';
import {
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  registerables,
} from 'chart.js';
import { useState } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

import { DefaultRowTitle, DefaultWrapperWithBg } from '..';
import {
  SpotlightText,
  SpotlightWrap,
} from '../../../pages/Spotlight/Spotlight.style';
import { WidgetLogoBank } from '../../../shared/WidgetUserInfo';
import { DefaultContentInWrapper } from './Component.style';
import {
  RowActions,
  RowPrice,
  RowPriceLeft,
  RowPriceRight,
  TagProperty,
} from './Component.style';

ChartJS.register(...registerables);

export const LayoutCalculator = (props: {
  t: any;
  hrefMain?: { name: string; href: string };
  post?: MPostDetail;
}) => {
  const { t: translate, post, hrefMain } = props;
  const [inputValue, setInputValue] = useState(1);
  const [inputValue1, setInputValue1] = useState(1);
  const [inputValue2, setInputValue2] = useState(1);
  const [inputValue3, setInputValue3] = useState(1);

  const onChange = newValue => {
    setInputValue(newValue);
  };
  const data = {
    labels: ['Down Payment', 'Loan Amount'],
    datasets: [
      {
        type: 'doughnut',
        label: 'Dataset',
        data: [300, 50],
        backgroundColor: ['#1FB8F9', '#741FF9'],
      },
    ],
  };
  return (
    <>
      <DefaultWrapperWithBg>
        <DefaultContentInWrapper>
          <RowPriceLeft>
            <DefaultRowTitle>
              <label
                style={{
                  fontFamily: 'Inter',
                  fontSize: 28,
                  fontWeight: '700',
                  marginBottom: 20,
                }}
              >
                Loan Calculator
              </label>
            </DefaultRowTitle>
            <Row
              style={{
                padding: '22px 22px 0 22px',
                borderWidth: 1,
                borderColor: '#39B4F333',
                borderRadius: 12,
                borderStyle: 'solid',
                backgroundColor: '#39B4F305',
                justifyContent: 'space-between',
              }}
            >
              <Col lg={5} md={11} xs={24} style={{ marginBottom: 22 }}>
                <label
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#7A7A7A',
                    marginBottom: 12,
                  }}
                >
                  Propertiy Price
                </label>
                <div>
                  <div style={{ display: 'flex' }}>
                    <div
                      style={{
                        borderWidth: 1,
                        borderColor: '#D3D3D3',
                        padding: '10px 10px 5px 10px',
                        borderStyle: 'solid',
                        alignItems: 'center',
                        color: '#222222',
                        fontSize: 14,
                        fontWeight: '800',
                        fontFamily: 'Inter',
                      }}
                    >
                      đ
                    </div>
                    <InputNumber
                      min={1}
                      max={20}
                      style={{
                        margin: '0 0px',
                        marginLeft: -1,
                        alignItems: 'center',
                        padding: '5px 0px 5px 0px',
                        color: '#222222',
                        fontSize: 14,
                        fontWeight: '800',
                        fontFamily: 'Inter',
                        width: '100%',
                      }}
                      value={inputValue}
                      onChange={onChange}
                    />
                  </div>
                  <div>
                    <Slider
                      min={1}
                      max={20}
                      onChange={onChange}
                      value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                  </div>
                </div>

                <label
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#7A7A7A',
                    margin: '30px 0 12px 0',
                  }}
                >
                  Interest Rate
                </label>
                <div>
                  <div
                    style={{
                      display: 'flex',
                      borderWidth: 1,
                      borderColor: '#D3D3D3',
                      borderStyle: 'solid',
                      justifyContent: 'space-between',
                    }}
                  >
                    <InputNumber
                      min={1}
                      max={20}
                      style={{
                        margin: '0 0px',
                        alignItems: 'center',
                        padding: '5px 0px 5px 0px',
                        color: '#222222',
                        fontSize: 14,
                        fontWeight: '800',
                        fontFamily: 'Inter',
                        borderWidth: 0,
                      }}
                      value={inputValue}
                      onChange={onChange}
                    />
                    <div
                      style={{
                        paddingTop: 10,
                        alignItems: 'center',
                        color: '#222222',
                        fontSize: 14,
                        fontWeight: '800',
                        fontFamily: 'Inter',
                        marginRight: 10,
                      }}
                    >
                      %
                    </div>
                  </div>
                  <div>
                    <Slider
                      min={1}
                      max={20}
                      onChange={onChange}
                      value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                  </div>
                </div>
              </Col>
              <Col lg={5} md={11} xs={24} style={{ marginBottom: 22 }}>
                <label
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#7A7A7A',
                    marginBottom: 12,
                  }}
                >
                  Down Payment
                </label>
                <div>
                  <div style={{ display: 'flex' }}>
                    <div
                      style={{
                        borderWidth: 1,
                        borderColor: '#D3D3D3',
                        padding: '10px 10px 5px 10px',
                        borderStyle: 'solid',
                        alignItems: 'center',
                        color: '#222222',
                        fontSize: 14,
                        fontWeight: '800',
                        fontFamily: 'Inter',
                      }}
                    >
                      đ
                    </div>
                    <InputNumber
                      min={1}
                      max={20}
                      style={{
                        margin: '0 0px',
                        marginLeft: -1,
                        marginRight: -1,
                        alignItems: 'center',
                        padding: '5px 0px 5px 0px',
                        color: '#222222',
                        fontSize: 14,
                        fontWeight: '800',
                        fontFamily: 'Inter',
                        width: '100%',
                      }}
                      value={inputValue}
                      onChange={onChange}
                    />
                    <div
                      style={{
                        borderWidth: 1,
                        borderColor: '#D3D3D3',
                        padding: '10px 10px 5px 10px',
                        borderStyle: 'solid',
                        alignItems: 'center',
                        color: '#222222',
                        fontSize: 14,
                        fontWeight: '800',
                        fontFamily: 'Inter',
                      }}
                    >
                      20%
                    </div>
                  </div>
                  <div>
                    <Slider
                      min={1}
                      max={20}
                      onChange={onChange}
                      value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                  </div>
                </div>

                <label
                  style={{
                    fontFamily: 'Inter',
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#7A7A7A',
                    margin: '30px 0 12px 0',
                  }}
                >
                  Loan Term
                </label>
                <div>
                  <div
                    style={{
                      display: 'flex',
                      borderWidth: 1,
                      borderColor: '#D3D3D3',
                      borderStyle: 'solid',
                      justifyContent: 'space-between',
                    }}
                  >
                    <InputNumber
                      min={1}
                      max={20}
                      style={{
                        margin: '0 0px',
                        alignItems: 'center',
                        padding: '5px 0px 5px 0px',
                        color: '#222222',
                        fontSize: 14,
                        fontWeight: '800',
                        fontFamily: 'Inter',
                        borderWidth: 0,
                      }}
                      value={inputValue}
                      onChange={onChange}
                    />
                    <div
                      style={{
                        paddingTop: 10,
                        alignItems: 'center',
                        color: '#222222',
                        fontSize: 14,
                        fontWeight: '800',
                        fontFamily: 'Inter',
                        marginRight: 10,
                      }}
                    >
                      Years
                    </div>
                  </div>
                  <div>
                    <Slider
                      min={1}
                      max={20}
                      onChange={onChange}
                      value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                  </div>
                </div>
              </Col>
              <Col lg={6} md={11} xs={24} style={{ marginBottom: 22 }}>
                <Doughnut data={data} />
              </Col>
              <Col lg={6} md={11} xs={24} style={{ marginBottom: 22 }}>
                <WidgetLogoBank t={translate} post={props.post} />
              </Col>
            </Row>
          </RowPriceLeft>
        </DefaultContentInWrapper>
      </DefaultWrapperWithBg>
    </>
  );
};
