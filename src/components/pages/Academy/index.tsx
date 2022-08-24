import React, { useState, useEffect } from "react";
import { FDesktop, SwapAdd } from "./Academy.style"
import DefaultLayout from "../../layout/DefaultLayout/DefaltLayout";
import { Col, Divider, Input, Row, Typography } from "antd";
import { Plus, SearchYellow } from "@root/public/icons";
import UpcommingClass from "./UpcommingClass"
import { getPostByRating, getListRealEstate } from "../../../core/services";
import ELearning from "./ELearning";

export default function Academy({ translate }) {
    const [data, setData] = useState([])
    useEffect(() => {
        getData()
    })
    const getData = async () => {
        const listByRating: any = await getListRealEstate({});
        setData(listByRating.data)
    }
    return (
        <DefaultLayout t={translate}>
            <div style={{ background: "#F0F2F5" }}>
                <FDesktop>
                    <div style={{ height: 74 }} />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ borderRadius: 52, background: 'white', width: '50%', display: 'flex' }}>
                            <Input
                                prefix={''}
                                style={{
                                    borderWidth: 0,
                                    borderRadius: 56,
                                    padding: '5px 5px 5px 20px',
                                    fontFamily: "Inter",
                                    fontSize: 16,
                                    fontWeight: "700",
                                    boxShadow: ' 0px 0px 8px rgba(0, 0, 0, 0.1)'
                                }}
                                placeholder="Nhập từ tìm kiếm"
                                // value={isReset ? '' : searchTerm} 
                                // onPressEnter={()=>handleSearchText(searchTerm)} 
                                // onChange={handleChange}
                                suffix={<SearchYellow />}
                            />
                        </div>
                    </div>
                    <UpcommingClass translate={translate} data={data.slice(0, 6)} />
                </FDesktop>
                <ELearning translate={translate} data={data.slice(0, 4)} />

            </div>
        </DefaultLayout>

    )
}


