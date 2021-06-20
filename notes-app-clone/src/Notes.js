import React from 'react'

const Notes = ({id,text,date,deleteFunc}) => {
    return (
        <div>
            <p>{text}</p>
            <footer>
                <p>{date}</p>
                <button onClick={()=>deleteFunc(id)}>delete</button>
            </footer>
        </div>
    )
}

export default Notes
