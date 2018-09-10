import React from 'react';
import CASIO_LOGO from '../../assets/images/casio_logo.svg';

const CalculatorHeader = () =>
    <header>
        <h2 className="header-logo">
            <img className="logo" src={CASIO_LOGO} alt="casio logo" />
        </h2>
        <div className="solar-power-wrapper">
            <div className="solar-power">
                {/* <div className="solar-power-inner">
                </div> */}
            </div>
            <span className="text-uppercase solar-power-content">two way power</span>
        </div>
    </header>

export default CalculatorHeader;