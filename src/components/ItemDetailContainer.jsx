import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
/*import arregloLibros from "./json/LibrosOLD.json";*/
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore, collection } from "firebase/firestore";


const ItemDetailContainer = () =>{
    const [libro, setLibro] = useState();
    const {id} = useParams();
   
   useEffect(() => {
    console.log("ItemDetailContiner", id);
        const db = getFirestore();
        const docRef = doc(db, "libros", id);

        getDoc(docRef).then(snapShot => {
            if (snapShot.exists()) {
                setLibro({id:snapShot.id, ...snapShot.data()});
            }
           
        });

    }, [id]);

/*
    useEffect(() => {
        console.log("ID:",id, arregloLibros);
        const promesa = new Promise(completado => {
            setTimeout(() => {               
                completado(arregloLibros.find(buscaLibro => buscaLibro.codigo_libro == parseInt(id)) );
            }, 2000)
       
        });
        
        promesa.then(respuesta => {
            setLibro(respuesta);
        })
    }, [id])
*/

    return(
            <div>
                <ItemDetail libro = {libro} /> 
            </div>
    )
}

export default ItemDetailContainer;