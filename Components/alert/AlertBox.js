import React from 'react';
import './AlertBox.css';
import Button from '../button/Button';

export default function AlertBox(props){

    let alertType = 'primary';
    alertType = props.alert.state ? 'alert-box' : 'no-display'; //show or hide alert box

    const alertStyle = props.alert.type? `alert ${props.alert.type}`: 'alert primary'

    return(
        <div className={alertStyle}>
            <div>
                {props.alert.message}
            </div>
           <Button
            children="OK"
            backgroundColor='grey'
            handleClick={props.handleClick}
           />
        </div>
    )
}