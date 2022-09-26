import { Row, Typography, Radio, Button } from 'antd';
import { ColWrap, GeneralText, GeneralWrap, SpotlightText, WrapperSpot } from '../Home.style';
import { IconQuotes } from 'public/icons';
import ItemPost from './PostItem';
import { ButtonFix, RowWrap, TypographyText } from './PostItem/PostItem.style';
import { RadioSearch } from '@root/src/components/shared/SearchHome/SearchHome.style';
import React, { useState } from 'react'
import ListItem from './ListItem'

const RecommendProperty = ({data, t, fontSize}) => {

  const [limitItems, setLimitItems] = React.useState(12);
  // layout for desktop only 8 products if screen is mobile, product will be 20 posts

  const handleResize = (e:any)=>{
    if (e.target.outerWidth <= 1025 && e.target.outerWidth >= 768 ) {
      setLimitItems(6); // Tablet will be 6 items on row
    } else if (e.target.outerWidth <= 768 ) {
      setLimitItems(0); // List scroll
    } else if (e.target.outerWidth > 1024 ) {
      setLimitItems(8); //
    }
  }
  React.useEffect(()=>{
    window.addEventListener('resize',handleResize,true)
    return ()=> window.removeEventListener('resize',handleResize,true)
  },[])

  const [showContent, setShowContent] = useState(true)


  return (
    <WrapperSpot>
      <GeneralText>
        <Typography.Title className="title-general" style={{fontSize: fontSize? fontSize : ''}}>Recommend Property</Typography.Title>
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
            <div onClick={e => setShowContent(showContent ? false : true)} style={{cursor:"pointer"}}>
              <Typography.Text
                className='content-hide'
              >
                HIDE
              </Typography.Text>
            </div>
          </div>
        </GeneralWrap>
      </GeneralText>
      {showContent && <TypographyText>
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
                value="rent"
                style={{ borderRadius: '100px' }}
              >
                <Typography.Text className="category">Rent</Typography.Text>
              </Radio.Button>
            </RadioSearch>
          </div>
          <div style={{ display: 'flex' }} className="my-1">
            <div>
              <Typography.Link
                style={{ textDecoration: 'underline' }}
                className="linkShowPost"
              >
                Show all(56+)
              </Typography.Link>
            </div>
            <div>
              <Typography.Link className="linkShowPost">{'<'}</Typography.Link>
            </div>
            <div>
              <Typography.Link className="linkShowPost">{'>'}</Typography.Link>
            </div>
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
          <ListItem t={t} data={data}  type={1}/>
          {/* <ColWrap className="gutter-row" sm={24} lg={6}>
            <ItemPost />
          </ColWrap>
          <ColWrap className="gutter-row" sm={24} lg={6}>
            <ItemPost />
          </ColWrap>
          <ColWrap className="gutter-row" sm={24} lg={6}>
            <ItemPost />
          </ColWrap>
          <ColWrap className="gutter-row" sm={24} lg={6}>
            <ItemPost />
          </ColWrap> */}
        </RowWrap>
      </TypographyText>}
    </WrapperSpot>
  );
};

export default RecommendProperty;
