import React, { Component } from 'react';
import CaluculatorDisplay from './CaluculatorDisplay';
import CaluculatorKeypad from './CaluculatorKeypad';

class CalculatorMain extends Component {
    render() {
        return (
            <main>
                <CaluculatorDisplay />
                <CaluculatorKeypad />
            </main>
        )
    }
}


export default CalculatorMain;