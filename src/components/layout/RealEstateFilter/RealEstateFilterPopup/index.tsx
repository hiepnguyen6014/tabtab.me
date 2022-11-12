import { FilterContext } from '@root/src/core/contexts/filterContext';
import { Fragment, useContext, useState } from 'react';
import { FContentItemPopup } from '../RealEstateFilterItem/FContentItemPopup';
import { FDropdown, FMenuDropdown } from '../RealEstateFilterDesktop.style';
import { FMenuItemPopup, FMenuPopupWrap } from './RealEstateFilterPopup.style';
import { FilterProps } from '..';
interface Props {
  listFilter: FilterProps[];
}
export const RealEstateFilterPopup = (props: Props) => {
  const { listFilter } = props;
  const { initValue, onChangeValue } = useContext(FilterContext);

  return (
    <FMenuPopupWrap>
      {listFilter.map((item) => (
        <Fragment key={item.idQuery}>
          <h1>{item.label}</h1>
          <FDropdown
            overlay={
              <FMenuDropdown>
                {item.list.map((value) => (
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
            }
          >
            <div style={{ padding: 0 }}>
              <FContentItemPopup
                idQuery={item.idQuery}
                placeholder={item.placeholder}
                initValue={initValue(
                  item.idQuery,
                  item.list,
                  item.keyId,
                  item.keyName
                )}
              />
            </div>
          </FDropdown>
        </Fragment>
      ))}
    </FMenuPopupWrap>
  );
};
