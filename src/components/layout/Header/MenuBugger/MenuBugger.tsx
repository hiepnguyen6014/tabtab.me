import { UserContext } from "@contexts"
import { IconBuggerMenu } from "@root/public/icons"
import { Avatar, Badge, Drawer } from "antd"
import dynamic from "next/dynamic"
import { useState, useContext } from "react"
import { MenuBuggerWrap, MenuComponent } from "./MenuBugger.style"

const MenuBugger = (props:{t:any, tabCurrent?:string, onRedirect?:(href:string)=>void})=>{
    const [visible, setVisible] = useState(false)
    const { currentUser } = useContext(UserContext);
    const {t:translate, tabCurrent, onRedirect} = props
    const isLogin  = Object.keys(currentUser).length > 0
    const DynamicMenuContent = dynamic(()=>import("./MenuBuggerContent"))
    return(
        <>
            <MenuBuggerWrap>
                <MenuComponent onClick={()=>setVisible(true)}>
                    <IconBuggerMenu/>
                    {isLogin ?
                        <Badge dot count={currentUser?.unreadMessage > 0 ? 1 : 0}>
                            <Avatar src={currentUser.userAvatar} size={25}/>                    
                        </Badge>
                    :<></>}
                </MenuComponent>            
            </MenuBuggerWrap>
            <Drawer bodyStyle={{padding:'0'}} closable={false} placement="right" visible={visible} onClose={()=>setVisible(false)}>
                <DynamicMenuContent onRedirect={onRedirect} isLogin={isLogin} tabCurrent={tabCurrent} t={translate} setVisible={setVisible}/>
            </Drawer>
        
        </>
    )

}

export default MenuBugger