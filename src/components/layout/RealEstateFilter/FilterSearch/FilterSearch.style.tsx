import { styled } from '@styles/theme';
import { colors } from '@styles/theme/colors';
import { Button, Input } from 'antd';

export const SearchInput = styled(props => <Input allowClear {...props} />)``;

export const ButtonSearchForm = styled(Button)`
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  &:focus {
    background: #fff;
  }
  &:hover {
    border: 1px solid ${colors.button};
  }
`;

export const ButtonSearchFormReset = styled(ButtonSearchForm)`
  svg > path {
    fill: #767676;
  }
`;

export const SearchFormDesktop = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5%;
  & > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
