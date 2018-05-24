import React, { Component } from 'react'

import './App.css'
import {auth} from './firebase'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  state = {
    uid: null,
  }

  componentWillMount(){
    auth.onAuthStateChanged(
    (user) => {
      if(user){
        this.handleAuth()
      }else{
        this.signOut()
      }
    }
  )
  }

  handleAuth = () => {
    this.setState({uid: 'npradhan'})
  }

  signOut = () =>{
    this.setState({uid: null})
    auth.signOut()
  }

  signedIn= () => {
    return this.state.uid
  }

  render() {
    return (
      <div className="App">
        {
          this.signedIn()
            ? <Main signOut={this.signOut} />
            : <SignIn/>
        }

      </div>
    )
  }
}

export default App;