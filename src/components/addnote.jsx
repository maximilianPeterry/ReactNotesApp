import React from 'react';
import './addnote.css';

function AddNote(props) {

    return (
        <div>
            <div id='newContainer'>
                <div id='newTitle'>
                    <input id='titleinput' type='text' placeholder='Title...' onChange={(event) => props.setTitle(event)}></input>
                </div>
                <div id='newNoteField'>
                    <input id='noteinput' type='text' placeholder='Type your note...' onChange={(event) => props.setText(event)}></input>
                </div>
            </div>
            <div id='buttoncontainer'>
                <button onClick={(event) => props.clicked(event)}>Add Note</button>
            </div>
        </div>
    )
}

export default AddNote;