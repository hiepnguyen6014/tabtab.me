import React from 'react';

export const Navigator = {
  client: {
    goTo: (pathName: any, replace?: boolean) => {
      replace
        ? window.location.replace(pathName)
        : (window.location.pathname = pathName);
    },
    jump: (href: string) => {
      window.location.assign(href);
    },
  },
};

export const RedirectGGMap = (location?: string) => {
  const pathName = 'https://www.google.com/maps/search/' + location;
  window.location.pathname = pathName;
};

export const checkIsHomePage = (pathname?: string) => {
  if (typeof window !== 'undefined') {
    return (
      window.location.pathname == '/' ||
      window.location.pathname == '/vi' ||
      window.location.pathname == '/en'
    );
  } else if (pathname) {
    return pathname == '/' || pathname == '/vi' || pathname == '/en';
  }
  return true;
};
