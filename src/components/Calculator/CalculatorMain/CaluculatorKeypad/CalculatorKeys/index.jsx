import React from 'react';

const CalculatorKeys = ({ CalcularotKeys }) =>
    <div className="keys-container">
        <div className="keys-wrapper">
            {
                CalcularotKeys && CalcularotKeys.length > 0 &&
                CalcularotKeys.map((item, index) =>
                    <div className={(`key ${item.className || ''}`).trim()}>
                        <span>{item.content}</span>
                        {
                            item.content === 'AC' &&
                            <span>ON</span>
                        }
                    </div>
                )
            }
        </div>
    </div>

export default CalculatorKeys;