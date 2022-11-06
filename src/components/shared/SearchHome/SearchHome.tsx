import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { PUBLIC_ROUTES } from '@constants';
import { filterKey } from '@contexts';
import {
  IconAnyPrice,
  IconApartement,
  VectorBed,
  VectorLocation,
} from '@root/public/icons';
import { Form, Input, Popover, Radio, Row, Typography } from 'antd';
import { useRouter } from 'next/router';

import {
  ButtonSearch,
  ColItem,
  FilterItem,
  InputSearch,
  RadioSearch,
  SearchWrapper,
  TextSearchWrap,
} from './SearchHome.style';
import Area from './component/Area';
import FilterAdd from './component/FilterAdd';
import Price from './component/Price/Price';
import Residential from './component/Residential';

export const SearchHome = (props: { t: any }) => {
  const { t: translate } = props;
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

  const findPage = (e: any, path: string) => {
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
                borderRadius: '12px 0px 0px 0px',
              }}
              value="sell"
              className="radio-default radio-actives"
            >
              <TextSearchWrap>
                <Typography.Text style={{ fontSize: 18, color: '#222222' }}>
                  {translate('home.sell')}
                </Typography.Text>
              </TextSearchWrap>
            </Radio.Button>
            <Radio.Button
              style={{
                borderRadius: '0px 12px 0px 0px',
              }}
              value="rent"
              className="radio-default radio-active"
            >
              <TextSearchWrap>
                <Typography style={{ fontSize: 18, color: '#222222' }}>
                  {translate('home.rent')}
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
                padding: '4px 4px',
              }}
            >
              <ColItem md={{ span: 20 }} sm={{ span: 20 }} xs={{ span: 20 }}>
                <Form.Item name="searchText" style={{ margin: 0 }}>
                  <TextSearchWrap>
                    <InputSearch
                      placeholder={translate('home.searchPlaceholder')}
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
                  <ButtonSearch onClick={e => findPage(e, '/search')}>
                    <SearchOutlined />
                  </ButtonSearch>
                </Form.Item>
              </ColItem>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 72 }}>
              <ColItem sm={24} md={12} lg={6}>
                <Popover
                  placement="bottomRight"
                  content={<Residential />}
                  trigger="click"
                >
                  <FilterItem>
                    <IconApartement style={{ marginRight: '10px' }} />
                    <Typography style={{ paddingRight: '6px' }}>
                      {translate('home.place')}
                    </Typography>
                    <DownOutlined />
                  </FilterItem>
                </Popover>
              </ColItem>
              <ColItem sm={24} md={12} lg={6}>
                <Popover
                  placement="bottomRight"
                  content={Price}
                  trigger="click"
                >
                  <FilterItem>
                    <IconAnyPrice style={{ marginRight: '10px' }} />
                    <Typography style={{ paddingRight: '6px' }}>
                      {translate('home.price')}
                    </Typography>
                    <DownOutlined />
                  </FilterItem>
                </Popover>
              </ColItem>
              <ColItem sm={24} md={12} lg={6}>
                <Popover placement="bottomRight" content={Area} trigger="click">
                  <FilterItem>
                    <VectorBed style={{ marginRight: '6px' }} />
                    <Typography style={{ marginRight: '2px' }}>
                      {translate('home.area')}
                    </Typography>
                    <DownOutlined />
                  </FilterItem>
                </Popover>
              </ColItem>
              <ColItem sm={24} md={12} lg={6}>
                <Popover
                  placement="bottomRight"
                  content={FilterAdd}
                  trigger="click"
                >
                  <FilterItem>
                    <Typography style={{ marginRight: '2px' }}>
                      {translate('home.filter')}
                    </Typography>
                    <DownOutlined />
                  </FilterItem>
                </Popover>
              </ColItem>
            </Row>
          </SearchWrapper>
        </Input.Group>
      </Form>
    </>
  );
};
