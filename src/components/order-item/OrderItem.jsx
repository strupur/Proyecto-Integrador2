import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './OrderItem.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default function OrderItem( {item} ) {
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
            <FontAwesomeIcon icon={faTrash} />
        </div>
    </li>
  )
}
