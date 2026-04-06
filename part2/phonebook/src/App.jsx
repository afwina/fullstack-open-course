import {useState, useEffect} from 'react'
import Input from "./components/Input.jsx";
import Numbers from "./components/Numbers.jsx";
import PersonForm from "./components/PersonForm.jsx";
import axios from 'axios'

const App = () => {
    const [persons, setPersons] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(resp => {
                setPersons(resp.data)
            })
    },[])

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