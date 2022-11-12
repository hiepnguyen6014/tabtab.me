import { ROUTES } from "@constants";
import { IconNotifyGeneral, IconNotifyNewPost, IconNotifyUser } from "@root/public/icons";

export const ROUTES_NOTIFY=[
    {},
    {icon:<IconNotifyUser/>,href:""},
    {icon:<IconNotifyGeneral/>,href:ROUTES.NOTIFICATION.href + ROUTES.DETAIL.href, id:true},
    {icon:<IconNotifyNewPost/>,href:"", id:true} // notify REALESTATE
]

export const USER_NOTIFY = {
    userInfo:ROUTES.MANAGER_ACCOUNT.href,
    transaction:ROUTES.HISTORY_TRANSACTION,
    statusPost:ROUTES.MANAGER_POST.href
}
