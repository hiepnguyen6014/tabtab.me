

class chartDataType{
    data:Array<number>
    constructor(param:any){
        this.data =param ? param.map(item=>item.avg || 0) : []
    }
}

export class MPriceAverange {
    max?:number
    min?:number
    count?:number
    averange?:number
    countAgency?: number
    constructor(param:any,count?:number, countAgency?:number){
        this.max = param?.maxRealEstateValueSalePricePerSquareMeters || 0,
        this.min = param?.minRealEstateValueSalePricePerSquareMeters || 0,
        this.count = count || 0,
        this.countAgency = countAgency || 0
        this.averange = param?.avgRealEstateValueSalePricePerSquareMeters || 0
    }
}

export class MChart {
    labels:Array<string>
    datasets:chartDataType[]
    constructor(param:any[]){
        this.labels = param ? param.map(item=>`T${item.distinctMonth}`) : []
        this.datasets =Array(new chartDataType(param || null))
    }
}