import { Image } from 'antd';
import {
  AdWordsWrap
} from '../Home.style';
import { SRC_IMAGE } from '@constants';

const AdWords: React.FC<{}> = () => {
  return (
    <AdWordsWrap>
        <Image alt="adwords" preview={false} src={SRC_IMAGE.ADWORDS} />
    </AdWordsWrap>
  );
};

export default AdWords;
