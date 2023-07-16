import React, {useState} from 'react'

const AddNote = ({handleAddNewNote}) => {
const [addNote, setAddNote] = useState('')

const handleChange = (event) => {
    setAddNote(event.target.value)
}

const handleSaveClick = () => {
   handleAddNewNote(addNote)
}

  return (
    <div className='new note'>
     <textarea 
     rows='8' 
     cols='10' 
     placeholder='Type to add note...' 
     value={addNote }
     onChange={handleChange}
     ></textarea>
     <div className='note-footer'>
        <small>Date:</small>
        <button id='btn' onClick={handleSaveClick}>Save</button>
     </div>
    </div>
  )
}

export default AddNote