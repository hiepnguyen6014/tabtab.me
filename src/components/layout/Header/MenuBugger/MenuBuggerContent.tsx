import { PUBLIC_ROUTES, ROUTES, SRC_LOGO } from '@constants';
import { UserContext } from '@contexts';
import { IconCloseMenu } from '@root/public/icons';
import { Avatar, Badge, Image, Menu } from 'antd';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';

import {
  ButtonClose,
  ButtonPost,
  DividerCustom,
  MenuContentMain,
  MenuHeader,
  MenuLinkWraps,
  MenuUserLink,
  MenuUserRow,
} from './MenuBugger.style';

interface Props {
  setVisible: Function;
  onRedirect?: (href: string) => void;
  tabCurrent?: string;
  isLogin?: boolean;
  t: any;
}
const MenuBuggerContent = (props: Props) => {
  const router = useRouter();
  const { t: translate, setVisible, tabCurrent, isLogin, onRedirect } = props;
  const { currentUser, userLogout } = useContext(UserContext);

  const onLogin = () => {
    const href = !isLogin ? ROUTES.LOGIN.href : ROUTES.MANAGER_ACCOUNT.href;
    router.push({
      pathname: `${href}/${window.location.pathname}`,
      query: { ...router.query },
    });
  };
  const listMenu = [
    {
      icon: ROUTES.NOTIFICATION.icon,
      title: ROUTES.NOTIFICATION.name,
      count: currentUser?.unreadMessage,
      click: () => onRedirect(ROUTES.NOTIFICATION.href),
    },
    {
      icon: ROUTES.MANAGER_POST.icon,
      title: ROUTES.MANAGER_POST.name,
      subMenu: [
        {
          title: ROUTES.MANAGER_POST.subMenu.post.title,
          click: () => onRedirect(ROUTES.MANAGER_POST.subMenu.post.href),
        },
        {
          title: ROUTES.MANAGER_POST.subMenu.viewNews.title,
          click: () => onRedirect(ROUTES.MANAGER_POST.subMenu.viewNews.href),
        },
        {
          title: ROUTES.MANAGER_POST.subMenu.saveNews.title,
          click: () => onRedirect(ROUTES.MANAGER_POST.subMenu.saveNews.href),
        },
      ],
    },
    {
      icon: ROUTES.MANAGER_TRANSACTION.icon,
      title: ROUTES.MANAGER_TRANSACTION.name,
      subMenu: [
        {
          title: ROUTES.MANAGER_TRANSACTION.subMenu.accountBalance.title,
          click: () =>
            onRedirect(ROUTES.MANAGER_TRANSACTION.subMenu.accountBalance.href),
        },
        {
          title: ROUTES.MANAGER_TRANSACTION.subMenu.transactionHistory.title,
          click: () =>
            onRedirect(
              ROUTES.MANAGER_TRANSACTION.subMenu.transactionHistory.href,
            ),
        },
      ],
    },
    {
      icon: ROUTES.MANAGER_ACCOUNT.icon,
      title: ROUTES.MANAGER_ACCOUNT.name,
      subMenu: [
        {
          title: ROUTES.MANAGER_ACCOUNT.subMenu.presonalInfo.title,
          click: () =>
            onRedirect(ROUTES.MANAGER_ACCOUNT.subMenu.presonalInfo.href),
        },
        {
          title: ROUTES.MANAGER_ACCOUNT.subMenu.veritify.title,
          click: () => onRedirect(ROUTES.MANAGER_ACCOUNT.subMenu.veritify.href),
        },
        {
          title: ROUTES.MANAGER_ACCOUNT.subMenu.changePass.title,
          click: () =>
            onRedirect(ROUTES.MANAGER_ACCOUNT.subMenu.changePass.href),
        },
      ],
    },
    {
      icon: ROUTES.LOGOUT.icon,
      title: ROUTES.LOGOUT.name,
      click: userLogout,
    },
  ];
  return (
    <>
      <MenuHeader>
        <Image
          height={24}
          width={110}
          preview={false}
          src={SRC_LOGO.DARK}
          alt=""
          onClick={() => onRedirect(ROUTES.HOME)}
        />
        <ButtonClose onClick={() => setVisible(false)}>
          <IconCloseMenu />
        </ButtonClose>
      </MenuHeader>

      <DividerCustom />

      <MenuContentMain>
        <MenuUserRow>
          <Avatar size="large" src={currentUser?.userAvatar} />
          <span typeof="login" onClick={onLogin}>
            {isLogin
              ? currentUser.firstName || currentUser.lastName
                ? currentUser.firstName + ' ' + `${currentUser.lastName || ''}`
                : currentUser.username
              : translate('user.login')}
          </span>
        </MenuUserRow>
        <ButtonPost onClick={() => onRedirect(ROUTES.POST.href)}>
          {ROUTES.POST.icon}
          {translate('header.post')}
        </ButtonPost>
        <MenuLinkWraps>
          {Object.keys(PUBLIC_ROUTES).map((item, key) => (
            <a
              onClick={() => onRedirect(PUBLIC_ROUTES[item].href)}
              key={key}
              typeof={`${
                PUBLIC_ROUTES[item].href == tabCurrent ? 'current' : ''
              }`}
            >
              {translate(`${PUBLIC_ROUTES[item].name}`)}
            </a>
          ))}
        </MenuLinkWraps>
      </MenuContentMain>

      {isLogin ? (
        <MenuUserLink mode="inline">
          {listMenu.map((menu, key) =>
            menu.subMenu ? (
              <Menu.SubMenu
                icon={menu.icon}
                title={translate(menu.title)}
                key={key}
              >
                {menu.subMenu.map((menuSub, key2) => (
                  <Menu.Item onClick={menuSub.click} key={menuSub.title}>
                    {translate(menuSub.title)}
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <React.Fragment key={key}>
                <DividerCustom />
                <Menu.Item onClick={menu.click} icon={menu?.icon || <></>}>
                  {translate(menu.title)} <Badge count={menu?.count || 0} />
                </Menu.Item>
                <DividerCustom />
              </React.Fragment>
            ),
          )}
        </MenuUserLink>
      ) : (
        <></>
      )}
    </>
  );
};

export default MenuBuggerContent;
