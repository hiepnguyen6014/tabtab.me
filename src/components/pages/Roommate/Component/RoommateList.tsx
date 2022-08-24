import { SRC_IMAGE } from '@core';
import PaginationWrapCustom from '@root/src/components/shared/PaginationCustom/PaginationCustom';
import { Col, Row } from 'antd';
import ItemRoommate from './ItemRoommate';

const RoommateList: React.FC<{}> = () => {
  const ROOMMATELIST = [
    {
      avatar: SRC_IMAGE.ROOMMATE1,
      name: 'An Vũ',
      age: '27 tuổi',
      sex: 'Nữ',
      role: 'Sale Manager',
      company: 'CMC Corp',
      coin: '24t',
      content:
        'This 25-storey condominium is situated in Chroy Changva District...',
      searchFor1: '20$ to 45$',
      searchFor2: 'Male',
      searchFor3: 'Quận 1 , HCM city',
      distance: '800m',
    },
    {
      avatar: SRC_IMAGE.ROOMMATE2,
      name: 'An Vũ',
      age: '28 tuổi',
      sex: 'Nữ',
      role: 'Sale Manager',
      company: 'CMC Corp',
      coin: '24t',
      content:
        'This 25-storey condominium is situated in Chroy Changva District...',
      searchFor1: '20$ to 45$',
      searchFor2: 'Male',
      searchFor3: 'Quận 1 , HCM city',
      distance: '800m',
      colorWrap: "#ff0000"
    },
    {
      avatar: SRC_IMAGE.ROOMMATE3,
      name: 'An Vũ',
      age: '27 tuổi',
      sex: 'Nữ',
      role: 'Sale Manager',
      company: 'CMC Corp',
      coin: '24t',
      content:
        'This 25-storey condominium is situated in Chroy Changva District...',
      searchFor1: '20$ to 45$',
      searchFor2: 'Male',
      searchFor3: 'Quận 1 , HCM city',
      distance: '800m',
      colorWrap: "#6d656b"
    },
    {
      avatar: SRC_IMAGE.ROOMMATE1,
      name: null,
      age: '27 tuổi',
      sex: 'Nữ',
      role: 'Sale Manager',
      company: 'CMC Corp',
      coin: '24t',
      content:
        'This 25-storey condominium is situated in Chroy Changva District...',
      searchFor1: '20$ to 45$',
      searchFor2: 'Male',
      searchFor3: 'Quận 1 , HCM city',
      distance: '800m',
      colorWrap: "#ff0000"
    },
    {
      avatar: SRC_IMAGE.ROOMMATE3,
      name: 'An Vũ',
      age: '27 tuổi',
      sex: 'Nữ',
      role: 'Sale Manager',
      company: 'CMC Corp',
      coin: '24t',
      content:
        'This 25-storey condominium is situated in Chroy Changva District...',
      searchFor1: '20$ to 45$',
      searchFor2: 'Male',
      searchFor3: 'Quận 1 , HCM city',
      distance: '800m',
    },
    {
      avatar: SRC_IMAGE.ROOMMATE1,
      name: 'An Vũ',
      age: '27 tuổi',
      sex: 'Nữ',
      role: 'Sale Manager',
      company: 'CMC Corp',
      coin: '24t',
      content:
        'This 25-storey condominium is situated in Chroy Changva District...',
      searchFor1: '20$ to 45$',
      searchFor2: 'Male',
      searchFor3: 'Quận 1 , HCM city',
      distance: '800m',
      colorWrap: "#6d656b"
    },
    {
      avatar: SRC_IMAGE.ROOMMATE2,
      name: '',
      age: '27 tuổi',
      sex: 'Nữ',
      role: 'Sale Manager',
      company: 'CMC Corp',
      coin: '24t',
      content:
        'This 25-storey condominium is situated in Chroy Changva District...',
      searchFor1: '20$ to 45$',
      searchFor2: 'Male',
      searchFor3: 'Quận 1 , HCM city',
      distance: '800m',
      colorWrap: "#6d656b"
    },
    {
      avatar: SRC_IMAGE.ROOMMATE1,
      name: 'An Vũ',
      age: '27 tuổi',
      sex: 'Nữ',
      role: 'Sale Manager',
      company: 'CMC Corp',
      coin: '24t',
      content:
        'This 25-storey condominium is situated in Chroy Changva District...',
      searchFor1: '20$ to 45$',
      searchFor2: 'Male',
      searchFor3: 'Quận 1 , HCM city',
      distance: '800m',
    },
    {
      avatar: SRC_IMAGE.ROOMMATE3,
      name: 'An Vũ',
      age: '27 tuổi',
      sex: 'Nữ',
      role: 'Sale Manager',
      company: 'CMC Corp',
      coin: '24t',
      content:
        'This 25-storey condominium is situated in Chroy Changva District...',
      searchFor1: '20$ to 45$',
      searchFor2: 'Male',
      searchFor3: 'Quận 1 , HCM city',
      distance: '800m',
    },
    {
      avatar: SRC_IMAGE.ROOMMATE2,
      name: '',
      age: '27 tuổi',
      sex: 'Nữ',
      role: 'Sale Manager',
      company: 'CMC Corp',
      coin: '24t',
      content:
        'This 25-storey condominium is situated in Chroy Changva District...',
      searchFor1: '20$ to 45$',
      searchFor2: 'Male',
      searchFor3: 'Quận 1 , HCM city',
      distance: '800m',
    },
    {
      avatar: SRC_IMAGE.ROOMMATE1,
      name: 'An Vũ',
      age: '27 tuổi',
      sex: 'Nữ',
      role: 'Sale Manager',
      company: 'CMC Corp',
      coin: '24t',
      content:
        'This 25-storey condominium is situated in Chroy Changva District...',
      searchFor1: '20$ to 45$',
      searchFor2: 'Male',
      searchFor3: 'Quận 1 , HCM city',
      distance: '800m',
    },
    {
      avatar: SRC_IMAGE.ROOMMATE2,
      name: 'An Vũ',
      age: '27 tuổi',
      sex: 'Nữ',
      role: 'Sale Manager',
      company: 'CMC Corp',
      coin: '24t',
      content:
        'This 25-storey condominium is situated in Chroy Changva District...',
      searchFor1: '20$ to 45$',
      searchFor2: 'Male',
      searchFor3: 'Quận 1 , HCM city',
      distance: '800m',
      colorWrap: "#6d656b"
    },
  ];
  return (
    <>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {ROOMMATELIST.map((item, key) => {
          return (
            <Col
              className="gutter-row my-4"
              xs={24}
              sm={12}
              md={8}
              lg={6}
              key={key}
            >
              <ItemRoommate items={item} key={key} />
            </Col>
          );
        })}
      </Row>
      <PaginationWrapCustom defaultCurrent={1} total={50} />
    </>
  );
};

export default RoommateList;
