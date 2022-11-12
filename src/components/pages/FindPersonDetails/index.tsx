import { SRC_IMAGE } from '@core';
import {
  IconEmailTabTab,
  IconPhoneTabTab,
  Logo5Team,
  Plus,
} from '@root/public/icons';
import { getListRealEstate, getPostByRating } from '@root/src/core/services';
import { checkIsHomePage } from '@utils';
import { Divider, Typography } from 'antd';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useState } from 'react';

import DefaultLayout from '../../layout/DefaultLayout/DefaultLayout';
import HeaderComponent from '../../layout/Header';
import ContactInfo from './ContactInfo';
import { FDesktop, FDesktopSecond, SwapAdd } from './FindPersonDetails.style';
import Recommend from './Recommend';
import Review from './Review';
import TeamListing from './TeamListing';

const data = {
  firstName: 'An',
  lastName: 'Nguyễn Vũ',
  userAvatar: SRC_IMAGE.GROUP4,
  realEstatePhone: '',
  realEstateEmail: '',
};

export default function FindpersonDetailsComponent({ translate }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const listByRating: any = await getListRealEstate({});
    try {
      setData(listByRating.data.slice(0, 8));
    } catch (e) {
      setData([]);
    }
  };
  return (
    <DefaultLayout t={translate}>
      <div
        style={{
          position: 'relative',
          width: '95%',
          maxWidth: 1200,
          margin: 'auto',
        }}
      >
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
            find-person
          </label>
        </label>
      </div>
      <FDesktop grid={true}>
        <div style={{}}>
          <ContactInfo post={data} t={translate} />
        </div>
        <div>
          <Typography
            style={{
              fontFamily: 'Inter',
              fontSize: 24,
              fontWeight: '700',
              marginTop: 10,
            }}
          >
            Tên Team
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
            <IconEmailTabTab />
            <text
              style={{
                fontSize: 16,
                fontWeight: '600',
                fontFamily: 'Inter',
                color: '#7A7A7A',
                marginLeft: 10,
              }}
            >
              email@gmail.com
            </text>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
            <IconPhoneTabTab />
            <text
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                color: '#7A7A7A',
                marginLeft: 10,
              }}
            >
              0961653842
            </text>
          </div>
          <Typography
            style={{
              fontFamily: 'Inter',
              fontSize: 18,
              fontWeight: '700',
              marginTop: 70,
              marginBottom: 20,
            }}
          >
            About 5 Borough Team
          </Typography>
          <Logo5Team />
          <Typography
            style={{
              fontFamily: 'Inter',
              fontSize: 16,
              fontWeight: '400',
              marginTop: 30,
              marginBottom: 20,
            }}
          >
            Introducing the 5 Borough Team, a team that is the epitome of
            success for all. If you want something done above and beyond, this
            is the team for you. Having a combined 65 years of experience, with
            diverse backgrounds of sales, banking, and mortgages. As a seasoned
            real estate team, they recognize and value the trust of their
            clients, striving each day to exceed their expectations. Real estate
            isn’t just a job, it’s a process of being involved in the community
            for the better.
            <br />
            <br />
            Partnering with Compass has given the team the tools for exponential
            success by providing the client with marketing, technology, and the
            skills to help them in their real estate endeavors. They are in
            business for the client, focused on supporting them throughout the
            entire process. The passion they have for real estate is evident in
            the relief they provide their clients.
            <br />
            <br />
            All agents on the team are from New York City, and have an immense
            passion to build communities for a better tomorrow. The knowledge
            brought to the table is impeccable with specializations in
            residential, investment properties, short sales and many more.
            Additionally, the network of the team has reached new heights
            growing daily, with proven success rates. This is a team with many
            talents, interests, and bilingual agents that have the expertise to
            help individuals and families, assisting them in finding their
            place. Treating each client like they are family, securing that
            every action is as successful and effortless as possible.
          </Typography>
        </div>
      </FDesktop>

      <FDesktopSecond grid={true}>
        <div />
        <TeamListing />
      </FDesktopSecond>

      <FDesktopSecond grid={true} style={{ marginTop: 80 }}>
        <div />
        <Review />
      </FDesktopSecond>
      <FDesktopSecond grid={true}>
        <div />
        <div>
          <Typography
            style={{
              fontSize: 20,
              fontFamily: 'Inter',
              fontWeight: '700',
              marginBottom: 20,
            }}
          >
            Map Listing
          </Typography>
          <img src={SRC_IMAGE.MAPFIND} />
        </div>
      </FDesktopSecond>
      <FDesktop style={{ marginTop: 72, marginBottom: 72 }}>
        <Divider style={{ borderColor: '#D3D3D3' }} />
      </FDesktop>
      <div
        style={{
          position: 'relative',
          width: '95%',
          maxWidth: 1200,
          margin: 'auto',
        }}
      >
        <Recommend data={data} t={translate} fontSize={32} />
      </div>
    </DefaultLayout>
  );
}
