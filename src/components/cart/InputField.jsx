import { useCartContext } from '../../contexts/CartContext'

function InputField(props) {
    const cart = useCartContext()

    const updateFieldValue = (event) => {
        props.onChange(props.title, event.target.value)
    }

    return (
        <div className="row input-field">
            <div className="col">
                <span>{ props.title }</span>
            </div>
            <div className="col">
                <input type="text" placeholder={props.placeholder} onChange={updateFieldValue} defaultValue={cart.getCheckoutDetail(props.title)}/>
            </div>
        </div>
    )
}

export default InputField