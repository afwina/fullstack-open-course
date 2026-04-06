const Input = ({text, val, onChange}) => {
    return (
        <div>
            {text} <input value={val} onChange={event => onChange(event.target.value)}/>
        </div>
    )
}

export default Input