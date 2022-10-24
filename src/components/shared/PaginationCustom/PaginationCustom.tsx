import { PaginationWrap } from './PaginationCustom.style';

export interface PaginateProps {
  defaultCurrent?: number;
  total?: number;
  defaultPageSize?: number;
  onChange?: () => void;
  pageSize?: number | null;
}

const PaginationWrapCustom = ({
  defaultCurrent,
  total,
  defaultPageSize,
  pageSize,
}: PaginateProps) => {
  return (
    <>
      <PaginationWrap total={total} pageSize={pageSize} />
    </>
  );
};

export default PaginationWrapCustom;
