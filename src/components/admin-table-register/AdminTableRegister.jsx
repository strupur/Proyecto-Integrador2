import './AdminTableRegister.css';
import AdminRowRegister from '../admin-row-register/AdminRowRegister';

export default function AdminTableRegister({ products, deleteProduct, handleEditProduct }) {
  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>
            Imagen
          </th>
          <th>
            Nombre Completo
          </th>
          <th>
            Correo Electronico
          </th>
          <th>
            Contraseña
          </th>
          <th>
            Repetir Contraseña
          </th>
          <th>
            Fecha de Nacimiento
          </th>
          <th>
            País
          </th>
          <th>
            Observacíon
          </th>
          <th>
            Accíon
          </th>
        </tr>
      </thead>
      <tbody>
        {
          products.map(prod => {

            return <AdminRowRegister key={prod.id}
              producto={prod}
              deleteProduct={deleteProduct}
              handleEditProduct={handleEditProduct}
            />

          })
        }
      </tbody>

    </table>
  )
}