import { Breadcrumb, Steps } from 'antd';
import React, { useState } from 'react';

import { ContentHeaderWrapper } from './AddListing.style';
import ChooseLocate from './ChooseLocate';
import Info from './Info';
import PostType from './PostType';
import RoomInfo from './RoomInfo';
import Untilities from './Untilities';
import UploadFileComponent from './UploadFile';

const AddListingComponent = () => {
  const [current, setCurrent] = useState(0);
  const { Step } = Steps;

  const onClickNext = () => {
    setCurrent(p => p + 1);
  };

  const onClickPrev = () => {
    setCurrent(p => p - 1);
  };

  const steps = [
    {
      id: 1,
      content: <ChooseLocate onClickNext={onClickNext} />,
    },
    {
      id: 2,
      content: <Info onClickPrev={onClickPrev} onClickNext={onClickNext} />,
    },
    {
      id: 3,
      content: <Untilities />,
    },
    {
      id: 4,
      content: <UploadFileComponent />,
    },
    {
      id: 5,
      content: <RoomInfo />,
    },
    {
      id: 6,
      content: <PostType />,
    },
  ];

  return (
    <>
      <div className="container">
        <ContentHeaderWrapper>
          <Breadcrumb>
            <Breadcrumb.Item>Tên section</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Tên trang đang mở</a>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Steps current={current}>
            {steps.map(item => (
              <Step key={item.id} />
            ))}
          </Steps>
          {/* Content */}
          <div>{steps[current].content}</div>
          {/* navigate */}
          {/* <div className={current > 0 ? 'btn-bottom' : ''}>
            {current > 0 && (
              <div>
                <ButtonNextStep onClick={() => prev()}>
                  <DoubleLeftOutlined />
                  Prev
                </ButtonNextStep>
              </div>
            )}
            {current < steps.length - 1 && (
              <div style={{ display: 'flex', justifyContent: 'end' }}>
                <ButtonNextStep onClick={() => next()}>
                  Next
                  <DoubleRightOutlined />
                </ButtonNextStep>
              </div>
            )}
          </div> */}
        </ContentHeaderWrapper>
      </div>
    </>
  );
};

export default AddListingComponent;
