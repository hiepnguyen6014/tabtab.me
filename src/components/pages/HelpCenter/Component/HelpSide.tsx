import {
  VectorAgent,
  VectorDocument,
  VectorListing,
  VectorResidential,
  VectorResidentialL,
  VectorSetting,
} from '@root/public/icons';
import { Col, Divider, Row, Typography } from 'antd';

import { Flex, RadioButton, RadioWrap } from '../HelpCenter.style';

const HelpSide: React.FC<{}> = () => {
  return (
    <>
      <RadioWrap>
        <RadioButton bg="#F9BD06" colorText="#222222">
          <Flex>
            <VectorDocument />
            <Typography className="side-text">Getting Started</Typography>
          </Flex>
        </RadioButton>
        <RadioButton>
          <Flex>
            <VectorSetting />
            <Typography className="side-text">Tool</Typography>
          </Flex>
        </RadioButton>
        <RadioButton>
          <Flex>
            <VectorListing />
            <Typography className="side-text">Listing</Typography>
          </Flex>
        </RadioButton>
        <RadioButton>
          <Flex>
            <VectorAgent />
            <Typography className="side-text">Profile</Typography>
          </Flex>
        </RadioButton>
        <RadioButton>
          <Flex>
            <VectorResidentialL />
            <Typography className="side-text">Payment</Typography>
          </Flex>
        </RadioButton>
      </RadioWrap>
    </>
  );
};

export default HelpSide;
