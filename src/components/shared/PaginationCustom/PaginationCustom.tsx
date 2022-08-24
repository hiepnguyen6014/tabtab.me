import { PaginationWrap } from './PaginationCustom.style';

const PaginationWrapCustom = ({ defaultCurrent, total }) => {
  return (
    <>
    <PaginationWrap defaultCurrent={defaultCurrent} total={total} />
    </>
  );
};

export default PaginationWrapCustom;
