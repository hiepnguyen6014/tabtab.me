import React, { useState, useEffect } from "react";
import { FDesktop, CustomLikeShare, ButtonChat, ColCustom, UtiliteStyle } from "../ELearning.style"
import { Col, Divider, Input, Row, Typography } from "antd";
import { } from "@root/public/icons";
import { SRC_IMAGE } from "@core";
import ProductClasses from '../../Academy/UpcommingClass/ProductClasses'
import { ColWrap } from '../../Home/Home.style';
import PaginationWrapCustom from "../../../shared/PaginationCustom/PaginationCustom"

export default function RatedClasses({ t, data }) {
    return (
        <div style={{marginTop:-30}}>
            <FDesktop grid={true} >
                <div>
                    <Typography style={{fontSize:28, fontWeight:'700', fontFamily:"Inter"}}>
                        Rated Classes
                    </Typography>

                   <Row gutter={16}>
                    <UtiliteStyle>
                        <Typography.Text style={{ fontSize: 16, fontWeight: "700", fontFamily: "Inter", color: "#222222" }}>
                            Film & Video
                        </Typography.Text>
                    </UtiliteStyle>
                    <UtiliteStyle>
                        <Typography.Text style={{ fontSize: 16, fontWeight: "700", fontFamily: "Inter", color: "#222222"}}>
                            Video Production
                        </Typography.Text>
                    </UtiliteStyle>
                    <UtiliteStyle>
                        <Typography.Text style={{ fontSize: 16, fontWeight: "700", fontFamily: "Inter", color: "#222222"}}>
                            Social Media
                        </Typography.Text>
                    </UtiliteStyle>
                    <UtiliteStyle>
                        <Typography.Text style={{ fontSize: 16, fontWeight: "700", fontFamily: "Inter", color: "#222222"}}>
                            Video Editing
                        </Typography.Text>
                    </UtiliteStyle>
                    <UtiliteStyle>
                        <Typography.Text style={{ fontSize: 16, fontWeight: "700", fontFamily: "Inter", color: "#222222"}}>
                            Creative
                        </Typography.Text>
                    </UtiliteStyle>
                    <UtiliteStyle>
                        <Typography.Text style={{ fontSize: 16, fontWeight: "700", fontFamily: "Inter", color: "#222222"}}>
                            Youtube
                        </Typography.Text>
                    </UtiliteStyle>
                    <UtiliteStyle>
                        <Typography.Text style={{ fontSize: 16, fontWeight: "700", fontFamily: "Inter", color: "#222222"}}>
                            Final Cut Pro
                        </Typography.Text>
                    </UtiliteStyle>
                    <UtiliteStyle>
                        <Typography.Text style={{ fontSize: 16, fontWeight: "700", fontFamily: "Inter", color: "#222222"}}>
                            Video Pre-Production
                        </Typography.Text>
                    </UtiliteStyle>
                    <UtiliteStyle>
                        <Typography.Text style={{ fontSize: 16, fontWeight: "700", fontFamily: "Inter", color: "#222222"}}>
                            Skillshare Original
                        </Typography.Text>
                    </UtiliteStyle>
                </Row> 

                    <Typography style={{fontSize:28, fontWeight:'700', fontFamily:"Inter", marginTop: 50}}>
                    Các khoá học liên quan
                    </Typography>
                    <Row gutter={24} style={{ marginTop: 24 }}>
                        {data.map((item, key) => (
                            <ColWrap key={key} className="gutter-row" sm={24} lg={12} xl={12} md={12} xs={24}>
                                <ProductClasses post={item} t={t} />
                            </ColWrap>
                        ))}
                    </Row>
                    <PaginationWrapCustom defaultCurrent={1} total={50}/>
                </div>
            </FDesktop>
        </div>

    )
}


