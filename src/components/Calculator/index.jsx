import React, { Component } from 'react';
import CalculatorHeader from './CalculatorHeader';
import CalculatorMain from './CalculatorMain';

class Calculator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="calculator-container">
                <div className="calculator-wrapper">
                    <CalculatorHeader />
                    <CalculatorMain />
                </div>
            </div>
        )
    }
}

export default Calculator;