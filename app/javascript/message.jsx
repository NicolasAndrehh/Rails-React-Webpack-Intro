const Message = (props) => {
    return (
        <div className="message">
            <div className="message__title">
                <h3>{props.title}</h3>
            </div>
            <div className="message__body">
                <p>{props.body}Test</p>
            </div>
        </div>
    )
}

export default Message