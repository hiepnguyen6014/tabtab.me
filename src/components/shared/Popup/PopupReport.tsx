import { reportProblem } from '@root/src/core/services';
import { checkEmail } from '@utils';
import { Button, Radio, Typography, message } from 'antd';
import { useState } from 'react';

import ListReport from './ListReport';
import MoreInfomation from './MoreInfomation';
import {
  ButtonNext,
  ButtonSubmit,
  ContentWrapper,
  PopupWrapper,
  ReportFooter,
} from './PopupReport.style';

interface Props {
  id: string | number;
  isShow: boolean;
  setIsShow: Function;
  token?: string;
  t: any;
}
export const Popup = (props: Props) => {
  const { isShow, setIsShow, t: translate, token } = props;
  const [currentPage, setCurrentPage] = useState(0);
  const [reply, setReply]: any = useState({
    realEstateId: props.id,
    reportTitle: '',
    reportcontent: '',
    reportPhoneNumber: '',
    reportEmail: '',
  });
  const handleSubmit = async (value: any) => {
    const submit = {};
    for (let key in value) {
      if ((key == 'reportEmail' || key == 'reportPhoneNumber') && !value[key]) {
        message.error(translate(`detail.report.${key}`));
        return;
      }
      if (value[key]) {
        if (key == 'reportEmail') {
          if (!checkEmail(value['reportEmail'])) {
            message.error(translate('detail.report.responseEmailFail'));
            return;
          }
        }
        submit[key] = value[key];
      }
    }

    if (Object.keys(submit).length <= 1) {
      message.error(translate('detail.report.responseNull'));
      return;
    } //Do co id mac dinh nen phai lon hon 1
    await reportProblem(submit, token).finally(() => {
      message.success(translate('detail.report.responeSuccess'));
      setReply({
        realEstateId: props.id,
        reportTitle: '',
        reportcontent: '',
        reportEmail: '',
        reportPhoneNumber: '',
      });
      setCurrentPage(0);
      setIsShow(false);
    });
  };

  const listPageInModal = [
    <ListReport
      t={translate}
      key={1}
      valueReply={reply}
      setValueReply={setReply}
    />,
    <MoreInfomation
      t={translate}
      handleSubmit={() => handleSubmit(reply)}
      key={2}
      valueReply={reply}
      setValueReply={setReply}
    />,
  ];

  return (
    <PopupWrapper
      visible={isShow}
      mask={false}
      centered
      onOk={() => setIsShow(false)}
      onCancel={() => setIsShow(false)}
      destroyOnClose
      footer={
        <ReportFooter>
          <Button
            disabled={currentPage == 0}
            onClick={() => setCurrentPage(e => (e -= 1))}
            type="text"
          >
            {translate('button.back')}
          </Button>
          {currentPage == listPageInModal.length - 1 ? (
            <ButtonSubmit onClick={() => handleSubmit(reply)}>
              {translate('button.submit')}
            </ButtonSubmit>
          ) : (
            <ButtonNext
              disabled={!reply.reportTitle}
              onClick={() => setCurrentPage(e => (e += 1))}
            >
              {translate('button.next')}
            </ButtonNext>
          )}
        </ReportFooter>
      }
    >
      <ContentWrapper>{listPageInModal[currentPage]}</ContentWrapper>
    </PopupWrapper>
  );
};
