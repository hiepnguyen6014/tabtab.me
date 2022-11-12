import { FilterContext } from '@root/src/core/contexts/filterContext';
import { useContext } from 'react';

import { FilterProps } from '.';
import { REFormSearchInput, REReset } from './FilterSearch';
import { SearchFormDesktop } from './FilterSearch/FilterSearch.style';
import {
  FDesktop,
  FDropdown,
  FMenuDropdown,
} from './RealEstateFilterDesktop.style';
import { FContentItem } from './RealEstateFilterItem/FContentItem';
import { FToggle } from './RealEstateFilterItem/FToggle';
import { FMenuItemPopup } from './RealEstateFilterPopup/RealEstateFilterPopup.style';

interface Props {
  listFilter: FilterProps[];
  t: any;
}

const RealEstateFilterDesktop = (props: Props) => {
  const { listFilter, t: translate } = props;

  const { initValue, onChangeValue } = useContext(FilterContext);

  return (
    <FDesktop>
      {listFilter.map((item, key) =>
        item.toggle ? (
          <FToggle onChangeValue={onChangeValue} {...item} />
        ) : (
          <FDropdown
            key={key}
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
            <div>
              <FContentItem
                idQuery={item.idQuery}
                initValue={initValue(
                  item.idQuery,
                  item.list,
                  item.keyId,
                  item.keyName,
                  translate,
                )}
                placeholder={item.placeholder}
              />
            </div>
          </FDropdown>
        ),
      )}

      <SearchFormDesktop>
        <REFormSearchInput t={translate} />
        <REReset />
      </SearchFormDesktop>
    </FDesktop>
  );
};

export default RealEstateFilterDesktop;
