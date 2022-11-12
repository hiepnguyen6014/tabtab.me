import { ListWrapper } from './LocationRealEstate.style';

interface Props {
  arrayLocation?: string[];
  t: any;
}
export const LocationRealEstate = (props?: Props) => {
  const { arrayLocation, t } = props;
  const listRender = [
    { label: t('detail.location.address'), value: arrayLocation[0] },
    { label: t('detail.location.ward'), value: arrayLocation[1] },
    { label: t('detail.location.district'), value: arrayLocation[2] },
    { label: t('detail.location.province'), value: arrayLocation[3] },
  ];
  return (
    <ListWrapper>
      {listRender.map((prop, key) => (
        <div key={key} role="item">
          <label>{prop.label}</label>
          <span>{prop.value}</span>
        </div>
      ))}
    </ListWrapper>
  );
};
