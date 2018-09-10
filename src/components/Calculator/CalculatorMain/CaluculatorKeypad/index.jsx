import React from 'react';

import './calculator-keypad.css';

const CalculatorKeypad = ({ CalcularotKeys, onKeyPress }) =>
    <div className="keypad-wrapper">
        <span className="text-uppercase model-name">sl-300sv</span>
        <div className="keys-wrapper">
            {
                CalcularotKeys && CalcularotKeys.length > 0 &&
                CalcularotKeys.map((item, index) =>
                    <div key={index} className={(`key ${item.className || ''}`).trim()}>
                        <button
                            onClick={() => onKeyPress(item)}
                        >{item.content}</button>
                        {
                            item.content === 'AC' &&
                            <span className="text-uppercase on-text">on</span>
                        }
                    </div>
                )
            }
        </div>
    </div>

export default CalculatorKeypad;