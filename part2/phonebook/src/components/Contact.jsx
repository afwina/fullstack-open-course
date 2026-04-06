const Contact = ({person, onDelete}) => {
    return (
        <div>
            {person.name} {person.number}
            <button onClick={onDelete}>delete</button>
        </div>
    )
}

export default Contact