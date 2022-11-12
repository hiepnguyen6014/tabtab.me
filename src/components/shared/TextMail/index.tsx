/* eslint-disable react/display-name */
import { memo, useEffect, useRef } from "react"

export const TextEmail= memo((props:{email:string,styles?:React.CSSProperties, t:any ,children?:any})=>{
    return(
        <>
            <a href={props.email ? `mailto:${props.email}` : undefined} style={props.styles}>
                {props.children || props.t('button.message')}
            </a>
        </>
    )
})