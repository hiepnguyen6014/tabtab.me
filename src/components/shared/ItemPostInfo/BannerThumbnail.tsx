import { CalendarSun } from '@root/public/icons';
import DateIcon from '@root/public/static/Event-date.png';
import { Image } from 'antd';

const BannerThumbnail = ({ src }) => {
  return (
    <div style={{ position: 'relative' }}>
      <div className="test1">
        <Image alt="post" src={src} width="100%" preview={false} />
      </div>
      <div className="test2">
        <CalendarSun />
      </div>
    </div>
  );
};

export default BannerThumbnail;
