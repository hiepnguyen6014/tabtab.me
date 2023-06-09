import { Image } from 'antd';
import { SRC_IMAGE } from '@constants';
import { AdvertisingWrap } from './Advertising.style';

const Advertising = ({ className }) => {
  return (
    <AdvertisingWrap>
      <Image
        alt="adwords"
        preview={false}
        src={SRC_IMAGE.ADWORDS}
        className={className}
      />
    </AdvertisingWrap>
  );
};

export default Advertising;
