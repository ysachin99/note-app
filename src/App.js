import React, {useState} from 'react'
import { nanoid } from 'nanoid'
import NodeList from './components/NodeList'
import Search from './components/Search'

const App = () => {
  const [notes, setNotes]= useState([
    {
      id: nanoid(),
    text: "This is first note ",
    date: '19/02/2023',
    },
    {
    id: nanoid(),
  text: "This is my second note",
  date: '20/02/2023',
    },
   {
  id: nanoid(),
 text: "This is third note",
 date: '21/02/2023',
  },
])

const [searchText, setSearchText] = useState('')

const addNewNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote]
  setNotes(newNotes)
}

const deleteNote = (id) => {
  const newNotes = notes.filter((note)=>note.id !== id);
  setNotes(newNotes)
}

  return (
    <div className='app'>
      <h1>NOTES</h1>
      <Search handleSearch={setSearchText} />
      <NodeList 
      notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} 
      handleAddnewNote={addNewNote} 
      handleDeleteNote={deleteNote} />
    </div>
  )
}

export default App
