export const formatNumToUnit = (
  num: number | string,
  translate?: any,
  showSub: boolean = true,
  unit?: string
) => {
  // if (!num || typeof num == 'undefined') return 0;
  // if (!num || num === 0 || typeof num == 'undefined') {
  //   return translate('unit.deal')
  // }
  if (typeof num == 'string') num = parseInt(num);
  if (num < 1000000){
    const money = num / 1000000
    return `${money % 1 == 0 ? money : (num/1000000).toFixed(money >= 0.1 ? 1 : 2)} ${showSub ? translate('unit.million') : ' '} ${
      unit ? unit : ''
    }`;
  }
  if(num >=1000000 && num < 1000000000){
    const money = num / 1000000
    return `${money % 1 == 0 ? money : money.toFixed(money >= 0.1 ? 1 : 2)} ${showSub ? translate('unit.million') : ' '} ${
      unit ? unit : ''
    }`;
  }
  if(num >= 1000000000){
    const money = num / 1000000000
    return `${money % 1 == 0 ? money : money.toFixed(money >= 0.1 ? 1 : 2)} ${showSub ? translate('unit.billion') : ' '} ${
      unit ? unit : ''
    }`;
  }
};
