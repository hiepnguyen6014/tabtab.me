import { useContext } from "react"
import ChartCard from "./ChartCard"
import { WrapperWithGrid } from "./valuationCharts.style"
import { FilterValuationContext } from '../../../../../core/contexts/filterValuationContext'

interface Props{
    t:any,    
}
const ValuationChart = (props:Props)=>{
    const {t:translate} = props
    const { valueSelected, categoryList } = useContext(FilterValuationContext)
    const mainChartQueryBuilder = { ...valueSelected }
    
    const cleanedCategory = categoryList.filter(item => item.realEstateCategoryId !== valueSelected?.realEstateCategory?.realEstateCategoryId)
    const sub1ChartQueryBuilder = {
        ...valueSelected,
        realEstateCategory: cleanedCategory[0]
    }

    const sub2ChartQueryBuilder = {
        ...valueSelected,
        realEstateCategory: cleanedCategory[1]
    }

    return(
        <>  
            {/* Chart 1 */}
            <ChartCard  filter={mainChartQueryBuilder} t={translate}/>
            <WrapperWithGrid>
                {/* Chart 2 */}
                <ChartCard filter={sub1ChartQueryBuilder}  theme={'green'} t={translate}/>
                {/* Chart 3 */}
                <ChartCard filter={sub2ChartQueryBuilder} theme={'blue'} t={translate}/>
            </WrapperWithGrid>
        </>
    )
}

export default ValuationChart