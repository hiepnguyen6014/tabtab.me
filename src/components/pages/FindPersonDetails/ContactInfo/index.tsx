import { TextEmail } from "@root/src/components/shared";
import { MPostDetail } from "@models/MPostDetail";
import { Avatar, Typography, Image, Divider, Button } from "antd";
import { IconChartTabTab, IconCoinTabTab, Location, IconEmailTabTab, VectorHeart, IconMessTabTab, IconMortage, IconReview, IconStartRating, IconFBTabTab, IconIN, IconTiktok, IconInstagramTabTab } from 'public/icons'
import { useState } from "react";
import { WidgetAction, WidgetHeader, WidgetWrapContact, ButtonChat, WidgetHeaderAgent, ButtonFollow } from "../FindPersonDetails.style";


export default function Person(props: { post: MPostDetail, t: any }) {
    const { t } = props
    const {
        firstName,
        lastName,
        userAvatar,
        realEstatePhone,
        realEstateEmail,
    } = props.post

    const [contactRecord, setContactRecord] = useState({
        phone: realEstatePhone,
        email: realEstateEmail
    })

    const backgroundColorTicket = ['#FA7E55', '#3FAEFF']
    return (
        <>
            <WidgetWrapContact>
                <div style={{ padding: "0 24px 24px 24px" }}>
                    <WidgetHeaderAgent>
                        <div >
                            <img src={userAvatar} style={{ marginBottom: 25 }} />
                            <span>
                                <Typography.Title style={{ fontSize: 24, fontWeight: '700', fontFamily: "Inter" }}>
                                    {lastName || firstName ? firstName + " " + lastName : "Ẩn danh"}
                                </Typography.Title>
                                {/* <TicketProject style={{ background: backgroundColorTicket[agency] }}><IconKey /><label>{t(agencyName)}</label></TicketProject> */}
                                <span className='align-items-center d-flex' >
                                    <label style={{ fontSize: 12, fontWeight: '500', color: "#7A7A7A", fontFamily: "Inter" }}>Sale Manager</label>
                                    <Divider type='vertical' />
                                    <label style={{ fontSize: 12, fontWeight: '500', color: "#7A7A7A", fontFamily: "Inter" }}>CMC Corp</label>
                                    <Divider type='vertical' />
                                    <div className='align-items-center d-flex'>
                                        <label style={{ fontSize: 16, fontWeight: '700', color: "#F9C41F", fontFamily: "Inter" }}>24t</label>
                                        <IconCoinTabTab style={{ marginLeft: 5 }} />
                                    </div>


                                </span>
                            </span>
                        </div>
                        {/* <span>{t('detail.widgetUser.poster')}</span> */}
                    </WidgetHeaderAgent>
                    <ButtonFollow style={{ borderRadius: 8, height: 'auto', padding: 13, marginTop: 18, marginBottom: 18, width: '100%', whiteSpace: "break-spaces" }}>
                        <label style={{ fontSize: 16, fontWeight: '700', fontFamily: "Inter" }}>Follow</label>
                    </ButtonFollow>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                        <span style={{ height: 'auto', width: '40%', display: 'flex', alignItems: 'center' }}>
                            <Location style={{ marginRight: 9 }} />
                            <div style={{ fontSize: 16, fontWeight: 600, fontFamily: "Inter", color: '#7A7A7A' }}>Social</div>
                        </span>
                        <span >
                            <IconFBTabTab style={{ marginLeft: 16 }} />
                            <IconIN style={{ marginLeft: 16 }} />
                            <IconTiktok style={{ marginLeft: 16 }} />
                            <IconInstagramTabTab style={{ marginLeft: 16 }} />
                        </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                        <span style={{ height: 'auto', width: '45%', display: 'flex', alignItems: 'center' }}>
                            <IconEmailTabTab style={{ marginRight: 9}} />
                            <span style={{ fontSize: 16, fontWeight: 600, fontFamily: "Inter", color: '#7A7A7A' }}>Email</span>
                        </span>
                        <span style={{ fontSize: 16, fontWeight: 600, fontFamily: "Inter" }}>mail@gmail.com</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                        <span style={{ height: 'auto', width: '45%', display: 'flex', alignItems: 'center' }}>
                            <IconMortage style={{ marginRight: 9 }} />
                            <span style={{ fontSize: 16, fontWeight: 600, fontFamily: "Inter", color: '#7A7A7A' }}>Chứng nhận</span>
                        </span>
                        <span style={{ fontSize: 16, fontWeight: 600, fontFamily: "Inter" }}>Chứng nhận</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                        <span style={{ height: 'auto', width: '45%', display: 'flex', alignItems: 'center' }}>
                            <IconChartTabTab style={{ marginRight: 9 }} />
                            <span style={{ fontSize: 16, fontWeight: 600, fontFamily: "Inter", color: '#7A7A7A' }}>Hạng</span>
                        </span>
                        <span style={{ fontSize: 16, fontWeight: 600, fontFamily: "Inter" }}>Top 1</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                        <span style={{ height: 'auto', width: '45%', display: 'flex', alignItems: 'center' }}>
                            <IconReview style={{ marginRight: 9, }} />
                            <span style={{ fontSize: 16, fontWeight: 600, fontFamily: "Inter", color: '#7A7A7A' }}>Review</span>
                        </span>
                        <span>
                            <IconStartRating />
                        </span>
                    </div>
                    <WidgetAction>
                        <TextEmail t={t} email={contactRecord.email}>
                            <ButtonChat style={{ borderRadius: 8, height: 'auto', padding: 13, marginTop: 18, width: '100%', whiteSpace: "break-spaces" }}>
                                <IconMessTabTab />
                                <label style={{ fontSize: 16, fontWeight: '700', fontFamily: "Inter" }}>Chat trực tiếp với anh An</label>
                            </ButtonChat>
                        </TextEmail>
                    </WidgetAction>
                </div>
            </WidgetWrapContact>
        </>
    )
}