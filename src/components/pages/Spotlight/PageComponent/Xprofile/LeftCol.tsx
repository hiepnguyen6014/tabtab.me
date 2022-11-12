import { SRC_IMAGE } from '@core';
import ColPost from '@root/src/components/shared/ItemPostInfo/ColPost';
import { Col, Divider, Image, Row, Typography } from 'antd';

const LeftCol = () => {
  return (
    <>
      <div className='mx-2'>
      <Image alt='qc' src={SRC_IMAGE.AD1} preview={false}/>
    </div>
    <div className='mx-2'>
      <Image alt='qc' src={SRC_IMAGE.AD1} preview={false}/>
    </div>
    </>
  );
};

export default LeftCol;
