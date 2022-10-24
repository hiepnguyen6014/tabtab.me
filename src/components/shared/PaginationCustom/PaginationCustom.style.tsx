import styled from '@emotion/styled';
import { Pagination } from 'antd';

export const PaginationWrap = styled(Pagination)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px !important;
  padding-bottom: 30px !important;
  .ant-pagination-item-link {
    border-radius: 50% !important;
    display: flex;
    width: 24px;
    background: transparent;
    height: 24px;
    justify-content: center;
    align-items: center;
  }
  .ant-pagination-item {
    border-radius: 100px !important;
    border-color: transparent;
    display: flex;
    justify-content: center;
    margin: 1px;
    width: 26px;
    height: 30px;
    background: transparent;
    align-items: center;
    font-family: Inter;
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 14px !important;
    line-height: 18px !important;
  }
  .ant-pagination-item-active {
    background: #222222 !important;
    width: 26px;
    height: 30px;
    border-radius: 50% !important;
    a {
      color: #f9bd06 !important;
    }
  }
  .ant-pagination-prev {
    margin: 0;
    width: 24px;
    height: 24px;
    margin-right: 9px;
    border-radius: 50% !important;
  }
  .ant-pagination-next {
    margin: 0;
    width: 24px;
    height: 24px;
    margin-left: 5px;
    border-radius: 50% !important;
  }
  .ant-pagination-jump-prev,
  .ant-pagination-jump-next {
    display: inline-flex;
    align-items: center;
  }
`;
