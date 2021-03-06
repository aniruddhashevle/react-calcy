/**
 * parse string to number or the other way around
 * @return {number/string}
 */
export const parseValue = (currentDisplayValue, toNumber) => {
    if (toNumber) {
        return Number(currentDisplayValue);
    } else {
        let data = String(currentDisplayValue).split(/[eE]/);
        if (data.length === 1) return data[0];

        var z = '', sign = this < 0 ? '-' : '',
            str = data[0].replace('.', ''),
            mag = Number(data[1]) + 1;

        if (mag < 0) {
            z = sign + '0.';
            while (mag++) z += '0';
            // eslint-disable-next-line
            return z + str.replace(/^\-/, '');
        }
        mag -= str.length;
        while (mag--) z += '0';
        return str + z;
    }
}


/**
 * setMaxLengthWithDecimalHandling
 * @return {Number}
 */
export const decimalHandlingWithMaxLenfth = (content, currentDisplayValue, maxDigit) => {
    if (currentDisplayValue) {
        let val = 0;
        let decimalCharCount = charCount(currentDisplayValue + content, '.');
        if (decimalCharCount > 1) val = currentDisplayValue;
        else val = currentDisplayValue + content;
        if (val) val = val.substring(0, maxDigit)
        return val;
    } else return 0;
}


export const charCount = (string, char) => {
    return string.split(char).length - 1;
}
