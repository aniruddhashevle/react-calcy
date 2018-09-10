import {
    NUMBER,
    MEMORY,
    ARITHMETIC,
    SYSTEM
} from '../constants/calculator-keys-type';

export const keyOperations = (keyData, state) => {
    let {
        type,
        content,
        perform
    } = keyData,
        {
            shouldCalcySwitchedOff,
            currentDisplayValue
        } = state;
    if (!perform && !shouldCalcySwitchedOff) {
        if (currentDisplayValue === '' || currentDisplayValue === '0')
            return { currentDisplayValue: content }
        else return { currentDisplayValue: currentDisplayValue + content }
    } else {
        switch (type) {
            case SYSTEM: return systemOperation(keyData, state);
            case NUMBER: return numericOperation(keyData, state);
            case MEMORY: return memoryOperation(keyData, state);
            case ARITHMETIC: return arithmeticOperation(keyData, state);
            default: return {};
        }
    }
    return {};
}

export const numericOperation = (keyData, state) => {
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

export const systemOperation = (keyData, state) => {
    let {
        type,
        content,
        perform
    } = keyData,
        {
            shouldCalcySwitchedOff,
            currentDisplayValue
        } = state;
    switch (perform) {
        case 'off': return { currentDisplayValue: '', shouldCalcySwitchedOff: true };
        case 'on': return { currentDisplayValue: '0', shouldCalcySwitchedOff: false };
        case 'clear': return { currentDisplayValue: (shouldCalcySwitchedOff ? '' : '0') };
        default: return {};
    }
    return {};
}