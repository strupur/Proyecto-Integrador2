import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AdminTable from "../../components/admin-table/AdminTable";

import './AdminProduct.css';
import Swal from "sweetalert2";

// const URL = "https://66da9325f47a05d55be52fee.mockapi.io/api/v1";

const URL2 = import.meta.env.VITE_LOCAL_SERVER;


export default function AdminProduct() {
  const [products, setProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null)

  const { register, setValue, reset, handleSubmit, formState: { errors, isValid } } = useForm();

  useEffect(() => {
    getProducts();
  }, [])

  useEffect(() => {

    if (selectedProduct) {

      setValue("name", selectedProduct.name),
        setValue("price", selectedProduct.price),
        setValue("description", selectedProduct.description),
        setValue("image", selectedProduct.image),
        setValue("category", selectedProduct.category),
        setValue("createdAt", selectedProduct.createdAt)

    } else {
      reset()
    }

  }, [selectedProduct, setValue, reset])


  async function getProducts() {

    try {

      const response = await axios.get(`${URL2}/products`);

      console.log(response.data);

      setProducts(response.data.products)

    } catch (error) {
      console.log(error);

    }

  }
  // !getProducts();

  function deleteProduct(identificador) {

    Swal.fire({
      title: "Borrar producto",
      text: "Realmente desea borrar este producto",
      icon: "warning",
      reverseButtons: true,
      showCancelButton: true,
    }).then(async (result) => {
      try {
        if (result.isConfirmed) {
          const response = await axios.delete(`${URL2}/products/${identificador}`);

          console.log(response.data);

          getProducts();
        }
      } catch (error) {
        console.log(error)

        Swal.fire({
          title: "Error al borrar",
          text: "El producto no fue borrado",
          icon: "error"
        })
      }
    })

  }

  async function onProductSubmit(producto) {
    console.log(producto)
    try {

      if (selectedProduct) {

        const { id } = selectedProduct;
        const response = await axios.put(`${URL2}/products/${id}`, producto);
        console.log(response.data)
        Swal.fire({
          title: "Actualización correcta",
          text: "El producto fue actualizado correctamente",
          icon: "success",
          timer: 1500
        })

        setSelectedProduct(null)


      } else {

        const response = await axios.post(`${URL2}/products`, producto)
        console.log(response.data);


      }

      getProducts();

    } catch (error) {
      console.log(error)

    }

  }


  function handleEditProduct(producto) {

    console.log("Producto a editar", producto);
    setSelectedProduct(producto);

  }

  return (
    <>
      <div className="admin-container-adminProduct">

        <div className="form-container">
          <h1>AdminProduct</h1>
          <form className="admin-form" onSubmit={handleSubmit(onProductSubmit)}>

            <div className="input-group-adminProduct">
              <label htmlFor="name">Nombre producto</label>

              <input type="text" id="name"
                {...register("name", { required: true, minLength: 3 })
                } />

              {errors.name?.type === "required" && <div className="input-error">El campo es requerido</div>}

              {errors.name?.type === "minLength" && <div className="input-error">Mínimo de carácteres es 3</div>}

            </div>

            <div className="input-group-adminProduct">
              Precio
              <input type="number" {...register("price", { required: true })} />

              {errors.price && <div className="input-error">El campo price es requerido</div>}
            </div>

            <div className="input-group-adminProduct">
              <label htmlFor="description">Descripción</label>
              <textarea {...register("description", { required: true })} rows={5}></textarea>
            </div>

            <div className="input-group-adminProduct">
              <label htmlFor="">Categoría</label>
              <select {...register("category", { required: true })}>\
                <option value="Instrumento-percusíon">Intrumento de percusíon</option>
                <option value="Instrumento-cuerdas">Instrumento de cuerdas</option>
                <option value="Intrumento-electronico">Intrumento electronico</option>
                <option value="Intrumento-viento">Intrumento de viento</option>
              </select>
            </div>

            <div className="input-group-adminProduct">
              <label htmlFor="createdAt">Fecha de ingreso</label>
              <input type="date" {...register("createdAt", { required: true })} />
            </div>

            <div className="input-group-adminProduct">
              <label htmlFor="">Imagen</label>
              <input type="url" {...register("image", { required: true })} />
            </div>

            <button className={`btn ${selectedProduct && 'btn-success'}`}
              type="submit"
              disabled={!isValid}  >

              {
                selectedProduct ? "Editar" : "Crear"
              }

            </button>

          </form>
        </div>

        <div className="table-container">

          <AdminTable products={products}
            deleteProduct={deleteProduct}
            handleEditProduct={handleEditProduct}
          />

        </div>
      </div>

    </>
  )
}

