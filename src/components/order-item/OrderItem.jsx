import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './OrderItem.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useOrder } from '../../context/OrderContext'

export default function OrderItem( {item} ) {

    const { removeProduct } = useOrder()

  return (

    <li className='order-item'>
        <div className='item-imagen'>
            <img src={item.image} alt="" />
        </div>
        <div className='item-info'>
            {item.name}
        </div>
        <div className="item-count">
            {item.quantity}
        </div>
        <div className="item-actions">
            <FontAwesomeIcon icon={faTrash} 
                            onClick={() => removeProduct(item.id)} />
        </div>
    </li>
  )
}
