import { Row, Typography } from 'antd';
import { IconQuotes } from 'public/icons';
import React, { useState } from 'react';
import {
  ButtonTag, GeneralText,
  GeneralWrap, WrapperSpot
} from '../Home.style';
import { RecommendItem } from '../Recommend';
import { TypographyText } from './PostItem/PostItem.style';

const RecommendProperty = ({ data, t, fontSize }) => {
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
  };
  React.useEffect(() => {
    window.addEventListener('resize', handleResize, true);
    return () => window.removeEventListener('resize', handleResize, true);
  }, []);

  const [showContent, setShowContent] = useState(true);
  const [active, setActive] = useState(1);

  const listTag = [
    { id: 1, value: 'Sell' },
    { id: 2, value: 'Auction ' },
    { id: 3, value: 'Rent' },
    { id: 4, value: 'Transfer' },
  ];

  const handleBtnClick = (id: number) => {
    setActive(id);
  };

  return (
    <WrapperSpot>
      <GeneralText>
        <Typography.Title
          className="title-general"
          style={{ fontSize: fontSize ? fontSize : '' }}
        >
          Recommend Property
        </Typography.Title>
        <GeneralWrap>
          <div className="general-between-wrap">
            <div className="general-wrap">
              <IconQuotes />
              <Typography.Title className="content-general">
                anh Hùng đừng bỏ qua sự kiện sắp tới nha
              </Typography.Title>
            </div>
            <div
              onClick={(e) => setShowContent(showContent ? false : true)}
              style={{ cursor: 'pointer' }}
            >
              <Typography.Text className="content-hide">HIDE</Typography.Text>
            </div>
          </div>
        </GeneralWrap>
      </GeneralText>
      {showContent && (
        <TypographyText>
          <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div>
                {listTag.map((item) => (
                  <ButtonTag
                    key={item.id}
                    active={active === item.id ? 'active' : ''}
                    onClick={() => handleBtnClick(item.id)}
                  >
                    {item.value}{' '}
                  </ButtonTag>
                ))}
              </div>
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
                <Typography.Link className="linkShowPost">
                  {'<'}
                </Typography.Link>
              </div>
              <div>
                <Typography.Link className="linkShowPost">
                  {'>'}
                </Typography.Link>
              </div>
            </div>
          </Row>
          <div className="list-item">
            <RecommendItem />
            <RecommendItem />
            <RecommendItem />
            <RecommendItem />
          </div>
        </TypographyText>
      )}
    </WrapperSpot>
  );
};

export default RecommendProperty;
