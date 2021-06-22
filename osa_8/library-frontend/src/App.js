import React, { useEffect, useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import Login from './components/Login'
import Recommended from './components/RecommendedBooks'
import { useApolloClient } from '@apollo/client'

const App = () => {
  const [page, setPage] = useState('authors')
  const [token, setToken] = useState(null)
  const client = useApolloClient()



  const logout = () => {
    setToken(null)
    setPage('authors')
    localStorage.clear()
    client.resetStore()
  }
  
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td><button onClick={() => setPage('authors')}>authors</button></td>
            <td><button onClick={() => setPage('books')}>books</button></td>
            <td>
              <button 
                style={{ display: token ? 'block' : 'none' }} 
                onClick={() => setPage('recommended')}>
                recommended</button>
            </td>
            <td>
              <button
                style={{ display: token ? 'none' : 'block' }}
                onClick={() => setPage('login')}>
                login</button>
            </td>
            <td>
              <button 
                style={{ display: token ? 'block' : 'none' }} 
                onClick={() => setPage('add')}>
                add book
              </button>
            </td>
            <td>
              <button 
                style={{ display: token ? 'block' : 'none' }}
                onClick={logout}>
                Logout
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <Authors
        show={page === 'authors'} 
        token={token}
      />

      <Books
        show={page === 'books'}
      />

      <NewBook
        show={page === 'add'}
      />
      
      <Login
        show={page === 'login'}
        setToken={setToken}
        setPage={setPage}
      />
      
      <Recommended 
      show={page === 'recommended'}
      />
    </div>
  )
}

export default App