import {
  Button,
  Col,
  Form,
  Input,
  Popover,
  Radio,
  Row,
  Typography,
} from 'antd';
import {
  ButtonSearch,
  ColItem,
  InputSearch,
  RadioSearch,
  SearchWrapper,
  TextSearchWrap,
} from './SearchHome.style';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import {
  IconArrowDown,
  VectorApartement,
  VectorBed,
  VectorLocation,
  VectorResidential,
} from '@root/public/icons';

import FilterAdd from './component/FilterAdd';
import Link from 'next/link';
import { PUBLIC_ROUTES } from '@constants';
import { filterKey } from '@contexts';
import { useRouter } from 'next/router';

export const SearchHome = (props: { t: any }) => {
  const { t } = props;
  const router = useRouter();
  const onSearch = (data: any) => {
    const dataSearch = data.searchText
      ? { [filterKey.searchText.idQuery]: data.searchText }
      : {};
    router.push({
      pathname: data.page || PUBLIC_ROUTES.SEARCH_PAGE.href,
      query: dataSearch,
    });
  };

  const placeHolderSearch = () => {
    return (
      <>
        <Typography>{t('home.searchPlaceholder')}</Typography>
      </>
    );
  };

  const findPage = (e, path) => {
    router.push(path);
  };

  return (
    <>
      <Form onFinish={onSearch}>
        <Input.Group>
          <RadioSearch
            defaultValue="sell"
            buttonStyle="solid"
            size="middle"
            style={{
              display: 'flex',
              justifyItems: 'center',
            }}
          >
            <Radio.Button
              style={{
                width: '69px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '12px 0px 0px 0px',
                backgroundColor: '#E9E9E9',
                justifyContent: 'center',
              }}
              value="sell"
              className="radio-active"
            >
              <TextSearchWrap>
                <Typography.Text style={{ fontSize: 18, color: '#222222' }}>
                  Sell
                </Typography.Text>
              </TextSearchWrap>
            </Radio.Button>
            <Radio.Button
              style={{
                width: '77px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '0px 0px 0px 0px',
                justifyContent: 'center',
                backgroundColor: '#E9E9E9',
              }}
              value="rent"
              className="radio-active"
            >
              <TextSearchWrap>
                <Typography style={{ fontSize: 18, color: '#222222' }}>
                  Rent
                </Typography>
              </TextSearchWrap>
            </Radio.Button>
            <Radio.Button
              style={{
                width: '102px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '0px 0px 0px 0px',
                justifyContent: 'center',
                backgroundColor: '#E9E9E9',
              }}
              value="auction"
              className="radio-active"
            >
              <TextSearchWrap>
                <Typography style={{ fontSize: 18, color: '#222222' }}>
                  Auction
                </Typography>
              </TextSearchWrap>
            </Radio.Button>
            <Radio.Button
              style={{
                width: '107px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '0px 12px 0px 0px',
                justifyContent: 'center',
                backgroundColor: '#E9E9E9',
              }}
              value="tranfer"
              className="radio-active"
            >
              <TextSearchWrap>
                <Typography style={{ fontSize: 18, color: '#222222' }}>
                  Tranfer
                </Typography>
              </TextSearchWrap>
            </Radio.Button>
          </RadioSearch>

          <SearchWrapper style={{ borderRadius: '0px 12px 12px 12px' }}>
            <Row
              className="w-100 my-3"
              style={{
                background: '#F2F2F2',
                border: '1px solid #E9E9E9',
                borderRadius: '12px',
              }}
            >
              <ColItem md={{ span: 20 }} sm={{ span: 20 }} xs={{ span: 20 }}>
                <Form.Item name="searchText" style={{ margin: 0 }}>
                  <TextSearchWrap>
                    <InputSearch
                      placeholder={t('home.searchPlaceholder')}
                      prefix={<VectorLocation />}
                    />
                  </TextSearchWrap>
                </Form.Item>
              </ColItem>

              <ColItem
                md={{ span: 4 }}
                sm={{ span: 4 }}
                xs={{ span: 4 }}
                style={{
                  margin: 0,
                  display: 'flex',
                  justifyContent: 'end',
                  alignItems: 'center',
                }}
              >
                <Form.Item style={{ margin: 0 }}>
                  <ButtonSearch onClick={(e) => findPage(e, '/tim-kiem')}>
                    <SearchOutlined
                      style={{ fontSize: '5px', border: 'none' }}
                    />
                  </ButtonSearch>
                </Form.Item>
              </ColItem>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 72 }}>
              <ColItem sm={24} md={12} lg={6}>
                <div className="d-flex ">
                  <VectorApartement />
                  <TextSearchWrap>
                    <Typography.Text
                      style={{ fontSize: 16, color: '#7A7A7A' }}
                      className="px-2"
                    >
                      Residential
                    </Typography.Text>
                  </TextSearchWrap>
                  <DownOutlined style={{ fontSize: 13, color: '#7A7A7A' }} />
                </div>
              </ColItem>
              <ColItem sm={24} md={12} lg={6}>
                <div className="d-flex">
                  <VectorResidential />
                  <TextSearchWrap>
                    <Typography.Text
                      style={{ fontSize: 16, color: '#7A7A7A' }}
                      className="px-2"
                    >
                      Any Price
                    </Typography.Text>
                  </TextSearchWrap>
                  <DownOutlined style={{ fontSize: 13, color: '#7A7A7A' }} />
                </div>
              </ColItem>
              <ColItem sm={24} md={12} lg={6}>
                <div className="d-flex">
                  <VectorBed />
                  <TextSearchWrap>
                    <Typography.Text
                      style={{ fontSize: 16, color: '#7A7A7A' }}
                      className="px-2"
                    >
                      Any Beds
                    </Typography.Text>
                  </TextSearchWrap>
                  <DownOutlined style={{ fontSize: 13, color: '#7A7A7A' }} />
                </div>
              </ColItem>
              <ColItem sm={24} md={12} lg={6}>
                <div className="d-flex">
                  <VectorBed />
                  <Popover
                  placement="bottomRight"
                  content={FilterAdd}
                  trigger="click"
                >
                  <TextSearchWrap
                   
                  >
                   <Typography.Text
                      style={{ fontSize: 16, color: '#7A7A7A' }}
                      className="px-2"
                    >
                      Filter Add
                    </Typography.Text>
                  </TextSearchWrap>
                </Popover>
                <DownOutlined style={{ fontSize: 13, color: '#7A7A7A' }} />
                </div>
              </ColItem>
            </Row>
          </SearchWrapper>
        </Input.Group>
      </Form>
    </>
  );
};
