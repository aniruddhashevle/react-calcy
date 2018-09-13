import {
    NUMBER,
    MEMORY,
    ARITHMETIC,
    SYSTEM
} from '../constants/calculator-keys-type';

export const CALCULATOR_KEYS = [
    {
        type: ARITHMETIC,
        content: '√',
        className: 'small col-span-3-to-1',
        perform: 'sqrt'
    },
    {
        type: SYSTEM,
        content: 'Off',
        className: 'small',
        perform: 'off'
    },
    {
        type: MEMORY,
        content: 'MC',
        perform: 'memory-clear'
    },
    {
        type: MEMORY,
        content: 'MR',
        perform: 'memory-stored'
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
    },
    {
        type: ARITHMETIC,
        content: '÷',
        perform: 'divide'
    },
    {
        type: ARITHMETIC,
        content: '%',
        perform: 'percentage'
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
        type: ARITHMETIC,
        content: 'X',
        perform: 'multiply'
    },
    {
        type: ARITHMETIC,
        content: '+/-',
        perform: 'signed'
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
        type: ARITHMETIC,
        content: '-',
        perform: 'subtract'
    },
    {
        type: SYSTEM,
        content: 'C',
        perform: 'clear',
        className: 'red'
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
        type: ARITHMETIC,
        content: '+',
        className: 'large row-span-2',
        perform: 'add'
    },
    {
        type: SYSTEM,
        content: 'AC',
        className: 'extra-cap red',
        perform: 'on'
    },
    {
        type: NUMBER,
        content: '0',
    },
    {
        type: NUMBER,
        content: '.',
    },
    {
        type: ARITHMETIC,
        content: '=',
        perform: 'equals'
    }
];