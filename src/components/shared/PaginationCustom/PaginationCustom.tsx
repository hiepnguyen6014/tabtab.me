import { FC } from 'react';
import { PaginationWrap } from './PaginationCustom.style';

interface PaginationCustomProps {
  pageSize?:number;
  defaultCurrent?: number;
  total?:number;
}

const PaginationWrapCustom:FC<PaginationCustomProps> = ({ defaultCurrent, total, pageSize }) => {
  return (
    <>
    <PaginationWrap defaultCurrent={defaultCurrent} total={total} pageSize={pageSize}/>
    </>
  );
};

export default PaginationWrapCustom;
