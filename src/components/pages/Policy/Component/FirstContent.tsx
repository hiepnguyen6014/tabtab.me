import { SocialBlack, VectorGlobal } from '@root/public/icons';
import { Col, Row, Typography } from 'antd';

const FirstContent: React.FC<{}> = () => {
  return (
    <>
      <Typography className="first-content1">Policy</Typography>
      <div className="box-content">
        <SocialBlack />
        <Typography className="first-content2">
          If your country of residence or establishment is within the European
          Economic Area (“EEA”), Switzerland or the United Kingdom, the Terms of
          Service for European Users apply to you. If your country of residence
          or establishment is outside of the EEA, Switzerland, and the United
          Kingdom, the Terms of Service for Non-European Users apply to you.
        </Typography>
      </div>
    </>
  );
};

export default FirstContent;
