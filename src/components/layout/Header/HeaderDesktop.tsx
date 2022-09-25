import { ROUTES } from '@constants';
import { UserContext } from '@contexts';
import { useRouter } from 'next/router';
import React from 'react';

import {
  Account, Community, CRM, HelpCenter, Logo, LogoDark, Logout, Message, PMA, Properties, Roommate, SocialBlack, Transaction, VectorGlobal,
  VectorMenuOutline,
  VectorPeople
} from '@root/public/icons';
// import { Button, Image, Popover } from 'antd';

import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';

import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Config from '@root/config';
import { Navigator } from '@utils';
import Link from 'next/link';
import { useContext } from 'react';
import {
  ButtonWrap, ButtonWrapLogin, TextPost
} from './Header.style';

interface Props {
  t: any;
  themeLight?: boolean;
  tabCurrent?: string;
  onRedirect?: (href: string) => void;
}
const HeaderDesktop = (props: Props) => {
  const { t: translate, themeLight, tabCurrent, onRedirect } = props;
  const { currentUser } = useContext(UserContext);
  const router = useRouter();
  const isLogin = Object.keys(currentUser).length > 0;

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('--', event);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const content = (
    <div>
      <a>
        <ButtonWrap>
          <Message />
          <a style={{ marginLeft: 8 }}>Message</a>
        </ButtonWrap>
      </a>
      <a href={Config.USER_ACCOUNT}>
        <ButtonWrap>
          <Account />
          <a style={{ marginLeft: 8, color: '#4E4E4E' }}>Account</a>
        </ButtonWrap>
      </a>
      <a>
        <ButtonWrap>
          <Properties />
          <a style={{ marginLeft: 8 }}>My Properties</a>
        </ButtonWrap>
      </a>
      <a>
        <ButtonWrap>
          <Transaction />
          <a style={{ marginLeft: 8 }}>Transaction Managerment</a>
        </ButtonWrap>
      </a>
      <Divider sx={{ margin: '10px 8px 10px', opacity: 0.8 }} />

      <a>
        <ButtonWrap>
          <CRM />
          <a style={{ marginLeft: 8 }}>CRM</a>
        </ButtonWrap>
      </a>
      <a>
        <ButtonWrap>
          <PMA />
          <a style={{ marginLeft: 8 }}>PMA</a>
        </ButtonWrap>
      </a>
      <a>
        <ButtonWrap>
          <Community />
          <a style={{ marginLeft: 8 }}>Community</a>
        </ButtonWrap>
      </a>
      <a>
        <ButtonWrap>
          <Roommate />
          <a style={{ marginLeft: 8 }}>Roommate</a>
        </ButtonWrap>
      </a>
      <Divider sx={{ margin: '10px 8px 10px', opacity: 0.8 }} />

      <a>
        <ButtonWrap>
          <HelpCenter />
          <a style={{ marginLeft: 8 }}>Help Center</a>
        </ButtonWrap>
      </a>
      <a onClick={() => Navigator.client.jump(Config.AUTO_LOGOUT)}>
        <ButtonWrap style={{ paddingLeft: 8 }}>
          <Logout />
          <a style={{ marginLeft: 8 }}>Logout</a>
        </ButtonWrap>
      </a>
    </div>
  );

  const content1 = (
    <div style={{ width: 280, padding: '0px 8px' }}>
      <a href={Config.USER_LOGIN}>
        <ButtonWrapLogin>
          <label>Signup / Login</label>
        </ButtonWrapLogin>
      </a>
      <a href={Config.USER_ACCOUNT}>
        <ButtonWrap style={{ paddingLeft: 8 }}>
          <Account />
          <a style={{ marginLeft: 8, color: '#4E4E4E' }}>Account</a>
        </ButtonWrap>
      </a>
      <Divider sx={{ margin: '10px 8px 10px', opacity: 0.8 }} />
      <a>
        <ButtonWrap style={{ paddingLeft: 8 }}>
          <CRM />
          <a style={{ marginLeft: 8 }}>CRM</a>
        </ButtonWrap>
      </a>
      <a>
        <ButtonWrap style={{ paddingLeft: 8 }}>
          <PMA />
          <a style={{ marginLeft: 8 }}>PMA</a>
        </ButtonWrap>
      </a>
      <a>
        <ButtonWrap style={{ paddingLeft: 8 }}>
          <Community />
          <a style={{ marginLeft: 8 }}>Community</a>
        </ButtonWrap>
      </a>
      <a>
        <ButtonWrap style={{ paddingLeft: 8 }}>
          <Roommate />
          <Link href="/roommate">
            <a style={{ marginLeft: 8, color: '#4e4e4e' }}>Roommate</a>
          </Link>
        </ButtonWrap>
      </a>
      <Divider sx={{ margin: '10px 8px 10px', opacity: 0.8 }} />

      <a>
        <ButtonWrap style={{ paddingLeft: 8 }}>
          <HelpCenter />
          <Link href="/help-center">
            <a style={{ marginLeft: 8, color: '#4e4e4e' }}>Help Center</a>
          </Link>
        </ButtonWrap>
      </a>
    </div>
  );

  return (
    //OLD LAYOUT ANTDSIGN
    
    // <MainContentDesktop className="not-login">
    //   <LogoWrapper>
    //     {/* <div>
    //     <Image
    //       preview={false}
    //       style={{ cursor: 'pointer' }}
    //       src={themeLight ? SRC_LOGO.LIGHT : SRC_LOGO.DARK}
    //       alt=""
    //       onClick={() => onRedirect(ROUTES.HOME)}
    //       height={44}
    //       width={110}
    //     />
    //     </div> */}
    //     <div>
    //       {themeLight ? <Logo height={44} width={110} style={{ cursor: 'pointer' }} onClick={() => onRedirect(ROUTES.HOME)} />
    //         : <LogoDark height={44} width={110} style={{ cursor: 'pointer' }} onClick={() => onRedirect(ROUTES.HOME)} />}
    //     </div>

    //   </LogoWrapper>
    //   {/* <LinksWrap typeof={`${themeLight}`}>
    //     {Object.keys(PUBLIC_ROUTES).map((item, key) => (
    //       <a
    //         onClick={() => onRedirect(PUBLIC_ROUTES[item].href)}
    //         key={key}
    //         typeof={`${
    //           PUBLIC_ROUTES[item].href == tabCurrent ? 'current' : ''
    //         }`}
    //       >
    //         {translate(`${PUBLIC_ROUTES[item].name}`)}
    //       </a>
    //     ))}
    //   </LinksWrap> */}

    //   <TabTabWrap>
    //     <FilterProvider>
    //       {themeLight ? <></> : <REFormSearchInput t={translate} />}

    //       {/* <RealEstateFilter toggleType={false} t={translate} /> */}
    //     </FilterProvider>

    //     {/* {themeLight?
    //     <label className="text-primary">12312</label>
    //     :
    //     <label style={{ color: "#222222", marginLeft: 100 }}>Find person</label>

    //   } */}
    //     {/* <Link href="/find-person">
    //       <a>
    //         <TextPost
    //           style={{
    //             color: themeLight ? '#FEFFFF' : '#222222',
    //             marginLeft: 100,
    //           }}
    //         >
    //           Find person
    //         </TextPost>
    //       </a>
    //     </Link>
    //     <Link href="https://user.tabtab.imazin.asia/post-news">
    //       <a>
    //     <TextPost style={{ color: themeLight ? '#FEFFFF' : '#222222' }}>
    //       Add listing
    //     </TextPost>
    //     </a>
    //     </Link> */}
    //     <div>
    //       {themeLight ? (
    //         <div className="d-flex">
    //           <Link href="/find-person">
    //             <a>
    //               <TextPost
    //                 style={{
    //                   color: '#FEFFFF',
    //                   marginRight: 40,
    //                 }}
    //               >
    //                 Find person
    //               </TextPost>
    //             </a>
    //           </Link>
    //           <Link href="https://user.tabtab.imazin.asia/post-news">
    //             <a>
    //               <TextPost style={{ color: '#FEFFFF' }}>Add listing</TextPost>
    //             </a>
    //           </Link>
    //         </div>
    //       ) : (
    //         <div className="d-flex">
    //           <Link href="/find-person">
    //             <a>
    //               <TextPost
    //                 style={{
    //                   color: '#222222',
    //                   marginRight: 40,
    //                 }}
    //               >
    //                 Find person
    //               </TextPost>
    //             </a>
    //           </Link>
    //           <Link href="https://user.tabtab.imazin.asia/post-news">
    //             <a>
    //               <TextPost style={{ color: '#222222' }}>Add listing</TextPost>
    //             </a>
    //           </Link>
    //         </div>
    //       )}
    //     </div>

    //     <div>
    //       {themeLight ? (
    //         <VectorGlobal style={{ marginLeft: 20, cursor: 'pointer' }} />
    //       ) : (
    //         <SocialBlack style={{ marginLeft: 20, cursor: 'pointer' }} />
    //       )}
    //     </div>
    //     <div>
    //       <Popover
    //         placement="bottomRight"
    //         content={Object.keys(currentUser).length ? content : content1}
    //         trigger="click"
    //       >
    //         <div
    //           className="d-flex rounded-pill justify-content-between"
    //           style={{
    //             display: 'flex',
    //             backgroundColor: '#F9C41F',
    //             width: '80px',
    //             height: '36px',
    //             cursor: 'pointer',
    //           }}
    //         >
    //           <div
    //             style={{ flex: 1 }}
    //             className="d-flex align-self-center justify-content-center"
    //           >
    //             <VectorMenuOutline className="d-flex align-self-center" />
    //           </div>
    //           <VectorPeople
    //             className="d-flex align-self-center"
    //             style={{ marginRight: 4 }}
    //           />
    //         </div>
    //       </Popover>
    //     </div>
    //   </TabTabWrap>
    //   {/* <HeaderUserAction
    //     themeLight={themeLight}
    //     onRedirect={onRedirect}
    //     t={props.t}
    //   /> */}
    // </MainContentDesktop >

    // new mui layout
    <>
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            padding: '30px 50px 0px 50px',
            height: '101px',
          }}
        >
          <Box sx={{}}>
            {themeLight ? (
              <Logo
                height={44}
                width={110}
                style={{ cursor: 'pointer' }}
                onClick={() => onRedirect(ROUTES.HOME)}
              />
            ) : (
              <LogoDark
                height={44}
                width={110}
                style={{ cursor: 'pointer' }}
                onClick={() => onRedirect(ROUTES.HOME)}
              />
            )}
          </Box>
          <Stack direction="row" alignItems="center">
            <Box>
              {themeLight ? (
                <div className="d-flex">
                  <Link href="/find-person">
                    <a>
                      <TextPost
                        style={{
                          color: '#FEFFFF',
                          marginRight: 40,
                        }}
                      >
                        Find person
                      </TextPost>
                    </a>
                  </Link>
                  <Link href="https://user.tabtab.imazin.asia/post-news">
                    <a>
                      <TextPost style={{ color: '#FEFFFF' }}>
                        Add listing
                      </TextPost>
                    </a>
                  </Link>
                </div>
              ) : (
                <div className="d-flex">
                  <Link href="/find-person">
                    <a>
                      <TextPost
                        style={{
                          color: '#222222',
                          marginRight: 40,
                        }}
                      >
                        Find person
                      </TextPost>
                    </a>
                  </Link>
                  <Link href="https://user.tabtab.imazin.asia/post-news">
                    <a>
                      <TextPost style={{ color: '#222222' }}>
                        Add listing
                      </TextPost>
                    </a>
                  </Link>
                </div>
              )}
            </Box>
            <Box mr="32px" ml="64px">
              {themeLight ? (
                <VectorGlobal style={{ marginLeft: 20, cursor: 'pointer' }} />
              ) : (
                <SocialBlack style={{ marginLeft: 20, cursor: 'pointer' }} />
              )}
            </Box>
            <button
              className="d-flex rounded-pill justify-content-between"
              style={{
                display: 'flex',
                backgroundColor: '#F9C41F',
                width: '80px',
                height: '36px',
                // cursor: 'pointer',
                border: 'none',
              }}
              onClick={handleClick}
            >
              <div
                style={{ flex: 1 }}
                className="d-flex align-self-center justify-content-center"
              >
                <VectorMenuOutline className="d-flex align-self-center" />
              </div>
              <VectorPeople
                className="d-flex align-self-center"
                style={{ marginRight: 4 }}
              />
            </button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
              anchorOrigin={{
                vertical: 40,
                horizontal: -200,
              }}
              sx={{
                '&.MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper':
                  {
                    backgroundColor: 'red',
                  },
              }}
            >
              {Object.keys(currentUser).length ? content : content1}
            </Menu>
          </Stack>
        </Stack>
        <Box
          sx={{
            background:
              'linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
            opacity: '0.4',
            position: 'absolute',
            top: 0,
            height: '101px',
            width: '100%',
            zIndex: '-1',
          }}
        ></Box>
      </Box>
    </>
  );
};

export default HeaderDesktop;
