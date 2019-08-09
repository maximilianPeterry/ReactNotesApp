import React from 'react';
import './newnote.css';

function NewNote(props) {
        return (
            <div id='noteJoin'>
                {props.notesObj.map(notePair => {
                return (
                <div>
                    <h1>{ notePair.title }</h1>
                    <h5>{ notePair.text }</h5>
                </div>)
            })}
            </div>
        )
    }

export default NewNote;