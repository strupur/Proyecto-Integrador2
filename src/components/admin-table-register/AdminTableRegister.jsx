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
            Fecha de ingreso
          </th>
          <th>
            seccion de Pais
          </th>
          <th>
            Observacion
          </th>
          <th>
            Accion
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