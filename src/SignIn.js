import React from 'react'

const SignIn = ({ handleAuth }) => {
  return (
    <div className="SignIn">
      <button
        onClick ={ handleAuth}
      >Sign In</button>
    </div>
  )
}

export default SignIn