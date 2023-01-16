import React from 'react';
import './Editor.css';
import Tabs from '../tabs/Tabs';
import Write from '../write/Write';
import Preview from '../preview/Preview';
import Button from '../button/Button';

export default function Editor(props){
    const [isPreview, setIsPreview] = React.useState(false);

    function toggleWrite(){
        setIsPreview(() => false);
    }

    function togglePreview (event){
        setIsPreview(() => true);
    }

    return (
        <div className='editor'>
            <Tabs
                isPreview={isPreview}
                togglePreview={togglePreview}
                toggleWrite={toggleWrite}
            />
            {isPreview
            ?
            <Preview
                markdown={props.markdown}
                />
            :
            <Write
                markdown={props.markdown}
                handleTitleChange={props.handleTitleChange}
                handleNoteChange={props.handleNoteChange}
            />
            }
            <Button
                color='white'
                backgroundColor='green'
                font='Nunito Sans'
                children='Save Note'  
                handleClick={props.addNewNote}    
            />
        </div>
    )
}