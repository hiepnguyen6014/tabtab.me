/* eslint-disable react/jsx-no-target-blank */
import { UserContext } from '@contexts';
import { CERTIFICATION } from '@root/public/icons';
import { Col } from 'antd';
import { useContext } from 'react';
import { RowApp, RowFlexColumn, RowIcons } from './Footer.style';
import { RoutesApps, RoutesSocials } from './RoutesFooter';

export const FooterMiddle = (props:{t:any}) => {
    const { systemConfig }= useContext(UserContext)
    const spanCol = {
        Col1:{lg:9},
        Col2:{lg:7}
    }
  return (
    <>
      <Col {...spanCol.Col1}>
        <RowFlexColumn>
          <p>CÔNG TY TNHH NỀN TẢNG CÔNG NGHỆ BẤT ĐỘNG SẢN</p>
          <a>{props.t('footer.license')}: 0317091038</a>
          <CERTIFICATION />
        </RowFlexColumn>
      </Col>

      <Col {...spanCol.Col2}>
        <RowFlexColumn>
          <h1>{props.t('footer.dowloadapp')}</h1>

          <RowApp>
            {RoutesApps.map((item, key) => (
              <a target={'_blank'} key={key} href={"http://" + systemConfig[item.href]}>{item.icon}</a>
            ))}
          </RowApp>

          <RowIcons>
            {RoutesSocials.map((item, key) => (
              <a target={'_blank'} key={key} href={"http://" + systemConfig[item.href]}>{item.icon}</a>
            ))}
          </RowIcons>
        </RowFlexColumn>
      </Col>
    </>
  );
};
