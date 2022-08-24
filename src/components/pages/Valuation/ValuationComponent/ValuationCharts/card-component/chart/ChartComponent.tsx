import React, { memo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { THEME_COLOR } from '../../ChartCard';
import { UnitLabel } from '../../valuationCharts.style';
import { MChart } from '@models/MChart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

interface Props{
  chartData ?:MChart
  theme ?:string,
  t:any;
}
const ChartComponent = (props:Props) => {
  const { theme = THEME_COLOR.common, t:translate, chartData} = props
  
  if(!chartData) return <></>
  
  const options = {
    responsive: true,
    backgroundColor:THEME_COLOR[theme],
    borderColor:THEME_COLOR[theme],
    tooltip: {
      enabled: true,
    },
    elements: {
      point: {
        radius: 5,
        pointStyle: 'circle',
      },
    },
    scales:{
      x:{
        grid:{
          borderColor:'#222222'
        },
        ticks:{
          color:'#222222'
        }
      },
      y:{
        min:0,
        grid:{
          borderColor:'#222222',
        },
        ticks:{
          color:'#222222',
        }
      }
    }
  };

  return (
    <div style={{position:'relative',marginTop:'50px'}}>
      <UnitLabel>{translate('valuation.million/m2')}</UnitLabel>
      <Line options={options} data={chartData} height={100} />
    </div>
  );
};

export default memo(ChartComponent);
