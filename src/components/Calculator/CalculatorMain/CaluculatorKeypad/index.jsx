import React from 'react';
import CalculatorKeys from './CalculatorKeys';
import { CALCULATOR_KEYS } from '../../../../config/calculator-keys';

import './calculator-keypad.css';

const CalculatorKeypad = () =>
    <div className="keypad-container">
        <div className="keypad-wrapper">
            {/* <span>for M & E</span> */}
            <CalculatorKeys CalcularotKeys={CALCULATOR_KEYS} />
        </div>
    </div>

export default CalculatorKeypad;