import { IconCheckBlue, LanguageIcon } from '@root/public/icons';
import { Button, Typography } from 'antd';
import React, { ReactElement } from 'react';

import { ButtonDocumentWrap } from '../AddListing.style';

export default function DocumentBar() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '100%',
          background: '#E9E9E9',
          justifyContent: 'space-between',
          padding: '12px',
          borderRadius: '12px 12px 0px 0px',
        }}
      >
        <div>
          <ButtonDocumentWrap>Tiếng Việt</ButtonDocumentWrap>
          <ButtonDocumentWrap className="mx-2">
            <span style={{ marginBottom: 5, marginRight: 5 }}>
              <LanguageIcon />{' '}
            </span>{' '}
            Thêm ngôn ngữ
          </ButtonDocumentWrap>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: 3 }}>
            <IconCheckBlue />
          </span>
          <Typography
            style={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '500',
              fontSize: '14px',
              lineHeight: '18px',
              color: '#222222',
            }}
          >
            Dịch tự động
          </Typography>
        </div>
      </div>
    </>
  );
}
