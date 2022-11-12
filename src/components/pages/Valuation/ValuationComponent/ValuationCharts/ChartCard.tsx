/* eslint-disable react/display-name */
/* eslint-disable react-hooks/exhaustive-deps */
import { Typography } from 'antd';
import {
  AVRowProgress,
  AVRRow,
  BtnWatchPost,
  CardWrap,
  ProgressWrap,
  BtnContainer
} from './valuationCharts.style';
import { colors } from '@styles/theme/colors';
import { VALBarAverange } from './card-component/valuationBarAverange';
import { memo, useEffect, useState } from 'react';
import {
  statisticalPriceByPostType,
  statisticalPriceByArea,
} from '@root/src/core/services/statistical';
import { formatNumToUnit } from '@root/src/core/utils/HandleNumber';
import { convertDateToString } from '@root/src/core/utils/HandleDate';
import { MChart, MPriceAverange } from '@models/MChart';
import { IconFourSquare } from '@root/public/icons';
import ChartComponent from './card-component/chart/ChartComponent';
import { ROUTES } from '@core';

interface Props {
  t: any;
  theme?: string;
  chartData?: MChart; // Truong hop truyen truc tiep data vao chart
  filter?: any; // Truyen filter vao chart se tu goi api va lay data
}

export const THEME_COLOR = {
  common: colors.common,
  green: '#2ECC71',
  blue: '#1DABF2',
};

const ChartCard = memo((props: Props) => {

  const {
    t: translate,
    theme = 'common',
    filter,
    chartData: data,
  } = props;

  // Data for chart
  const [chartData, setChartData] = useState<MChart>(data || new MChart([]));
  // Data for price bar
  const [averange, setAverange] = useState<MPriceAverange>(
    new MPriceAverange({})
  );
  const [isMounted, setIsMounted] = useState<boolean>(false)

  function handleDataFromNow(arrData:any[]) {
    const currentMonth = new Date().getMonth()+1
    const last = arrData.splice(0, currentMonth);
    return ([
        ...arrData,
        ...last
    ]);
  }

  function isNotEmpty(obj:Object) {
    let values = Object.values(obj)
    if (values.length === 3) {
      for (let i = 0; i < values.length; i++) {
        if (!values[i]) {
          return false
        }
      }
    } else {
      return false
    }
    return true
  }

  useEffect(() => {
    console.log(isNotEmpty(filter));
    
    if (isNotEmpty(filter) && !isMounted) {
      // Call api for chart
      const buildQuery = {
        areaProvinceId: filter.areaProvince?.areaDataId,
        areaDistrictId: filter.areaDistrict?.areaDataId,
        realEstateCategoryId: filter.realEstateCategory?.realEstateCategoryId
      }
      console.log('buildQuery', buildQuery);
      
      (async () => {
        const resPriceByArea = await statisticalPriceByArea(buildQuery);
        if (resPriceByArea) {
          resPriceByArea.labels = handleDataFromNow(resPriceByArea.labels)
          resPriceByArea.datasets[0].data = handleDataFromNow(resPriceByArea.datasets[0].data)
          setChartData(resPriceByArea);
        }

        // Call api for price
        const resPriceByPostType = await statisticalPriceByPostType(buildQuery);
        if (resPriceByPostType) {
          setAverange(resPriceByPostType);
        }

        setIsMounted(true)
      })();
    }
  }, [filter, isMounted]);

  function getTitleChart() {
    let title:String = 'Giá';
    if (filter && Object.keys(filter).length) {
      title = `${title} ${filter?.realEstateCategory?.realEstateCategoryName} ở ${filter?.areaDistrict?.areaDataName}, ${filter?.areaProvince?.areaDataName}`
    }
    return title;
  }

  return (
    <CardWrap>
      <Typography.Title level={4}>{getTitleChart()}</Typography.Title>
      {
        (averange.count > 0 || averange.countAgency > 0) && chartData ? (
          <>
            <AverageRow
              averange={averange}
              filter={filter}
              t={translate}
              theme={theme}
            />
            <ChartComponent t={translate} theme={theme} chartData={chartData} />
            {/* chinh chu */}
            <BtnContainer>
              <BtnWatchPost 
                onClick={() => {
                  if (!averange.count) return    
                  const queryBuilder = `?tinh=${filter?.areaProvinceId?.areaDataId || 2}&quan=${filter?.areaDistrict?.areaDataId || 3}&loaiBDS=${filter?.realEstateCategory?.realEstateCategoryId || 1 }`
                  if (window) {
                    window.location.href = window.origin + ROUTES.MAIN_FLOOR.href + queryBuilder
                  }
                }}
                accessKey={!!!averange.count ? 'ok' : "" }
              >
                <IconFourSquare /> {translate('valuation.preBtn')} {averange.count}{' '}
                {translate('valuation.subBtn1')}
              </BtnWatchPost>
              {/* Mo gioi */}
              <BtnWatchPost 
                onClick={() => {                            
                  const queryBuilder = `?tinh=${filter?.areaProvinceId?.areaDataId || 2}&quan=${filter?.areaDistrict?.areaDataId || 3}&loaiBDS=${filter?.realEstateCategory?.realEstateCategoryId || 1 }`
                  if (window) {
                    window.location.href = window.origin + ROUTES.BROKERAGE_FLOOR_PAGE.href + queryBuilder
                  }
                }}
                accessKey={!!!averange.countAgency ? "ok" : ""}
              >
                <IconFourSquare /> {translate('valuation.preBtn')} {averange.countAgency}{' '}
                {translate('valuation.subBtn2')}
              </BtnWatchPost>
            </BtnContainer>
          </>
        ) : (
          <Typography.Title level={3} type='danger'>{isMounted ? translate("home.noData") : translate("home.loading")}</Typography.Title>
        )
      }
    </CardWrap>
  );
});

const AverageRow: React.FC<{
  t: any;
  theme: string;
  filter: {};
  averange: MPriceAverange;
}> = memo(({ t: translate, theme, averange }) => {
  return (
    <>
      <AVRRow>
        <h2>{translate('valuation.average')}</h2>
        <h1 style={{ color: THEME_COLOR[theme] }}>
          {formatNumToUnit(averange.averange.toFixed(0), translate)}
        </h1>
      </AVRRow>
      <AVRowProgress>
        <label>{translate('valuation.million/m2')}</label>
        <div>
          <ProgressWrap>
            <VALBarAverange
              averange={formatNumToUnit(averange.min, translate)}
              direction="left"
              theme={THEME_COLOR[theme]}
            />
          </ProgressWrap>
          <ProgressWrap>
            <VALBarAverange
              averange={formatNumToUnit(averange.max, translate)}
              theme={THEME_COLOR[theme]}
            />
          </ProgressWrap>
        </div>
        <div>
          <p>
            {translate('valuation.popularPrice')} {convertDateToString()}
          </p>
        </div>
      </AVRowProgress>
    </>
  );
});

export default ChartCard;
