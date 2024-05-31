import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) =>{
    const [contador, setContador] = useState(1);
    const [existencia, setStock] = useState(stock);
    const [visible, setVisible] = useState(true);

    const comprar2 = () => {
       /* setStock(existencia-contador);
       
        if(existencia-contador==0){
            setContador(0);
        }else{setContador(1);}
        */

        if(contador <= existencia){
            setStock(existencia-contador);
            onAdd(contador);
            if(existencia-contador==0){
                setContador(0);
            }else{setContador(1);}
            setVisible(false);
        }
    }
   
    const aumenta = ()=>{
    if (contador < existencia) { 
        setContador(contador + 1); }
    }
    const disminuye = ()=>{
    if (contador > 1 ){
        setContador(contador-1);}
    }

    const comprar = () => {
        console.log("Existencia",existencia);
        if (contador <= existencia) {
            setStock(existencia - contador);
            onAdd(contador);
            if(existencia-contador==0){
                setContador(0);
            }else{setContador(1);}
            setVisible(false);
            console.log(contador);
            console.log(existencia);
            
        }
    }

    useEffect(() => {
        setStock(stock);
    }, [stock])

    return(
            <div>
            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group me-4 p-2 btn-sm" role="group">
                    <button type="button" className="btn btn-secondary bg-black" onClick={disminuye}>-</button>
                    <button type="button" className="btn bg-white disabled"><b>{contador}</b></button>
                    <button type="button" className= "btn btn-secondary bg-black" onClick={aumenta}>+</button>
                </div>
            </div>
           {visible ? <button type="button" className="boton" onClick={comprar}>Agregar al carro</button> : <Link to={"/cart"} className="btn bg-black text-white text-uppercase rounded-0">Finalizar Compra</Link>  }
            </div>
    )

}
export default ItemCount;