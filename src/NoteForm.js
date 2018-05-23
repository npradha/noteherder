import React from 'react'

import './NoteForm.css'
const NoteForm = (props) => {
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
            value={props.currentNote.title}
          />
        </p>
            
        <textarea 
          name="body" 
          value={props.currentNote.body}
        >
        </textarea>
      </form>
    </div>
  )
}

export default NoteForm