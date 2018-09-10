import React from 'react';

const CalculatorKeys = ({ CalcularotKeys }) =>
    <div className="keys-wrapper">
        {
            CalcularotKeys && CalcularotKeys.length > 0 &&
            CalcularotKeys.map((item, index) =>
                <div className={(`key ${item.className || ''}`).trim()}>
                    <button>{item.content}</button>
                    {
                        item.content === 'AC' &&
                        <span className="text-uppercase on-text">on</span>
                    }
                </div>
            )
        }
    </div>

export default CalculatorKeys;