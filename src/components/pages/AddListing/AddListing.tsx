import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { AddPost } from '@root/src/core/types/post';
import { Breadcrumb, Form, Steps } from 'antd';
import React, { useState } from 'react';

import { ButtonNextStep, ContentHeaderWrapper } from './AddListing.style';
import ChooseLocate from './ChooseLocate';
import Info from './Info';
import PostType from './PostType';
import RoomInfo from './RoomInfo';
import Untilities from './Untilities';
import UploadFileComponent from './UploadFile';

const AddListingComponent = () => {
  const [dataPost, setDataPost] = useState<AddPost>({} as AddPost);
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const { Step } = Steps;
  const steps = [
    {
      id: 1,
      content: <ChooseLocate />,
    },
    {
      id: 2,
      content: <Info />,
    },
    {
      id: 3,
      content: (
        <Untilities form={form} dataPost={dataPost} setDataPost={setDataPost} />
      ),
    },
    {
      id: 4,
      content: (
        <UploadFileComponent
          form={form}
          dataPost={dataPost}
          setDataPost={setDataPost}
        />
      ),
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
  const next = () => {
    setCurrent(p => p + 1);
  };
  const prev = () => {
    setCurrent(p => p - 1);
  };
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
          <div>{steps[current].content}</div>
          <div className={current > 0 ? 'btn-bottom' : ''}>
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
          </div>
        </ContentHeaderWrapper>
      </div>
    </>
  );
};

export default AddListingComponent;
