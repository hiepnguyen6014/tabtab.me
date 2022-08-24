import { SRC_IMAGE } from '@core';
import { Divider, Pagination, Row, Typography } from 'antd';
import { useTranslation } from 'next-i18next';
import { ColWrap } from '../../Home/Home.style';
import Person from './Person';
import PaginationWrapCustom from '@root/src/components/shared/PaginationCustom/PaginationCustom';

export default function TeamListing() {
    const { t: translate } = useTranslation('common');
    const person = [
        {
            "firstName": "Cody",
            "lastName": "Fisher",
            "userAvatar": SRC_IMAGE.PERSON4,
            "realEstatePhone": "",
            "realEstateEmail": ""
        },
        {
            "firstName": "Floyd",
            "lastName": "Miles",
            "userAvatar": SRC_IMAGE.PERSON5,
            "realEstatePhone": "",
            "realEstateEmail": ""
        },
        {
            "firstName": "Jerome",
            "lastName": "Bell",
            "userAvatar": SRC_IMAGE.PERSON2,
            "realEstatePhone": "",
            "realEstateEmail": ""
        },
        {
            "firstName": "Savannah",
            "lastName": "Nguyen",
            "userAvatar": SRC_IMAGE.PERSON6,
            "realEstatePhone": "",
            "realEstateEmail": ""
        }, 
    ]
    return (
        <div>
            <Typography style={{marginTop:30, marginBottom:15, fontFamily:"Inter", fontSize:20, fontWeight:"700"}}>
            Team Listing
            </Typography>
            <Row gutter={24}>
                {person.map((item, key) => (
                    <ColWrap key={key} className="gutter-row" sm={24} lg={12} xl={12} md={12} xs={24}>
                        <Person post={item} t={translate} />
                    </ColWrap>
                ))}
            </Row>
            <PaginationWrapCustom defaultCurrent={1} total={50}/>
        </div>
    )
}


