import React from 'react';
import CASIO_LOGO from '../../assets/images/casio_logo.svg';

const CalculatorHeader = () =>
    <header>
        <h1>
            <img src={CASIO_LOGO} alt="casio logo" />
        </h1>
        <div className="solar-power-wrapper">
            <div className="solar-power">
                <div className="solar-power-inner">
                    {/* color: #2d1804; */}
                </div>
            </div>
            <span className="solar-power-content">two way power</span>
        </div>
    </header>

export default CalculatorHeader;