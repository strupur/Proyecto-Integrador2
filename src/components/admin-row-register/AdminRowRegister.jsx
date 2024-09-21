import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AdminRowRegister.css';
import {  faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function AdminRowRegister({ producto, deleteProduct, handleEditProduct }) {
  return (
    <tr className="admin-table-row">
      <td className="image">
        <img src={producto.image} alt={producto.name} />
      </td>

      <td className="name">
        {producto.name}
      </td>

      <td className="email">
        {producto.email}
      </td>

      <td className="password">
        {producto.password}
      </td>

      <td className="repeatpass">
        {producto.repeatpass}
      </td>

      <td className="date">
        {producto.createdAt}
      </td>

      <td className="category">
        {producto.category}
      </td>

      <td className="description">

        <div className="description-container">
          {producto.description}
        </div>

      </td>

      {/* <td className="price">
        ${producto.price}
      </td> */}

      {/* <td className="category">
        {producto.category}
      </td> */}

      

      <td className="actions">
        <div className="actions-container">

          <button className="btn" onClick={() => handleEditProduct(producto)}>

          <FontAwesomeIcon className='btn' icon={faPencil}></FontAwesomeIcon>

          </button>


          <button className="btn btn-danger" onClick={() => deleteProduct(producto.id)}>

          <FontAwesomeIcon className='btn-danger' icon={faTrash }></FontAwesomeIcon>

          </button>

        </div>
      </td>


    </tr>
  )
}