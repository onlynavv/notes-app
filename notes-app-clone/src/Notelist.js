import React from 'react'
import Notes from './Notes'

const Notelist = ({notes}) => {
    return (
        <div className='NotesContainer'>
            {notes.map((note)=>{
                return <Notes key={note.id} {...note} />
            })}
        </div>
    )
}

export default Notelist
