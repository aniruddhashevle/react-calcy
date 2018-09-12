import React from 'react';
import CalculatorHeader from './CalculatorHeader';
import CalculatorMain from './CalculatorMain';
import './calculator.css';

const Calculator = () =>
    <div className="calculator-container">
        <div className="calculator-wrapper">
            <CalculatorHeader />
            <CalculatorMain />
        </div>
    </div>

export default Calculator;