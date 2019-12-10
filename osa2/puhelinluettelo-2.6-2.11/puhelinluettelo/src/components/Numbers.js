import React from "react";
import personService from "../services/persons";

const Numbers = props => {
  const { persons, search, showAll, setPersons } = props;

  const contactsToShow = showAll
    ? persons
    : persons.filter(person => person.name.includes(search));

  const deletePerson = person => {
    const id = person.id;

    if (window.confirm(`Do you really want to delete ${person.name}?`)) {
      personService
        .remove(id)
        .then(returnedPerson => {
          setPersons(persons.filter(p => p.id !== id));
        })
        .catch(error => {
          console.log("failed to delete");
        });
    }
  };

  return (
    <>
      {contactsToShow.map(person => (
        <div key={person.name}>
          <p>
            {person.name} {person.number}
          </p>
          <button onClick={() => deletePerson(person)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default Numbers;
