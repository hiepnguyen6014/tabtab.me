import { SearchYellow } from '@root/public/icons';
import { SearchInput } from '@root/src/components/layout/RealEstateFilter/FilterSearch/FilterSearch.style';

export const SearchItem = ({className}) => {
  return (
    <>
      <SearchInput placeholder={'Bắt đầu tìm kiếm'} suffix={<SearchYellow />} className={className}/>
    </>
  );
};
