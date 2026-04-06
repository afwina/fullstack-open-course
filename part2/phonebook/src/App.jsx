import {useState, useEffect} from 'react'
import Input from "./components/Input.jsx";
import Numbers from "./components/Numbers.jsx";
import PersonForm from "./components/PersonForm.jsx";
import personsService from './services/persons.js'

const App = () => {
    const [persons, setPersons] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        personsService.getAll()
            .then(data => {
                setPersons(data)
            })
    },[])

    function addName(newName, newNumber) {
        let newPerson = {name: newName, number: newNumber}
        let dupePerson = persons.find(p => p.name === newName)

        if (dupePerson != null) {
            if (window.confirm(`${dupePerson.name} is already added to phonebook, replace the old number with a new one?`)) {
                personsService.updateNumber(dupePerson.id, {...dupePerson, number: newNumber})
                    .then(data => {
                        setPersons(persons.map(p => p.id === dupePerson.id ? data : p))
                    })
            }
            return
        }

        personsService.create(newPerson)
            .then(data => {
                setPersons(persons.concat(data))
            })
    }

    function deletePerson(id, name) {
        if (window.confirm(`Delete ${name}?`)){
            personsService.deletePerson(id)
                .then(()=>setPersons(persons.filter(p => p.id !==id)))
        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Input text={"filter shown with"} val={filter} onChange={setFilter}/>
            <h3>Add a new</h3>
            <PersonForm addName={addName}/>
            <Numbers persons={persons} filter={filter} onDelete={deletePerson}/>
        </div>
    )
}

export default App