import { TextEmail } from '../TextMail'
import { TextPhoneNumber } from '../TextPhoneNumber/index'
import { MPostDetail } from "@models/MPostDetail";
import { Avatar, Typography, Image, Divider, Button } from "antd";
import { IconChartTabTab, IconCoinTabTab, IconEmailTabTab, IconFBTabTab, IconIN, IconInstagramTabTab, IconKey, IconMessage, IconMessTabTab, IconMortage, IconPhoneCall, IconPhoneTabTab, IconReview, IconSocial, IconStartRating, IconTiktok } from 'public/icons'
import { useState } from "react";
import { LockContact } from "./LockContact";
import { WidgetAction, WidgetHeader, WidgetWrap, TicketProject, ButtonCall, ButtonMess } from "./Widget.style";
import { RowPriceLeft } from '../../layout/DefaultLayout/LayoutComponent/Component.style';
import { ButtonFollow } from '../../pages/FindPersonDetails/FindPersonDetails.style';
import { censorEmail } from '../../../core/utils/helpers';

export const WidgetUserInfo = (props: { post: MPostDetail, t: any }) => {
    const { t } = props
    const {
        firstName,
        lastName,
        userAvatar,
        agencyName,
        realEstateId,
        paymentRecords,
        realEstatePhone,
        realEstateEmail,
        agency

    } = props.post

    const [contactRecord, setContactRecord] = useState({
        phone: realEstatePhone,
        email: realEstateEmail
    })

    const backgroundColorTicket = ['#FA7E55', '#3FAEFF']
    return (
        <>
            <WidgetWrap>
                <div style={{ backgroundColor: '#222222', height: 'auto', textAlign: 'center', padding: 32 }}>
                    <span style={{ color: 'white', fontSize: 32, fontWeight: '700', fontFamily: "Inter" }}>LOGO CTY</span>
                </div>
                <div style={{ padding: 24 }}>
                    <WidgetHeader>
                        <span role="left">
                            <div>
                                <Avatar src={userAvatar} size={70}>{lastName ? lastName.charAt(0).trim().toUpperCase() : 'A'}</Avatar>
                                <ButtonFollow style={{ borderRadius: 8, height: 'auto', marginTop: '6px' }}>
                                    <label style={{ fontSize: 16, fontWeight: '700', fontFamily: "Inter" }}>Follow</label>
                                </ButtonFollow>
                            </div>
                            <span>
                                <Typography.Title style={{ fontSize: 24, fontWeight: '700', fontFamily: "Inter" }}>{lastName || firstName ? firstName + " " + lastName : t('detail.widgetUser.icognito')}</Typography.Title>
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
                        </span>
                        {/* <span>{t('detail.widgetUser.poster')}</span> */}
                    </WidgetHeader>
                    <Divider />
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                        <span style={{ height: 'auto', width: '40%' }}>
                            <IconSocial style={{ marginRight: 9, paddingTop: 1 }} />
                            <span style={{ fontSize: 16, fontWeight: 600, fontFamily: "Inter", color: '#7A7A7A' }}>Social</span>
                        </span>
                        <span >
                            <IconFBTabTab style={{ marginLeft: 16 }} />
                            <IconIN style={{ marginLeft: 16 }} />
                            <IconTiktok style={{ marginLeft: 16 }} />
                            <IconInstagramTabTab style={{ marginLeft: 16 }} />
                        </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                        <span style={{ height: 'auto', width: '45%' }}>
                            <IconEmailTabTab style={{ marginRight: 9, paddingTop: 1 }} />
                            <span style={{ fontSize: 16, fontWeight: 600, fontFamily: "Inter", color: '#7A7A7A' }}>Email</span>
                        </span>
                        <span style={{ fontSize: 16, fontWeight: 600, fontFamily: "Inter" }}>{censorEmail('testing@gmail.com')}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                        <span style={{ height: 'auto', width: '45%' }}>
                            <IconReview style={{ marginRight: 9, paddingTop: 1 }} />
                            <span style={{ fontSize: 16, fontWeight: 600, fontFamily: "Inter", color: '#7A7A7A' }}>Review</span>
                        </span>
                        <span>
                            <IconStartRating />
                        </span>
                    </div>
                    <WidgetAction>
                        {/* <LockContact contactRecord={contactRecord} setContactFunc={setContactRecord} t={t} paymentRecords={paymentRecords} realEstateId={realEstateId?.toString()} /> */}
                        <TextPhoneNumber t={t} phone={contactRecord.phone}>
                            <ButtonCall className="disable-custom-btn" icon={<IconPhoneTabTab />}>
                                <Typography style={{ whiteSpace: 'break-spaces' }}>{contactRecord.phone}</Typography>
                            </ButtonCall>
                        </TextPhoneNumber>
                        <br />
                        <TextEmail t={t} email={contactRecord.email}>
                            <Button type='primary' style={{ backgroundColor: "#F9C41F", borderRadius: 8, height: 'auto', padding: 13, marginTop: 24, width: '100%', whiteSpace: "break-spaces" }}>
                                <IconMessTabTab />
                                <label style={{ fontSize: 16, fontWeight: '700', fontFamily: "Inter" }}>Chat trực tiếp với anh {lastName}</label>
                            </Button>
                        </TextEmail>
                    </WidgetAction>
                </div>
            </WidgetWrap>
        </>
    )
}