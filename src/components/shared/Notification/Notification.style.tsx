import { styled } from "@styles/theme";

export const NotifyWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    position: relative;
    margin-top: 45px;
    gap: 15px;
    padding: 19px;
    border-radius: 12px;
    overflow: hidden;
    border: 1.5px solid #767676;
`

export const ContentRight = styled.div`
    display: flex;
        flex-direction: column;
        justify-content: space-between;
        a{
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 600;
            text-decoration: underline !important;
        }
`