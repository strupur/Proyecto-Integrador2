// import { useParams } from 'react-router-dom';
// import './ProductDetail.css';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useOrder } from '../../context/OrderContext';


// const URL = import.meta.env.VITE_SERVER_URL;

// export default function ProductDetail() {

//     const { addProduct } = useOrder();
    
//     const [product, setProduct] = useState();

//     const { id } = useParams();

//     useEffect(() => {
//         getProduct();
//     }, [])

//     async function getProduct() {
//         try{

//             const response =  await axios.get(`${URL}/products/${id}`)
//             setProduct(response.data);
            
//             } catch (error) {

//             alert("Error al obtener el producto")
//             console.log(error);
            
//         }
        
//     }

//     if(!product){
//         return <h4>⌛</h4>
// }
    

//     return (
//         <div className="product-detail-container">
//     <div className="product-header">
//       <h1>{product?.name}</h1>
//     </div>

//     <div className="product-content">
//       <img 
//         src={product?.image} 
//         alt={product?.name} 
//         className="product-image" 
//       />

//       <div className="product-info">
//         <h2 className="product-price">${product?.price}</h2>
//         <p className="product-description">{product?.description}</p>
//         <h3 className="product-category">Categoría: {product?.category}</h3>
//         <h4 className="product-created">Fecha de creación: {new Date(product?.createdAt).toLocaleDateString()}</h4>
//       </div>
//     </div>

//     <div className="product-actions">
//       <button onClick={() => addProduct(product)} className="add-to-cart-button">
//         Agregar producto al carrito
//       </button>
//     </div>
//   </div>
//     )
// }

import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useOrder } from '../../context/OrderContext';

const URL = import.meta.env.VITE_SERVER_URL;

export default function ProductDetail() {

    const { addMasProduct } = useOrder();
    
    const [product, setProduct] = useState();
    const [quantity, setQuantity] = useState(1);  // Estado para la cantidad seleccionada

    const { id } = useParams();

    useEffect(() => {
        getProduct();
    }, [])

    async function getProduct() {
        try {
            const response = await axios.get(`${URL}/products/${id}`)
            setProduct(response.data);
        } catch (error) {
            alert("Error al obtener el producto");
            console.log(error);
        }
    }

    if (!product) {
        return <h4>⌛</h4>
    }

    // Función para incrementar la cantidad
    const incrementQuantity = () => {
        setQuantity(prev => prev + 1);
    }

    // Función para decrementar la cantidad
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    }

    // Función para agregar el producto al carrito con la cantidad seleccionada
    const handleAddToCart = () => {
        addMasProduct({ ...product, quantity });  // Añade el producto con la cantidad seleccionada directamente
    }

    return (
        <div className="product-detail-container">
            <div className="product-header">
                <h1>{product?.name}</h1>
            </div>

            <div className="product-content">
                <img 
                    src={product?.image} 
                    alt={product?.name} 
                    className="product-image" 
                />

                <div className="product-info">
                    <h2 className="product-price">${product?.price}</h2>
                    <p className="product-description">{product?.description}</p>
                    <h3 className="product-category">Categoría: {product?.category}</h3>
                    <h4 className="product-created">Fecha de creación: {new Date(product?.createdAt).toLocaleDateString()}</h4>
                </div>
            </div>

            <div className="product-actions">
                {/* Controles para la cantidad */}
                <div className="quantity-controls">
                    <button onClick={decrementQuantity} className="quantity-button">-</button>
                    <input 
                        type="number" 
                        className="quantity-input" 
                        value={quantity} 
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} // Validación para no bajar de 1
                    />
                    <button onClick={incrementQuantity} className="quantity-button">+</button>
                </div>

                <button onClick={handleAddToCart} className="add-to-cart-button">
                    Agregar {quantity} {quantity > 1 ? 'productos' : 'producto'} al carrito
                </button>
            </div>
        </div>
    );
}

