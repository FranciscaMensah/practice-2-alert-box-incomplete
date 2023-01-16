import React from 'react';
import './Preview.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Preview (props){
    const date = props.markdown.dateCreated.date;
    const {hours, minutes, ampm} = props.markdown.dateCreated.time;
    //Set default title to 1st 34 characters of note body when title is not provided
    const title = props.markdown.noteTitlePreview === 'Title' ?
     props.markdown.markdownPreview.substring(0, 50) :
     props.markdown.noteTitlePreview;

    return(
        <div className='preview'>
            <div className='preview-header'>
                {date !== null && 
                    <p className='date-and-time'>
                        {date} {hours}:{minutes} {ampm}
                    </p>
                }
                <p className='note-title'>{title}</p>
            </div>
            <div className='preview-body'>
                <ReactMarkdown
                    children={props.markdown.markdownPreview}
                    skipHtml={true}
                    remarkPlugins={[[remarkGfm, {singleTilde: false}]]}
                    className='preview-text'
                />
            </div>
        </div>
    )
}