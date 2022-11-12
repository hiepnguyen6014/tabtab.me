import { styled } from '@styles/theme';
import { Input } from 'antd';

export const SearchInput = styled(props => <Input allowClear {...props} />)`
  border-width: 0;
  border-radius: 56px;
  padding: 5px 5px 5px 10px;
  font-family: 'Inter';
  font-size: 16;
  width: 591px;
  font-weight: 700;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  @media ${device.maxMd} {
    width: 391px;
  }
  @media ${device.maxSm} {
    width: 250px;
  }
`;
