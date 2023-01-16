import React from 'react';
import './Tabs.css';

export default function Tab(props){

    const options = {
        active: {
            color: 'green',
            textTransform: 'uppercase',
            letterSpacing: '.2rem',
            transform: '0s'
        },

        inactive: {
            color: 'inherit',
            fontWeight: '400'
        }
    }

    return(
        <div className='tabs'>
            <div className='flex'> 
            <button
                style={props.isPreview? options.inactive : options.active}
                onClick={props.toggleWrite}
                className='btn-nude'
                >Write
            </button>
            <div className='divider'></div>
            <button 
                style={props.isPreview? options.active : options.inactive}
                onClick={props.togglePreview}
                className='btn-nude'>
                Preview
            </button>
            </div>
            <h2 style={{paddingRight: '1rem', color: 'grey'}}>Markdown Editor</h2>
        </div>
    )
}