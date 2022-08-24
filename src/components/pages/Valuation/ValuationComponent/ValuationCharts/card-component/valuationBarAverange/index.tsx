import { IconTriangle } from '@root/public/icons';
import React from 'react';
import { THEME_COLOR } from '../../ChartCard';
import { BarMark, Wrap, WrapBar } from './Progressbar.style';

interface Props {
  theme?: string;
  direction?: string; // Direct of bar [left, right]
  showMark?: boolean;
  averange?: number | string;
}

export const VALBarAverange = (props: Props) => {
  const {
    theme = THEME_COLOR.common,
    direction = 'right',
    averange = 0,
    showMark = true,
  } = props;

  return (
    <>
      <Wrap typeof={direction}>
        <WrapBar style={{ background: theme }} />
      </Wrap>
      {showMark && (
        <BarMark typeof={direction}>
          <IconTriangle />
          <label>{averange}</label>
        </BarMark>
      )}
    </>
  );
};
