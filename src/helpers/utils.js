import dayjs from 'dayjs';
// import {EnCode,DeCode} from '@Helpers/authorize.js'
// export function calculateTotal(items) {
//     return items.reduce((total, item) => total + item.price, 0);
// }

export function FormatDate(time,format){
    let result
    if(time != '' && time != null && time != undefined){
        if(!format || format !== 0){
            result = dayjs(time).format(format)
        }else{
            result = dayjs(time).format('DD-MM-YYYY hh:mm:ss')
        }
    }else{
        result = ''
    }
    return result
}

// export function FormatCurrency(value) {
//     if (typeof value !== 'number') {
//       return value;
//     }
//     const formattedValue = value.toLocaleString('vi-VN', {
//       style: 'currency',
//       currency: 'VND',
//     });
//     return formattedValue.replace(/₫/g, '');
// }

// export function FormatNumberic(value) {
//     return parseFloat(String(value).replace(/ꓸ/g,'').replace(',','.'))
// }

// export function CheckPermission(object_name,permission){
//     let get_roles = localStorage.getItem('user_role')
//     let list_permissions = JSON.parse(DeCode(get_roles))
//     let object = list_permissions.find(item => item.object_name == object_name)
//     if(object != '' && object != undefined && object != null){
//         if( permission in object){
//             return object[permission]
//         }else{
//             return false
//         }
//     }else{return false}
// }
