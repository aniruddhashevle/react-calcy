import React, { Component } from 'react';
import CaluculatorDisplay from './CaluculatorDisplay';
import CaluculatorKeypad from './CaluculatorKeypad';
import { CALCULATOR_KEYS } from '../../../config/calculator-keys';
import { keyOperations } from '../../../utility/key-operations';

class CalculatorMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDisplayValue: '',
            showMemorySign: false,
            isCalcySwitchedOff: true,
            prevValue: '',
            currentOperation: ''
        }
    }

    onKeyPress = (keyData) => {
        if (keyData.perform) this.setState({ currentOperation: keyData.perform });
        let state = keyOperations(keyData, this.state);
        this.setState({ ...state });
    }

    render() {
        let {
            currentDisplayValue,
            showMemorySign
        } = this.state;
        return (
            <main>
                <CaluculatorDisplay
                    currentDisplayValue={currentDisplayValue}
                    showMemorySign={showMemorySign}
                />
                <CaluculatorKeypad
                    CalcularotKeys={CALCULATOR_KEYS}
                    onKeyPress={this.onKeyPress}
                    currentDisplayValue={currentDisplayValue}
                />
            </main>
        )
    }
}


export default CalculatorMain;