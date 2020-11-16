import React from 'react'




export default function Card1({ row, col, flipped, matched, value }) {
    

    return <div className="card1" row={row} col={col} flipped={flipped} matched={matched} >
            <img className='view'  src={value} alt='card' />
        </div>
}

