import { SRC_IMAGE } from '@core';
import { Image, Typography } from 'antd';
import Link from 'next/link';

const RightCol: React.FC<{}> = () => {
  return (
    <div className="m-2">
      <Link href="/social-network" legacyBehavior>
        <Image alt="qc" src={SRC_IMAGE.AD1} preview={false} />
      </Link>
    </div>
  );
};

export default RightCol;
