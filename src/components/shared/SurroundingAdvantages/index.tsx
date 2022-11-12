import { MCommonPlace } from '@models/MPostDetail';
import { IconTick } from '@root/public/icons';
import { Col, Row } from 'antd';

import { SARowItem } from './SurroundingAdvantages.style';

interface Props {
  listAvantages: Array<MCommonPlace>;
}
export const SurroundingAdvantages = (props: Props) => {
  const renderItem = props.listAvantages.map(item => (
    <SARowItem key={item.commonPlaceId} xs={{ span: 24 }} md={{ span: 12 }}>
      <IconTick />
      {item.commonPlaceName}
    </SARowItem>
  ));
  return <Row gutter={5}>{renderItem}</Row>;
};
