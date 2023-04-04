import Badge from 'react-bootstrap/Badge';
import { Cart4 } from 'react-bootstrap-icons';

function CartWidget(props) {
    return (
        <span className="cart">
            <Cart4/>
            <Badge bg="danger">3</Badge>
        </span>
    )
}

export default CartWidget
