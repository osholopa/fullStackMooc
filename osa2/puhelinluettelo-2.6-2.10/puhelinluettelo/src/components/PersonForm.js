import React from 'react'

const PersonForm = (props) => {
    const { persons, newName, newNumber, setNewName, setNewNumber, setPersons, handleNameInput, handleNumberInput } = props

    const addName = (event) => {
        event.preventDefault()
        let found = false
        persons.forEach((person) => {
            if (newName === person.name) {
                alert(`${newName} is already added to phonebook`)
                setNewName('')
                setNewNumber('')
                found = true
            }
        })

        if (found) return

        let nameObject = {
            name: newName,
            number: newNumber
        }
        setPersons(persons.concat(nameObject))
        setNewName('')
        setNewNumber('')
    }

    return (
        <>
            <form onSubmit={addName}>
                <div>
                    name: <input value={newName} onChange={handleNameInput} /><br />
                    number: <input value={newNumber} onChange={handleNumberInput} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default PersonForm