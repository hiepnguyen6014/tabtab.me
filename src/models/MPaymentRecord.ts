export class MPaymentRecord {
    paymentRecordId?: number
    paymentDetail?: string    
    walletBalanceBefore?: number
    walletBalanceAfter?: number
    paymentNote?: string
    paymentRefNote?: string

    // Custom data
    deduction ?:number  // khoang tien bi tru
    constructor(param:any){
        this.paymentRecordId = param.paymentRecordId
        this.paymentDetail = param.paymentDetail || ""
        this.walletBalanceBefore = param.walletBalanceBefore || 0
        this.walletBalanceAfter = param.walletBalanceAfter || 0
        this.deduction = this.walletBalanceBefore - this.walletBalanceAfter
    }
}