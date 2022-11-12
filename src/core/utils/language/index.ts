import { NextPageContext } from 'next';

export const getLanguagePath = ({ req, query }: NextPageContext) => {
  const pathLang = req?.url?.split('/')[1];
  console.log('path >>', pathLang);
  return pathLang || query.lng;
};
