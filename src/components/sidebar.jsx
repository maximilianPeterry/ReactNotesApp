import React from 'react';

function Sidebar(props) {
    return (
        <div id='viewNoteContainer'>
            {props.notesArray.map(note => {
                return (<h1>{note}</h1>)
            })}
        </div>
    )
}
 
export default Sidebar;