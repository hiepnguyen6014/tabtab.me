import { MPostDetail } from '@models/MPostDetail';
import {
  IconArea,
  IconBathroom,
  IconBedRoom,
  IconDirection,
} from 'public/icons';
import React from 'react';

import { PostItemFooter } from '../PostItem.style';

export const PostProjectFooter: React.FC<{ post: MPostDetail }> = ({
  post,
}) => {
  const {
    realEstateLandRealitySquare,
    realEstateHouseBedRooms,
    derectionHouseName,
  } = post;
  const listInfo = [
    {
      icon: <IconArea />,
      value: `${realEstateLandRealitySquare} m²`,
    },
    {
      icon: <IconBedRoom />,
      value:
        realEstateHouseBedRooms == 0 ? '--' : `${realEstateHouseBedRooms} PN`,
    },
    { icon: <IconDirection />, value: derectionHouseName },
  ];
  return (
    <PostItemFooter>
      {listInfo.map((item, key) =>
        item.value && item.icon ? (
          <span key={key}>
            {item.icon}
            <label>{item.value}</label>
          </span>
        ) : (
          ''
        ),
      )}
    </PostItemFooter>
  );
};
