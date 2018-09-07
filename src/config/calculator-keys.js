import {
    NUMBER,
    MEMORY,
    ARITHMETIC,
    SYSTEM
} from '../constants/calculator-keys-type';

export const CALCULATOR_KEYS = [
    {
        type: NUMBER,
        content: '0',
    },
    {
        type: NUMBER,
        content: '1',
    },
    {
        type: NUMBER,
        content: '2',
    },
    {
        type: NUMBER,
        content: '3',
    },
    {
        type: NUMBER,
        content: '4',
    },
    {
        type: NUMBER,
        content: '5',
    },
    {
        type: NUMBER,
        content: '6',
    },
    {
        type: NUMBER,
        content: '7',
    },
    {
        type: NUMBER,
        content: '8',
    },
    {
        type: NUMBER,
        content: '9',
    },
    {
        type: NUMBER,
        content: '.',
        perform: 'float'
    },
    {
        type: SYSTEM,
        content: 'Off',
        className: 'small',
        perform: 'off'
    },
    {
        type: SYSTEM,
        content: 'C',
        perform: 'clear'
    },
    {
        type: SYSTEM,
        content: 'AC',
        className: 'extra-cap',
        perform: 'on'
    },
    {
        type: ARITHMETIC,
        content: '+',
        className: 'large',
        perform: 'add'
    },
    {
        type: ARITHMETIC,
        content: '-',
        perform: 'subtract'
    },
    {
        type: ARITHMETIC,
        content: 'X',
        perform: 'multiply'
    },
    {
        type: ARITHMETIC,
        content: '÷',
        perform: 'divide'
    },
    {
        type: ARITHMETIC,
        content: '+/-',
        perform: 'signed'
    },
    {
        type: ARITHMETIC,
        content: '√',
        className: 'small',
        perform: 'sqrt'
    },
    {
        type: ARITHMETIC,
        content: '%',
        perform: 'percentage'
    },
    {
        type: ARITHMETIC,
        content: '=',
        perform: 'quals'
    },
    {
        type: MEMORY,
        content: 'MC',
        perform: 'memory-clear'
    },
    {
        type: MEMORY,
        content: 'MR',
        perform: 'memory-recall'
    },
    {
        type: MEMORY,
        content: 'M-',
        perform: 'memory-minus'
    },
    {
        type: MEMORY,
        content: 'M+',
        perform: 'memory-plus'
    }
];