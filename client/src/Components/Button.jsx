const Button = (props) => {
    console.log(props)
    return (
        <>
        <button>{props.text}</button>
        <ul>
            <li>{props.list}</li>
            <li>{props.list}</li>
            <li>{props.list}</li>
        </ul>
        </>
    )
}

export default Button