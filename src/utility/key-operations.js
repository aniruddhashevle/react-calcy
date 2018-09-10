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
            currentDisplayValue
        } = state,
        result = {};
    state = { ...state, currentDisplayValue: parseValue(currentDisplayValue, true) };
    if (!perform && !isCalcySwitchedOff) {
        if (currentDisplayValue === '' || currentDisplayValue === '0')
            return { currentDisplayValue: content }
        else return { currentDisplayValue: currentDisplayValue + content }
    } else {
        switch (type) {
            case SYSTEM: result = systemOperation(keyData, state); break;
            case MEMORY: result = memoryOperation(keyData, state); break;
            case ARITHMETIC: result = arithmeticOperation(keyData, state); break;
            default: result = {};
        }
    }
    if (result && ('currentDisplayValue' in result)) {
        result = { ...result, currentDisplayValue: parseValue(result.currentDisplayValue, false) }
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
            currentDisplayValue
        } = state,
        result = null;

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
        case 'off': return { currentDisplayValue: '', isCalcySwitchedOff: true };
        case 'on': return { currentDisplayValue: 0, isCalcySwitchedOff: false };
        case 'clear': return { currentDisplayValue: (isCalcySwitchedOff ? '' : 0) };
        default: return state;
    }
    return state;
}