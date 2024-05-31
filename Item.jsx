import { Link } from "react-router-dom";

const Item = ({libro}) =>{
    return(
    <div className="card mb-3 border-0" style={{ maxWidth: "440px" }}>
        <Link to={"/item/" + libro.id} className="link-dark text-decoration-none ">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={libro.imagen} className="img-fluid rounded-start" alt="..."/>
                </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">       {libro.titulo}</h5>
                            <p  className="card-text">Autor:  {libro.autor}</p>
                            <p  className="card-text">Genero: {libro.genero}</p>
                            <p className="card-text">Precio: {Number(libro.precio).toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</p>
                        </div>
                    </div>
            </div> 
        </Link>
    </div>                
   )
}

export default Item;