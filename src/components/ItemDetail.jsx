import { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";

const ItemDetail = ({libro}) => {
    console.log(libro)
    if (!libro) {
        return <div>Cargando...</div>;
    }
    const {addlibro} = useContext(CartContext);
    const onAdd = (cantidad) => {
        addlibro(libro, cantidad);
        console.log("Cantidad: ", cantidad)
    }

    return(
        <div className="mb-3"     style={{maxwidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={libro.imagen} className="img-fluid rounded-start" alt={libro.titulo}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"><u>{libro.titulo}</u></h5>
                        <p  className="card-text">Autor:  {libro.autor}</p>
                        <p  className="card-text">Genero: {libro.genero}</p>
                        <p className="card-text">{libro.descripcion}</p>
                        <p className="card-text">Precio: {Number(libro.precio).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
                        <ItemCount stock= {libro.stock} onAdd={onAdd}/>
                    </div>
                </div>
            </div>
        </div>
      
      )    
}

export default ItemDetail;
  /*
            <div className="mb-3 border-0" style={{ maxWidth: "440px" }}>
                    <div className="row g-0">                  
                        <div className="col-md-4 offset-md-2">
                            <img src={libro.imagen} className="img-fluid rounded-start" alt={libro.titulo}/>
                        </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">       {libro.titulo}</h5>
                                    <p  className="card-text">Autor:  {libro.autor}</p>
                                    <p  className="card-text">Genero: {libro.genero}</p>
                                   <p className="card-text">Precio: {Number(libro.precio).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
                                    <ItemCount stock= {libro.stock} />  
                                </div>
                            </div>       
                    </div> 
            </div>       
    */