import React from 'react';
import './AlertBox.css';
import Button from '../button/Button';

export default function AlertBox(props){
    const {state, type, message} = props.alert;
    let messageType;
    switch (type){
        case 'danger':
            messageType = 'Error';
            break;
        case 'warning':
            messageType = 'Warning';
            break;
        case 'success':
            messageType = 'Success';
            break;
        default:
            messageType = 'Info'
    }

    return(
        <div
            className={type? `alert ${type}` : 'alert info'}
            >
            {/* className={state? `show alert ${type? type: 'primary'}`: 'alert hide'}> */}
            <div>
                <strong>{messageType}!</strong> {message? message : 'Something went wrong...'}
            </div>
           <Button
            children="&#9587;"
            backgroundColor='inherit'
            fontWeight='bold'
            color='inherit'
            border='none'
            margin='0 0 0 1rem'
            handleClick={props.handleClick}
           />
        </div>
    )
}