import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import arregloLibros from "./json/LibrosOLD.json";

const Checkout = () => {
    const {cart, clear, getCountProducts, getSumProducts} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        if (nombre == "") {
            return false;
        } else if (email == "") {
            return false;
        } else if (telefono == "") {
            return false;
        }

        const buyer = {nombre:nombre, email:email, telephone:telefono};
        const libros = cart.map(libro => ({id:libro.id, title:libro.nombre, price:libro.precio}));
        const date = new Date();
        const currentDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        const order = {buyer:buyer, libros:libros, date:currentDate, total:getSumProducts()};
        
        // Agrego un nuevo Documento a la Colección Orders
        const db = getFirestore();
        /*
            const libroCollection = collection(db,"libros");
            arregloLibros.forEach(libro => {addDoc(libroCollection, libro)}) 
            console.log("Libros agregandose");
        */
            const ordersCollection = collection(db, "orders");
            addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
            setNombre("");
            setEmail("");
            setTelefono("");
            clear();
        }); console.log(data.id)
    }

    if (getCountProducts() == 0 && !orderId) {
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
            {!orderId ? 
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        
                        <button type="button" className="btn text-white bg-black" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(libro => (
                                <tr key={libro.id}>
                                    <td><img src={libro.imagen} alt={libro.nombre} width={80} /></td>
                                    <td>{libro.nombre}</td>
                                    <td>x{libro.cantidad}</td>
                                    <td className="text-end">${libro.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3}><b>Total</b></td>
                                <td className="text-end"><b>${getSumProducts()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> : "" }
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-light" role="alert">Felicitaciones! Tu ID de Compra es: <b>{orderId}</b></div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;