function Message(props){
    const {message} = props

    console.log("MESSAGE PROPS ===>", props)

    return(
<p className="message">
{message}
</p>
    )
}

export default Message
