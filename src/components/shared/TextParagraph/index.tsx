import { IconArrowDown } from '@root/public/icons';
import { detectLineBreak } from '@utils';
import { useEffect, useRef, useState } from 'react';

import {
  ButtonMore,
  ButtonMoreTrue,
  ParagraphWrap,
  TextWrap,
} from './text.style';

interface Props {
  text: string;
  row?: number;
  t: any;
  size: number;
  transparent: boolean;
}

export const TextParagraph = (props: Props) => {
  const { text, t, size, transparent } = props;
  const [paragraph, setParagraph] = useState(detectLineBreak(text));
  const [isExpan, setIsExpan] = useState(false);

  const textRef = useRef<HTMLDivElement>(null);
  const [hightText, setHightText] = useState(0);

  const handleResize = (e: any) => {
    setHightText(textRef.current.offsetHeight);
  };

  useEffect(() => {
    setHightText(textRef.current.offsetHeight);
    window.addEventListener('resize', handleResize, true);
    return () => {
      window.removeEventListener('resize', handleResize, true);
    };
  }, []);

  return (
    <ParagraphWrap>
      <TextWrap
        typeof={!isExpan ? 'collapsed' : ''}
        ref={ref => (textRef.current = ref)}
        style={{ fontSize: size ? size : '' }}
      >
        {paragraph.map((line, key) => (
          <p key={key}>{line}</p>
        ))}
      </TextWrap>

      {transparent ? (
        hightText >= 150 ? (
          <ButtonMoreTrue
            typeof={!isExpan ? 'collapsed' : ''}
            onClick={() => setIsExpan(e => !e)}
          >
            {/* <IconArrowDown /> */}
            <div
              style={{
                padding: 10,
                borderWidth: 1,
                borderColor: '#14141433',
                borderStyle: 'solid',
                borderRadius: 22,
                width: 174,
                justifyContent: 'center',
                display: 'flex',
                color: '#222222',
                fontSize: 14,
                fontWeight: '600',
                fontFamily: 'Inter',
                textTransform: 'uppercase',
              }}
            >
              {!isExpan ? t('button.showMore') : t('button.showLess')}
            </div>
          </ButtonMoreTrue>
        ) : (
          <></>
        )
      ) : hightText >= 150 ? (
        <ButtonMore
          typeof={!isExpan ? 'collapsed' : ''}
          onClick={() => setIsExpan(e => !e)}
        >
          {/* <IconArrowDown /> */}
          <div
            style={{
              padding: 10,
              borderWidth: 1,
              borderColor: '#14141433',
              borderStyle: 'solid',
              borderRadius: 22,
              width: 174,
              justifyContent: 'center',
              display: 'flex',
              color: '#222222',
              fontSize: 14,
              fontWeight: '600',
              fontFamily: 'Inter',
              textTransform: 'uppercase',
            }}
          >
            {!isExpan ? t('button.showMore') : t('button.showLess')}
          </div>
        </ButtonMore>
      ) : (
        <></>
      )}
    </ParagraphWrap>
  );
};
