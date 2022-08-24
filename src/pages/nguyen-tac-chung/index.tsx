import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { LayoutLandingPage } from "@root/src/components/layout/DefaultLayout/LayoutLandingPage";
import { INFOMATION_ROUTES, ROUTES } from "@constants";
import { getContentForLandingPage } from "../../core/services/post/index";
import { IGeneral } from "@root/src/core/types/post";

const Landing:NextPage<{content?:string}> = ({content})=>{
    const { t: translate } = useTranslation('common');
    const arrHref = [
        {
            name: translate(INFOMATION_ROUTES.RULES.name),
            href: INFOMATION_ROUTES.RULES.href,
        },
    ]
    return <LayoutLandingPage t={translate} content={content} href={arrHref} title={INFOMATION_ROUTES.RULES.title}/>
}

export async function getServerSideProps(context:any){
    const {locale} = context
    const content:IGeneral = await getContentForLandingPage()
    return{
        props:{
            ...(await serverSideTranslations(locale, ['common'])),
            content:content.generalRule || ''
        }
    }
}

export default Landing