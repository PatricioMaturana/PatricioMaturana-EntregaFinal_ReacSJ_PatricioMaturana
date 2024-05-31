import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import Loading from "./Loading";
//import arregloLibros from "./json/LibrosOLD.json";

const ItemListContainer = () =>{
    const [libro, setLibro] = useState([]);
    const {id} = useParams();
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const libroCollection = collection(db, "libros");
        const queryCollection = id ? query(libroCollection, where("genero", "==", id)) : libroCollection;
        getDocs(queryCollection).then(snapShot => {
            if (snapShot.size > 0) {
                setLibro(snapShot.docs.map(libro => ({id:libro.id, ...libro.data()})));
                setVisible(false);
            }
        });
    }, [id]);

/*  
    useEffect( () => {
        console.log("ID-ItemListContainer",id)
        const promesa = new Promise(completado =>{
            setTimeout(() => {
               completado(id ? arregloLibros.filter(genero =>genero.genero == id) : arregloLibros);
            },2000);
        });

        promesa.then( respuesta=> {
                setLibro(respuesta);
        });
        console.log("ID-ItemListContainer-2",id)
    },[id])
  */ 
    return(
        <div className="container">
            <div className="row my-5">
            <ItemList productos = {libro} />
            </div>
        </div>
    )
}

export default ItemListContainer 