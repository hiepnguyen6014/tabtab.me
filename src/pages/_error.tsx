import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';

import { IErrorPage } from '@types';

const ErrorPage: NextPage<IErrorPage> = ({ statusCode }) => {
  const { t } = useTranslation();

  return (
    <p>
      {statusCode
        ? t('error.with-status', { statusCode })
        : t('error.without-status')}
    </p>
  );
};

ErrorPage.getInitialProps = async ({ res, err }) => {
  let statusCode = null;
  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }

  return {
    namespacesRequired: ['common'],
    statusCode,
  };
};

export default ErrorPage;
