import { IconGlobal } from "@root/public/icons"
import { Dropdown, Menu } from "antd"
import { I18nContext } from "next-i18next"
import { useContext } from "react"
import Link from 'next/link'
import { useRouter } from "next/router"

interface Props{
    t:any
}
export const ToggleLanguage = (props:Props)=>{
    const {t:translate} = props
    const router = useRouter()
    const { i18n } = useContext(I18nContext)
    const menuLanguage = <Menu>
        <Menu.Item onClick={()=>i18n.changeLanguage('vi')}>
            <Link href="" locale="vi">{translate('footer.vietnamese')}</Link>    
        </Menu.Item>
        <Menu.Item onClick={()=>i18n.changeLanguage('en')}>
        <Link href="" locale="en">{translate('footer.english')}</Link>    
        </Menu.Item>
    </Menu>

    return(
        <Dropdown trigger={['click']} overlay={menuLanguage}>
            <div style={{cursor:'pointer'}}>
                <IconGlobal/>
                <p>{translate('footer.tooglelg')}</p>
            </div>
        </Dropdown>
    )
}