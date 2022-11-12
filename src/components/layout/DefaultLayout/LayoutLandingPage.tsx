import { useEffect } from 'react';

import { TitlePage } from '..';
import {
  DefaultContentNoGrid,
  DefaultWrapperWithBg,
  LandingWrapContent,
} from './DefaultComponent.style';
import DefaultLayout from './DefaultLayout';

interface Props {
  href: any[];
  title?: string;
  t: any;
  content?: string;
}
export const LayoutLandingPage = (props: Props) => {
  const { href, title, t: translate, content } = props;
  useEffect(() => {
    const dom = document.getElementById('landing_content');
    if (content && dom) dom.innerHTML = content;
  });
  return (
    <DefaultLayout t={translate}>
      <DefaultWrapperWithBg />
      <DefaultWrapperWithBg>
        <DefaultContentNoGrid>
          <TitlePage t={translate} arrayHref={href} title={title} />
        </DefaultContentNoGrid>
      </DefaultWrapperWithBg>
      <DefaultWrapperWithBg>
        <DefaultContentNoGrid>
          <LandingWrapContent>
            <div id="landing_content" />
          </LandingWrapContent>
        </DefaultContentNoGrid>
      </DefaultWrapperWithBg>
    </DefaultLayout>
  );
};
