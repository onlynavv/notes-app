import React from 'react'

const Notes = ({id,text,date,deleteFunc,editFunc}) => {
    return (
        <div className='notes'>
            <p>{text}</p>
            <footer>
                <p>{date}</p>
                <button onClick={()=>deleteFunc(id)} className='delete-btn'>delete</button>
                <button onClick={()=>editFunc(id)} className='edit-btn'>Edit</button>
            </footer>
        </div>
    )
}

export default Notes
