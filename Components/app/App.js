import React from 'react';
import Split from 'react-split';
import {functions} from '../../functions'
import './App.css';
import Sidebar from '../sidebar/Sidebar';
import Editor from '../editor/Editor';
import AlertBox from '../alert/AlertBox';
import { nanoid } from 'nanoid';

export default function App(){
    const placeholderText = 'Type new note...';
    const placeholderTitle = 'Title';
    const [alert, setAlert] = React.useState({});
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
    const [currentNoteId, setCurrentNoteId] = React.useState((notes[0] && notes[0].id) || '');
    
    
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

        if(markdown.markdown === placeholderText){
            setAlert({
                state: true, 
                type: 'warning', 
                message: "Note cannot be blank."})
        }

        else{ 
            setNotes(prev => [newNote, ...prev]);
        }
        console.log(notes)
    }

    function closeAlertBox(){
        setAlert({state: false});
    }


    return (
        <div className='app'>
                <AlertBox
                    alert={alert}
                    handleClick={closeAlertBox}
                />
            <Split
                sizes={[25, 75]}
                gutterSize={8}
                minSize={300}
                className='flex'>

                    <Sidebar
                        notes={notes}
                    />
                    <Editor
                        markdown={markdown}
                        addNewNote={addNewNote}
                        handleTitleChange={handleTitleChange}
                        handleNoteChange={handleNoteChange}
                    />
            </Split>
        </div>
    )
}