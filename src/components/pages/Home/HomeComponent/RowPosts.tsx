import { ROUTES } from "@constants"
import { filterKey, POST_TYPE_PARAMS } from "@core"
import { Typography } from "antd"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { ButtonShowAll, ButtonShowAllMobile, RowWithAll } from "../Home.style"


interface Props{
    posts ?:any[],
    showAll?:boolean,
    queryType?:{},
    pathName?:string,
    t:any;
    title?:string;
    subTitle?:string;
}

const RowPost = (props:Props)=>{
    const {posts, t:tranlsate, title, pathName, subTitle, showAll = true, queryType} = props    
    const router = useRouter()

    if(!posts || !posts?.length) return <></>

    const onShowAll = ()=>{     
      if(pathName){
        window.open(pathName,"_blank")
        return 
      } 
      router.push({
        pathname: ROUTES.MAIN_FLOOR.href,
        query: queryType,
      })
    }

    const renderBtnAll = () => {
      if(!showAll) return <></>
        return (
          <ButtonShowAll
            className="btn-show-all disable-hover"
            onClick={onShowAll}
          >
            {tranlsate('button.all')}
          </ButtonShowAll>
        );
      };
    
      const renderBtnAllMobile = () => {
        if(!showAll) return <></>
        return (
          <ButtonShowAllMobile
            className="btn-show-all disable-hover"
            onClick={onShowAll}
          >
            {tranlsate('button.all')}
          </ButtonShowAllMobile>
        );
      };

      const DynamicWrapper = dynamic(()=>import('../../../layout/DefaultLayout/DefaultComponent.style').then(mod=>mod.DefaultWrapperWithBg))
      const DynamicContent = dynamic(()=>import('../../../layout/DefaultLayout/DefaultComponent.style').then(mod=>mod.DefaultContentNoGrid))
      const DynamicListPost = dynamic(()=>import('../../../shared/ListPostsHorizontal/ListPostsHorizontal'))
      return(
        <>
        <DynamicWrapper>
          <DynamicContent>
            <Typography.Title level={3}>
              {tranlsate(title)}
            </Typography.Title>
            <RowWithAll>
              <Typography.Text>{tranlsate(subTitle || 'home.subHot')}</Typography.Text>
              {renderBtnAll()}
            </RowWithAll>
            <DynamicListPost t={tranlsate} posts={posts} />
            {renderBtnAllMobile()}
          </DynamicContent>
        </DynamicWrapper>
        
        </>
    )
}

export default RowPost