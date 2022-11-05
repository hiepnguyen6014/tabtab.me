import { Skeleton, Spin } from 'antd';

import { PlaceHolderContain } from './Loading.styled';

interface Props {
  height?: string;
  heightMb?: string;
}
const PlaceHolderLoading = (props: Props) => {
  return (
    <PlaceHolderContain height={props.height} heightmb={props.heightMb}>
      <Skeleton.Button style={{ height: '100%', width: '100%' }} active />
    </PlaceHolderContain>
  );
};

export default PlaceHolderLoading;
