import { SRC_IMAGE } from '@constants';
import { MPostDetail } from '@models/MPostDetail';
import {
  IconApartement,
  IconCertuficate,
  IconHouse,
  IconStair,
} from '@root/public/icons';
import { Button, Divider, Image, Typography } from 'antd';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import {
  DefaultContentInWrapper,
  DefaultRowTitle,
  DefaultWrapperWithBg,
} from '..';
import { getPostByRating } from '../../../../core/services';
import RecommendProperty from '../../../pages/Home/HomeComponent/Recommend';
import { ListWrapper } from '../../../shared/Utilities/Utilities.style';
import { RowPriceLeft } from './Component.style';

export const LayoutProperties = (props: { t: any; post: MPostDetail }) => {
  const { t, post } = props;
  const [data, setData] = useState([]);

  const DynamicUtility = dynamic(
    () => import('../../../shared/Utilities/ListUtilities'),
  );
  const DynamicNotifyOutdate = dynamic(() =>
    import('../../../shared/WidgetUserInfo/NotifyOutdate').then(
      (mod: any) => mod.NotifyOutdate,
    ),
  );
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const listByRating: any = await getPostByRating();
    setData(listByRating.data);
  };
  return (
    <>
      <DefaultWrapperWithBg style={{ padding: 10 }}>
        <RecommendProperty data={data} t={t} fontSize={28} />
      </DefaultWrapperWithBg>
    </>
  );
};
