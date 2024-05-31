import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import trash from "../imagen/trash2.svg";

const Cart = () => {
    const {cart, removelibro, clear, getCountProducts, getSumProducts} = useContext(CartContext);

    if (getCountProducts() == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <h3>No se encontraron Productos en el Carrito!</h3>
                        <Link to={"/"} className="btn text-white bg-dark rounded-0 my-5">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={6} className="text-end"><button className="btn text-white bg-dark rounded-0" onClick={clear}>Vaciar Carrito</button></td>
                            </tr>
                            {cart.map(libro => (
                                <tr key={libro.id}>
                                    <td><img src={libro.imagen} alt={libro.nombre} width={120} /></td>
                                    <td className="align-middle text-start">{libro.nombre}</td>
                                    <td className="align-middle text-center">${libro.precio}</td>
                                    <td className="align-middle text-center">x{libro.cantidad}</td>
                                    <td className="align-middle text-center">${libro.cantidad * libro.precio}</td>
                                    <td className="align-middle text-end"><img src={trash} width={24} alt="Eliminar Producto" title="Eliminar Producto" onClick={() => {removelibro(libro.id)}} /></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={4} className="text-center"><b>Total</b></td>
                                <td className="text-center"><b>${getSumProducts()}</b></td>
                                <td className="text-end"><Link to={"/checkout"} className="btn text-white bg-dark rounded-0">Checkout</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;