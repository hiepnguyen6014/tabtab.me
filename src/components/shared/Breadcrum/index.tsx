import { useRouter } from 'next/router';

import { BreadcrumbItem, BreadcrumbWrapper } from './breadcrum.style';

interface Props {
  arrHref: {
    name: string;
    href?: string;
    query?: any;
  }[];
  t: any;
  colorItem?: string;
}
export const BreadcrumbCustom = (props: Props) => {
  const { colorItem } = props;
  const router = useRouter();
  const onRedirect = (href: string, query?: any) => {
    const queryParam = query ? { query: query } : null;
    if (href) {
      router.push({
        pathname: href,
        ...queryParam,
      });
    }
  };
  return (
    <>
      <BreadcrumbWrapper coloritem={colorItem} separator=">">
        <BreadcrumbItem onClick={() => onRedirect('/')}>
          {props.t('header.home')}
        </BreadcrumbItem>
        {props.arrHref?.map((value, key) => (
          <BreadcrumbItem
            key={key}
            onClick={() => onRedirect(value.href, value.query)}
          >
            {value.name}
          </BreadcrumbItem>
        ))}
      </BreadcrumbWrapper>
    </>
  );
};
