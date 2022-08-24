import { MUtilData } from "@models/MPostDetail"
import { CheckBoxItem, ListCheckWrapper } from "./list-checkbox.style"
export const ListCheckBox =(props:{utils:MUtilData[]})=>{

    return(
        <ListCheckWrapper>
            {props.utils?.map(value=>(
                <div role="item" key={value.realEstateUtilitiesId}>
                    <CheckBoxItem checked={value.exist}>{value.realEstateUtilitiesName}</CheckBoxItem>                    
                </div>
            ))}
        </ListCheckWrapper>
    )
}