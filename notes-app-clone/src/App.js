import React,{useState,useEffect} from 'react'
import Notelist from './Notelist'
import AddNewNote from './AddNewNote'
import SearchNote from './SearchNote'

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

  const newNoteValue = (newNote) => {
    const newValue = {id:new Date().getTime().toString(),text:newNote,date:new Date().toLocaleDateString()}
    setNotes([...notes,newValue])
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
      <Notelist notes={notes.filter((item)=>{
        return item.text.includes(searchTerm)
      })} deleteFunc={deleteFunc} />
      <AddNewNote newNoteValue={newNoteValue} />
    </div>
  );
}

export default App;
