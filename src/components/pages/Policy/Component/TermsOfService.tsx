import { Typography } from 'antd';
import { Flex, Vertical } from '../Policy.style';

const TermsOfService: React.FC<{}> = () => {
  return (
    <div style={{width:"250px"}}>
      <Flex className='marginY-20'>
        <Vertical />
        <Typography className='terms-text' style={{color:'#222222', fontWeight:"700"}}>Điều khoản dịch vụ</Typography>
      </Flex>
      <Flex className='marginY-20'>
        <Typography className='terms-text mx-4'>Chính sách cộng đồng của chúng tôi</Typography>
      </Flex>
      <Flex className='marginY-20'> 
        <Typography className='terms-text  mx-4'>Chính sách quyền riêng tư</Typography>
      </Flex>
      <Flex className='marginY-20'>
        <Typography className='terms-text  mx-4'>Nội dung bổ sung cho Chính sách quyền riêng tư</Typography>
      </Flex>
      <Flex className='marginY-20'>
        <Typography className='terms-text  mx-4'>Chính sách và tiêu chuẩn dành cho thành viên</Typography>
      </Flex>
      <Flex className='marginY-20'>
        <Typography className='terms-text  mx-4'>Chính sách và tiêu chuẩn dành cho thành viên</Typography>
      </Flex>
    </div>
  );
};

export default TermsOfService;
