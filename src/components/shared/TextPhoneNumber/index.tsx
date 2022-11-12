import { useEffect, useRef } from "react"

interface Props {
    phone :string,
    children ?:any,
    t:any
}
export const TextPhoneNumber = (props:Props)=>{

    return(
        <>
            <a href={props.phone ? `tel:${props.phone}`: undefined} style={{width:"100%", display:"block"}}>
                {props.children || props.t('button.callNow')}
            </a>
        </>
    )
}