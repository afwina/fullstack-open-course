import {useState} from 'react'
import Input from "./components/Input.jsx";
import SubmitButton from "./components/SubmitButton.jsx";
import Numbers from "./components/Numbers.jsx";
import PersonForm from "./components/PersonForm.jsx";

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])

    const [filter, setFilter] = useState('')

    function addName(newName, newNumber) {
        let newPerson = {name: newName, number: newNumber}
        if (persons.some(p => p.name === newName)) {
            alert(`${newName} is already added to phonebook`)
            return
        }
        setPersons(persons.concat(newPerson))
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Input text={"filter shown with"} val={filter} onChange={setFilter}/>
            <h3>Add a new</h3>
            <PersonForm addName={addName}/>
            <Numbers persons={persons} filter={filter}/>
        </div>
    )
}

export default App