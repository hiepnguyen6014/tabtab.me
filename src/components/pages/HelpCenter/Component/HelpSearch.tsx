import { SearchYellow } from '@root/public/icons';
import { Col, Row, Typography } from 'antd';
import { SearchInput } from '../HelpCenter.style';

const HelpSearch: React.FC<{}> = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
          <Typography className="header-typography">Help Center</Typography>
      </div>
      <div className="d-flex justify-content-center search">
          <p>Hỗ trợ hướng dẫn, phần mềm và thông tin hữu ích khác</p>
      </div>
      <SearchInput
        // style={{
        //   borderWidth: 0,
        //   borderRadius: 56,
        //   padding: '5px 5px 5px 10px',
        //   fontFamily: 'Inter',
        //   fontSize: 16,
        //   width: '591px',
        //   fontWeight: '700',
        //   boxShadow: ' 0px 0px 8px rgba(0, 0, 0, 0.1)',
        // }}
        placeholder={'Bắt đầu tìm kiếm'}
        className="search"
        suffix={<SearchYellow />}
      />
    </div>
  );
};

export default HelpSearch;
