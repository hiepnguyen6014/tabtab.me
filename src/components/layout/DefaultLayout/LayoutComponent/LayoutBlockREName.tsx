import { SRC_IMAGE } from '@constants';
import { MPostDetail } from '@models/MPostDetail';
import {
  IconApartement,
  IconCertuficate,
  IconHouse,
  IconStair,
} from '@root/public/icons';
import { Button, Divider, Image, Typography } from 'antd';
import dynamic from 'next/dynamic';

import {
  DefaultContentInWrapper,
  DefaultRowTitle,
  DefaultWrapperWithBg,
} from '..';
import { ListWrapper } from '../../../shared/Utilities/Utilities.style';
import { DefaultContentInWrapperBN } from './Component.style';
import { BlockName, RowPriceLeft } from './Component.style';

export const LayoutBlockREName = (props: { t: any; post: MPostDetail }) => {
  const { t: translate, post } = props;
  const DynamicUtility = dynamic(
    () => import('../../../shared/Utilities/ListUtilities'),
  );
  const DynamicNotifyOutdate = dynamic(() =>
    import('../../../shared/WidgetUserInfo/NotifyOutdate').then(
      (mod: any) => mod.NotifyOutdate,
    ),
  );

  return (
    <>
      <DefaultWrapperWithBg style={{ marginTop: -70 }}>
        <DefaultContentInWrapperBN grid={true}>
          <RowPriceLeft>
            <DefaultRowTitle>
              <label
                style={{
                  fontFamily: 'Inter',
                  fontSize: 28,
                  fontWeight: '700',
                  marginBottom: 20,
                }}
              >
                Tên BDS hoặc tên dự án
              </label>
            </DefaultRowTitle>
            <BlockName>
              <Image src={SRC_IMAGE.BLOCKNAME} />
              <div>
                <div
                  className="d-flex justify-content-between"
                  style={{ paddingLeft: 20, paddingTop: 30 }}
                >
                  <div>
                    <div style={{ marginRight: 12, marginBottom: 7 }}>
                      <IconApartement />
                    </div>
                    <span>
                      <label
                        style={{
                          fontFamily: 'Inter',
                          fontSize: 16,
                          fontWeight: '700',
                          marginRight: 10,
                          color: '#7A7A7A',
                        }}
                      >
                        Tổng số căn hộ
                      </label>
                      <label
                        style={{
                          fontFamily: 'Inter',
                          fontSize: 16,
                          fontWeight: '700',
                        }}
                      >
                        3000
                      </label>
                    </span>
                  </div>
                  <div style={{ marginLeft: 8 }}>
                    <div style={{ marginRight: 12, marginBottom: 7 }}>
                      <IconStair />
                    </div>
                    <span>
                      <label
                        style={{
                          fontFamily: 'Inter',
                          fontSize: 16,
                          fontWeight: '700',
                          marginRight: 10,
                          color: '#7A7A7A',
                        }}
                      >
                        Số Block
                      </label>
                      <label
                        style={{
                          fontFamily: 'Inter',
                          fontSize: 16,
                          fontWeight: '700',
                        }}
                      >
                        6
                      </label>
                    </span>
                  </div>
                </div>
                <div style={{ paddingLeft: 20 }}>
                  <div className="d-flex justify-content-between">
                    <div>
                      <div style={{ marginRight: 12, marginBottom: 7 }}>
                        <IconStair />
                      </div>
                      <span>
                        <label
                          style={{
                            fontFamily: 'Inter',
                            fontSize: 16,
                            fontWeight: '700',
                            marginRight: 10,
                            color: '#7A7A7A',
                          }}
                        >
                          Số Tầng
                        </label>
                        <label
                          style={{
                            fontFamily: 'Inter',
                            fontSize: 16,
                            fontWeight: '700',
                          }}
                        >
                          42
                        </label>
                      </span>
                    </div>
                    <div>
                      <div style={{ marginRight: 12, marginBottom: 7 }}>
                        <IconStair />
                      </div>
                      <span>
                        <label
                          style={{
                            fontFamily: 'Inter',
                            fontSize: 16,
                            fontWeight: '700',
                            marginRight: 10,
                            color: '#7A7A7A',
                          }}
                        >
                          Biệt thự
                        </label>
                        <label
                          style={{
                            fontFamily: 'Inter',
                            fontSize: 16,
                            fontWeight: '700',
                          }}
                        >
                          20
                        </label>
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ paddingLeft: 20 }}>
                  <div style={{ marginRight: 12, marginBottom: 7 }}>
                    <IconHouse />
                  </div>
                  <span>
                    <label
                      style={{
                        fontFamily: 'Inter',
                        fontSize: 16,
                        fontWeight: '700',
                        marginRight: 10,
                        color: '#7A7A7A',
                      }}
                    >
                      Số căn hộ
                    </label>
                    <label
                      style={{
                        fontFamily: 'Inter',
                        fontSize: 16,
                        fontWeight: '700',
                      }}
                    >
                      672
                    </label>
                  </span>
                </div>
                <div style={{ paddingLeft: 20 }}>
                  <div style={{ marginRight: 12, marginBottom: 7 }}>
                    <IconCertuficate />
                  </div>
                  <span>
                    <label
                      style={{
                        fontFamily: 'Inter',
                        fontSize: 16,
                        fontWeight: '700',
                        marginRight: 10,
                        color: '#7A7A7A',
                      }}
                    >
                      Năm hoàn thành
                    </label>
                    <label
                      style={{
                        fontFamily: 'Inter',
                        fontSize: 16,
                        fontWeight: '700',
                      }}
                    >
                      2021
                    </label>
                  </span>
                </div>
                <div
                  style={{
                    justifyContent: 'center',
                    display: 'flex',
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                >
                  <Button
                    style={{
                      backgroundColor: '#F9C41F',
                      borderRadius: 8,
                      height: 'auto',
                      marginTop: 5,
                      marginBottom: 24,
                      width: '100%',
                      whiteSpace: 'break-spaces',
                    }}
                  >
                    <label
                      style={{
                        fontSize: 16,
                        fontWeight: '700',
                        fontFamily: 'Inter',
                        paddingTop: 8,
                        paddingBottom: 8,
                      }}
                    >
                      XEM CHI TIẾT
                    </label>
                  </Button>
                </div>
              </div>
            </BlockName>
          </RowPriceLeft>
        </DefaultContentInWrapperBN>
        <DefaultContentInWrapper grid={true}>
          <img src={SRC_IMAGE.ADGOOGLE} height={'100%'} width={'100%'} />
        </DefaultContentInWrapper>
      </DefaultWrapperWithBg>
    </>
  );
};
