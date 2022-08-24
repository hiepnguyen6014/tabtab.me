import { Input, Typography} from 'antd';
import { RowContent } from './PopupReport.style';

interface Props {
  valueReply: any;
  setValueReply: Function;
  handleSubmit ?:()=>void
  t:any
}
const MoreInfomation = (props: Props) => {
  const { valueReply, setValueReply,t:translate,handleSubmit } = props;
  const handleInfoDetail = (e: any) => {
    setValueReply({ ...valueReply, reportcontent: e.target.value });
  };
  const handlePhoneInput = (e: any) => {
    const checkPhone = /^[0-9\b]+$/
    if(e.target.value == '' || checkPhone.test(e.target.value)){
      setValueReply({ ...valueReply, reportPhoneNumber: e.target.value });
    }
  };

  const handleEmailInput = (e: any) => {
    setValueReply({ ...valueReply, reportEmail: e.target.value });
  };

  return (
    <>
      <div>
        <Typography.Title
          style={{ marginTop: '20px' }}
          level={4}
          ellipsis={{ rows: 1 }}
        >
          {translate('detail.report.popup.moreInfo.title')}
        </Typography.Title>
        <Typography.Text>
          {translate('detail.report.popup.moreInfo.subTitle')}
        </Typography.Text>
      </div>
      <RowContent>
        <p>{translate('detail.report.popup.moreInfo.describeMore')}</p>
        <Input.TextArea
          showCount
          maxLength={800}
          onChange={handleInfoDetail}
          placeholder={translate('detail.report.popup.moreInfo.descripbePlace')}
        />
      </RowContent>
      <RowContent>
        <p>
          {translate('detail.report.popup.moreInfo.contact')}
        </p>
        <Input onPressEnter={handleSubmit} className={!valueReply.reportPhoneNumber && 'required_input'} value={valueReply.reportPhoneNumber} onChange={handlePhoneInput} placeholder={translate('detail.report.popup.moreInfo.phone')}/>
        <Input onPressEnter={handleSubmit} className={!valueReply.reportEmail && 'required_input'} type="email" onChange={handleEmailInput} placeholder={translate('detail.report.popup.moreInfo.email')} />
      </RowContent>
    </>
  );
};
export default MoreInfomation;
