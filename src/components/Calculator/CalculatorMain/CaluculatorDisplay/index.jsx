import React from 'react';

import './calculator-display.css';

const CalculatorHeader = ({ showMemorySign, currentDisplayValue }) =>
    <div className="display-container">
        <div className="display-wrapper">
            {
                true &&
                <div className="memory-sign">
                    <span className="text-uppercase">m</span>
                    <span className="separator">-</span>
                    <span className="text-uppercase">e</span>
                </div>
            }
            <span className="display-digits">{currentDisplayValue}</span>
        </div>
    </div>

export default CalculatorHeader;