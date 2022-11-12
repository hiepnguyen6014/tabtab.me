import PaginationWrapCustom from '@root/src/components/shared/PaginationCustom/PaginationCustom';
import { Col, Divider, Row, Typography } from 'antd';
import FirstContent from './FirstContent';
import SecondContent from './SecondContent';

const Expert = () => {
  return (
    <>
      <Typography className="title-spotlight__text--style">Expert</Typography>
      <Row>
        <FirstContent />
        <SecondContent />
        <div className="d-flex justify-content-center w-100">
          <PaginationWrapCustom defaultCurrent={1} total={5} pageSize={1}/>
        </div>
      </Row>
    </>
  );
};

export default Expert;
