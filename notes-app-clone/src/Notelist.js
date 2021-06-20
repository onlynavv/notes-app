import React from 'react'
import Notes from './Notes'

const Notelist = ({notes,deleteFunc}) => {
    return (
        <div className='NotesContainer'>
            {notes.map((note)=>{
                return <Notes key={note.id} {...note} deleteFunc={deleteFunc} />
            })}
        </div>
    )
}

export default Notelist
