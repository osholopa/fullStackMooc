import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Numbers from './components/Numbers'


const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: "040-1234567" }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [search, setSearch] = useState('')
    const [showAll, setShowAll] = useState(true)

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