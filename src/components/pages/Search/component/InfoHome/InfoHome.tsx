import {
  Advantage,
  AgentIcon,
  ArealIcon,
  Building,
  IconBluePrint,
  IconHouse,
  IconMessTabTab,
  IconMessage,
  IconMessages,
  IconPark,
  IconSafari,
} from '@root/public/icons';
import {
  BoxArea,
  BoxContact,
  BoxCost,
  BoxDescriptionHome,
  BoxDetailDescription,
  BoxDetailHome,
  BoxDetailHomeColumn,
  BoxInfo,
  BoxPriceInfoMation,
  BoxTitle,
  BoxTitleHome,
  BoxWrapper,
  ButtonMessage,
} from './InfoHomeStyled';
import { Button, Divider } from 'antd';
import React, { FC } from 'react';

import { SearchOutlined } from '@ant-design/icons';

interface InfoHomeTypeProps {
  dataHome: any;
  row?: boolean;
}

const InfoHome: FC<InfoHomeTypeProps> = ({ dataHome, row }) => {
  return (
    <BoxWrapper>
      <BoxTitle>{dataHome.totalDisCountMoney}</BoxTitle>
      <BoxPriceInfoMation>
        <BoxCost>was {dataHome.cost}</BoxCost>
        <span style={{ marginBottom: '4px' }}>•</span>
        <BoxArea>{dataHome.priceArea}</BoxArea>
      </BoxPriceInfoMation>
      <BoxTitleHome>{dataHome.title}</BoxTitleHome>
      <BoxDescriptionHome>{dataHome.description}</BoxDescriptionHome>
      {!row ? (
        <BoxDetailHome>
          <BoxDetailDescription>
            <IconBluePrint className="iConSm" />
            <BoxInfo>{dataHome.area}</BoxInfo>
          </BoxDetailDescription>
          <BoxDetailDescription>
            <IconPark />
            <BoxInfo>{dataHome.other}</BoxInfo>
          </BoxDetailDescription>
          <BoxDetailDescription>
            <AgentIcon />
            <BoxInfo>{dataHome.info}</BoxInfo>
          </BoxDetailDescription>
          <BoxDetailDescription>
            <IconSafari />
            <BoxInfo>{dataHome.direction}</BoxInfo>
          </BoxDetailDescription>
          <BoxDetailDescription>
            <Building />
            <BoxInfo>{dataHome.typeHome}</BoxInfo>
          </BoxDetailDescription>
        </BoxDetailHome>
      ) : (
        <BoxDetailHomeColumn>
          <BoxDetailHome>
            <BoxDetailDescription>
              <IconBluePrint className="iConSm" />
              <BoxInfo>{dataHome.area}</BoxInfo>
            </BoxDetailDescription>
            <BoxDetailDescription>
              <IconPark />
              <BoxInfo>{dataHome.other}</BoxInfo>
            </BoxDetailDescription>
            <BoxDetailDescription>
              <AgentIcon />
              <BoxInfo>{dataHome.info}</BoxInfo>
            </BoxDetailDescription>
          </BoxDetailHome>
          <BoxDetailHome>
            <BoxDetailDescription>
              <AgentIcon />
              <BoxInfo>{dataHome.info}</BoxInfo>
            </BoxDetailDescription>
            <BoxDetailDescription>
              <IconSafari />
              <BoxInfo>{dataHome.direction}</BoxInfo>
            </BoxDetailDescription>
            <BoxDetailDescription>
              <Building />
              <BoxInfo>{dataHome.typeHome}</BoxInfo>
            </BoxDetailDescription>
          </BoxDetailHome>
        </BoxDetailHomeColumn>
      )}
      <Divider style={{ border: '1px solid #E9E9E9', margin: '14px 0' }} />
      <BoxContact>
        <BoxDetailDescription>
          <Advantage />
          <BoxInfo>{dataHome.timeUpdate}</BoxInfo>
        </BoxDetailDescription>
        <ButtonMessage type="primary" icon={<IconMessTabTab />}>
          CHAT NOW
        </ButtonMessage>
      </BoxContact>
    </BoxWrapper>
  );
};

export default InfoHome;
