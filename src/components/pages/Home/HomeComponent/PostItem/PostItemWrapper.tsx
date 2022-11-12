import { PUBLIC_ROUTES, ROUTES } from '@constants';
import { Wrapper } from './PostItem.style';

interface Props {
  children?: any;
}

export const ItemWrapper = (props: Props) => {
  return <Wrapper>{props.children}</Wrapper>;
};
