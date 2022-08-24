
import { styled } from "@styles/theme";
import { Typography } from "antd";

export const ButtonMore = styled.div`
    color:#222222 !important;
    position: absolute;
    display:flex;
    width: 100%;
    background-image:${props => props.typeof == 'collapsed' ?  'linear-gradient(to bottom,rgba(255,255,255,.9) 15%, rgba(255,255,255,1) 85%)' : ''} ; 
    bottom: 0;
    padding-top:15px;
    align-items:center;
    gap:10px;
    height:60px;
    cursor:pointer;
    font-weight:500;   
    svg{
        transform: rotate(-90deg);
        path{
            stroke-width:2px !important;
            fill:#222222;
        }
    }
    justify-content: center;
`
export const ButtonMoreTrue = styled.div`
    color:#222222 !important;
    position: absolute;
    display:flex;
    width: 100%;
    background-image:${props => props.typeof == 'collapsed' ?  'linear-gradient(to bottom,rgba(240,242,245,.9) 15%, rgba(240,242,245,1) 85%)' : ''} ; 
    bottom: 0;
    padding-top:15px;
    align-items:center;
    gap:10px;
    height:60px;
    cursor:pointer;
    font-weight:500;   
    svg{
        transform: rotate(-90deg);
        path{
            stroke-width:2px !important;
            fill:#222222;
        }
    }
    justify-content: center;
`


export const TextWrap = styled.div`
    font-size: 16px;
    font-weight: 400;
    font-family: Inter;
    line-height: 16px;
    position: relative;
    max-height: 100%;
    padding-bottom: 35px;
    ${props => props.typeof == 'collapsed' && {
        maxHeight:'150px',
        overflow: 'hidden',
        textOverflow:'ellipsis'
    }},
    p{
        line-height: 20px;
    }
`

export const ParagraphWrap = styled.div`
    position: relative;
`