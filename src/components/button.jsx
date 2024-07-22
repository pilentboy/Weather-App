import React from 'react';

const Button = ({icon,title,ariaLabel}) => {
    return (
        <button className='h-full flex items-center justify-center w-1/4 text-gray-400 ' title={title} aria-label={ariaLabel}>
            {icon}
        </button>
    );
}

export default Button;
