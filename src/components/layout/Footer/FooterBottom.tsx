import {
  IconGlobalLang,
  VectorEarth,
  VectorMoney,
  VectorRuler,
} from '@root/public/icons';
import { Typography } from 'antd';
import Link from 'next/link';

import { ButtonBackTop } from '../../shared/ButtonBackTop/index';
import { ColBottomRight, FlexFooter, FooterText } from './Footer.style';

export const FooterBottom = () => {
  return (
    <>
      <FlexFooter>
        <FooterText>
          <FlexFooter>
            <div className="footerBottom">
              <Typography.Text
                className="text-Footer"
                style={{ cursor: 'pointer' }}
              >
                © 2021 Tabtab
              </Typography.Text>
            </div>
            <div className="footerBottom">
              <Link href="/policy">
                <Typography.Text className="text-Footer">
                  Privacy Policy
                </Typography.Text>
              </Link>
            </div>
            <div className="footerBottom">
              <Typography.Text className="text-Footer">
                Responsible Disclosure
              </Typography.Text>
            </div>
            <div className="footerBottom">
              <Typography.Text className="text-Footer">
                Site map
              </Typography.Text>
            </div>
          </FlexFooter>
        </FooterText>
      </FlexFooter>

      <ColBottomRight>
        <FooterText>
          <FlexFooter>
            <span className="footerBottom">
              <VectorEarth />
              <Typography.Text className="text-Footer">
                <span style={{ textDecoration: 'underline' }}>Việt Nam</span>
              </Typography.Text>
            </span>
            <span className="footerBottom">
              <IconGlobalLang />
              <Typography.Text className="text-Footer">
                <span style={{ textDecoration: 'underline' }}>Tiếng Việt</span>
              </Typography.Text>
            </span>
            <span className="footerBottom">
              <VectorMoney />
              <Typography.Text className="text-Footer">
                <span style={{ textDecoration: 'underline' }}>USD</span>
              </Typography.Text>
            </span>
            <span className="footerBottom">
              <VectorRuler />
              <Typography.Text className="text-Footer">
                <span style={{ textDecoration: 'underline' }}>met</span>
              </Typography.Text>
            </span>
          </FlexFooter>
        </FooterText>
      </ColBottomRight>

      <ButtonBackTop />
    </>
  );
};
