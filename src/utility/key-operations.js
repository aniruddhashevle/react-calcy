import {
    NUMBER,
    MEMORY,
    ARITHMETIC,
    SYSTEM
} from '../constants/calculator-keys-type';

/**
 * all the key operations calling fun
 * @return {object}
 */
export const keyOperations = (keyData, state) => {
    let {
        type,
        content,
        perform
    } = keyData,
        {
            isCalcySwitchedOff,
            currentDisplayValue,
            prevValue
        } = state,
        result = {};
    if(currentDisplayValue && currentDisplayValue.length === 15) return state;
    state = { ...state, currentDisplayValue: parseValue(currentDisplayValue, true) };
    if (!perform && !isCalcySwitchedOff && !prevValue) {
        if (currentDisplayValue === '' || currentDisplayValue === '0')
            return { currentDisplayValue: content }
        else return { currentDisplayValue: currentDisplayValue + content }
    } else {
        if (prevValue) state = { ...state, prevValue: parseValue(prevValue, true) }
        switch (type) {
            case SYSTEM:
                result = systemOperation(keyData, state);
                break;
            case MEMORY:
                result = memoryOperation(keyData, state);
                break;
            case ARITHMETIC:
                result = arithmeticOperation(keyData, state);
                break;
            case NUMBER:
                result = numericOperation(keyData, state);
                break;
            default: result = {};
        }
    }
    if (result) {
        if ('currentDisplayValue' in result) {
            result = { ...result, currentDisplayValue: parseValue(result.currentDisplayValue, false) }
        }
        if ('prevValue' in result) {
            result = { ...result, prevValue: parseValue(result.prevValue, false) }
        }
    }
    return result;
}

/**
 * parse string to number and other way around
 * @return {number/string}
 */
export const parseValue = (currentDisplayValue, toNumber) => {
    if (toNumber) {
        return Number(currentDisplayValue);
    } else {
        let data = String(currentDisplayValue).split(/[eE]/);
        if (data.length == 1) return data[0];

        var z = '', sign = this < 0 ? '-' : '',
            str = data[0].replace('.', ''),
            mag = Number(data[1]) + 1;

        if (mag < 0) {
            z = sign + '0.';
            while (mag++) z += '0';
            return z + str.replace(/^\-/, '');
        }
        mag -= str.length;
        while (mag--) z += '0';
        return str + z;
    }
}

/**
 * memory operations
 * @return {object}
 */
export const memoryOperation = (keyData, state) => {
    let {
        type,
        content,
        perform
    } = keyData,
        {
            currentDisplayValue
        } = state,
        result = null;
}


/**
 * arithmetic operations
 * @return {object}
 */
export const arithmeticOperation = (keyData, state) => {
    let {
        type,
        content,
        perform
    } = keyData,
        {
            currentDisplayValue,
            prevValue
        } = state,
        result = null;
    if (!prevValue) {
        return { ...state, prevValue: currentDisplayValue }
    } else {
        switch (perform) {
            case 'add': return { currentDisplayValue: prevValue + currentDisplayValue, prevValue: '' };
            case 'divide': return { currentDisplayValue: parseFloat(prevValue / currentDisplayValue), prevValue: '' };
            case 'subtract': return { currentDisplayValue: prevValue - currentDisplayValue, prevValue: '' };
            case 'multiply': return { currentDisplayValue: prevValue * currentDisplayValue, prevValue: '' };
            // case 'sqrt': return { currentDisplayValue: prevValue + currentDisplayValue, prevValue };
            // case 'percentage': return { currentDisplayValue: prevValue + currentDisplayValue, prevValue };
            // case 'equals': return { currentDisplayValue: prevValue + currentDisplayValue, prevValue };
            // case 'signed': return { currentDisplayValue: prevValue + currentDisplayValue, prevValue };
            default: return state;
        }
    }

}



/**
 * numeric operations
 * @return {object}
 */
export const numericOperation = (keyData, state) => {
    let {
        type,
        content,
        perform
    } = keyData,
        {
            currentDisplayValue,
            prevValue
        } = state,
        result = null;
    if (prevValue) {
        return { ...state, currentDisplayValue: content }
    } else {

    }
}


/**
 * system operations
 * @return {object}
 */
export const systemOperation = (keyData, state) => {
    let {
        type,
        content,
        perform
    } = keyData,
        {
            isCalcySwitchedOff,
            currentDisplayValue
        } = state;
    switch (perform) {
        case 'off': return { currentDisplayValue: '', isCalcySwitchedOff: true, prevValue: '' };
        case 'on': return { currentDisplayValue: 0, isCalcySwitchedOff: false, prevValue: '' };
        case 'clear': return { currentDisplayValue: (isCalcySwitchedOff ? '' : 0), prevValue: 0 };
        default: return {};
    }
    return {};
}