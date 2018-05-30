import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import firebase from './firebase'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'


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
        firebase.syncState(`notes/${this.props.uid}`, {
            context: this,
            state: 'notes',
            asArray: true,

        })
    } 


  render() {
    const formProps = {
      currentNote: this.state.currentNote,
      saveNote: this.saveNote,
      deleteNote: this.deleteNote,
    }
    return (
      <div
        className="Main"
        style={style}
      >
        <Sidebar 
            resetCurrentNote={this.resetCurrentNote} 
            signOut={this.props.signOut}
        />
        <NoteList
          notes={this.state.notes}
          setCurrentNote={this.setCurrentNote}
          
        />

        <Switch>
          <Route 
            path="/notes/:id"
            render = {navProps => (
                <NoteForm
                {...formProps}
                {...navProps}
              />
            )}
          />

         <Route 
            render = {navProps => (
                <NoteForm
                {...formProps}
                {...navProps}
              />
            )}
          />
        </Switch>
      
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