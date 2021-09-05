import React from 'react'

const PriBtn = ({text, clicked, btnType}) => {
    return (
        <button
        type={btnType}
        onClick={clicked}
            className="flex justify-center bg-green-700 hover:bg-green-900 text-white p-3 rounded w-full focus:outline-none"
        >
            {text}
        </button>
    )
}

export default PriBtn
