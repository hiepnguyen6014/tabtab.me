import { styled } from "@styles/theme"
import { device } from "@styles/theme/device"

export const Wrapper = styled.div`
    min-height: 95px;
    display: grid;
    grid-template-columns: 33.3%33.3%33.3%;
    column-gap: 10px;
    justify-content: space-around;
    @media ${device.maxSm}{
        grid-template-columns: 100%;
        gap:5px;
    }
`

export const BoxIcon = styled.div`
    display: blox;
    margin: auto;
`

export const BoxContent = styled.div`
    cursor: pointer;
    width:100%;
    border-radius: 5px;
    background: #FFFFFF;
    border: 2px solid #F0F0F0;
    box-sizing: border-box;
    box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.04);
    display: grid;
    grid-template-columns:auto 70%;
    grid-column-gap:1%;
    padding: 16px 20px 16px 10px;
    h1{
        font-size: 16px;
        margin-top: 10px;
        line-height: 16px;
    }
    svg{
        transition: all .3s ease;
        margin-top: 5px;
        flex: 50%;
        float: left;
        transform: scale(.8);
    }
    &:hover{
        svg{
            transform: scale(1);        
        }
    }
    @media ${device.maxMd}{
        grid-template-columns: 100%;
    }
    @media ${device.maxSm}{
        grid-template-columns: 25%75%;
    }
    
`