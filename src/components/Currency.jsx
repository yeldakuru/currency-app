import React from 'react'

function Currency() {
    return (
        <div className='currency-div'>
            <input type="number" className='amount' />
            <select className="from-currency-option">
                <option>USD</option>
                <option>EUR</option>
                <option>TL</option>

            </select>
            <select className='to-currency-option'>
                <option>TL</option>
                <option>USD</option>
                <option>EUR</option>

            </select>
            <input type="number" className='result' />
        </div>
    )
}

export default Currency