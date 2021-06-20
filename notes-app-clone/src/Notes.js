import React from 'react'

const Notes = ({id,text,date}) => {
    return (
        <div>
            <p>{text}</p>
            <footer>
                <p>{date}</p>
                <button>delete</button>
            </footer>
        </div>
    )
}

export default Notes
