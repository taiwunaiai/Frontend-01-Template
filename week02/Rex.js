// 写一个正则表达式 匹配所有 Number 直接量
// 写一个 UTF-8 Encoding 的函数
// 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号


// 正则判断number的直接量
//整数、浮点数、-Infinity、+Infinity、 NAN、16进制表示
function isNumber(str){
    // ((\+\-|\-\+)*|\+|\-)? 正负
    // ^(-?\d+)(\.\d+)?$ 浮点数
    // ^-?\d+$  整数
    // Infinity|NaN
    // 
    return /^(\s)*((\+\-|\-\+)*|\+|\-)?((\d+)?(.\d*)?([e|E](\+|\-)?(\d*))?|0x[0-9a-fA-F]+|Infinity|NaN)(\s)*$/.test(str)
// }

// var numberArr = [
//     Number.MAX_VALUE.toString(),
//     +-+-9,
//     -+-+9,
//     Number.MIN_VALUE.toString(),
//     -Number.MIN_VALUE.toString(),
//     -+-1
// ]
// numberArr.forEach(e => {
//     console.log(isNumber(e))
// })


function strToUtf8Encoding(text) {
    var encdoeStr = encodeURIComponent(text)
    var bytes = []

    for (var i = 0; i < encdoeStr.length; i++) {
        var str = encdoeStr[i]
        if (str === '%') {
            var hex = encdoeStr.slice(i + 1, i + 3)
            bytes.push(parseInt(hex, 16))
            i += 2
        } else {
            bytes.push(str.charCodeAt(0))
        }
    }

    return bytes
}

function decodeUtf8(text) {
    var encode = ""
    for (var i = 0; i < text.length; i++) {
        encdoe += '%' + text[i].toString(16)
    }

    return decodeURIComponent(encode)
}


// 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
function matchString(text) {
    // [^\"\n\r\u2028\u2029]
    // \(?:[\'\"\b\f\n\r\t\v\n\r\u2028\u2029]|\r\n)
    // \\x[0-9a-fA-F]{2} 匹配编码
    // \\u[0-9a-fA-F]{4} 匹配 Unicode 值
    // \\[^0-9ux\'\"\b\f\n\r\t\v\n\r\u2028\u2029]
    var reg = new RegExp("(?:[^\"\n\r\u2028\u2029]|\(?:[\'\"\b\f\n\r\t\v\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux\'\"\b\f\n\r\t\v\n\r\u2028\u2029])*")
    
    return text.match(reg)
}