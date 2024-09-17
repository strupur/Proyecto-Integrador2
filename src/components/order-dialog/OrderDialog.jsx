
import { useOrder } from '../../context/OrderContext';
import OrderItem from '../order-item/OrderItem';
import './OrderDialog.css';

export default function OrderDialog() {

  const { order, toggleModal, setToggleModal, total } = useOrder()

  if (!toggleModal) return;

  return (
    <div className='modal-overlay' onClick={() => setToggleModal(!toggleModal)}>

      <div className='modal-content' onClick={(e) => e.stopPropagation()}>

        <div className='modal-header'>Titulo del Modal</div>

        <div className='modal-body'>

          <ul className='order-list'>
            {
              order.map((item) => (
                <OrderItem key={item.id} item={item} />

              ))
            }
          </ul>

          <div className='list-total'>
            $ {total}
          </div>
        </div>

        <div className='modal-footer'></div>
        <button onClick={() => setToggleModal(!toggleModal)}>
          Cerrar
        </button>

        <button className='btn'>
          finalizar compra
        </button>
      </div>
    </div>
  )
}