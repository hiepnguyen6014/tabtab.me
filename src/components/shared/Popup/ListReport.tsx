import { Typography } from 'antd';
import { useState } from 'react';
import { ReportItem, ListReportWrapper } from './PopupReport.style';

interface Props {
  valueReply: any;
  setValueReply: Function;
  t:any
}
const ListReport = (props: Props) => {
  const { valueReply, setValueReply,t:translate } = props;
  const listReport = [
    { title: translate('detail.report.popup.listReport.op1') },
    { title: translate('detail.report.popup.listReport.op2') },
    { title: translate('detail.report.popup.listReport.op3') },
    { title: translate('detail.report.popup.listReport.op4') },
    { title: translate('detail.report.popup.listReport.op5') },
    { title: translate('detail.report.popup.listReport.op6') },
    { title: translate('detail.report.popup.listReport.op7') },
  ];
  const onSelectReport = (title: string) => {
    if(title == valueReply.ReportTitle){
      setValueReply({...valueReply, reportTitle: ''})
    }else{
      setValueReply({...valueReply, reportTitle: title})
    }
  };
  return (
    <>
      <div>
        <Typography.Title style={{ marginTop: '20px' }} level={4}>
          {translate('detail.report.popup.whyChoice')}
        </Typography.Title>
        <Typography.Text>
        {translate('detail.report.popup.subChoice')}
        </Typography.Text>
      </div>
      <div>
        <ListReportWrapper>
          {listReport.map((value, key) => (
            <ReportItem
              onClick={() => onSelectReport(value.title)}
              key={key}
              className={
                valueReply['reportTitle']=== value.title ? 'selected' : ''
              }
            >
              {value.title}
            </ReportItem>
          ))}
        </ListReportWrapper>
      </div>
    </>
  );
};

export default ListReport;
