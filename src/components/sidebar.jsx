import React from 'react';
import NewNote from './newnote';

function Sidebar(props) {
    return (
        <div id='sidebar'>
            <div id='existingNotes'>
                <NewNote delete={props.delete} notesObj={props.notesObj} />
            </div>
        </div>
    )
}
 
export default Sidebar;

// {props.titlesArray.map(noteTitle => {
//     return (<h1>{ noteTitle }</h1>)
// })}
// {props.textsArray.map(noteText => {
//     return (<h5>{ noteText }</h5>)
// })}