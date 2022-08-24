import { Row, Typography, Radio, Button, Pagination } from 'antd';
import { ColWrap, GeneralText, GeneralWrap, SpotlightText, WrapperSpot } from '../../Home/Home.style';
import { IconQuotes } from 'public/icons';
import { RowWrap, TypographyText } from '../FindPersonDetails.style';
import { RadioSearch } from '@root/src/components/shared/SearchHome/SearchHome.style';
import React from 'react'
import ListItem from '../../Home/HomeComponent/ListItem'
import PaginationWrapCustom from '@root/src/components/shared/PaginationCustom/PaginationCustom';

const Recommend = ({ data, t, fontSize }) => {

  const [limitItems, setLimitItems] = React.useState(12);
  // layout for desktop only 8 products if screen is mobile, product will be 20 posts

  const handleResize = (e: any) => {
    if (e.target.outerWidth <= 1025 && e.target.outerWidth >= 768) {
      setLimitItems(6); // Tablet will be 6 items on row
    } else if (e.target.outerWidth <= 768) {
      setLimitItems(0); // List scroll
    } else if (e.target.outerWidth > 1024) {
      setLimitItems(8); //
    }
  }
  React.useEffect(() => {
    window.addEventListener('resize', handleResize, true)
    return () => window.removeEventListener('resize', handleResize, true)
  }, [])

  return (
    <WrapperSpot>
      <GeneralText>
        <Typography.Title className="title-general" style={{ fontSize: fontSize ? fontSize : '' }}>Recommend Property</Typography.Title>
        <GeneralWrap>
          <div className="general-between-wrap">
            <div className="general-wrap">
              <IconQuotes />
              <Typography.Title
                className="content-general"
              >
                anh Hùng đừng bỏ qua sự kiện sắp tới nha
              </Typography.Title>
            </div>
          </div>
        </GeneralWrap>
      </GeneralText>
      <TypographyText>
        <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <RadioSearch defaultValue="sell" buttonStyle="solid">
              <Radio.Button
                className="radio-active"
                value="sell"
                style={{ marginRight: '10px', borderRadius: '100px' }}
              >
                <Typography.Text className="category">Sell</Typography.Text>
              </Radio.Button>
              <Radio.Button
                className="radio-active"
                value="auction"
                style={{ marginRight: '10px', borderRadius: '100px' }}
              >
                <Typography.Text className="category">Auction</Typography.Text>
              </Radio.Button>
              <Radio.Button
                className="radio-active"
                value="rent"
                style={{ marginRight: '10px', borderRadius: '100px' }}
              >
                <Typography.Text className="category">Rent</Typography.Text>
              </Radio.Button>
              <Radio.Button
                className="radio-active"
                value="transfer"
                style={{ borderRadius: '100px' }}
              >
                <Typography.Text className="category">Transfer</Typography.Text>
              </Radio.Button>
            </RadioSearch>
          </div>
        </Row>
        <RowWrap
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <ListItem t={t} data={data} type={1} />
        </RowWrap>
      </TypographyText>
      <PaginationWrapCustom defaultCurrent={1} total={50}/>
    </WrapperSpot>
  );
};

export default Recommend;
