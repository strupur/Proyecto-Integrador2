import { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export default function OrderProvider({ children }) {

    const [order, setOrder] = useState(["XBOX", "Steam deck", "Jostick PS5"]);

    function addProduct(product) {

        console.log("Add product", product.name)

        setOrder([...order, "nuevo"])
    }

    return (
        <OrderContext.Provider
            value={{
                order,
                addProduct
            }}
        >
            { children }
        </OrderContext.Provider>
    )


}