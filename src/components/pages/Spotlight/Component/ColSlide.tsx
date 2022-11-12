import { SRC_IMAGE } from '@core';
import { Image, Typography } from 'antd';

const ColSlide: React.FC<{}> = () => {
  return (
    <>
      <div className="mx-4">
        <div className="d-flex">
          <div>
            <Image
              alt="pic"
              src={SRC_IMAGE.SLIDEPROPERTY}
              height="84px"
              width="84px"
              preview={false}
            />
          </div>
          <div className="mx-4 d-flex align-self-center ">
            <div>
              <Typography.Title
                className="title-post"
                style={{ color: '#EB4E27' }}
              >
                Property
              </Typography.Title>
              <Typography.Paragraph className="detailPostSpot">
                North Bondi block sells for 22m+
              </Typography.Paragraph>
            </div>
          </div>
        </div>
        <div className="vertical-line" />

        <div className=" d-flex">
          <div>
            <Image
              alt="pic"
              src={SRC_IMAGE.SLIDEPROPERTY1}
              height="84px"
              width="84px"
              preview={false}
            />
          </div>
          <div className="mx-4 d-flex align-self-center">
            <div>
              <Typography.Title
                className="title-post"
                style={{ color: '#EB4E27' }}
              >
                Property
              </Typography.Title>
              <Typography.Paragraph className="detailPostSpot">
                through share buy backs and has.
              </Typography.Paragraph>
            </div>
          </div>
        </div>
        <div className="vertical-line" />

        <div className=" d-flex">
          <div>
            <Image
              alt="pic"
              src={SRC_IMAGE.SLIDEPROPERTY2}
              height="84px"
              width="84px"
              preview={false}
            />
          </div>
          <div className="mx-4 d-flex align-self-center">
            <div>
              <Typography.Title
                className="title-post"
                style={{ color: '#F9C41F' }}
              >
                Roommate
              </Typography.Title>
              <Typography.Paragraph className="detailPostSpot">
                Global oil prices before a quicker than
              </Typography.Paragraph>
            </div>
          </div>
        </div>
        <div className="vertical-line" />

        <div className=" d-flex">
          <div>
            <Image
              alt="pic"
              src={SRC_IMAGE.SLIDEPROPERTY3}
              height="84px"
              width="84px"
              preview={false}
            />
          </div>
          <div className="mx-4 d-flex align-self-center">
            <div>
              <Typography.Title
                className="title-post"
                style={{ color: '#F9C41F' }}
              >
                Roommate
              </Typography.Title>
              <Typography.Paragraph className="detailPostSpot">
                Global oil prices before a quicker than
              </Typography.Paragraph>
            </div>
          </div>
        </div>
        <div className="vertical-line" />

        <div>
          <Image
            alt="pic"
            src={SRC_IMAGE.AD1}
            preview={false}
          />
        </div>
      </div>
    </>
  );
};

export default ColSlide;
