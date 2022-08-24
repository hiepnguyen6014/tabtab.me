import React, { useState, useEffect } from "react";
import { FDesktop, CustomLikeShare, ButtonChat, ColCustom } from "../ELearning.style"
import { Col, Divider, Input, Row, Typography } from "antd";
import { AgentBig, ChartBig, CV, Deal, Discount, IconChartTabTab, IconDocument, IconHeart, IconLike, IconLock, IconMortage, IconNote, IconSharetabtab, Patent, Play, Plus, SearchYellow, StopWatch, TimeClock, VectorDocument } from "@root/public/icons";
import { SRC_IMAGE } from "@core";

export default function ContactInfo({ t }) {
    return (
        <div>
            <FDesktop grid={true}>
                <div>
                    <Typography style={{ fontSize: 32, fontWeight: '700', fontFamily: "Inter", marginTop: 32 }}>
                        Naturally, the causes of Glasgow’s degeneration are complicated and have long histories
                    </Typography>
                    <img src={SRC_IMAGE.IMGVIDEO} width="100%" />
                    <Row gutter={16} style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
                        <Col xl={6} lg={7} md={6} sm={12} xs={12}>
                            <a style={{ display: 'flex', alignItems: 'center', padding: "8px 20px 8px 20px", border: '1px solid #D3D3D3', borderRadius: 8, justifyContent: 'center' }}>
                                <IconNote />
                                <text style={{ fontFamily: "Inter", fontSize: 16, fontWeight: "600", marginLeft: 10 }}>
                                    Take note
                                </text>
                            </a>
                        </Col>
                        <Col xl={5} lg={6} md={6} sm={12} xs={12}>
                            <a style={{ display: 'flex', alignItems: 'center', padding: "8px 20px 8px 20px", border: '1px solid #D3D3D3', borderRadius: 8, justifyContent: "center" }}>
                                <IconDocument style={{}} />
                                <text style={{ fontFamily: "Inter", fontSize: 16, fontWeight: "600", marginLeft: 10 }}>
                                    Tài liệu
                                </text>
                            </a>
                        </Col>
                    </Row>
                </div>
                <div style={{ marginTop: 60 }}>
                    <CustomLikeShare gutter={16}>
                        <Col span={12}>
                            <a style={{ display: 'flex', alignItems: 'center', borderRadius: 8, border: "1px solid #F9C41F", padding: "8px 20px 8px 20px", justifyContent: 'center' }}>
                                <IconLike />
                                <text style={{ fontSize: 14, fontWeight: '600', fontFamily: "Inter", color: '#4E4E4E', marginLeft: 10 }}>
                                    LIKE
                                </text>
                            </a>
                        </Col>
                        <Col span={12}>
                            <a style={{ display: 'flex', alignItems: 'center', borderRadius: 8, border: "1px solid #F9C41F", padding: "8px 20px 8px 20px", justifyContent: 'center' }}>
                                <IconSharetabtab />
                                <text style={{ fontSize: 14, fontWeight: '600', fontFamily: "Inter", color: '#4E4E4E', marginLeft: 10 }}>
                                    Share
                                </text>
                            </a>
                        </Col>
                    </CustomLikeShare>
                    <div style={{ borderRadius: 12, background: "white", padding: "20px 16px 20px 16px", marginTop: 25 }}>
                        <Typography style={{ fontSize: 24, fontFamily: "Inter", fontWeight: "700", color: "#FF8800", marginBottom: -10 }}>
                            3.000.000$
                        </Typography>
                        <Typography.Text delete={true} style={{ fontSize: 14, fontFamily: "Inter", fontWeight: "700", color: '#7A7A7A' }} >
                            was 4.500.000$
                        </Typography.Text>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: 12 }}>
                            <StopWatch />
                            <text style={{ marginLeft: 10, fontSize: 14, fontWeight: '500', fontFamily: "Inter", color: "#FF8800" }}>
                                Thời gian ưu đãi còn 1 ngày
                            </text>
                        </div>
                        <ButtonChat style={{ padding: 14, width: '100%', height: 'auto', marginTop: 16, borderRadius: 8 }}>
                            <text style={{ fontSize: 16, fontWeight: '700', fontFamily: "Inter", }}>Đăng ký học</text>
                        </ButtonChat>
                        <text style={{ marginTop: 8, fontSize: 11, fontWeight: '500', fontFamily: 'Inter', color: "#A7A7A7", display: 'flex', justifyContent: "center" }}>
                            Hoàn tiền trong 7 ngày nếu không hài lòng
                        </text>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: 24 }}>
                            <StopWatch />
                            <text style={{ marginLeft: 10, fontSize: 14, fontWeight: '700', fontFamily: "Inter" }}>
                                Thời lượng: 03 giờ 12 phút
                            </text>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: 16 }}>
                            <Patent />
                            <text style={{ marginLeft: 10, fontSize: 14, fontWeight: '700', fontFamily: "Inter" }}>
                                Giáo trình: 48 bài giảng
                            </text>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: 16 }}>
                            <TimeClock />
                            <text style={{ marginLeft: 10, fontSize: 14, fontWeight: '700', fontFamily: "Inter" }}>
                                Sở hữu khoá học trọn đời
                            </text>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: 16 }}>
                            <CV />
                            <text style={{ marginLeft: 10, fontSize: 14, fontWeight: '700', fontFamily: "Inter" }}>
                                Cấp chứng nhận hoàng thành
                            </text>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: 16 }}>
                            <Discount />
                            <text style={{ marginLeft: 10, fontSize: 14, fontWeight: '700', fontFamily: "Inter" }}>
                                giảm thêm 20k khi thanh toán online
                            </text>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: 24 }}>
                            <Input
                                style={{ borderRadius: 8, fontSize: 13, fontWeight: "700", fontFamily: "Inter", color: "#D3D3D3", padding: "10px 16px 10px 16px" }}
                                placeholder="Mã giảm giá..."
                            />
                            <ButtonChat style={{ background: "#D3D3D3", borderColor: "#D3D3D3", padding: "9px 16px 9px 16px", height: "auto", borderRadius: 8, marginLeft: 12 }}>
                                <text style={{ fontSize: '13', fontWeight: "700", fontFamily: "Inter", color: "#7A7A7A" }}>
                                    Áp dụng
                                </text>
                            </ButtonChat>
                        </div>
                    </div>
                </div>
            </FDesktop>
            <FDesktop grid={true} style={{ marginTop: 70 }}>
                <div>
                    <div style={{ display: 'flex', justifyContent: "space-between", marginBottom: 24 }}>
                        <Typography style={{ fontFamily: "Inter", fontSize: 28, fontWeight: "700" }}>
                            Lessons
                        </Typography>
                        <Typography style={{ fontFamily: "Inter", fontSize: 16, fontWeight: "700" }}>
                            5 Lessons (1h 14m)
                        </Typography>
                    </div>
                    <div style={{ height: 250, overflow: "auto", border: "1px solid #D3D3D3", borderRadius: 12, padding: 16 }} >
                        <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', background: "#1C2D49", padding: 12, borderRadius: 12 }}>
                            <div style={{ display: 'flex', alignItems: "center" }}>
                                <Play />
                                <text style={{ fontSize: 16, fontWeight: '500', fontFamily: "Inter", color: "white", marginLeft: 10 }}>
                                    1. Introduction
                                </text>
                            </div>
                            <text style={{ fontSize: 16, fontWeight: '500', fontFamily: "Inter", color: "white", marginLeft: 10 }}>
                                5:20
                            </text>
                        </div>
                        <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', padding: 12, borderRadius: 12 }}>
                            <div style={{ display: 'flex', alignItems: "center" }}>
                                <IconLock />
                                <text style={{ fontSize: 16, fontWeight: '500', fontFamily: "Inter", marginLeft: 10 }}>
                                    2. Starting Your Next Project
                                </text>
                            </div>
                            <text style={{ fontSize: 16, fontWeight: '500', fontFamily: "Inter", marginLeft: 10 }}>
                                5:20
                            </text>
                        </div>
                        <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', padding: 12, borderRadius: 12 }}>
                            <div style={{ display: 'flex', alignItems: "center" }}>
                                <IconLock />
                                <text style={{ fontSize: 16, fontWeight: '500', fontFamily: "Inter", marginLeft: 10 }}>
                                    3. Researching Your Topic
                                </text>
                            </div>
                            <text style={{ fontSize: 16, fontWeight: '500', fontFamily: "Inter", marginLeft: 10 }}>
                                5:20
                            </text>
                        </div>
                        <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', padding: 12, borderRadius: 12 }}>
                            <div style={{ display: 'flex', alignItems: "center" }}>
                                <IconLock />
                                <text style={{ fontSize: 16, fontWeight: '500', fontFamily: "Inter", marginLeft: 10 }}>
                                    4. Writing Your Script
                                </text>
                            </div>
                            <text style={{ fontSize: 16, fontWeight: '500', fontFamily: "Inter", marginLeft: 10 }}>
                                5:20
                            </text>
                        </div>
                        <div style={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', padding: 12, borderRadius: 12 }}>
                            <div style={{ display: 'flex', alignItems: "center" }}>
                                <IconLock />
                                <text style={{ fontSize: 16, fontWeight: '500', fontFamily: "Inter", marginLeft: 10 }}>
                                    5. Planning Your Visuals
                                </text>
                            </div>
                            <text style={{ fontSize: 16, fontWeight: '500', fontFamily: "Inter", marginLeft: 10 }}>
                                5:20
                            </text>
                        </div>
                    </div>

                    <Row gutter={16} style={{ justifyContent: 'center', marginTop: 40}}>
                        <ColCustom span={6}>
                            <div role="container" style={{ borderRadius: 8, background: 'white' }}>
                                <div style={{ display: 'flex', justifyContent: "center" }}>
                                    <ChartBig />
                                </div>
                                <div role="font1" style={{ fontFamily: "Inter", fontWeight: "700", marginTop: 13, display: 'flex', justifyContent: "center" }}>
                                    All levels
                                </div>
                                <div role="font2" style={{ fontFamily: "Inter", fontWeight: "400", marginTop: 13, display: 'flex', justifyContent: "center" }}>
                                    levels
                                </div>
                            </div>
                        </ColCustom>
                        <ColCustom span={6}>
                            <div role="container" style={{ borderRadius: 8, background: 'white' }}>
                                <div style={{ display: 'flex', justifyContent: "center" }}>
                                    <AgentBig />
                                </div>
                                <div role="font1" style={{ fontFamily: "Inter", fontWeight: "700", marginTop: 13, display: 'flex', justifyContent: "center" }}>
                                22,781
                                </div>
                                <div role="font2" style={{ fontFamily: "Inter", fontWeight: "400", marginTop: 13, display: 'flex', justifyContent: "center" }}>
                                Students
                                </div>
                            </div>
                        </ColCustom>
                        <ColCustom span={6}>
                            <div role="container" style={{ borderRadius: 8, background: 'white' }}>
                                <div style={{ display: 'flex', justifyContent: "center" }}>
                                    <Deal />
                                </div>
                                <div role="font1" style={{ fontFamily: "Inter", fontWeight: "700", marginTop: 13, display: 'flex', justifyContent: "center" }}>
                                234
                                </div>
                                <div role="font2" style={{ fontFamily: "Inter", fontWeight: "400", marginTop: 13, display: 'flex', justifyContent: "center" }}>
                                Projects
                                </div>
                            </div>
                        </ColCustom>
                    </Row>
                </div>
            </FDesktop>
        </div>

    )
}


