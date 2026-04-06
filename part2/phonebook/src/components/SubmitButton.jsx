const SubmitButton = ({text, onClick}) =>{
    return (
        <div>
            <button type="submit" onClick={onClick}>{text}</button>
        </div>
    )
}

export default SubmitButton;