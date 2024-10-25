import { useEffect, useState } from 'react';
import ProductCard from '../product-card/ProductCard';
import './ProductGallery.css';
import axios from 'axios';
// import Pagination from '../pagination/Pagination';

// const URL = import.meta.env.VITE_SERVER_URL;

const URL2 = import.meta.env.VITE_LOCAL_SERVER;

export default function ProductGallery() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        getProducts();
    }, [])


    

    async function getProducts() {

        try {

            const response = await axios.get(`${URL2}/products`)

            console.log(response);
            
            setProducts(response.data.products)

        } catch (error) {
            alert("Error al obtener productos");
            console.log(error);
        }
    }

    return (

        <section className="product-section">
            <h1 className='gallery-title'>PRODUCTO MAS VENDIDO</h1>

            <div className='product-gallery_container'>

                {
                    products.map(producto => <ProductCard key={producto.id} prod={producto} />)
                }
            </div>

            {/* <Pagination total={7} limit={3} getFn={getProducts}/> */}

        </section>

    )
}
