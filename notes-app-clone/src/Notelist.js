import React from 'react'
import Notes from './Notes'

const Notelist = ({notes,deleteFunc, editFunc}) => {
    return (
        <div className='notes-list'>
            {notes.map((note)=>{
                return <Notes key={note.id} {...note} deleteFunc={deleteFunc} editFunc={editFunc} />
            })}
        </div>
    )
}

export default Notelist
