import { Radio } from 'antd';
import { useRouter } from 'next/router';

import { FilterProps } from '..';
import { FToggleWrap } from './filter-item.style';

export const FToggle = (props: FilterProps) => {
  const { list, keyId, keyName, idQuery, onChangeValue } = props;
  const { query } = useRouter();
  return (
    <FToggleWrap>
      <Radio.Group
        onChange={e => onChangeValue(idQuery, e.target.value)}
        defaultValue={!query[idQuery] ? 1 : ~~query[idQuery]}
        size="small"
      >
        {list.map(item => (
          <Radio.Button
            value={item[keyId]}
            key={item[keyId]}
            style={{ border: 'none', background: '#FFC22B' }}
          >
            {item[keyName]}
          </Radio.Button>
        ))}
      </Radio.Group>
    </FToggleWrap>
  );
};
