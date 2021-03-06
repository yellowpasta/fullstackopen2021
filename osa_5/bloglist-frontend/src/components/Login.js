import React, { useState } from 'react'

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const login = (event) => {
    event.preventDefault()
    const user = {
      username,
      password
    }
    handleLogin(user)
  }

  return (
    <div>
      <h2>Log in to application</h2>
      <form onSubmit={login}>
        <div>
                    username
          <input
            id="username"
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)} />
        </div>
        <div>
                    password
          <input
            id="password"
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)} />
        </div>
        <button id="login-button" type="submit">Submit</button>
      </form>
    </div>
  )
}


export default LoginForm