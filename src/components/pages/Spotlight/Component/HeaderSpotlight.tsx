import { Col, Row, Typography } from 'antd';

const HeaderSpotLight: React.FC<{}> = () => {
  return (
    <Row className="row-header">
      <Col className="col-header">
        <Typography className="text-header">Text demmo 1</Typography>
        <div className="horizontal-line" />
      </Col>
      <Col className="col-header">
        <Typography className="text-header">Text demmo 2</Typography>
      </Col>
      <Col className="col-header">
        <Typography className="text-header">Text demmo 3</Typography>
      </Col>
      <Col className="col-header">
        <Typography className="text-header">Text demmo 4</Typography>
      </Col>
      <Col className="col-header">
        <Typography className="text-header">Text demmo 5</Typography>
      </Col>
      <Col className="col-header">
        <Typography className="text-header">Text demmo 6</Typography>
      </Col>
    </Row>
  );
};

export default HeaderSpotLight;
