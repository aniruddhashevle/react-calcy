import React from 'react';
import CalculatorKeys from './CalculatorKeys';
import { CALCULATOR_KEYS } from '../../../../config/calculator-keys';

import './calculator-keypad.css';

const CalculatorKeypad = () =>
    <div className="keypad-wrapper">
        <span className="text-uppercase model-name">sl-300sv</span>
        <CalculatorKeys CalcularotKeys={CALCULATOR_KEYS} />
    </div>

export default CalculatorKeypad;