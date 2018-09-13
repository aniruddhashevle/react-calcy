import React, { Component } from 'react';
import CaluculatorDisplay from './CaluculatorDisplay';
import CaluculatorKeypad from './CaluculatorKeypad';
import { CALCULATOR_KEYS } from '../../../config/calculator-keys';
import { keyOperations } from '../../../utility/key-operations';
import { SWITCH_OFF_TIME } from '../../../constants/system-limits';

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
            isSamePerform: false,
            memoryStore: '',
            isNewValue: false
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
            } = keyData,
            setStateObj = { currentType: type };

        //check for if user clicks on diff arithmetic keys twice
        if (perform && currentOperation && currentOperation.perform && type === currentType) setStateObj = { ...setStateObj, isSamePerform: true };
        else setStateObj = { ...setStateObj, isSamePerform: false };

        if (perform) setStateObj = { ...setStateObj, currentOperation: keyData };

        await this.setState({ ...setStateObj });

        //swtich the calcy off after SWITCH_OFF_TIME its set to 600000 ms
        if (perform === 'on') {
            setTimeout(async () => {
                let offObj = CALCULATOR_KEYS.find(item => item.perform === 'off');
                let state = keyOperations(offObj, this.state);
                await this.setState({ ...state });
            }, SWITCH_OFF_TIME);
        }

        let state = keyOperations(keyData, this.state);
        await this.setState({ ...state });
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