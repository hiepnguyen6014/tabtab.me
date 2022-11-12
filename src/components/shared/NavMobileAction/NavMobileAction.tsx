import { IconComeback, IconHeart, IconShare } from '@root/public/icons';
import { useRouter } from 'next/router';

import { ButtonSave, ButtonShare } from '..';
import { IconBack, NavMobile, NavMobileWrap } from './NavMobileAction.style';

interface Props {
  idPost: string | number;
  t: any;
}
const NavMobileAction = (props: Props) => {
  const { idPost, t: translate } = props;

  const router = useRouter();
  return (
    <NavMobile>
      <NavMobileWrap>
        <div onClick={() => router.back()}>
          <IconComeback />
          {translate('button.comeBack')}
        </div>
        <div>
          <ButtonSave
            bordered="false"
            text={translate('button.save')}
            t={translate}
            idPost={idPost}
          />
          <ButtonShare t={translate}>
            <IconShare />
            {translate('button.share')}
          </ButtonShare>
        </div>
      </NavMobileWrap>
    </NavMobile>
  );
};

export default NavMobileAction;
