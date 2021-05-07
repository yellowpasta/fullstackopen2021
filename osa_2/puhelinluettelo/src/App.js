import React, { useState } from 'react'


const RenderPhonebook = ({persons}) => {
  return(
  <ul>
    {persons.map((person, i) => <RenderUserLi key={i} person={person}/>)}
  </ul>
  )
}

const RenderUserLi = ({person}) => <li>{person.name}</li>



const App = () => {
  const [ persons, setPersons] = useState([{ name: 'Arto Hellas' }]) 
  const [ newName, setNewName ] = useState('Add new name')

  const handleNewUser = (event) => {
    setNewName(event.target.value)
  }

  const addNewUser = (event) => {
    event.preventDefault()
    const newUser = {
      name: newName
    }
    setPersons(persons.concat(newUser))
    setNewName('Add new name')
  }

  const emptyBox = () => setNewName('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onClick={emptyBox} onChange={handleNewUser}/>
        </div>
        <div>
          <button type="submit" onClick={addNewUser}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <>
        <RenderPhonebook persons={persons}/>
        </>
    </div>
  )

}

export default App