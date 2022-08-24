import { IconArrowDown } from '@root/public/icons';
import { Col, Dropdown, Menu, Row, Typography } from 'antd';
import Link from 'next/dist/client/link';
import { useRouter } from 'next/router';

export const RowCountResult = (props:{t:any,count:number|string}) => {
  const router = useRouter()
  const listSortPrice = [
    { label: props.t("button.all"), query: '' },
    { label: props.t("filter.filterASC"), query: 'asc' },
    { label: props.t("filter.filterDESC"), query: 'desc' },
  ];
  const handleSort = (query)=>{
    router.query["sx"] = query
    router.query["sx_loai"] = "realEstateValueSalePrice"
    if(!query){
      delete router.query["sx"]
      delete router.query["sx_loai"]
    } 
    router.push({
      pathname:router.pathname,
      query:{...router.query}
    })
  }
  const overlayMenu = () => {
    return (
      <Menu defaultSelectedKeys={["desc"]}>
        {listSortPrice.map((item, key) => (
          <Menu.Item key={key}>
            <a onClick = {()=> handleSort(item.query)}>
              {item.label}
            </a>
          </Menu.Item>
        ))}
      </Menu>
    );
  };
  return (
    <Row justify="space-between" align="middle">
      <Col>
        <Typography.Title level={5}>{props.t("common.preResult")} {props.count.toLocaleString()} {props.t("common.subResult")}</Typography.Title>
      </Col>
      <Col>
        <Dropdown trigger={["click"]} overlay={overlayMenu}>
          <p style={{cursor:"pointer"}}>{router?.query["sx"] ? listSortPrice.filter(item => item["query"] == router?.query["sx"])[0]?.label : props.t("filter.filterPrice") } <IconArrowDown/></p>
        </Dropdown>
      </Col>
    </Row>
  );
};
