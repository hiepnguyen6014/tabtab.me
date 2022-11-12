import { ROUTES } from '@constants';
import {
  IconChart,
  IconLease,
  IconNews,
  IconProject,
  IconRecharge,
  IconSell,
} from '@root/public/icons';
import { Typography } from 'antd';
import { useRouter } from 'next/router';

import { BoxContent, BoxIcon, Wrapper } from './Discover.style';

export const DiscoverRealEstate = (props: { t: any }) => {
  const { t } = props;
  const listDiscover = [
    {
      icon: <IconRecharge />,
      title: t('home.discover.recharge'),
      description: t('home.discover.rechargeTitle'),
      href: ROUTES.USER_BALANCE.href,
    },
    {
      icon: <IconLease />,
      title: t('home.discover.valuation'),
      description: t('home.discover.valuationTitle'),
      href: ROUTES.VALUATION_PAGE.href,
    },
    {
      icon: <IconNews />,
      title: t('home.discover.news'),
      description: t('home.discover.newsTitle'),
      href: ROUTES.HOTNEWS_PAGE.href,
    },
  ];
  const router = useRouter();
  const onRedirect = (href: string) => {
    router.push(href);
  };
  return (
    <Wrapper>
      {listDiscover.map((value, key) => (
        <BoxContent key={key} onClick={() => onRedirect(value.href)}>
          <BoxIcon>{value.icon}</BoxIcon>
          <div>
            <h1>{value.title}</h1>
            <Typography.Paragraph style={{ margin: 0 }} ellipsis={{ rows: 2 }}>
              {value.description}
            </Typography.Paragraph>
          </div>
        </BoxContent>
      ))}
    </Wrapper>
  );
};
