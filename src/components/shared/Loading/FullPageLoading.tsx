import { Spin } from 'antd';

import { FullPageWrapper, LoadingText } from './Loading.styled';

export const FullPageLoading = () => {
  return (
    <FullPageWrapper>
      <LoadingText>TabTab</LoadingText>
      <Spin size="large" />
    </FullPageWrapper>
  );
};
