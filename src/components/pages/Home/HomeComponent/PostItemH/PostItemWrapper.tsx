import { PUBLIC_ROUTES, ROUTES } from '@constants';
import { PostWrapper } from './PostItem.style';

interface Props {
  children?: any;
}

export const ItemWrapper = (props: Props) => {
  return <PostWrapper>{props.children}</PostWrapper>;
};
