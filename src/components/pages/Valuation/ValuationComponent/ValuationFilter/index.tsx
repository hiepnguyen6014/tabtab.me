import { FilterValuationContext, filterKey } from '@contexts';
import { IconChart } from '@root/public/icons';
import { Form, Select } from 'antd';
import { useContext } from 'react';

import { FVSubmit, ValFilter } from './ValuationFilter.styled';

interface Props {
  t: any;
}
export const ValuationFilter = (props: Props) => {
  const { t: translate } = props;
  const {
    categoryList,
    provinces,
    districts,
    formSuggestPrice,
    onSubmit,
    onChangeValue,
  } = useContext(FilterValuationContext);

  const FILTER_COMPONENT = [
    {
      idQuery: filterKey.areaProvinceId.idQuery,
      list: provinces,
      keyId: filterKey.areaProvinceId.id,
      keyName: filterKey.areaProvinceId.name,
      field: filterKey.areaProvinceId.field,
    },
    {
      idQuery: filterKey.areaDistrictId.idQuery,
      list: districts,
      keyId: filterKey.areaDistrictId.id,
      keyName: filterKey.areaDistrictId.name,
      field: filterKey.areaDistrictId.field,
    },
    {
      idQuery: filterKey.realEstateCategoryId.idQuery,
      list: categoryList,
      keyId: filterKey.realEstateCategoryId.id,
      keyName: filterKey.realEstateCategoryId.name,
      field: filterKey.realEstateCategoryId.field,
    },
  ];

  return (
    <Form onFinish={onSubmit} form={formSuggestPrice}>
      <ValFilter>
        {FILTER_COMPONENT.map((item, key) => (
          <Form.Item name={item.field} key={key}>
            <Select
              onChange={value => onChangeValue(value, item.field, item.keyId)}
              optionFilterProp="children"
              showSearch
              filterOption={(input, option) =>
                option?.children !== null &&
                option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {item.list.map(selectVal => {
                return (
                  <Select.Option
                    key={selectVal[item.keyId]}
                    value={selectVal[item.keyId]}
                  >
                    {selectVal[item.keyName]}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
        ))}
        <Form.Item>
          <FVSubmit htmlType="submit" icon={<IconChart />}>
            {translate('button.viewPrice')}
          </FVSubmit>
        </Form.Item>
      </ValFilter>
    </Form>
  );
};
