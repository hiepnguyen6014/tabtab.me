import { SRC_IMAGE } from '@constants';
import { Image } from 'antd';

import { AdWordsWrap } from '../Home.style';

const AdWords: React.FC<{}> = () => {
  return (
    <AdWordsWrap>
      <Image alt="adwords" preview={false} src={SRC_IMAGE.ADWORDS} />
    </AdWordsWrap>
  );
};

export default AdWords;
