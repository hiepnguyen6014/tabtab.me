import { SRC_IMAGE } from '@core';

import BoxComment from './BoxComment';
import BoxImages from './BoxImages';
import BoxSearch from './BoxSearch';
import BoxText from './BoxText';
import BoxTextImage from './BoxTextImage';
import InterestPerson from './InterestedPerson';

const CenterContentSocial: React.FC<{}> = () => {
  let arrayOfImages1 = [];
  arrayOfImages1.push(SRC_IMAGE.EXAMPLE1);
  arrayOfImages1.push(SRC_IMAGE.EXAMPLE2);
  arrayOfImages1.push(SRC_IMAGE.EXAMPLE3);
  arrayOfImages1.push(SRC_IMAGE.EXAMPLE4);
  arrayOfImages1.push(SRC_IMAGE.EXAMPLE5);

  let arrayOfImages2 = [];
  arrayOfImages2.push(SRC_IMAGE.EXAMPLE1);
  arrayOfImages2.push(SRC_IMAGE.EXAMPLE2);
  arrayOfImages2.push(SRC_IMAGE.EXAMPLE3);

  let arrayOfImages3 = [];
  arrayOfImages3.push(SRC_IMAGE.EXAMPLE1);
  arrayOfImages3.push(SRC_IMAGE.EXAMPLE2);

  let arrayOfImages4 = [];
  arrayOfImages4.push(SRC_IMAGE.EXAMPLE1);

  return (
    <div style={{ padding: '0px 12px' }}>
      <BoxSearch />
      <BoxComment />
      <InterestPerson />
      <BoxImages arrayImage={arrayOfImages1} />
      <BoxImages arrayImage={arrayOfImages2} showButton={true} />
      <BoxImages arrayImage={arrayOfImages3} showButton={true} />
      <BoxImages arrayImage={arrayOfImages4} />
      <BoxText />
      <BoxTextImage />
    </div>
  );
};

export default CenterContentSocial;
