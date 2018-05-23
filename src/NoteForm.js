import React from 'react'

import './NoteForm.css'
const NoteForm = ({ currentNote }) => {
  const handleChanges = (ev) => {
    currentNote[ev.target.name] = ev.target.value
  }
  return (
    <div className="NoteForm">
      <div className="form-actions">
        <button type="button">
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
      <form>
        <p>
          <input
            type="text"
            name="title"
            placeholder="Title your note"
            value={currentNote.title}
            onChange={handleChanges}
          />
        </p>
            
        <textarea 
          name="body" 
          value={currentNote.body}
        >
        </textarea>
      </form>
    </div>
  )
}

export default NoteForm