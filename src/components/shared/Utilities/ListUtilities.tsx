import {
  IconCompany,
  IconArea,
  IconType,
  IconDirection,
  IconBedRoom,
  IconBathroom,
  IconCharacterist,
  IconCoin,
  IconApartment,
  IconFurniture,
  IconJuridical,
  IconDeposit,
  IconHouse,
  IconBluePrint,
  IconBed,
  IconPark,
  IconListed,
  IconApartement,
  IconBedTabTab,
  IconDoor,
  IconTitle,
  IconProperty,
  IconAuction,
  IconNewHouse,
} from 'public/icons';
import { ListWrapper } from './Utilities.style';
import { getDataFilter } from '@root/src/core/services/dataFilter';
import { useEffect, useState } from 'react';
import { MPostDetail } from '@models/MPostDetail';
import { formatNumToUnit } from '@root/src/core/utils/HandleNumber';

const ListUtility = (props: { post: MPostDetail; t: any }) => {
  const {
    realEstateUnitPrice,
    realEstateHouseBedRooms,
    realEstatedeposits, // Tien dat coc
    realEstateHouseToilets,
    realEstateJuridical,
    realEstateLandRealitySquare,
    realEstatePostTypeId,
    realEstateHouseFloors,
    realEstateCategoryId,
    realEstateLandLongs,
    realEstateLandWidth,
    realEstateValueSalePrice,
    realEstateFurnitureName,
    derectionHouseName,
    shapeName,
  } = props.post;
  const { t } = props;
  const [typeData, setTypeData] = useState({
    direction: [],
    type: [],
    category: [],
  });

  const getName = (arr: any[], keyId: string, keyName: string, id: number) => {
    const data = arr.filter((item) => id == item[keyId])[0];
    return data ? data[keyName] : '';
  };

  useEffect(() => {
    getDataFilter(realEstatePostTypeId).then((data) => {
      setTypeData({
        direction: data.dataDirection,
        type: data.dataRealEstateType,
        category: data.dataRealEstateCategory,
      });
    });
  }, [realEstatePostTypeId]);

  const listValue = [
    {
      icon: <IconCompany />,
      value: getName(
        typeData.category,
        'realEstateCategoryId',
        'realEstateCategoryName',
        realEstateCategoryId
      ),
      label: t('detail.utilityItem.typeRealEstate'),
    },
    {
      icon: <IconType />,
      value: getName(
        typeData.type,
        'realEstatePostTypeId',
        'realEstatePostTypeName',
        realEstatePostTypeId
      ),
      label: t('detail.utilityItem.type'),
    },
    {
      icon: <IconArea />,
      value: realEstateLandRealitySquare + ' m²',
      label: t('detail.utilityItem.area'),
    },
    {
      icon: <IconCoin />,
      value: formatNumToUnit(realEstateValueSalePrice, t) + ' vnđ',
      label: t('detail.utilityItem.price'),
    },
    { icon: <IconApartment />, value: realEstateHouseFloors, label: 'Số tầng' },
    {
      icon: <IconCoin />,
      value: formatNumToUnit(realEstateUnitPrice, t) + ' vnđ',
      label: t('detail.utilityItem.price/m2'),
    },
    {
      icon: <IconDirection />,
      value: derectionHouseName,
      label: t('detail.utilityItem.direction'),
    },
    {
      icon: <IconDeposit />,
      value: formatNumToUnit(realEstatedeposits, t) + ' vnđ',
      label: t('detail.utilityItem.deposits'),
    },
    {
      icon: <IconBedRoom />,
      value: realEstateHouseBedRooms,
      label: t('detail.utilityItem.bedroom'),
    },
    {
      icon: <IconFurniture />,
      value: realEstateFurnitureName,
      label: t('detail.utilityItem.furniture'),
    },
    {
      icon: <IconBathroom />,
      value: realEstateHouseToilets,
      label: t('detail.utilityItem.toilet'),
    },
    {
      icon: <IconJuridical />,
      value: realEstateJuridical,
      label: t('detail.utilityItem.juridical'),
    },
    {
      icon: <IconCharacterist />,
      value: shapeName,
      label: t('detail.utilityItem.special'),
    },
    {
      icon: <IconArea />,
      value: realEstateLandLongs + ' m',
      label: t('detail.utilityItem.long'),
    },
    {
      icon: <IconArea />,
      value: realEstateLandWidth + ' m',
      label: t('detail.utilityItem.width'),
    },
  ];

  const ListTabTab = [
    {
      icon: <IconHouse />,
      value: "123",
      label: "Total units:",
    },
    {
      icon: <IconApartement />,
      value: "Apartment, Condo",
      label: "Unit types:",
    },
    {
      icon: <IconBedTabTab />,
      value: "1 to 3",
      label: "Beds in a unit:",
    },
    {
      icon: <IconBluePrint />,
      value: "49 m² to 163 m²",
      label: "Floor areas:",
    },
    {
      icon: <IconDoor />,
      value: "25",
      label: "Floors:",
    },
    {
      icon: <IconTitle />,
      value: "Hard Title",
      label: "Title:",
    },
    {
      icon: <IconAuction />,
      value: "CC Peninsula Co., LTD",
      label: "Developer:",
    },
    {
      icon: <IconPark />,
      value: "40%",
      label: "Greening rate:",
    },
    {
      icon: <IconListed />,
      value: "2 years ago",
      label: "Listed",
    },
    {
      icon: <IconNewHouse />,
      value: "3 weeks ago",
      label: "Updated:",
    },
    {
      icon: <IconProperty />,
      value: "89424",
      label: "Property ID:",
    }
  ]

  return (
    <ListWrapper>
      {ListTabTab.map((prop, key) =>
        prop.value ? (
          <div style={{ display: 'flex', marginBottom:15 }} role="item" key={key}>
            <div style={{marginBottom:20, marginRight:12}}>
              {prop.icon}
            </div>
            <div>
              <div style={{fontSize:16, fontWeight:"500", fontFamily:'Inter'}}>
                {prop.label}
              </div>
              <div style={{fontSize:16, fontWeight:"700", fontFamily:'Inter'}}>
                {prop.value}
              </div>
            </div>

          </div>
        ) : (
          ''
        )
      )}
    </ListWrapper>
  );
};

export default ListUtility;
