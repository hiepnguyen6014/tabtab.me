import { Col, Row, Typography } from 'antd';

const HeaderHelpCenter: React.FC<{}> = () => {
  return (
    <>
      <Row className="row-header">
        <Col className="col-header">
          <Typography className="text-header">Getting Started</Typography>
          <div className="horizontal-line" />
        </Col>
        <Col className="col-header">
          <Typography className="text-header">Tools</Typography>
        </Col>
        <Col className="col-header">
          <Typography className="text-header">Listing</Typography>
        </Col>
        <Col className="col-header">
          <Typography className="text-header">Profile</Typography>
        </Col>
        <Col className="col-header">
          <Typography className="text-header">Payment</Typography>
        </Col>
      </Row>
      <div className="breadcrumb-detail">
        <Typography className="header-content">Tên Section</Typography>
        <Typography className="header-content">/</Typography>
        <Typography className="header-content">Tên trang đang mở</Typography>
      </div>
    </>
  );
};

export default HeaderHelpCenter;
