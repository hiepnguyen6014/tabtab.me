import { Plus, SearchSmall } from '@root/public/icons';
import { checkIsHomePage } from '@utils';
import { Checkbox, Col, Row, Typography } from 'antd';
import { useTranslation } from 'next-i18next';

import { FilterContainer } from '../FindPerson.style';

export default function Filter() {
  const { t: translate } = useTranslation('common');
  return (
    <div>
      <Row>
        <Col style={{ marginBottom: 10, marginRight: 24 }}>
          <div>
            <label
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                color: '#7A7A7A',
                marginBottom: 10,
              }}
            >
              Category
            </label>
            <FilterContainer>
              <label
                style={{ fontSize: 14, fontWeight: '700', fontFamily: 'Inter' }}
              >
                Agent
              </label>
              <Checkbox />
            </FilterContainer>
          </div>
        </Col>
        <Col style={{ marginBottom: 10, marginRight: 24 }}>
          <div>
            <label
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                color: '#7A7A7A',
                marginBottom: 10,
              }}
            >
              Location
            </label>
            <FilterContainer>
              <label
                style={{ fontSize: 14, fontWeight: '700', fontFamily: 'Inter' }}
              >
                Ho chi Minh
              </label>
              <SearchSmall />
            </FilterContainer>
          </div>
        </Col>
        <Col style={{ marginBottom: 10, marginRight: 24 }}>
          <div>
            <label
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                color: '#7A7A7A',
                marginBottom: 10,
              }}
            >
              Name
            </label>
            <FilterContainer>
              <label
                style={{ fontSize: 14, fontWeight: '700', fontFamily: 'Inter' }}
              >
                Minhx
              </label>
              <SearchSmall />
            </FilterContainer>
          </div>
        </Col>
        <Col style={{ marginBottom: 10, alignSelf: 'end' }}>
          <div>
            <label
              style={{
                fontSize: 16,
                fontWeight: '700',
                fontFamily: 'Inter',
                color: '#7A7A7A',
                marginBottom: 10,
              }}
            ></label>
            <FilterContainer style={{ background: '#E9E9E9', width: 200 }}>
              <label
                style={{ fontSize: 14, fontWeight: '700', fontFamily: 'Inter' }}
              >
                Advance search
              </label>
              <Checkbox />
            </FilterContainer>
          </div>
        </Col>
      </Row>
    </div>
  );
}
