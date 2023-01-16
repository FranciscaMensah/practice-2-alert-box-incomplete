import React from 'react';
import './Sidebar.css';
// import {IoAddCircle} from 'react-icons/io5';

export default function Sidebar(props){

    const notes = props.notes.map((note)=>{
        return <li>{note.body.markdownPreview}</li>
    })

    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <h1>Notes</h1>
                {/* <IoAddCircle
                    color='#1c2a5a'
                    size='38'/> */}
            </div>
            <div className='note-banner'>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <ul className='notes'>
                {notes}
            </ul>
        </div>
    )
}