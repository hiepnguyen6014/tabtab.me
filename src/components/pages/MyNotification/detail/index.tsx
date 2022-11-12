import { ROUTES } from '@constants';
import { MNotify } from '@models/MNotify';
import { Typography } from 'antd';

import {
  DefaultContentNoGrid,
  DefaultWrapperWithBg,
} from '../../../layout/DefaultLayout/DefaultComponent.style';
import DefaultLayout from '../../../layout/DefaultLayout/DefaultLayout';
import { BreadcrumbCustom } from '../../../shared/Breadcrum';
import {
  DetailContentCol,
  DetailContentRow,
  DetailImage,
  RowHeaderNotify,
} from './detail.style';

interface Props {
  translate: any;
  title?: string;
  data?: MNotify;
}

export const NotifyDetail = (props: Props) => {
  const { translate, title, data } = props;
  const arrHref = [
    {
      name: translate(ROUTES.NOTIFICATION.name),
      href: ROUTES.NOTIFICATION.href,
    },
    {
      name: translate(ROUTES.DETAIL.name),
      href: ROUTES.DETAIL.href,
    },
  ];
  return (
    <DefaultLayout t={translate}>
      <RowHeaderNotify />
      <DefaultWrapperWithBg style={{ background: '#D44640' }}>
        <DefaultContentNoGrid>
          <BreadcrumbCustom t={translate} arrHref={arrHref} colorItem="#fff" />
          <Typography.Title
            level={4}
            ellipsis={{ rows: 2 }}
            style={{ color: '#fff' }}
          >
            {translate(title) || translate(ROUTES.NOTIFICATION.title)}
          </Typography.Title>
        </DefaultContentNoGrid>
      </DefaultWrapperWithBg>

      <DefaultWrapperWithBg>
        <DefaultContentNoGrid>
          <DetailContentRow gutter={10}>
            <DetailContentCol
              xs={{ span: 24 }}
              sm={{ span: 10 }}
              md={{ span: 8 }}
            >
              <DetailImage src={data.customerMessageImage} alt="" />
            </DetailContentCol>

            <DetailContentCol
              xs={{ span: 24 }}
              sm={{ span: 14 }}
              md={{ span: 16 }}
            >
              <Typography.Title level={4}>
                {data.customerMessageTitle}
              </Typography.Title>
              <Typography.Paragraph>
                {data.customerMessageContent}
              </Typography.Paragraph>
            </DetailContentCol>
          </DetailContentRow>
        </DefaultContentNoGrid>
      </DefaultWrapperWithBg>
    </DefaultLayout>
  );
};
