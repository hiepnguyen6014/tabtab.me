import { styled } from "@styles/theme";
import { device } from "@styles/theme/device";
import { Modal,Button, Form } from "antd";

export const PopupWrapper = styled(Modal)`
    border-radius: 12px;
    overflow: hidden;
    width: 420px !important;
    background: #FFFFFF;
    padding: 0;
    border: 1px solid #767676;
    box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05);
    @media ${device.maxMd}{
        width:343px !important;
    }
`
export const ContentWrapper = styled(Form)`
    display: flex;
    flex-direction: column;
    min-height: 350px;
    justify-content: flex-start;
`
export const ListReportWrapper = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
`
export const ReportItem = styled.div`
    width: 100%;
    font-size: 16px;
    padding: 8px 16px;
    line-height: 22px;
    border: 1px solid #D9D9D9;
    transition: all .3s ease;
    cursor:pointer;
    &.selected{
        border: 1px solid #D54640 !important;
        color: #D54640;
        box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
    }
`

export const ReportFooter=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const ButtonNext = styled(Button)`
    color: #D54640;
`
export const ButtonSubmit = styled(Button)`
    color:#fff;
    background: #D54640;
`

export const RowContent = styled.div`
    margin-top: 15px;
    input{
        margin-bottom: 20px;
    }
`