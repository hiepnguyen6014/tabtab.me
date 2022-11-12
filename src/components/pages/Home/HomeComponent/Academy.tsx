import { Typography } from 'antd';
import Link from 'next/link';
import { IconQuotes } from 'public/icons';

import { AcademyBigWrap, AcademyWrap } from '../Academy/Academy.style';
import AcademyDesktop from '../Academy/AcademyDesktop';
import AcademyMobile from '../Academy/AcademyMobile';
import { GeneralText, GeneralWrap } from '../Home.style';

const Academy: React.FC<{}> = () => {
  return (
    <AcademyBigWrap>
      <GeneralText>
        <Link href="/academy" legacyBehavior>
          <Typography.Title className="title-general">Academy</Typography.Title>
        </Link>
        <GeneralWrap>
          <div className="general-between-wrap">
            <div className="general-wrap">
              <IconQuotes />
              <Typography.Title className="content-general">
                Những tin tức mới nhất phù hợp với Hùng
              </Typography.Title>
            </div>
            <div>
              <Typography.Text className="content-hide">HIDE</Typography.Text>
            </div>
          </div>
        </GeneralWrap>
      </GeneralText>
      <AcademyWrap>
        <AcademyDesktop />
        <AcademyMobile />
      </AcademyWrap>
    </AcademyBigWrap>
  );
};

export default Academy;
