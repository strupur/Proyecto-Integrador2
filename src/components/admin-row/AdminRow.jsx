import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AdminRow.css';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function AdminRow({ producto, deleteProduct, handleEditProduct }) {
  return (
    <tr className="admin-table-row">
      <td className="image">
        <img src={producto.image} alt={producto.name} />
      </td>
      <td className="name">
        {producto.name}
      </td>
      <td className="description">

        <div className="description-container">
          {producto.description}
        </div>

      </td>
      <td className="price">
        ${producto.price}
      </td>
      <td className="category">
        {producto.category}
      </td>
      <td className="date">
        {producto.createdAt}
      </td>
      <td className="actions">
        <div className="actions-container">

          <button className="btn" onClick={() => handleEditProduct(producto)}>

            <FontAwesomeIcon className='btn' icon={faPencil}></FontAwesomeIcon>

          </button>


          <button className="btn btn-danger" onClick={() => deleteProduct(producto._id)}>

            <FontAwesomeIcon className='btn-danger' icon={faTrash}></FontAwesomeIcon>

          </button>

        </div>
      </td>


    </tr>
  )
}
