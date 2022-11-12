/* eslint-disable react-hooks/exhaustive-deps */
import { POST_TYPE_PARAMS, ROUTES } from '@constants';
import { UserContext } from '@contexts';
import { MPostDetail } from '@models/MPostDetail';
import { getDataArea } from '@root/src/core/services/dataFilter';
import dynamic from 'next/dynamic';
import { useContext, useEffect, useState } from 'react';

import { DefaultContentNoGrid, DefaultWrapperWithBg } from '../../layout';
import { ChartPlace } from './ValuationComponent/ValuationCharts/valuationCharts.style';
import { ValuationFilter } from './ValuationComponent/ValuationFilter';
import { ValuationRefer } from './ValuationComponent/ValuationRefer/index';

interface Props {
  t: any;
  listCare: MPostDetail[];
}
export enum CONSTANT_VALUATION {
  HCM_ID = 2,
  HN_ID = 4,
}
const Valuation = (props: Props) => {
  const { t: translate, listCare } = props;
  const [listHCM, setListHCM] = useState([]);
  const [listHN, setListHN] = useState([]);
  const DynamicRowPost = dynamic(
    () => import('../../../components/pages/Home/HomeComponent/RowPosts'),
  );
  const DynamicValuationRefer: any = dynamic(() =>
    import('./ValuationComponent/ValuationRefer/index').then(
      (mod: any) => mod.ValuationRefer,
    ),
  );
  const DynamicChartCard = dynamic(
    () => import('./ValuationComponent/ValuationCharts/index'),
  );
  const { listUserSave } = useContext(UserContext);

  // Get list RES refer: res HCM & res HN
  useEffect(() => {
    let mouted = true;
    getDataArea('', CONSTANT_VALUATION.HCM_ID).then(res => {
      if (res && mouted) {
        setListHCM(res.data);
      }
    });
    getDataArea('', CONSTANT_VALUATION.HN_ID).then(res => {
      if (res && mouted) {
        setListHN(res.data);
      }
    });
    return () => {
      mouted = false;
    };
  }, []);

  return (
    <>
      <DefaultWrapperWithBg>
        <DefaultContentNoGrid>
          <ValuationFilter t={translate} />

          <ChartPlace>
            <DynamicChartCard t={translate} />
          </ChartPlace>

          <ValuationRefer
            title={translate('valuation.referHCM')}
            listRefer={listHCM}
            provinceId={CONSTANT_VALUATION.HCM_ID}
          />

          <ValuationRefer
            title={translate('valuation.referHN')}
            listRefer={listHN}
            provinceId={CONSTANT_VALUATION.HN_ID}
          />
        </DefaultContentNoGrid>
      </DefaultWrapperWithBg>

      {/* BDS da luu */}
      {listUserSave?.data?.length ? (
        <DefaultWrapperWithBg>
          <DynamicRowPost
            t={translate}
            title={translate('home.realEstateSaved')}
            subTitle={'home.subSaved'}
            posts={listUserSave?.data}
            pathName={POST_TYPE_PARAMS.POST_SAVED.params}
          />
        </DefaultWrapperWithBg>
      ) : (
        <></>
      )}

      {/* BDS co the quan tam */}
      {listCare?.length ? (
        <DefaultWrapperWithBg>
          <DynamicRowPost
            t={translate}
            title={'home.resMaybeCare'}
            subTitle={'home.subResMaybeCare'}
            posts={listCare}
          />
        </DefaultWrapperWithBg>
      ) : (
        <></>
      )}
    </>
  );
};

export default Valuation;
