/**
 * Created by wlh on 2016/10/10.
 */
'use strict';


exports.toHanzi = function (money) {
  if (typeof money != 'number' ) {
    throw new Error('金额只支持数字格式')
  }

  if (money >= Math.pow(10, 17)) {
    throw new Error('目前只支持Math.pow(10, 17)以内数字转换');
  }

  let vals = ['零','壹','贰','叁','肆','伍','陆','柒','捌','玖'];
  let units = [
    '分', '角',
    '元', '拾', '佰', '仟',
    '万', '拾', '佰', '仟',
    '亿', '拾', '佰', '仟',
    '兆', '拾', '佰', '仟'
  ]
  //将小数转换为整数
  money = Math.floor(money * 100)
  let str = '';
  let idx = 0;
  // 1000 1000 1000.00 整
  do {
    let num = money % 10;
    //每处理一位,将此位从数字中删除,如 1001,处理完1后删除,剩余100再以此处理
    money = Math.floor( money / 10 );
    let unit = units[idx++];
    if (num) {
      str = vals[num] + unit + str;
    } else {
      if ((idx -2) % 4 == 1) {
        str = unit + str;
      }
    }
    if (money <= 0) {
      break;
    }
  } while(true);
  str += '整';
  return str;
}