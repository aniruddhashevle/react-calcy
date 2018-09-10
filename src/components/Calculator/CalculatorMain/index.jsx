import React, { Component } from 'react';
import CaluculatorDisplay from './CaluculatorDisplay';
import CaluculatorKeypad from './CaluculatorKeypad';

class CalculatorMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDisplayValue: '',
            showMemorySign: false
        }
    }

    render() {
        const {
            currentDisplayValue
        } = this.state;
        return (
            <main>
                <CaluculatorDisplay currentDisplayValue={currentDisplayValue} />
                <CaluculatorKeypad currentDisplayValue={currentDisplayValue} />
            </main>
        )
    }
}


export default CalculatorMain;