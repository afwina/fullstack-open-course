import {useState} from "react";
import SubmitButton from "./SubmitButton.jsx";
import Input from "./Input.jsx";

const PersonForm = ({addName}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        addName(newName, newNumber)
    }

    return (
        <form>
            <Input text={"name: "} val={newName} onChange={setNewName}/>
            <Input text={"number: "} val={newNumber} onChange={setNewNumber}/>
            <SubmitButton text={"add"} onClick={handleSubmit}/>
        </form>
    )
}

export default PersonForm