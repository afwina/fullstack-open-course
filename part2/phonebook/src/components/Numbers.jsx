import Contact from "./Contact.jsx";

const Numbers = ({persons, filter}) => {
    return (
        <>
            <h3>Numbers</h3>
            {persons.filter(p => p.name.startsWith(filter)).map((person) => (<Contact person={person} key={person.name}/>))}
        </>
    )
}

export default Numbers;