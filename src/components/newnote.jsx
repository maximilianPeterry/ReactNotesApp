import React from 'react';
import './newnote.css';

class NewNote extends React.Component {
    render() {
        return (
            <div id='newContainer'>
                <div id='newTitle'>
                    <input id='titleinput' type='text' placeholder='Title...'></input>
                </div>
                <div id='newNoteField'>
                    <input id='noteinput' type='text' placeholder='Type your note...'></input>
                </div>
            </div>
        )
    }
}

export default NewNote;