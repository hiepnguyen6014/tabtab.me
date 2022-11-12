import { IconBackTop } from "@root/public/icons"
import { BackTop } from "antd"
import { ButtonBackTopWrapper } from "./ButtonBackTop.style"

export const ButtonBackTop = ()=>{
    return(
        <>
            <ButtonBackTopWrapper>
                <IconBackTop/>
            </ButtonBackTopWrapper>
        </>
    )
}