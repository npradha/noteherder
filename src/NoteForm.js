import React, { Component } from 'react'

import './NoteForm.css'

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: this.blankNote(),
    }
  }
  
  componentDidUpdate = () => {
    // Get the ID from the URL
    const newId = this.props.match.params.id || ''

    // Get the previous ID from state
    const oldId = this.state.note.id || ''

    // Continue only if they're different
    if (newId !== oldId.toString()) {
      // Find the note with the new ID
      const i = this.props.notes.findIndex(currentNote => currentNote.id.toString() === newId.toString())
      const note = this.props.notes[i] || this.blankNote()

      // Update state with that note
      if (note.id !== this.state.note.id) {
        this.setState({ note })
      }
    }
  }

  // componentWillReceiveProps = (newProps) => {
  //   // Get the ID from the URL
  //   const newId = newProps.match.params.id || ''

  //   // Find the note with that ID
  //   const i = newProps.notes.findIndex(currentNote => currentNote.id.toString() === newId.toString())
  //   const note = newProps.notes[i] || this.blankNote()

  //   // Update state with that note
    
  //     this.setState({ note })
    
  // }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
      updatedAt: null,
    }
  }

  handleChanges = (ev) => {
    const note = {...this.state.note}
    note[ev.target.name] = ev.target.value
    this.props.saveNote(note)
    this.setState({ note })
  }

  render() {
    const { removeNote } = this.props

    return (
      <div className="NoteForm">
        <div className="form-actions">
          <button
            type="button"
            onClick={() => removeNote(this.state.note)}
          >
            <i className="far fa-trash-alt"></i>
          </button>
        </div>
        <form>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title your note"
              value={this.state.note.title}
              onChange={this.handleChanges}
            />
          </p>

          <textarea
            name="body"
            value={this.state.note.body}
            onChange={this.handleChanges}
          ></textarea>
        </form>
      </div>
    )
  }
}

export default NoteForm