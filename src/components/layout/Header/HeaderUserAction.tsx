import { ROUTES } from '@constants';
import {
  AvartarDefault,
  IconLogout,
} from '@root/public/icons';
import { Avatar, Badge, Dropdown } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '@contexts';
import {
  Account,
  DropdownAccount,
  DropdownItem,
  HeaderAction,
  ManagerPost,
  ManagerPostInDrop,
  Post,
  PostInDrop,
  TextUserName,
} from './Header.style';
import { useRouter } from 'next/router';

interface Props {
  themeLight?: boolean;
  onRedirect: (href: string) => void;
  t?:any
}

const HeaderUserAction = (props: Props) => {
  const { themeLight, onRedirect,t } = props;

  const { currentUser, userLogout } = useContext(UserContext);
  const isLogin  = Object.keys(currentUser).length > 0
  
  const onLogin = (href:string)=>{
    router.push({
      pathname:`${href}/${window.location.pathname}`,
      query: {...router.query}
    })
    // console.log(`http://${href}/${window.location.pathname}`);
    // router.push({
    //   pathname: 'http://localhost:3001/autologin',
    //   query: {...router.query}
    // });
  }
 
  // List item in dropdown account
  const { firstName, lastName, userAvatar, username } = currentUser;
  const ACCOUNT_ROUTES = {
    NOTIFYCATION: {
      default: ROUTES.NOTIFICATION,
      count: currentUser?.unreadMessage || 0,
    },
    MANAGER_TRANSACTION: {
      default: ROUTES.MANAGER_TRANSACTION
    },
    MANAGER_ACCOUNT: {
      default: ROUTES.MANAGER_ACCOUNT,
    },
  };
  const router = useRouter()
  
  const dropdownAccount = (
    <DropdownAccount>
      <ManagerPostInDrop>
        <DropdownItem>
          {ROUTES.MANAGER_POST.icon}
          <a href={ROUTES.MANAGER_POST.href}>{t('header.manager')}</a>
        </DropdownItem>
      </ManagerPostInDrop>

      <PostInDrop>
      <DropdownItem>
          {ROUTES.POST.icon}
          <a href={ROUTES.POST.href}>{t('header.post')}</a>
        </DropdownItem>
      </PostInDrop>
      {Object.keys(ACCOUNT_ROUTES).map((item, key) => (
        <DropdownItem key={key}>
          {ACCOUNT_ROUTES[item].default.icon}
          <a onClick={() => onRedirect(ACCOUNT_ROUTES[item].default.href)}>
            {t(ACCOUNT_ROUTES[item].default.name)}
          </a>
          <div>
            <Badge style={{ marginLeft: "-10px" }} count={ACCOUNT_ROUTES[item].count} />
          </div>
        </DropdownItem>
      ))}    
      <DropdownItem onClick={userLogout} style={{ boxShadow: 'inset 0px 1px 0px #F0F0F0' }}>
        <IconLogout />
        <a >{t(ROUTES.LOGOUT.name)}</a>
      </DropdownItem>
    </DropdownAccount>
  );
  return (
    <>
      <HeaderAction>
        {isLogin ? (
          <>
            <ManagerPost              
              typeof={`${themeLight}`}
              onClick={() => onRedirect(ROUTES.MANAGER_POST.href)}
            >
              {ROUTES.MANAGER_POST.icon}
              {t('header.manager')}
            </ManagerPost>
            <Post onClick={() => onRedirect(ROUTES.POST.href)}>
              {ROUTES.POST.icon}
              {t('header.post')}
            </Post>
              <Dropdown
                placement="bottomRight"
                overlay={dropdownAccount}
                trigger={['click']}
                >
                <Account>
                  <span >
                    <Badge count={ACCOUNT_ROUTES.NOTIFYCATION.count > 0 ? ACCOUNT_ROUTES.NOTIFYCATION.count : 0}>
                      {userAvatar ? (
                        <Avatar size="large" src={userAvatar} />
                      ) : (
                        <AvartarDefault />
                      )}
                    </Badge>
                  </span>
                  {/* overflowCount */}
                  <TextUserName
                    typeof={`${themeLight}`}
                  >{firstName || lastName ? `${firstName +''+ lastName}` : username}</TextUserName>
            </Account>
              </Dropdown>
          </>
        ) : (
          <TextUserName typeof={`${themeLight}`}>
            <a onClick={()=> onLogin(ROUTES.LOGIN.href)}>{t(`${ROUTES.LOGIN.name}`)}</a>
          </TextUserName> 
        )}
      </HeaderAction>
    </>
  );
};


export default HeaderUserAction