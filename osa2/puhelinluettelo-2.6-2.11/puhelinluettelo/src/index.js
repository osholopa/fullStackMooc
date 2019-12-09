import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'
import axios from 'axios'



const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [search, setSearch] = useState('')
    const [showAll, setShowAll] = useState(true)

    useEffect(() => {
      axios
        .get('http://localhost:3001/persons')
        .then(response => {
          setPersons(response.data)
        })

    }, [])

    const handleNameInput = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberInput = (event) => {
        setNewNumber(event.target.value)
    }

    const handleSearchInput = (event) => {
        setSearch(event.target.value)
        event.target.value === '' ? setShowAll(true) : setShowAll(false)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter search={search} handleSearchInput={handleSearchInput} />
            <h2>add a new</h2>
            <PersonForm
                newName={newName}
                newNumber={newNumber}
                setNewName={setNewName}
                setNewNumber={setNewNumber}
                handleNumberInput={handleNumberInput}
                handleNameInput={handleNameInput}
                persons={persons}
                setPersons={setPersons}
            />
            <h2>Numbers</h2>
            <Numbers persons={persons} search={search} showAll={showAll} />
        </div>
    )

}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)
