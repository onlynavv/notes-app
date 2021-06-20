import React,{useState} from 'react'
import Notelist from './Notelist'

function App() {

  const [notes,setNotes] = useState([
    {
      id:1,
      text:'this is my first note',
      date: '20/06/2021'
    },
    {
      id:2,
      text:'this is my second note',
      date: '20/06/2021'
    },
    {
      id:3,
      text:'this is my third note',
      date: '20/06/2021'
    }
  ])

  return (
    <div className="App">
      <Notelist notes={notes}  />
    </div>
  );
}

export default App;
