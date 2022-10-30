import { FC } from 'react';
import { PaginationWrap } from './PaginationCustom.style';

export interface PaginateProps {
  defaultCurrent?: number;
  total?:number;
  handlePageChange?: any
}

const PaginationWrapCustom:FC<PaginationCustomProps> = ({ defaultCurrent, total, pageSize,handlePageChange }) => {
  return (
    <>
    <PaginationWrap defaultCurrent={defaultCurrent} total={total} pageSize={pageSize} onChange={handlePageChange}/>
    </>
  );
};

export default PaginationWrapCustom;
