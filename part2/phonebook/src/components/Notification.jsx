const Notification = ({ message }) => {
    if (message === null || message === '') {
        return null
    }

    let style = {
        color: message.isError ? 'red' : 'green',
        background: "lightgrey",
        fontSize: "20px",
        borderStyle: "solid",
        borderRadius: "5px",
        padding: "10px",
        marginBottom: "10px"
    }

    return (
        <div className="notif" style={style}>
            {message.text}
        </div>
    )
}

export default Notification