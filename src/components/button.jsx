import React from 'react';

const Button = ({icon}) => {
    return (
        <button className='h-full flex items-center justify-center w-1/4 text-gray-400 '>
            {icon}
        </button>
    );
}

export default Button;
