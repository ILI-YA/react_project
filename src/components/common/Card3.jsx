import React from 'react'

export default function Card3({ row, col, flipped, matched, value }) {
    return <div className="card3" row={row} col={col} flipped={flipped} matched={matched} >
            <img className='view' src={value} alt='card' />
        </div>
}