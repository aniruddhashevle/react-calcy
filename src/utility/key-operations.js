import {
    NUMBER,
    MEMORY,
    ARITHMETIC,
    SYSTEM
} from '../constants/calculator-keys-type';
import { parseValue } from './utils';

/**
 * all the key operations calling fun
 * @return {Object}
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
        result = null,
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
        state = { ...state, currentDisplayValue: parseValue(state.currentDisplayValue, true), prevValue: parseValue(state.prevValue, true), memoryStore: parseValue(state.memoryStore, true) };

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
    if (result) result = { ...result, currentDisplayValue: parseValue(result.currentDisplayValue, false), prevValue: parseValue(result.prevValue, false), memoryStore: parseValue(result.memoryStore, false) }

    return result;
}

/**
 * memory operations
 * @return {Object}
 */
export const memoryOperation = (keyData, state) => {
    let {
        perform
    } = keyData,
        {
            currentDisplayValue,
            memoryStore
        } = state,
        result = null;
    switch (perform) {
        case 'memory-clear':
            result = memoryStore ? { ...state, showMemorySign: false, memoryStore: 0 } : state;
            break;
        case 'memory-stored':
            result = memoryStore ? { ...state, currentDisplayValue: memoryStore, showMemorySign: true } : state;
            break;
        case 'memory-plus':
            result = currentDisplayValue ? { ...state, memoryStore: memoryStore + currentDisplayValue, showMemorySign: true } : state;
            break;
        case 'memory-minus':
            result = currentDisplayValue ? { ...state, memoryStore: memoryStore - currentDisplayValue, showMemorySign: true } : state;
            break;
        default: result = state;
    }
    //hide memory sign if memory store is zero
    if (result && result.memoryStore === 0) result = { ...result, showMemorySign: false }
    return result;
}


/**
 * arithmetic operations
 * @return {Object}
 */
export const arithmeticOperation = (keyData, state) => {
    let {
        isIndependentArithmetic,
        perform
    } = keyData,
        {
            currentDisplayValue,
            prevValue,
            prePerform,
            isSamePerform
        } = state;

    if ((!prevValue || isSamePerform) && !isIndependentArithmetic)
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
 * @return {Object}
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