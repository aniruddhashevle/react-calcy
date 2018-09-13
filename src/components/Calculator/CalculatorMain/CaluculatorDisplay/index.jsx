import React, { Fragment } from 'react';

import './calculator-display.css';

const CalculatorHeader = ({ showMemorySign, currentDisplayValue }) =>
    <div className="display-container">
        <div className="display-wrapper">
            {
                <div className={(`memory-sign ${showMemorySign ? 'show' : ''}`).trim()}>
                    {
                        <Fragment>
                            <span className="text-uppercase">m</span>
                            <span className="separator">-</span>
                            <span className="text-uppercase">e</span>
                        </Fragment>
                    }
                </div>
            }
            <span className="display-digits">{currentDisplayValue}</span>
        </div>
    </div>

export default CalculatorHeader;