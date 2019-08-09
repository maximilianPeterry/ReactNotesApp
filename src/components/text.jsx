import React from 'react';

function Text(props) {
    return (
        <div id='text'>
            {props.textsArray.map(noteText => {
                    return (<h5>{ noteText }</h5>)
                })}
        </div>
    )
}

export default Text;