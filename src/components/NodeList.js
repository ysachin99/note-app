import React from 'react'
import AddNote from './AddNote'
import Note from './Note'

const NodeList = ({ notes, handleAddnewNote, handleDeleteNote }) => {
  return (
    <div className='node-list'>
      {notes.map((note)=> (
      <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} />
      ))}
     <AddNote handleAddNewNote={handleAddnewNote} /> 
    </div>
  )
}

export default NodeList