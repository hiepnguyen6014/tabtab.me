import { SearchOutlined } from '@ant-design/icons';
import * as ga from '@ga';
import {
  IconHouse,
  IconRecovery,
  IconSearch,
  SearchYellow,
} from '@root/public/icons';
import {
  FilterContext,
  filterKey,
} from '@root/src/core/contexts/filterContext';
import { Input } from 'antd';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

import {
  ButtonSearchForm,
  ButtonSearchFormReset,
  SearchInput,
} from './FilterSearch.style';

const REFormSearchInput = (props: { t: any }) => {
  const { t: translate } = props;
  const { onChangeValue } = useContext(FilterContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [isReset, setIsReset] = useState(false);
  const { query } = useRouter();

  useEffect(() => {
    if (Object.keys(query).length == 0) setIsReset(true);
  }, [query]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (isReset) {
      setIsReset(false);
    }
    setSearchTerm(e.currentTarget.value);
  };

  const handleSearchText = (text?: string) => {
    // umami.trackEvent(`${searchTerm}`, 'Search keyword')
    if (text === query[filterKey.searchText.idQuery]) return;
    onChangeValue(filterKey.searchText.idQuery, text.trim());
  };

  return (
    // <div>
    //     <IconHouse style={{margin:7}}/>
    //     <SearchInput style={{borderWidth:0, fontFamily: "Inter", fontSize: 16, fontWeight: "700" }} placeholder={translate('filter.search')} value={isReset ? '' : searchTerm} onPressEnter={()=>handleSearchText(searchTerm)} onChange={handleChange}/>
    //     <div style={{borderRadius:56}}>
    //     <ButtonSearchForm  className="disable-custom-btn" icon={<SearchOutlined style={{ color:"#7E7E7E", borderRadius:56}}/>} onClick={(e)=> handleSearchText(searchTerm)}/>
    //     </div>
    // </div>
    <div
      style={{
        borderRadius: 52,
        background: 'white',
        width: 'auto',
        display: 'flex',
      }}
    >
      <SearchInput
        prefix={<IconHouse />}
        style={{
          borderWidth: 0,
          borderRadius: 56,
          padding: '5px 5px 5px 10px',
          fontFamily: 'Inter',
          fontSize: 16,
          fontWeight: '700',
          boxShadow: ' 0px 0px 8px rgba(0, 0, 0, 0.1)',
        }}
        placeholder={translate('Bắt đầu tìm kiếm')}
        value={isReset ? '' : searchTerm}
        onPressEnter={() => handleSearchText(searchTerm)}
        onChange={handleChange}
        suffix={<SearchYellow />}
      />
    </div>
  );
};

const REReset = () => {
  const { onReset } = useContext(FilterContext);
  return (
    <>
      <ButtonSearchFormReset
        className="disable-custom-btn"
        icon={<IconRecovery />}
        onClick={onReset}
      />
    </>
  );
};

export { REFormSearchInput, REReset };
