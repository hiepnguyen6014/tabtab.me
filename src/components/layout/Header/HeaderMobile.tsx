import { SRC_IMAGE } from '@constants';
import { Typography } from '@mui/material';
import { Col } from 'antd';
import {
  ButtonOnSearch,
  ColContentMobile, MainContentMobile,
  MainMobile, RowContentMobile,
  SearchMobile,
  TextWrap
} from './Header.style';

import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { InputBase } from '@material-ui/core';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';
import { VectorTextMessage, VectorTextMessageBlack } from '@root/public/icons';
import Image from 'next/image';
import Link from 'next/link';
// import SearchIcon from '@public/SearchIcon.svg';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';

interface Props {
  tabCurrent?: any;
  onRedirect: (href: string) => void;
  themeLight?: boolean;
  t: any;
}

const HeaderMobile = (props: Props) => {
  const { tabCurrent, onRedirect, themeLight, t: translate } = props;

  return (
    <>
      <MainMobile style={{ position: themeLight ? 'absolute' : 'relative' }}>
        <Stack
          direction="row"
          spacing="20px"
          sx={{ padding: '0px 12px' }}
          alignItems="center"
        >
          <Box>
            <Link href="https://user.tabtab.imazin.asia">
              <a>
                <Image
                  alt="icon"
                  src={SRC_IMAGE.ICONUSER}
                  width={40}
                  height={40}
                />
              </a>
            </Link>
          </Box>

          <Stack
            direction="row"
            alignItems="center"
            sx={{
              border: '1px solid #e9e9e9',
              boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '56px',
              background: 'hsla(0, 0%, 100%, 1)',
              paddingRight: '4px',
              width: '100%',
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                padding: '10px 0px 10px 13px',
                height: '100%',
                width: '100%',
              }}
            >
              <Box sx={{ display: 'flex' }} pr={1}>
                <KeyboardArrowDownIcon />
                <Typography
                  sx={{
                    fontWeight: '700',
                  }}
                >
                  Sell
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '2px',
                  height: '16px',
                  background: '#A7A7A7',
                  borderRadius: '37px',
                }}
              ></Box>
              <InputBase
                style={{
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '20px',
                  color: '#7a7a7a',
                  paddingLeft: '10px',
                }}
                placeholder="Bắt đầu tìm kiếm"
                inputProps={{ 'aria-label': 'search' }}
              ></InputBase>
            </Stack>
            <Box
              sx={{
                width: '32px',
                height: '32px',
                backgroundColor: '#f9c41f',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
              }}
            >
              <IconButton>
                <SearchIcon sx={{ color: 'white' }} />
              </IconButton>
            </Box>
          </Stack>

          <Box>
            {themeLight ? (
              <Box>
                <VectorTextMessage />
              </Box>
            ) : (
              <Box>
                <VectorTextMessageBlack />
              </Box>
            )}
          </Box>
        </Stack>
      </MainMobile>

      <MainMobile
        style={{
          position: themeLight ? 'absolute' : 'relative',
          display: 'none',
        }}
      >
        <MainContentMobile>
          {/* <LogoWrapper>
          <Image
            preview={false}
            height={24}
            width={110}
            src={themeLight ? SRC_LOGO.DARK : SRC_LOGO.LIGHT} 
            onClick={() => onRedirect(ROUTES.HOME)}
          />
        </LogoWrapper>
        <MenuBugger onRedirect={onRedirect}  t={translate} tabCurrent={tabCurrent}/> */}

          <RowContentMobile>
            <ColContentMobile span={3}>
              <Link href="https://user.tabtab.imazin.asia">
                <a>
                  <img
                    alt="icon"
                    src={SRC_IMAGE.ICONUSER}
                    preview={false}
                    style={{ cursor: 'pointer' }}
                  />
                </a>
              </Link>
            </ColContentMobile>
            <ColContentMobile span={18}>
              <SearchMobile>
                <Col span={5} className="d-flex">
                  <DownOutlined
                    style={{ fontSize: 8, color: '#7A7A7A' }}
                    className="d-flex align-self-center mx-2"
                  />
                  <TextWrap>
                    <Typography
                      className="text-select"
                      sx={{ marginBottom: '0px !important' }}
                    >
                      Sell
                    </Typography>
                  </TextWrap>
                </Col>
                <Col span={1}>
                  <div className="vertical-line-search" />
                </Col>
                <Col span={14}>
                  <TextWrap>
                    <Typography
                      className="text-search"
                      sx={{ marginBottom: '0px !important' }}
                    >
                      Bắt đầu tìm kiếm
                    </Typography>
                  </TextWrap>
                </Col>
                <Col span={4} className="d-flex justify-content-end">
                  <ButtonOnSearch className="mx-1">
                    <SearchOutlined style={{ fontSize: '17px' }} />
                  </ButtonOnSearch>
                </Col>
              </SearchMobile>
            </ColContentMobile>
            <ColContentMobile span={3}>
              {themeLight ? <VectorTextMessage /> : <VectorTextMessageBlack />}
            </ColContentMobile>
          </RowContentMobile>
        </MainContentMobile>
      </MainMobile>
    </>
  );
};

export default HeaderMobile;
