import React from 'react';
import './Button.css';

export default function Button ({
    width,
    backgroundColor, 
    color,
    border,
    font,
    fontSize,
    fontWeight,
    borderRadius,
    margin,
    padding,
    children,
    handleClick
}){

    const options = {
        width,
        backgroundColor,
        color,
        border,
        fontFamily: font,
        fontSize,
        fontWeight,
        borderRadius,
        margin,
        padding
    };

    return(
        <button 
            style={options}
            onClick={handleClick}
            className='button'>
                {children? children: 'Save'}
        </button>
    )
}