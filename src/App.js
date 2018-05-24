import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  state = {
    uid: null,
  }

  handleAuth = () => {
    this.setState({uid: 'npradhan'})
  }

  signOut = () =>{
    this.setState({uid: null})
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
            : <SignIn handleAuth={this.handleAuth} />
        }

      </div>
    )
  }
}

export default App;