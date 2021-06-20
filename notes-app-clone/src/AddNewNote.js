import React,{useState} from 'react'

const AddNewNote = ({newNoteValue}) => {

    const [newNote,setNewNote] = useState('')

    let totalWords = 10;

    const newNoteFuncValue = (e)=> {
        if(totalWords - e.target.value.length >= 0){
            setNewNote(e.target.value)
        }
    }

    const handleSubmit = () => {
        // console.log(newNote)
        newNoteValue(newNote)
        setNewNote('')
    }

    return (
        <div className='new'>
            <textarea col='5' row='8' value={newNote} onChange={newNoteFuncValue}></textarea>
            <footer>
                <p>{totalWords - newNote.length} words remaining</p>
                <button onClick={handleSubmit}>save</button>
            </footer>
        </div>
    )
}

export default AddNewNote
