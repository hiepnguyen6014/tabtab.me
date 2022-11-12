import { VectorLocationL } from '@root/public/icons';
import { Divider, Typography } from 'antd';

import { DivA } from '../../../Home/Spotlight/ItemSpotlight.style';
import { DividerH, Flex } from '../../SpotlightPage.style';

const Project = () => {
  return (
    <>
      <div className="">
        <div>
          <Typography className="project-title__text--style">
            Tiến độ dự án
          </Typography>
        </div>
        <DividerH />
        <Flex>
          <VectorLocationL />
          <DivA className="mx-2">
            <Typography className="name-province__text--color">
              Hà nội
            </Typography>
            <Typography className="name-project__text--color">
              Dự án novaland
            </Typography>
          </DivA>
        </Flex>
        <DividerH />
        <Flex>
          <VectorLocationL />
          <DivA className="mx-2">
            <Typography className="name-province__text--color">
              Tp Hồ Chí Minh
            </Typography>
            <Typography className="name-project__text--color">
              Dự án novaland
            </Typography>
          </DivA>
        </Flex>
        <DividerH />
        <Flex>
          <VectorLocationL />
          <DivA className="mx-2">
            <Typography className="name-province__text--color">
              Đà Nẵng
            </Typography>
            <Typography className="name-project__text--color">
              Dự án novaland
            </Typography>
          </DivA>
        </Flex>
        <DividerH />
        <Flex>
          <VectorLocationL />
          <DivA className="mx-2">
            <Typography className="name-province__text--color">
              Quảng Ninh
            </Typography>
            <Typography className="name-project__text--color">
              Dự án novaland
            </Typography>
          </DivA>
        </Flex>
      </div>
    </>
  );
};

export default Project;
