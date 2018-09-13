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
        result = {},
        shouldDisplayValue = '';

    //handle 15 digits
    if (currentDisplayValue && currentDisplayValue.length === 15) return state;

    if (!perform && !isCalcySwitchedOff && (!prevValue || prevValue === '0')) {
        if (currentDisplayValue === '' || currentDisplayValue === '0')
            return { ...state, currentDisplayValue: content }
        else return { ...state, currentDisplayValue: currentDisplayValue + content }
    } else {
        //handle calcy off
        if (isCalcySwitchedOff && type !== SYSTEM) return state;

        if (prevValue)
            if (prevValue === currentDisplayValue && type === NUMBER) shouldDisplayValue = content;
            else if (type === NUMBER) shouldDisplayValue = currentDisplayValue + content;
        if (!shouldDisplayValue) shouldDisplayValue = currentDisplayValue;

        state = { ...state, currentDisplayValue: shouldDisplayValue };

        //parse string values to number
        state = { ...state, currentDisplayValue: parseValue(state.currentDisplayValue, true) };
        if (prevValue) state = { ...state, prevValue: parseValue(state.prevValue, true) }

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
            default: result = state;
        }
    }

    //parse number values to string
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
 * memory operations
 * @return {object}
 */
export const memoryOperation = (keyData, state) => {
    let {
        perform
    } = keyData,
        {
            currentDisplayValue,
            memoryStore
        } = state;
    switch (perform) {
        case 'memory-clear': return { ...state, showMemorySign: false, memoryStore: 0 };
        case 'memory-stored': return { ...state, currentDisplayValue: memoryStore, showMemorySign: true };
        case 'memory-plus': return { ...state, memoryStore: memoryStore + currentDisplayValue, showMemorySign: true };
        case 'memory-minus': return { ...state, memoryStore: memoryStore - currentDisplayValue, showMemorySign: true };
        default: return state;
    }
}


/**
 * arithmetic operations
 * @return {object}
 */
export const arithmeticOperation = (keyData, state) => {
    let {
        perform
    } = keyData,
        {
            currentDisplayValue,
            prevValue,
            prePerform,
            isSamePerform
        } = state;

    if ((!prevValue || isSamePerform) && perform !== 'sqrt' && perform !== 'signed' && perform !== 'equals')
        return { ...state, prevValue: currentDisplayValue, prePerform: perform };
    else
        switch (prePerform || perform) {
            case 'add': return { ...state, currentDisplayValue: prevValue + currentDisplayValue, prevValue: 0, prePerform: '' };
            case 'divide': return { ...state, currentDisplayValue: parseFloat(prevValue / currentDisplayValue), prevValue: 0, prePerform: '' };
            case 'subtract': return { ...state, currentDisplayValue: prevValue - currentDisplayValue, prevValue: 0, prePerform: '' };
            case 'multiply': return { ...state, currentDisplayValue: prevValue * currentDisplayValue, prevValue: 0, prePerform: '' };
            case 'sqrt': return { ...state, currentDisplayValue: Math.sqrt(currentDisplayValue) };
            case 'percentage': return { ...state, currentDisplayValue: prevValue * currentDisplayValue / 100, prevValue };
            case 'equals': return prePerform ? arithmeticOperation(keyData, state) : state;
            case 'signed': return { ...state, currentDisplayValue: (-currentDisplayValue) };
            default: return state;
        }
}


/**
 * system operations
 * @return {object}
 */
export const systemOperation = (keyData, state) => {
    let {
        perform
    } = keyData,
        {
            isCalcySwitchedOff,
        } = state;
    switch (perform) {
        case 'off': return { ...state, currentDisplayValue: '', isCalcySwitchedOff: true, prevValue: '', showMemorySign: false };
        case 'on': return { ...state, currentDisplayValue: 0, isCalcySwitchedOff: false, prevValue: '' };
        case 'clear': return { ...state, currentDisplayValue: (isCalcySwitchedOff ? '' : 0), prevValue: 0 };
        default: return {};
    }
}