import React,{useState,useEffect} from 'react'
import Notelist from './Notelist'
import SearchNote from './SearchNote'
// import Alert from './Alert'

function App() {

  const [notes,setNotes] = useState([
    {
      id:1,
      text:'this is my first note',
      date: new Date().toLocaleDateString()
    },
    {
      id:2,
      text:'this is my second note',
      date: new Date().toLocaleDateString()
    },
    {
      id:3,
      text:'this is my third note',
      date: new Date().toLocaleDateString()
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [isEditing,setIsEditing] = useState(false)
  const [editId,setEditId] = useState(null)
  const [newNote,setNewNote] = useState('')


  const handleSubmit = (e) => {
        // console.log(newNote)
        e.preventDefault()
        newNoteValue(newNote)
        setNewNote('')
    }

  let totalWords = 200;

    const newNoteFuncValue = (e)=> {
        if(totalWords - e.target.value.length >= 0){
            setNewNote(e.target.value)
        }
    }

  const newNoteValue = (newNote) => {
    if(!notes){
      alert('no notes')
    }
    else if(notes && isEditing){
      setNotes(notes.map((note)=>{
          if(note.id === editId){
            return(
              {...note,text:newNote}
            )
          }
          return note
      }))
      setEditId(null)
      setIsEditing(false)
      setNewNote('')
    }
    else{
      const newValue = {id:new Date().getTime().toString(),text:newNote,date:new Date().toLocaleDateString()}
      setNotes([...notes,newValue])
    }
  }

  const deleteFunc = (id) => {
    setNotes(()=>{
      return(
        notes.filter((note)=>{
            return note.id !== id
        })
      )
    })
  }

  const editFunc = (id) => {
    const specificItem = notes.find((item)=>{
      console.log(id)
      return item.id === id
    })
    console.log(specificItem.text)
    setIsEditing(true)
    setEditId(id)
    setNewNote(specificItem.text)
  }

  useEffect(() => {
    const getItem = localStorage.getItem('list')
    if(getItem){
      setNotes(JSON.parse(localStorage.getItem('list')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(notes))
  }, [notes])


  return (
    <div className="App">
      <SearchNote setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <div className='notes-container'>
        <Notelist notes={notes.filter((item)=>{
          return item.text.includes(searchTerm)
        })} deleteFunc={deleteFunc} editFunc={editFunc} />
        
        <div className='new'>
              <textarea col='5' row='8' value={newNote} placeholder='Add Notes..' onChange={newNoteFuncValue}></textarea>
              <footer>
                  <p>{totalWords - newNote.length} words remaining</p>
                  <button onClick={handleSubmit} type='submit'>{isEditing ? 'edit' : 'save'}</button>
              </footer>
          </div>

      </div>

    </div>
  );
}

export default App;
