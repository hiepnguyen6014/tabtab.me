import { styled } from "@styles/theme";
import { device } from "@styles/theme/device";

export const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:15px;
    @media ${device.maxMd}{
        justify-content: center;
    }
`

export const ResultWrapper = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`