import { ImageIcon } from '@root/public/icons';
import { Col, Form, Row, Typography, Upload, notification } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  BorderImage,
  ButtonCustom,
  UploadFileWrapper,
} from '../AddListing.style';
import PreviewItemUpload from '../Preview';

const { Title, Text } = Typography;
export default function UploadFileComponent(): React.ReactElement {
  const { t: translate } = useTranslation();
  const uploadImage = (options: any) => {
    const { onSuccess, onError, file } = options;
    if (file.size >= 1e7) {
      notification['error']({
        message: translate('common.error'),
        description: translate('valid.videoFail'),
      });
      onError();
      return;
    }
    onSuccess('Ok');
  };
  return (
    <UploadFileWrapper>
      <Title className="mt-2 d-flex align-items-center" level={2}>
        Hình ảnh & video
      </Title>
      <Row
        style={{
          padding: 8,
          borderRadius: 9,
          backgroundColor: '#E9E9E9',
          width: '591px',
          height: 64,
        }}
      >
        <Col span={8}>
          <ButtonCustom style={{ height: 45 }}>
            <label
              style={{ fontSize: 16, fontWeight: 700, fontFamily: 'Inter' }}
            >
              Hình ảnh
            </label>
          </ButtonCustom>
        </Col>
        <Col
          span={8}
          style={{
            borderLeftWidth: 1,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderLeftColor: '#D3D3D3',
            borderStyle: 'solid',
          }}
        >
          <ButtonCustom style={{ height: 45 }}>
            <label
              style={{ fontSize: 16, fontWeight: 700, fontFamily: 'Inter' }}
            >
              Sơ đồ MB
            </label>
          </ButtonCustom>
        </Col>
        <Col
          span={8}
          style={{
            borderLeftWidth: 1,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderLeftColor: '#D3D3D3',
            borderStyle: 'solid',
          }}
        >
          <ButtonCustom style={{ height: 45 }}>
            <label
              style={{ fontSize: 16, fontWeight: 700, fontFamily: 'Inter' }}
            >
              Video (VR)
            </label>
          </ButtonCustom>
        </Col>
      </Row>

      <Form.Item name="realEstateImage" className="mb-4" validateStatus="error">
        <Upload
          customRequest={uploadImage}
          accept="image/*"
          itemRender={(originNode, file, currFileList) => (
            <PreviewItemUpload
              originNode={originNode}
              file={file}
              fileList={currFileList}
            />
          )}
          multiple
          listType="picture"
        >
          <BorderImage style={{ marginTop: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Typography
                style={{
                  fontSize: 24,
                  fontFamily: 'Inter',
                  fontWeight: '700',
                  color: '#7A7A7A',
                  textAlign: 'center',
                }}
              >
                Tin đăng có hình ảnh thường hiệu quả hơn 59% tin đăng không có
                hình ảnh
              </Typography>
            </div>
            <a
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 20,
              }}
            >
              <div style={{ borderRadius: 16, background: '#F9C41F' }}>
                <div style={{ padding: '16px 50px 10px 40px' }}>
                  <ImageIcon />
                  <a
                    style={{
                      fontSize: 32,
                      fontFamily: 'Inter',
                      fontWeight: '700',
                      marginLeft: 10,
                    }}
                  >
                    Thêm ảnh
                  </a>
                </div>
              </div>
            </a>
          </BorderImage>
        </Upload>
      </Form.Item>
    </UploadFileWrapper>
  );
}
