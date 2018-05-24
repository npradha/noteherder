import React, { Component } from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
import firebase from './firebase'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      currentNote: this.blankNote(),
      notes: [],
    }
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }

  resetCurrentNote = () => {
    this.setCurrentNote(this.blankNote())
  }

  saveNote = (note) => {
    const notes = [...this.state.notes]

    if(note.id){
        const i = notes.findIndex(currentNote => currentNote.id === note.id)
        notes[i] = note
    }else{
        note.id = Date.now()
        notes.push(note)
    }

    this.setState({ notes, currentNote: note })
   
  }
    
  deleteNote = (note) => {
      const notes = [...this.state.notes]
      const i = notes.findIndex(currentNote => currentNote.id === note.id)
      notes.splice(i,1)
      this.setState({ notes })
      this.setCurrentNote(this.blankNote())
    }
    
    componentWillMount(){
        localStorage.getItem('notes') && this.setState({
            notes: JSON.parse(localStorage.getItem('notes'))
        })
    } 

    // componentWillUpdate(nextProps, nextState){
    //     localStorage.setItem('notes', JSON.stringify(nextState.notes))
    // }
    componentDidUpdate() {
        const notesString = JSON.stringify(this.state.notes)
        localStorage.setItem('notes', notesString)
      }


  render() {
    return (
      <div
        className="Main"
        style={style}
      >
        <Sidebar resetCurrentNote={this.resetCurrentNote} />
        <NoteList
          notes={this.state.notes}
          setCurrentNote={this.setCurrentNote}
          
        />
        <NoteForm
          currentNote={this.state.currentNote}
          saveNote={this.saveNote}
          deleteNote={this.deleteNote}
        />
      </div>
    )
  }
}

const style = {
  display: 'flex',
  height: '100vh',
  alignItems: 'stretch',
}

export default Main