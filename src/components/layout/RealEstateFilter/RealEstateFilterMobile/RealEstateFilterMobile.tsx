import { FilterContext } from '@contexts';
import { useContext } from 'react';

import { FilterProps } from '..';
import { REFormSearchInput } from '../FilterSearch';
import { FDropdown, FMenuDropdown } from '../RealEstateFilterDesktop.style';
import { FContentItemPopup } from '../RealEstateFilterItem/FContentItemPopup';
import { FToggle } from '../RealEstateFilterItem/FToggle';
import { FMenuItemPopup } from '../RealEstateFilterPopup/RealEstateFilterPopup.style';
import {
  FMobile,
  FMobileBot,
  FMobileTop,
} from './RealEstateFilterMobile.style';

interface Props {
  listFilter: FilterProps[];
  t: any;
}
const RealEstateFilterMobile = (props: Props) => {
  const { listFilter, t: translate } = props;

  const { initValue, onChangeValue } = useContext(FilterContext);

  return (
    <FMobile>
      <FMobileTop>
        <REFormSearchInput t={translate} />
      </FMobileTop>

      <FMobileBot>
        {listFilter.map(item =>
          item.toggle ? (
            <FToggle onChangeValue={onChangeValue} {...item} />
          ) : (
            <FDropdown
              key={item.idQuery}
              overlay={
                item.subMenu ? (
                  item.subMenu
                ) : (
                  <FMenuDropdown>
                    {item.list.map(value => (
                      <FMenuItemPopup
                        onClick={(e: any) =>
                          onChangeValue(item.idQuery, value[item.keyId])
                        }
                        key={value[item.keyId]}
                      >
                        {value[item.keyName]}
                      </FMenuItemPopup>
                    ))}
                  </FMenuDropdown>
                )
              }
            >
              <div style={{ padding: 0 }}>
                <FContentItemPopup
                  idQuery={item.idQuery}
                  placeholder={item.placeholder}
                  initValue={initValue(
                    item.idQuery,
                    item?.list,
                    item.keyId,
                    item.keyName,
                    translate,
                  )}
                />
              </div>
            </FDropdown>
          ),
        )}
      </FMobileBot>
    </FMobile>
  );
};

export default RealEstateFilterMobile;
