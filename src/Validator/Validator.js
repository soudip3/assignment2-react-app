import React from 'react'

const Text = (props) => {
    let valid = "Text is too Short"
    if(props.len > 5){
        valid = "Text is too Long"
    }
    return(
        <div>
            <p>{valid}</p>
        </div>
    )
}

export default Text;
