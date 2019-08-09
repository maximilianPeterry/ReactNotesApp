import React from 'react';

function Title(props) {
    return (
        <div id='title'>
            {props.titlesArray.map(noteTitle => {
                return (<h1>{ noteTitle }</h1>)
            })}
        </div>
    )
}

export default Title;