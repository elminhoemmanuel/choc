import React from 'react'

const PriBtnAlt = ({text, clicked}) => {
    return (
        <button
        onClick={clicked}
            className="flex justify-center border border-green-700 hover:border-green-900 bg-transaprent hover:bg-green-900 text-white p-3 rounded w-full focus:outline-none"
        >
            {text}
        </button>
    )
}

export default PriBtnAlt
