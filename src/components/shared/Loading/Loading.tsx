import { Space, Spin } from 'antd';
import { LoadingWrap } from './Loading.style';

export const Loading = () => {
  return (
    <>
    <LoadingWrap className='d-flex'>
        TabTab
        <Spin style={{ marginTop:"50px", marginLeft:"20px"}} size="large" />
      </LoadingWrap>
    </>
  );
};
