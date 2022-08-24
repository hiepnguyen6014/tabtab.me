import { parseHtmlText } from './../core/utils/handleArray';
import { detectLineBreak } from "../core/utils/handleArray"
import { convertDateToString } from "../core/utils/HandleDate"

export class MNewsPost {
    newsId?:number
    newsTitle?: string
    introduceImage?: string
    shortDescription?: string
    description?: string[]
    updatedAt?: string
    createdAt?: string
    constructor(param:any){
        this.newsId = param?.newsId || 0
        this.newsTitle = param?.newsTitle || ''
        this.introduceImage = param?.introduceImage || ''
        this.shortDescription = param?.shortDescription || ''
        this.description = detectLineBreak(param?.description) || []
        this.updatedAt = param?.description || ''
        this.createdAt = convertDateToString(param?.createdAt) || ''
    }
}