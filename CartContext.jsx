import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addlibro = (libro, cantidad) => {
        if (isInCart(libro.id)) {
            let product = cart.find(prod => prod.id === libro.id);
            product.cantidad += cantidad;
            setCart([...cart]);
        } else {
            setCart([...cart, {...libro, cantidad:cantidad}]);
        }
    }

    const removelibro = (id) => {
        const libros = cart.filter(libro => libro.id !== id);
        setCart([...libros]);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(libro => libro.id === id);
    }

    const getCountProducts = () => {
        return cart.reduce((acum, libro) => acum += libro.cantidad, 0);
    }

    const getSumProducts = () => {
        return cart.reduce((acum, libro) => acum += libro.cantidad * libro.precio, 0);
    }

    return (
        <CartContext.Provider value={{cart, addlibro, removelibro, clear, getCountProducts, getSumProducts}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;