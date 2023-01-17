import React from 'react';
import Split from 'react-split';
import {functions} from '../../functions'
import './App.css';
import Sidebar from '../sidebar/Sidebar';
import Editor from '../editor/Editor';
import AlertBox from '../alert/AlertBox';
import { nanoid } from 'nanoid';
import Button from '../button/Button';

export default function App(){
    const placeholderText = 'Type new note...';
    const placeholderTitle = 'Title';
    const [alert, setAlert] = React.useState({
        state: false,
        type: null,
        message: null
    });
    const [markdown, setMarkdown] = React.useState(
        {
            markdown: placeholderText,
            markdownPreview: placeholderText,
            noteTitle: placeholderTitle,
            noteTitlePreview: placeholderTitle,
            dateCreated: {
                date: null,
                time: {
                    hours: null,
                    minutes: null,
                    ampm: null
                }
            }
        }
    );
    const [notes, setNotes] = React.useState([]);
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ''
    );
    
    
    function handleNoteChange (event){
        const contentEditableText = event.target.value;
        setMarkdown(prev => {
            return {
            ...prev,
            markdown: contentEditableText,
            markdownPreview: functions.filterText(contentEditableText)
            }
        });
        console.log(markdown)
    }

    function handleTitleChange(event){
        const contentEditableText = event.target.value;
            setMarkdown(prev => {
                return{
                ...prev,
                noteTitle: contentEditableText,
                noteTitlePreview: functions.filterText(contentEditableText)
                }
            });

            console.log(markdown)
    }

    function addNewNote(){  
        if(markdown.markdown === placeholderText && markdown.noteTitle === placeholderTitle){
            setAlert(prev => { 
                return { 
                ...prev,
                state: true, 
                type: 'warning', 
                message: "Note cannot be blank."
                }
            }
        )
            return
        }

        else{ 
            setMarkdown(prev => {
                return{
                ...prev,
                dateCreated: functions.getDate()
                }
            });
    
            const newNote = {
                id: nanoid(),
                body: markdown
            }

            setNotes(prev => [newNote, ...prev]);
            setCurrentNoteId(newNote.id)
        }
        console.log(notes)
    }

    function closeAlertBox(){
        setAlert(prev => {
            return{ ...prev, state: false}
        });
    }


    return (
        <div className='app'>
            { alert.state &&
                <AlertBox
                alert={alert}
                handleClick={closeAlertBox}
                />
            }

            {notes.length !== 0? 
            <Split
                sizes={[25, 75]}
                gutterSize={8}
                minSize={300}
                className='flex'>

                    <Sidebar
                        notes={notes}
                        currentNoteId={currentNoteId}
                    />
                    <Editor
                        markdown={markdown}
                        addNewNote={addNewNote}
                        handleTitleChange={handleTitleChange}
                        handleNoteChange={handleNoteChange}
                    />
            </Split>:

            <div className='no-notes'>
                <h1>
                    You have no notes
                </h1>
               <Button
                    children='Create one now'
                    width='fit-content'
                    fontSize='1rem'
                    backgroundColor='#1c2a5a'
                    padding='1rem 2rem'
               />
            </div>
}
        </div>
    )
}