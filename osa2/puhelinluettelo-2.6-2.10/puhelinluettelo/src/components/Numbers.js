import React from 'react'

const Numbers = (props) => {
    const { persons, search, showAll } = props

    const contactsToShow = showAll
        ? persons
        : persons.filter(person => person.name.includes(search))

    return (
        <>
            {contactsToShow.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
        </>
    )
}

export default Numbers