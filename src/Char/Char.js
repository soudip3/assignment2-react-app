import React from 'react'

const Char = (props) => {
    const charStyle = {
        display : 'inline-block',
        padding  : '16px',
        textAlign: 'center',
        margin: '16px',
        border : '1px solid black',
        cursor: 'pointer'
    }


    return (
        <div style={charStyle} onClick={props.delete}>
            {props.char}
        </div>
    )
}

export default Char