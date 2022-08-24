import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { SRC_IMAGE } from '@core';
import { Image, Typography } from 'antd';
import { DivA } from '../Spotlight/ItemSpotlight.style';

const OutStanding: React.FC<{}> = () => {
  const LISTOUTSTANDING = [
    {
      image: SRC_IMAGE.ACADEMY5,
      lesson: '200',
      student: '7000',
      experience: '4',
      name: 'Kathryn Murphy',
      role: 'Merchandising',
      company: 'Zalo Corp',
    },
    {
      image: SRC_IMAGE.ACADEMY5,
      lesson: '200',
      student: '7000',
      experience: '4',
      name: 'Kathryn Murphy',
      role: 'Merchandising',
      company: 'Zalo Corp',
    },
    {
      image: SRC_IMAGE.ACADEMY5,
      lesson: '200',
      student: '7000',
      experience: '4',
      name: 'Kathryn Murphy',
      role: 'Merchandising',
      company: 'Zalo Corp',
    },
    {
      image: SRC_IMAGE.ACADEMY5,
      lesson: '200',
      student: '7000',
      experience: '4',
      name: 'Kathryn Murphy',
      role: 'Merchandising',
      company: 'Zalo Corp',
    },
  ];
  return (
    <div className="m-left-24">
      <div className="d-flex justify-content-between align-items-center">
        <div className="height-50 d-flex align-items-center">
          <Typography className="title-header">Outstanding</Typography>
        </div>
        <div>
          <div className="d-flex">
            <div className="cirle-nav d-flex justify-content-center align-items-center mx-2">
              <LeftOutlined style={{ color: '#141414' }} />
            </div>
            <div className="cirle-nav d-flex justify-content-center align-items-center">
              <RightOutlined style={{ color: '#141414' }} />
            </div>
          </div>
        </div>
      </div>
      {LISTOUTSTANDING.map((item, key) => {
        return (
          <DivA className="user-box" key={key}>
            <div className="d-flex m-user-box align-items-center">
              <Image alt="picture" src={item.image} preview={false} />
              <div className="px-3 text-center">
                <Typography className="title-list-news">{item.lesson}</Typography>
                <Typography className="content-outstanding">Lesson</Typography>
              </div>
              <div className="px-3 text-center">
                <Typography className="title-list-news">{item.student}</Typography>
                <Typography className="content-outstanding">Student</Typography>
              </div>
              <div className="px-3 text-center">
                <Typography className="title-list-news">{item.experience}</Typography>
                <Typography className="content-outstanding">
                  Experience
                </Typography>
              </div>
            </div>
            <div className="m-user-box mb-4">
              <Typography className="title-outstanding">
              {item.name}
              </Typography>
              <div className="d-flex my-1">
                <Typography className="content-text">{item.role}</Typography>
                <Typography className="content-text mx-2">|</Typography>
                <Typography className="content-text">{item.company}</Typography>
              </div>
            </div>
          </DivA>
        );
      })}
      
    </div>
  );
};

export default OutStanding;
