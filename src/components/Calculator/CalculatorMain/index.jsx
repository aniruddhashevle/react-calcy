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
            prevValue: '',
            currentOperation: null,
            prePerform: '',
            currentType: '',
            showMemorySign: false,
            isCalcySwitchedOff: true,
            isSamePerform: false
        }
    }

    onKeyPress = async (keyData) => {
        let {
            currentOperation,
            currentType
        } = this.state,
            {
                perform,
                type
            } = keyData;
        debugger;
        //check for if user clicks on diff arithmetic keys twice
        if (perform && currentOperation && currentOperation.perform && perform !== currentOperation.perform && type === currentType) await this.setState({ isSamePerform: true, currentType: type });
        else await this.setState({ isSamePerform: false, currentType: type });
        
        if (perform) await this.setState({ currentOperation: keyData });
        
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