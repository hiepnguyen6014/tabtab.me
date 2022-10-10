import {
  Advantage,
  AgentIcon,
  Building,
  IconBluePrint,
  IconMessTabTab,
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
  BoxFlex,
  BoxInfo,
  BoxInfoPrice,
  BoxPriceInfoMation,
  BoxSale,
  BoxTitle,
  BoxTitleHome,
  BoxWrapper,
  ButtonMessage,
} from './InfoHomeStyled';
import { Divider, Image } from 'antd';
import React, { FC } from 'react';

import { SRC_IMAGE } from '@core';

interface InfoHomeTypeProps {
  dataHome: any;
  row?: boolean;
  hiddenPrice?: boolean;
  changeImage?: boolean;
}

const InfoHome: FC<InfoHomeTypeProps> = ({
  dataHome,
  row,
  hiddenPrice,
  changeImage,
}) => {
  return (
    <BoxWrapper>
      <BoxFlex>
        <BoxInfoPrice>
          <BoxTitle>{dataHome.totalDisCountMoney}</BoxTitle>
          <BoxPriceInfoMation>
            <BoxCost>was {dataHome.cost}</BoxCost>
            {hiddenPrice ? (
              ''
            ) : (
              <>
                {' '}
                <span style={{ marginBottom: '4px' }}>•</span>
                <BoxArea>{dataHome.priceArea}</BoxArea>
              </>
            )}
          </BoxPriceInfoMation>
        </BoxInfoPrice>
        {!changeImage ? (
          <Image
            width={36}
            height={36}
            preview={false}
            src={SRC_IMAGE.PERSON6}
          />
        ) : (
          <Image
            width={46}
            height={46}
            preview={false}
            src={SRC_IMAGE.PERSON6}
          />
        )}
      </BoxFlex>
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
