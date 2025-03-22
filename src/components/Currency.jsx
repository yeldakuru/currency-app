import React from 'react'
import '../css/currency.css';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
function Currency() {
    return (
        <div className='currency-div'>
            <div className='title'>
                <h3>CURRENCY APP</h3>
            </div>
            <div style={{ marginTop: '25px' }}>
                <input type="number" className='amount' />
                <select className="from-currency-option">
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TL</option>

                </select>
                <FaRegArrowAltCircleRight style={{ fontSize: '25px', color: "white", marginRight: "10px" }} />
                <select className='to-currency-option'>
                    <option>TL</option>
                    <option>USD</option>
                    <option>EUR</option>

                </select>
                <input type="number" className='result' />
                <div className="button-container">
                    <button className='exchange-button'>Convert</button>
                </div>

            </div>

        </div>
    )
}

export default Currency