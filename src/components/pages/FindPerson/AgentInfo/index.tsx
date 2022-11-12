import { SRC_IMAGE } from '@core';
import PaginationWrapCustom from '@root/src/components/shared/PaginationCustom/PaginationCustom';
import { Divider, Pagination, Row, Typography } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { ColWrap } from '../../Home/Home.style';
import Agent from './Agent';
import Person from './Person';

export default function AgentInfo() {
  const { t: translate } = useTranslation('common');
  const person = [
    {
      firstName: 'Cody',
      lastName: 'Fisher',
      userAvatar: SRC_IMAGE.PERSON4,
      realEstatePhone: '',
      realEstateEmail: '',
    },
    {
      firstName: 'Floyd',
      lastName: 'Miles',
      userAvatar: SRC_IMAGE.PERSON5,
      realEstatePhone: '',
      realEstateEmail: '',
    },
    {
      firstName: 'Jerome',
      lastName: 'Bell',
      userAvatar: SRC_IMAGE.PERSON2,
      realEstatePhone: '',
      realEstateEmail: '',
    },
    {
      firstName: 'Savannah',
      lastName: 'Nguyen',
      userAvatar: SRC_IMAGE.PERSON6,
      realEstatePhone: '',
      realEstateEmail: '',
    },
    {
      firstName: 'Eleanor',
      lastName: 'Pena',
      userAvatar: SRC_IMAGE.PERSON7,
      realEstatePhone: '',
      realEstateEmail: '',
    },
    {
      firstName: 'Jenny',
      lastName: 'Wilson',
      userAvatar: SRC_IMAGE.PERSON8,
      realEstatePhone: '',
      realEstateEmail: '',
    },
  ];
  const agent = [
    {
      firstName: 'Cody',
      lastName: 'Fisher',
      userAvatar: SRC_IMAGE.GROUP1,
      realEstatePhone: '',
      realEstateEmail: '',
    },
    {
      firstName: 'Floyd',
      lastName: 'Miles',
      userAvatar: SRC_IMAGE.GROUP2,
      realEstatePhone: '',
      realEstateEmail: '',
    },
    {
      firstName: 'Jerome',
      lastName: 'Bell',
      userAvatar: SRC_IMAGE.GROUP3,
      realEstatePhone: '',
      realEstateEmail: '',
    },
  ];
  return (
    <div>
      <Typography
        style={{
          marginTop: 40,
          marginBottom: 30,
          fontFamily: 'Inter',
          fontSize: 20,
          fontWeight: '700',
        }}
      >
        Agent
      </Typography>
      <Row gutter={24}>
        {agent.map((item, key) => (
          <ColWrap
            key={key}
            className="gutter-row"
            sm={24}
            lg={12}
            xl={8}
            md={12}
            xs={24}
          >
            <Link href="/find-person-detail" legacyBehavior>
              <Agent post={item} t={translate} />
            </Link>
          </ColWrap>
        ))}
      </Row>
      <Divider style={{ marginTop: 40 }} />
      <Typography
        style={{
          marginTop: 40,
          marginBottom: 30,
          fontFamily: 'Inter',
          fontSize: 20,
          fontWeight: '700',
        }}
      >
        Person
      </Typography>
      <Row gutter={24}>
        {person.map((item, key) => (
          <ColWrap
            key={key}
            className="gutter-row"
            sm={24}
            lg={12}
            xl={8}
            md={12}
            xs={24}
          >
            <Person post={item} t={translate} />
          </ColWrap>
        ))}
      </Row>
      <PaginationWrapCustom total={10} pageSize={1} />
    </div>
  );
}
