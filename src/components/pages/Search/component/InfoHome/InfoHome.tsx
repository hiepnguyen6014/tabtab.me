import { SRC_IMAGE } from '@core';
import {
  Advantage,
  AgentIcon,
  Building,
  IconBluePrint,
  IconMessTabTab,
  IconPark,
  IconSafari,
} from '@root/public/icons';
import { Divider, Image } from 'antd';
import React, { FC } from 'react';

import {
  BoxArea,
  BoxContact,
  BoxCost,
  BoxDescriptionHome,
  BoxDetailDescription,
  BoxDetailHome,
  BoxDetailHomeColumn,
  BoxDivider,
  BoxFlex,
  BoxImage,
  BoxImageMobile,
  BoxInfo,
  BoxInfoPrice,
  BoxPriceInfoMation,
  BoxTitle,
  BoxTitleHome,
  BoxTitleHomeMini,
  BoxWrapper,
  ButtonMessage,
} from './InfoHomeStyled';

interface InfoHomeTypeProps {
  dataHome: any;
  row?: boolean;
  hiddenPrice?: boolean;
  changeImage?: boolean;
  hiddenInfoHome?: boolean;
  titleDownPx?: boolean;
  imageMedium?: boolean;
}

const InfoHome: FC<InfoHomeTypeProps> = ({
  dataHome,
  row,
  hiddenPrice,
  changeImage,
  hiddenInfoHome,
  titleDownPx,
  imageMedium,
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
                <span style={{ marginBottom: '4px' }}>•</span>
                <BoxArea>{dataHome.priceArea}</BoxArea>
              </>
            )}
          </BoxPriceInfoMation>
        </BoxInfoPrice>

        {imageMedium ? (
          <Image
            width={46}
            height={46}
            preview={false}
            src={SRC_IMAGE.PERSON6}
          />
        ) : (
          <>
            {' '}
            {!changeImage ? (
              <BoxImage preview={false} src={SRC_IMAGE.PERSON6} />
            ) : (
              <BoxImageMobile preview={false} src={SRC_IMAGE.PERSON6} />
            )}
          </>
        )}
      </BoxFlex>
      {!titleDownPx ? (
        <BoxTitleHomeMini>{dataHome.title}</BoxTitleHomeMini>
      ) : (
        <BoxTitleHome>{dataHome.title}</BoxTitleHome>
      )}
      <BoxDescriptionHome>{dataHome.description}</BoxDescriptionHome>
      <>
        {!hiddenInfoHome && (
          <>
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
          </>
        )}
      </>
      <BoxDivider />
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
