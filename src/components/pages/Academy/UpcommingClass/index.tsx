import { Button, Col, Divider, Input, Pagination, Radio, Row, Typography } from "antd";
import { Plus, SearchYellow } from "@root/public/icons";
import { ButtonCustom, RadoCustom, RadioSearch, ButtonClasses } from "../Academy.style"
import ProductClasses from "./ProductClasses";
import { ColWrap } from '../../Home/Home.style';
import { SRC_IMAGE } from "@core";
import PaginationWrapCustom from '@root/src/components/shared/PaginationCustom/PaginationCustom';

export default function UpcommingClass({ data, translate }) {

    return (
        <div>
            <Typography.Title style={{ marginTop: 44 }} level={2}>Upcoming Classes</Typography.Title>
            <div style={{ borderRadius: 8, padding: 4, display: 'flex', alignItems: 'center' }}>
                <div style={{ background: 'white', padding: '4px 0px 4px 4px', borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}>
                    <ButtonClasses >
                        <label style={{ fontSize: 16, fontWeight: '700', fontFamily: "Inter", padding: "6px 24px 6px 24px", whiteSpace: 'break-spaces' }}>
                            Khoá hoc sắp tới
                        </label>
                    </ButtonClasses>
                </div>
                <Divider type="vertical" style={{ marginRight: 0, marginLeft: 0, height: 20, borderColor: '#D3D3D3' }} />
                <div style={{ background: 'white', padding: '4px 0px 4px 0px' }}>
                    <ButtonClasses>
                        <label style={{ fontSize: 16, fontWeight: '700', fontFamily: "Inter", padding: "6px 24px 6px 24px", whiteSpace: 'break-spaces' }}>
                            Khoá học đã dạy
                        </label>
                    </ButtonClasses>
                </div>
                <Divider type="vertical" style={{ marginRight: 0, marginLeft: 0, height: 20, borderColor: '#D3D3D3' }} />
                <div style={{ background: 'white', padding: '4px 4px 4px 0px', borderTopRightRadius: 8, borderBottomRightRadius: 8 }}>
                    <ButtonClasses>
                        <label style={{ fontSize: 16, fontWeight: '700', fontFamily: "Inter", padding: "6px 24px 6px 24px", whiteSpace: 'break-spaces' }}>
                            Liệt kê các khoá học
                        </label>
                    </ButtonClasses>
                </div>

            </div>

            <Row gutter={24} style={{ marginTop: 24 }}>
                {data.map((item, key) => (
                    <ColWrap key={key} className="gutter-row" sm={24} lg={12} xl={8} md={12} xs={24}>
                        <ProductClasses post={item} t={translate} />
                    </ColWrap>
                ))}
            </Row>
            <PaginationWrapCustom defaultCurrent={1} total={50}/>
        </div>
    )
}


