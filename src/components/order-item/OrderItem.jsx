import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './OrderItem.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useOrder } from '../../context/OrderContext'

export default function OrderItem({ item }) {

    const { removeProduct, changeItemQuantity } = useOrder()

    return (

        <li className='order-item'>
            <div className='item-imagen'>
                <img src={item.image} alt="" />
            </div>
            <div className='item-info'>
                {item.name}
            </div>
            <div className='item-price'>
                $ {item.price}
            </div>
            <div className='item-subtotal'>
                $ {item.price * item.quantity}
            </div>
            <div className="item-count">
                <input
                    className='item-input'
                    type="number"
                    defaultValue={item.quantity}
                    min="1"
                    onChange={(evt) => changeItemQuantity(item.id, evt.target.valueAsNumber)} />

            </div>
            <div className="item-actions">
                <button className='btn-icon btn-danger' onClick={() => removeProduct(item.id)}>

                    <FontAwesomeIcon icon={faTrash}/>
                </button>
            </div>
        </li>
    )
}
