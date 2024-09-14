
import { useOrder } from '../../context/OrderContext';
import './OrderDialog.css';

export default function OrderDialog({ showModal, setToggleModal }) {

  if (!showModal) return;
  const { order } = useOrder()

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>

        <div className='modal-header'>Titulo del Modal</div>

        <div className='modal-body'>

          <ul className='order-list'>
            {
              order.map(( item, index ) => <li className='order-item' key={index }>
                                {item}
                            </li>)
            }
            

          </ul>
        </div>

        <div className='modal-footer'></div>
        <button onClick={() => setToggleModal(!showModal)}>
          Cerrar
        </button>

        <button className='btn'>
          finalizar compra
        </button>
      </div>
    </div>
  )
}
