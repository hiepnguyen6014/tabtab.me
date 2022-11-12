import { Plus, SearchYellow } from '@root/public/icons';
import { Col, Divider, Input, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

import { getListRealEstate, getPostByRating } from '../../../core/services';
import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout';
import About from './About';
import ContactInfo from './ContactInfo';
import { FDesktop, SwapAdd } from './ELearning.style';
import RatedClasses from './RatedClasses';
import RatingReview from './RatingReview';

export default function ELearning({ translate }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  });
  const getData = async () => {
    const listByRating: any = await getListRealEstate({});
    setData(listByRating.data);
  };
  return (
    <DefaultLayout t={translate}>
      <div style={{ background: '#F0F2F5' }}>
        <FDesktop>
          <label
            style={{
              fontSize: 14,
              fontWeight: '500',
              fontFamily: 'Inter',
              color: '#7A7A7A',
              marginTop: 20,
              marginBottom: 30,
            }}
          >
            Tên Section
            <label style={{ marginRight: 10, marginLeft: 10 }}>{'>'}</label>
            <label
              style={{
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'Inter',
                color: '#F9BD06',
              }}
            >
              e-learning
            </label>
          </label>
        </FDesktop>
        <ContactInfo t={translate} />
        <About t={translate} />
        <RatingReview />
        <RatedClasses t={translate} data={data.slice(0, 4)} />
      </div>
    </DefaultLayout>
  );
}
