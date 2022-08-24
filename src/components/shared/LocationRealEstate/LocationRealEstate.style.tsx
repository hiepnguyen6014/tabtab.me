import { styled } from "@styles/theme";
import { device } from "@styles/theme/device";

export const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    row-gap: 15px;
    [role='item']{
        width: 50%;
        display: flex;
        align-items: center;
        label{
            margin: 0;
            width: 50%;
            font-weight: bold;
        }
    }
    @media ${device.maxMd}{
        [role='item']{
            width: 100%;
            span{
                width: 100%;
                display: flex;
                justify-content: flex-end;
            }
        }
    }
`