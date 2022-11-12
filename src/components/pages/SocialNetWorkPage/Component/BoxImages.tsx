import { SRC_IMAGE } from '@core';
import {
  IconArrowDown,
  IconCopy,
  IconReport,
  IconSave,
  VectorCoin,
  VectorComponent,
  VectorDollarS,
  VectorNextButton,
  VectorPicture,
  VectorPrevButton,
  VectorSpeak,
  VectorTalk,
  VectorThreeDot,
  VectorVideoCamera,
} from '@root/public/icons';
import { ButtonWrapLogin } from '@root/src/components/layout/Header/Header.style';
import { PlaceHolderLoading } from '@root/src/components/shared';
import {
  Button,
  Col,
  Divider,
  Dropdown,
  Image,
  Popover,
  Row,
  Typography,
} from 'antd';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import {
  BoxWrap,
  ButtonMenu,
  ContentInImage,
  Flex,
  SearchWrap,
} from '../SocialNetworkPage.style';

const BoxImages = ({ arrayImage, showButton = false }) => {
  const DynamicBanner = dynamic(
    () => import('../../../shared/BannerWithPicture/BannerWithPicture'),
    {
      loading: () => <PlaceHolderLoading height="500px" heightMb="250px" />,
    },
  );

  const content = (
    <div style={{ width: 280 }}>
      <Link href="/roommate" legacyBehavior>
        <ButtonMenu>
          <IconSave />
          <Typography>Save</Typography>
        </ButtonMenu>
      </Link>
      <Link href="/roommate" legacyBehavior>
        <ButtonMenu>
          <IconCopy />
          <Typography>Copy link</Typography>
        </ButtonMenu>
      </Link>
      <Link href="/roommate" legacyBehavior>
        <ButtonMenu>
          <IconReport />
          <Typography>Report</Typography>
        </ButtonMenu>
      </Link>
    </div>
  );

  const { t: translate } = useTranslation('common');

  return (
    <BoxWrap style={{ padding: '0px 20px' }}>
      <Flex
        style={{
          margin: '20px 0px 0px 0px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Flex style={{ margin: '0px 0px' }}>
          <Image
            alt="box-img"
            src={SRC_IMAGE.ACADEMY7}
            width="52px"
            height="52px"
            preview={false}
          />
          <div>
            <Typography>Floyd Miles</Typography>
            <Flex style={{ margin: '0px 0px' }}>
              <Typography className="date-box_text">Sale Manager</Typography>
              <Divider type="vertical" style={{ borderColor: '#7a7a7a' }} />
              <Typography className="date-box_text">CMC Corp</Typography>
              <Divider type="vertical" style={{ borderColor: '#7a7a7a' }} />
              <Typography className="coin-dollar">24t</Typography>
              <VectorDollarS />
            </Flex>
            <Typography className="date-box_text">3 phút trước</Typography>
          </div>
        </Flex>
        <Flex style={{ cursor: 'pointer' }}>
          <Popover placement="bottomRight" content={content} trigger="click">
            <VectorThreeDot />
          </Popover>
        </Flex>
      </Flex>
      <div
        style={{
          marginBottom: '20px',
          marginTop: '20px',
          position: 'relative',
        }}
      >
        <DynamicBanner t={translate} images={arrayImage} />
        {showButton ? (
          <ContentInImage>
            <div className="prev-button">
              <VectorPrevButton />
            </div>
            <div className="next-button">
              <VectorNextButton />
            </div>
          </ContentInImage>
        ) : (
          <></>
        )}
      </div>
      <Flex>
        <VectorDollarS />
        <Typography className="header-content" style={{ marginLeft: '0px' }}>
          124
        </Typography>
        <Typography className="comment__dot">.</Typography>
        <Typography className="header-content" style={{ marginLeft: '0px' }}>
          100 comment
        </Typography>
      </Flex>
      <Divider type="horizontal" style={{ margin: 0 }} />
      <Row justify="space-around" align="middle">
        <Col>
          <Flex>
            <VectorCoin />
            <Typography className="footer-social__text">
              Tặng Tabcoin
            </Typography>
          </Flex>
        </Col>
        <Col>
          <Flex>
            <VectorTalk />
            <Typography className="footer-social__text">Comment</Typography>
          </Flex>
        </Col>
        <Col>
          <Flex>
            <VectorComponent />
            <Typography className="footer-social__text">Share</Typography>
          </Flex>
        </Col>
      </Row>
    </BoxWrap>
  );
};

export default BoxImages;
