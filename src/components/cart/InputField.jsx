function InputField(props) {
    const updateFieldValue = (event) => {
        props.onChange(props.title, event.target.value)
    }

    return (
        <div className="row">
            <div className="col">
                <span>{ props.title }</span>
            </div>
            <div className="col">
                <input type="text" placeholder={props.placeholder} onChange={updateFieldValue} />
            </div>
        </div>
    )
}

export default InputField