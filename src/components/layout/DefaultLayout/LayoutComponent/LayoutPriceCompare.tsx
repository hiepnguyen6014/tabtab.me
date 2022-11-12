import { MPostDetail } from '@models/MPostDetail';
import { Col, Divider, Row, Table, Typography } from 'antd';
import {
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  registerables,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

import { DefaultWrapperWithBg } from '..';
import { DefaultContentInWrapperMajor } from './Component.style';
import {
  RowActions,
  RowPrice,
  RowPriceLeft,
  RowPriceRight,
  TagProperty,
} from './Component.style';

ChartJS.register(...registerables);
export const LayoutPriceCompare = (props: {
  t: any;
  hrefMain?: { name: string; href: string };
  post?: MPostDetail;
}) => {
  const { t: translate, post, hrefMain } = props;
  const data1 = {
    datasets: [
      {
        label: 'label1',
        type: 'line',
        data: [
          4000000, 0, 2000000, 0, 3000000, 2000000, 0, 1500000, 0, 1000000,
        ],
        backgroundColor: ['#741FF9', '#741FF9'],
        borderColor: '#084de0',
      },
      {
        label: 'label2',
        type: 'bar',
        data: [
          8000000, 4000000, 8000000, 0, 8000000, 0, 0, 6000000, 4000000,
          8000000,
        ],
        backgroundColor: ['#1FB8F9', '#1FB8F9'],
      },
    ],
    labels: [
      '05/01/2020',
      '05/01/2020',
      '05/01/2020',
      '05/01/2020',
      '05/01/2020',
      '05/01/2020',
      '05/01/2020',
      '05/01/2020',
      '05/01/2020',
      '05/01/2020',
    ],
  };

  const options = {
    responsive: true,
    backgroundColor: 'white',
    borderColor: '#1FB8F9',
    tooltip: {
      enabled: true,
    },
    elements: {
      point: {
        radius: 5,
        pointStyle: 'circle',
      },
    },
    scales: {
      x: {
        grid: {
          borderColor: '#222222',
        },
        ticks: {
          color: '#222222',
        },
      },
      y: {
        min: 0,
        grid: {
          borderColor: '#222222',
        },
        ticks: {
          color: '#222222',
        },
      },
    },
  };

  return (
    <>
      <DefaultWrapperWithBg>
        <DefaultContentInWrapperMajor>
          <RowPrice>
            <RowPriceLeft className="container-fluid">
              <label
                style={{
                  fontFamily: 'Inter',
                  fontSize: 28,
                  fontWeight: '700',
                  marginBottom: 20,
                }}
              >
                Price Compare
              </label>
              <Bar options={options} data={data1} />
            </RowPriceLeft>
          </RowPrice>
        </DefaultContentInWrapperMajor>
      </DefaultWrapperWithBg>
    </>
  );
};
