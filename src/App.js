import React, { Component } from 'react'

import './App.css'
import {auth} from './firebase'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  constructor(){
    super()
    this.state = {
      uid: null,
    }
  }
  // state = {
  //   uid: null,
  // }

  componentWillMount(){
    const uid = localStorage.getItem('uid')
    if(uid){
      this.setState({uid})
    }
    auth.onAuthStateChanged(
    (user) => {
      if(user){
        this.handleAuth(user)
      }else{
        this.handleUnauth()
      }
    }
  )
  }

  handleAuth = (user) => {
    this.setState({uid: user.uid})
    localStorage.setItem('uid',user.uid)
  }
  handleUnauth = () => {
    this.setState({ uid: null })
    localStorage.removeItem('uid')
  }

  signOut = () =>{
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
            ? <Main 
              signOut={this.signOut} 
              uid={this.state.uid}
             />
            : <SignIn/>
        }

      </div>
    )
  }
}

export default App;