import { Col, Row, Typography } from 'antd';

const HeaderSpotlightPage: React.FC<{}> = () => {
  return (
    <>
      <div className="breadcrumb-detail">
        <Typography className="header-content">Tên Section</Typography>
        <Typography className="header-content">/</Typography>
        <Typography className="header-content">Tên trang đang mở</Typography>
      </div>
    </>
  );
};

export default HeaderSpotlightPage;
