import Contact from "./Contact.jsx";

const Numbers = ({persons, filter, onDelete}) => {
    return (
        <>
            <h3>Numbers</h3>
            {persons.filter(p => p.name.startsWith(filter)).map((person) => (
                <Contact
                    person={person}
                    key={person.name}
                    onDelete={()=>onDelete(person.id, person.name)}
                />
            ))}
        </>
    )
}

export default Numbers;