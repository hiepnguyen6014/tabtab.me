import { Col, Row, Typography } from 'antd';

const HeaderAboutUs: React.FC<{}> = () => {
  return (
    <>
      <Row className="row-header">
        <Col className="col-header">
          <Typography className="text-header">Overview</Typography>
          <div className="horizontal-line" />
        </Col>
        <Col className="col-header">
          <Typography className="text-header">Picture</Typography>
        </Col>
        <Col className="col-header">
          <Typography className="text-header">Highlight</Typography>
        </Col>
        <Col className="col-header">
          <Typography className="text-header">Description</Typography>
        </Col>
        <Col className="col-header">
          <Typography className="text-header">Project Overview</Typography>
        </Col>
        <Col className="col-header">
          <Typography className="text-header">Facilities</Typography>
        </Col>
        <Col className="col-header">
          <Typography className="text-header">Project</Typography>
        </Col>
        <Col className="col-header">
          <Typography className="text-header">Loan Calculator</Typography>
        </Col>
        <Col className="col-header">
          <Typography className="text-header">Rooms</Typography>
        </Col>
        <Col className="col-header">
          <Typography className="text-header">Tenants</Typography>
        </Col>
        <Col className="col-header">
          <Typography className="text-header">Price</Typography>
        </Col>
        <Col className="col-header">
          <Typography className="text-header">All properties</Typography>
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

export default HeaderAboutUs;
