import {
  IconCircle,
  IconTrash,
} from '@root/public/icons';
import { useRouter } from 'next/router';
import { ROUTES_NOTIFY } from '../../pages';
import {
  MainItem,
  MainItemAction,
  NotifyIconCol,
  NotifyItemRow,
  NotifyMainCol,
} from './notifyItem.style';

interface Props {
  data: any;
  t: any;
  onDelete: Function;
  markRead: (messageCustomerId: number) => void;
}

export const NotifyItem = (props: Props) => {
  const {
    messageCustomerId,
    isRead,
    messageTimeReceive,
    messageType,
    customerMessageTitle,
    detailHref,
  } = props.data;

  const router = useRouter();
  const onRedirect = (href?: string, id?: number) => {
    props.markRead(messageCustomerId);
    const queryId =id ? { id : id} : {}
    router.push({
        pathname:href,
        query:{...queryId}
      })
  };

  return (
    <>
      <NotifyItemRow theme={isRead == 0} key={messageCustomerId}>
        <NotifyMainCol wrap={false} onClick={() => onRedirect(detailHref.href, detailHref.idPost)}>
          <NotifyIconCol>
            {ROUTES_NOTIFY[messageType].icon}
          </NotifyIconCol>
          <MainItem theme={isRead == 0}>
            <div>
              <h5>{messageTimeReceive}</h5>
              <p>{customerMessageTitle}</p>
            </div>
          </MainItem>
        </NotifyMainCol>

        <MainItemAction>
          {isRead == 0 && <IconCircle />}
          <IconTrash onClick={() => props.onDelete(messageCustomerId)} />
        </MainItemAction>
      </NotifyItemRow>
    </>
  );
};
