import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useOrder } from '../../context/OrderContext';


const URL = import.meta.env.VITE_SERVER_URL;

export default function ProductDetail() {

    const { addProduct } = useOrder();
    
    const [product, setProduct] = useState();

    const { id } = useParams();

    useEffect(() => {
        getProduct();
    }, [])

    async function getProduct() {
        try{

            const response =  await axios.get(`${URL}/products/${id}`)
            setProduct(response.data);
            
            } catch (error) {

            alert("Error al obtener el producto")
            console.log(error);
            
        }
        
    }

    if(!product){
        return <h4>⌛</h4>
}
    

    return (
        <div className='product-detail-container'>

            <h1>{product?.name}</h1>
            <img src={product?.image}
              alt="{prod.image}"
              className="product-image" />
              <h2>{product?.price}</h2>

            <button onClick={() => addProduct(product)}>Agregar producto al carrito</button>

        </div>
    )
}

