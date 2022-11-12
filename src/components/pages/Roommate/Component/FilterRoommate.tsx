import { PlusCircleFilled } from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';
import { ButtonAdd, DivWrap, Flex } from '../Roomate.style';
import { IconDownSquare, IconSearchColor } from '@root/public/icons';

const FilterRoommate: React.FC<{}> = () => {
  return (
    <>
      <div className="m-3">
        <Flex className="justify-content-between">
          <Typography className="title-text-style">Text Demo</Typography>
          <ButtonAdd>
            <PlusCircleFilled />
            <span className='span-none'>
              Add as{' '}
              <span style={{ textDecoration: 'underline' }}>Roommate</span>
            </span>
          </ButtonAdd>
        </Flex>
        <Row className='device__justify-between'>
          <Col xs={24} sm={24} lg={4}>
            <Typography className="field-filter--style">Category</Typography>
            <DivWrap borderColor="#F9C41F">
              <Typography className="text-button--style">Roommate</Typography>
              <IconDownSquare />
            </DivWrap>
          </Col>
          <Col xs={11} sm={11} lg={4}>
            <Typography className="field-filter--style">Location</Typography>
            <DivWrap borderColor="#F9C41F">
              <Typography className="text-button--style">
                Ho chi Minh
              </Typography>
              <IconSearchColor />
            </DivWrap>
          </Col>
          <Col xs={11} sm={11} lg={4}>
            <Typography className="field-filter--style">Name</Typography>
            <DivWrap borderColor="#F9C41F">
              <Typography className="text-button--style">Minhx</Typography>
              <IconSearchColor />
            </DivWrap>
          </Col>
          <Col xs={24} sm={24} lg={4}>
            <Typography
              className="field-filter--style"
              style={{ color: '#ffffff' }}
            >
              <span>.</span>
            </Typography>
            <DivWrap background="#EFEFEF">
              <Typography className="text-button--style">
                Advance search
              </Typography>
              <IconDownSquare />
            </DivWrap>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FilterRoommate;
